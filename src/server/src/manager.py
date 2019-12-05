import os
import json

from datetime import datetime 
from fields import ENTRY_CODE, EMAIL_ADDRESS, FNAME, LNAME, RECORD_ID, APPROVED
from services.redcapApi import REDCapHttpConnector

hidden = [ RECORD_ID, ENTRY_CODE, EMAIL_ADDRESS, APPROVED ]
unalterable = [ ENTRY_CODE, EMAIL_ADDRESS, FNAME, LNAME, RECORD_ID, APPROVED ]

class Manager:
    def __init__(self):
        self.svc = REDCapHttpConnector()
        self.__cache = {}
        self.__update_cache_if_needed(True)
        self.__update_cache_threshold_seconds = 120

    def __update_cache_if_needed(self, force=False):

        if force or (datetime.now() - self.__last_cache_update).total_seconds() > self.__update_cache_threshold_seconds:

            self.__last_cache_update = datetime.now()
            users = self.svc.get_data()

            if users:
                self.__cache = { (u[EMAIL_ADDRESS], u[ENTRY_CODE]) : u for u in users if u[APPROVED] == '1' }

    def __scrub(self, answers, fields_to_remove):

        output = answers.copy()
        for field in fields_to_remove:
            if field in output:
                del output[field]
        return output

    def get_user(self, email, entry_code):

        self.__update_cache_if_needed()
        user = self.__cache.get((email, entry_code))

        if user:
            return self.__scrub(user, hidden)
        return None

    def update_user_answers(self, email, entry_code, answers):

        # Remove unalterable fields and update server
        cln = self.__scrub(answers, unalterable)
        cln[RECORD_ID] = self.__cache[(email, entry_code)][RECORD_ID]
        changed = self.svc.update_user_data(cln)

        # Update local cache for latest values
        for field, val in cln.items():
            if field != RECORD_ID:
                self.__cache[(email, entry_code)][field] = val
        
        return changed