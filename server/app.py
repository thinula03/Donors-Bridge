from flask import Flask, request, jsonify
from flask_pymongo import PyMongo
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

# MongoDB Atlas URI
app.config["MONGO_URI"] = "mongodb+srv://donorsbridge:root@donorsbridge.cqwn3e9.mongodb.net/donorsbridge?retryWrites=true&w=majority&appName=donorsbridge"

# Initialize PyMongo
mongo = PyMongo(app)

# Example API Route
@app.route('/api/register', methods=['POST'])
def register_user():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    if mongo.db.users.find_one({'email': email}):
        return jsonify({'message': 'User already exists'}), 400

    mongo.db.users.insert_one({'email': email, 'password': password})
    return jsonify({'message': 'User registered successfully'}), 201

if __name__ == '__main__':
    app.run(debug=True)
