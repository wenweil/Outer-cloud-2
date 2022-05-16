from flask import current_app, g
from flask_pymongo import ASCENDING, PyMongo

def get_db():
    if 'db' not in g:
        db = PyMongo(current_app).db
        db.user.create_index([("email",ASCENDING)],unique=True)
        g.db = db


    return g.db