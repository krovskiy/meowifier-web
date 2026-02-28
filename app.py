from flask import Flask, request, jsonify, send_from_directory, send_file
from flask_cors import CORS
from random import randint
from random import random
from re import sub
import os

app = Flask(__name__, static_folder='dist', static_url_path='')
CORS(app)

@app.route('/meow', methods=['POST'])
def main():
    data = request.json
    text = data.get('text', '')
    original_text = text

    text = text.split()

    meowified_words = []

    for word in text:
        if random() < 0.25:
            meowified_words.append("meow")
        else:
            stretched_word = sub(r"([aeiou])", lambda m: m.group(1) * randint(2,4), word)
            meowified_words.append(stretched_word)
        
    meowified_text = " ".join(meowified_words)
 
    result = meowified_text
    
    return jsonify({
        'text': original_text,
        'result': result
    })

@app.route('/health', methods=['GET'])
def health():
    return jsonify({'status': 'healthy'}), 200

@app.route('/')
def serve_index():
    return send_file('dist/index.html')

@app.route('/<path:path>')
def serve_static(path):
    if os.path.exists(os.path.join('dist', path)):
        return send_from_directory('dist', path)
    return send_file('dist/index.html')

if __name__ == '__main__':
    app.run(port=5000, host='0.0.0.0')