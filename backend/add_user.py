from pymongo import MongoClient
from werkzeug.security import generate_password_hash
import datetime

client = MongoClient('mongodb+srv://khalid:Kh123@taeep.wjs3rkq.mongodb.net/')
db = client.Taeep
users_collection = db.User

username = "testuser3"
password = "testpassword"
email = "testuser@example.com"

hashed_password = generate_password_hash(password, method='pbkdf2:sha256')

user = {
    'username': username,
    'password': hashed_password,
    'email': email,
    'createdAt': datetime.datetime.utcnow()
}

users_collection.insert_one(user)
print("User added successfully")
