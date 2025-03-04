from flask import Flask, request, jsonify
from flask_cors import CORS
from random import randint
from random import random
from re import sub

app = Flask(__name__)
CORS(app)

@app.route('/meow', methods=['POST'])
def main():
    data = request.json
    text = data.get('text', '')

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
        'text': text,
        'result': result
    })

if __name__ == '__main__':
    app.run(port=5000)