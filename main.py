from flask import Flask, render_template, send_from_directory

app = Flask(__name__)


@app.route("/")
def boards():
    ''' this is a one-pager which shows all the boards and cards '''
    return render_template('index.html')


@app.route('/sw.js', methods=['GET'])
def sw():
    return app.send_static_file('sw.js')


@app.route('/manifest.json')
def manifest():
    return send_from_directory('static', 'manifest.json')


def main():
    app.run(debug=True)


if __name__ == '__main__':
    main()
