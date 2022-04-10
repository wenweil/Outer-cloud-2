from flask import Flask
from routes import user
from dotenv import load_dotenv
import os

def createApp():
    load_dotenv()
    app = Flask(__name__)
    app.register_blueprint(user.bp)
    return app

def main():
    app = createApp()
    app.config['MONGO_URI'] = os.getenv('MONGO_URI')
    app.run(debug=True)

if __name__ == "__main__":
    main()