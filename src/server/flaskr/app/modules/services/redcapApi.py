#!/usr/bin/python
import requests
import json
import os

from datetime import datetime

class REDCapHttpConnector:

    def __init__(self):
        token, url = self.__load_config()
        self.url = url
        self.token = token

    def __load_config(self):
        dir_path = os.path.dirname(os.path.realpath(__file__))

        # Assume config is in the same directory.
        with open(f'{dir_path}{os.path.sep}config.json') as f:
            config = json.load(f)
            return config['redcap']['token'], config['redcap']['url']

    def __call_api(self, data):

        data['token'] = self.token
        data['format'] = 'json'
        resp = requests.post(self.url, data=data)

        if resp.status_code != 200:
            return None

        return json.loads(resp.text)

    def get_data(self):

        data = {
            'content': 'record',
            'type': 'flat'
        }
        return self.__call_api(data)
    
    def update_user_data(self, answers):

        data = {
            'content': 'record',
            'type': 'flat',
            'data': json.dumps([ answers ])
        }
        return self.__call_api(data)
    
    def add_new_user(self, new_user_form_data):

        next_record_id = self.generate_next_record_id()
        new_user_form_data['record_id'] = '{}'.format(next_record_id)
        new_user_form_data['approved'] = '1'
        new_user_form_data['user_complete'] = '2'

        data = {
            'content': 'record',
            'type': 'flat',
            'data': json.dumps([ new_user_form_data ])
        }
        return self.__call_api(data)

    def generate_next_record_id(self):

        data = {
            'content': 'generateNextRecordName'
        }
        return self.__call_api(data)