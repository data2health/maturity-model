import os
import json

from datetime import datetime 
from services.redcapApi import REDCapHttpConnector

ENTRY_CODE = 'entry_code'
EMAIL_ADDRESS = 'email'
FNAME = 'user_fname'
LNAME = 'user_lname'
RECORD_ID = 'record_id'
APPROVED = 'approved'

unalterable = { ENTRY_CODE, EMAIL_ADDRESS, FNAME, LNAME, RECORD_ID, APPROVED }

class Manager:
    def __init__(self):
        self.svc = REDCapHttpConnector()
        self.__cache = {}
        self.__update_cache_if_needed(True)

    def __update_cache_if_needed(self, force=False):

        if force or (datetime.now() - self.__last_cache_update).total_seconds() > 120:

            self.__last_cache_update = datetime.now()
            users = self.svc.get_data()

            if users:
                self.__cache = { (u[EMAIL_ADDRESS], u[ENTRY_CODE]) : u for u in users if u[APPROVED] == '1' }

    def __clean_answers(self, answers):

        output = answers.copy()
        for key in unalterable:
            if key in output:
                del output[key]
        return output

    def get_user(self, email, entry_code):

        self.__update_cache_if_needed()
        user = self.__cache.get((email, entry_code))

        if user:
            return to_dto(user)
        return None

    def update_user_answers(self, email, entry_code, answers):

        # Remove unalterable fields and update server
        cleaned = self.__clean_answers(answers)
        cleaned[RECORD_ID] = self.__cache[(email, entry_code)][RECORD_ID]
        changed = self.svc.update_user_data(cleaned)

        # Update local cache for latest values
        for field, val in cleaned.items():
            if field != RECORD_ID:
                self.__cache[(email, entry_code)][field] = val
        
        return changed

def to_dto(user):
    dto = user.copy()
    del dto[ENTRY_CODE]
    del dto[APPROVED]
    return dto
