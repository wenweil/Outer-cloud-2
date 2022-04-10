from db import get_db

def printhello():
    print("hello")

def createUser(username, password, email):
    db = get_db()
    doc = {
        'username':username,
        'password':password,
        'email':email,
    }
    return db.user.insert_one(doc)

def getUser(email):
    db = get_db()
    doc = {'email':email}
    return db.user.find(doc)
