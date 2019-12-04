#!flask/bin/python

import os
import json

from flask import Flask, Request, request, jsonify
from response import ok, bad_request, not_found, server_error
from manager import Manager

app = Flask(__name__)

#########################################
# Routes
#########################################
@app.route('/api/user', methods=['GET'])
def is_user():
    try:
        email = request.args.get('email')
        entry_code = request.args.get('entry_code')

        if not email or not entry_code:
            return bad_request()

        user = mgr.get_user(email, entry_code)
        if user:
            return ok({ 'user' : user })

        return not_found()
    except Exception as ex:
        print(f'Error: {ex}')
        return server_error()

@app.route('/api/answers', methods=['POST'])
def update_data():
    try:
        req_data = request.get_json()
        email = req_data.get('email')
        entry_code = req_data.get('entry_code')
        answers = req_data.get('answers')

        if not email or not entry_code or not answers:
            return bad_request()

        user = mgr.get_user(email, entry_code)
        if not user:
            return not_found()

        updated = mgr.update_user_answers(email, entry_code, answers)
        return ok(updated)
    except Exception as ex:
        print(f'Error: {ex}')
        return server_error()


#########################################
# Startup
#########################################
if __name__ == '__main__':
    mgr = Manager()
    app.run(debug=False)