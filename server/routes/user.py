from flask import Blueprint, request
from controler import user

bp = Blueprint('user',__name__,url_prefix='/auth')

@bp.route('/', methods = ['POST'])
def createUser():
    data = request.form
    data2 = request.files
    print(data)
    print(data2)
    print(user.ctrler)
    return data,200,{'Access-Control-Allow-Origin':'*'}


