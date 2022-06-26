from flask import Flask, jsonify

app = Flask(__name__)

books = [
    {
      'name': "Мясо",
      'price': 800,
      'picture': "…",
      'categoryId': 2,
    },
    {
      'name': "Вино",
      'price': 10000,
      'picture': "…",
      'categoryId': 2,
    },
    {
      'name': "Крупа",
      'price': 100,
      'picture': "…",
      'categoryId': 2,
    },
    {
      'name': "Птица",
      'price': 500,
      'picture': "…",
      'categoryId': 2,
    },
]

@app.route('/books', methods=['GET'])
def get_list(): 
    return jsonify(books)

if __name__ == '__main__':
    app.run()