from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return app.send_static_file('gamehtml.html')

@app.route('/submit', methods=['POST'])
def submit():
    answer = request.json['answer']
    # Process the answer here
    # You can compare it with the correct answer, update the score, etc.
    # Return a response if needed
    return jsonify({'message': 'Answer submitted successfully'})

if __name__ == '__main__':
    app.run(debug=True)
