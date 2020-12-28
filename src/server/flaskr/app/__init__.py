#!flask/bin/python

import os
import sys
import uuid

from flask import Flask, Request, request, jsonify
from .modules.response import ok, bad_request, forbidden, not_found, server_error
from .modules.manager import Manager

app = Flask(__name__)
mgr = Manager()

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
        sys.stderr.write(f'Error: {ex}\n')
        return server_error()    

@app.route('/api/user/answers', methods=['POST'])
def update_data():
    try:
        req_data = request.get_json()
        email = req_data.get('email')
        entry_code = req_data.get('entry_code')
        answers = req_data.get('answers')

        if not email or not entry_code or not answers:
            return bad_request()

        user = mgr.user_valid(email, entry_code)
        if not user:
            return forbidden()

        updated = mgr.update_user_answers(email, entry_code, answers)
        return ok(updated)
    except Exception as ex:
        sys.stderr.write(f'Error: {ex}\n')
        return server_error()

@app.route('/api/scores', methods=['GET'])
def get_scores():
    try:
        email = request.args.get('email')
        entry_code = request.args.get('entry_code')

        if not email or not entry_code:
            return bad_request()

        if mgr.user_valid(email, entry_code):
            agg_score, n = mgr.get_scores()
            return ok({ 'all': agg_score, 'n': n })

        return forbidden()

    except Exception as ex:
        sys.stderr.write(f'Error: {ex}\n')
        return server_error()
