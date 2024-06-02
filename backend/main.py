from flask import Flask, jsonify, request
from flask_cors import CORS
from pymongo import MongoClient
from werkzeug.security import generate_password_hash, check_password_hash
import datetime

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})  # Enable CORS for the React development server

# MongoDB connection
client = MongoClient('mongodb+srv://khalid:Kh123@taeep.wjs3rkq.mongodb.net/')
db = client.Taaep
users_collection = db.User

@app.route('/test', methods=['GET'])
def main():
    return jsonify({'message': 'Hello from the backend!'})


##############################################################
## Login ##

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    
    if not username or not password:
        return jsonify({'message': 'Missing fields'}), 400
    
    user = users_collection.find_one({'username': username})
    
    if user and check_password_hash(user['password'], password):
        return jsonify({'message': 'Login successful'}), 200
    else:
        return jsonify({'message': 'Invalid username or password'}), 401
    

########################################################################
## Register ##
@app.route('/add_user', methods=['POST'])
def add_user():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    email = data.get('email')
    
    if not username or not password or not email:
        return jsonify({'message': 'Missing fields'}), 400
    
    # Hash the password
    hashed_password = generate_password_hash(password, method='pbkdf2:sha256')
    
    # Create a new user document
    user = {
        'username': username,
        'password': hashed_password,
        'email': email,
        'createdAt': datetime.datetime.utcnow()
    }
    
    # Insert the user into the database
    users_collection.insert_one(user)
    
    return jsonify({'message': 'User added successfully'}), 201

@app.route('/get_user', methods=['GET'])
def get_user():
    username = request.args.get('username')
    if not username:
        return jsonify({'message': 'Missing username'}), 400
    
    user = users_collection.find_one({'username': username})
    
    if user:
        user['_id'] = str(user['_id'])  # Convert ObjectId to string for JSON serialization
        return jsonify(user)
    else:
        return jsonify({'message': 'User not found'}), 404

if __name__ == '__main__':
    app.run(debug=True)
