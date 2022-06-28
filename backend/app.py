from flask import Flask, jsonify, request

app = Flask(__name__)

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
    return jsonify(users)

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


if __name__ == '__main__':
    app.run()