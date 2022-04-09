from flask import Flask, request
from routes import user

app = Flask(__name__)

app.register_blueprint(user.bp)

def main():
    app.run(debug = True)

if __name__ == "__main__":
    main()