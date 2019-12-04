def ok(data = ''):
    return data, 200

def not_found():
    return '', 404

def bad_request():
    return '', 400

def server_error():
    return '', 500