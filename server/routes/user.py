from flask import Blueprint, request
from controler.user import printhello, createUser, getUser
from werkzeug.security import generate_password_hash, check_password_hash

bp = Blueprint('user',__name__,url_prefix='/auth')

@bp.route('/create', methods = ['POST'])
def register():
    data = request.form
    email = request.form['email']
    username = request.form['username']
    password = request.form['password']
    pwhash = generate_password_hash(password)
    try:
        ret = createUser(username,pwhash,email)
        return data,200,{'Access-Control-Allow-Origin':'*'}
    except Exception as e:
        print(e)
        return {},400,{'Access-Control-Allow-Origin':'*'}

@bp.route('/',methods = ['post'])
def login():
    email = request.form['email']
    password = request.form['password']
    user = list(getUser(email))
    hash = user[0]['password']
    if(check_password_hash(hash,password) == True):
        return request.form,200,{'Access-Control-Allow-Origin':'*'}
    else:
        return {},401,{'Access-Control-Allow-Origin':'*'}
    
    
