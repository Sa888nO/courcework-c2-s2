import imp
from flask import Flask, jsonify, request
import sqlalchemy as db
from sqlalchemy.orm import sessionmaker, scoped_session
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base

app = Flask(__name__)

engine = create_engine('sqlite:///db.sqlite')

session = scoped_session(sessionmaker(autocommit=False, autoflush=False, bind=engine))

Base = declarative_base()
Base.query = session.query_property()

from models import * 

Base.metadata.create_all(bind=engine)




users = [
    {
        'id': 1,
        'name': 'Sasha',
        'password': '12345'
    },
    {
        'id': 2,
        'name': 'Petya',
        'password': '123456789'
    }
]

posts = [
    {
        'id': 1,
        'user_id': "1",
        "title": "post1",
        "text": "text1"
    },
        {
        'id': 2,
        'user_id': "1",
        "title": "post2",
        "text": "text2"
    },
        {
        'id': 3,
        'user_id': "1",
        "title": "post3",
        "text": "text3"
    },
        {
        'id': 4,
        'user_id': "2",
        "title": "post4",
        "text": "text4"
    }
]


# users api
@app.route('/users', methods=['GET'])
def get_users_list():
    users = User.query.all()
    serialised = []
    for user in users: 
        serialised.append({
            'id': user.id,
            'name': user.name,
            'password': user.password
        })
    return jsonify(serialised)

@app.route('/users', methods=['POST'])
def update_users_list():
    new_one = request.json
    users.append(new_one)
    return jsonify(users)

# posts api
@app.route('/posts', methods=['GET'])
def get_posts_list():
    return jsonify(posts)

@app.route('/posts', methods=['POST'])
def update_postrs_list():
    new_one = request.json
    posts.append(new_one)
    return jsonify(posts)

@app.route('/posts/<int:post_id>', methods=['PUT'])
def update_post(post_id):
    item = next((x for x in posts if x['id'] == post_id), None)
    params = request.json
    if not item:
        return {'massage': 'No posts with this id'}, 400
    item.update(params)
    return jsonify(item)

@app.route('/posts/<int:post_id>', methods=['DELETE'])
def delete_post(post_id):
    idx, _ = next((x for x in enumerate(posts) if x[1]['id'] == post_id), (None, None))
    posts.pop(idx)
    return '', 204


@app.teardown_appcontext
def shutdown_session(exception=None):
    session.remove()


if __name__ == '__main__':
    app.run()