# app.py

import os
import boto3
from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

USERS_TABLE = os.environ['USERS_TABLE']
client = boto3.client('dynamodb')


@app.route("/")
def hello():
    return "Hello World!"


@app.route("/users/<string:user_id>")
def get_user(user_id):
    resp = client.get_item(
        TableName=USERS_TABLE,
        Key={
            'userId': { 'S': user_id }
        }
    )
    item = resp.get('Item')
    if not item:
        return jsonify({'error': 'User does not exist'}), 404

    return jsonify({
        'userId': item.get('userId').get('S'),
        'prodName': item.get('prodName').get('S'),
        'description': item.get('description').get('S'),
        'price': item.get('price').get('S'),
        'qty': item.get('qty').get('S'),
        'imageFile': item.get('imageFile').get('S')
    })

@app.route("/users", methods=["POST"])

def create_user():
    user_id = request.json.get('userId')
    prodName = request.json.get('prodName')
    description = request.json.get('description')
    price = request.json.get('price')
    qty = request.json.get('qty')
    fileName = request.json.get('imageFile')
    if not user_id or not prodName:
        return jsonify({'error': 'Please provide userId and name'}), 400

    resp = client.put_item(
        TableName=USERS_TABLE,
        Item={
            'userId': {'S': user_id },
            'prodName': {'S': prodName },
            'description': {'S': description },
            'price': {'S': price },
            'qty': {'S': qty },
            'imageFile': {'S': fileName }
        }
    )

    return jsonify({
        'userId': user_id,
        'prodName': prodName,
        'description': description,
        'price': price,
        'qty': qty,
        'imageFile': fileName
    })