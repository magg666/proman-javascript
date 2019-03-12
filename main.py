from flask import Flask, render_template, redirect, url_for, session, request, flash

app = Flask(__name__)


@app.route("/")
def boards():
    ''' this is a one-pager which shows all the boards and cards '''
    return render_template('boards.html')


@app.route('/registration', methods=["POST"])
def route_registration():
    username = escape(request.form.get('username'))
    first_password = escape(request.form.get('password1'))
    second_password = escape(request.form.get('password2'))

    if not user.check_data_validate(username, first_password, second_password):
        flash('Please provide all data')
        return redirect(url_for('route_show_register_form'))

    if user.check_exists(username):
        flash('This username exists already')
        return redirect(url_for('route_show_register_form'))

    if not user.check_passwords_equal(first_password, second_password):
        flash('Passwords must be equal')
        return redirect(url_for('route_show_register_form'))

    if user.registration(username, first_password):
        session['username'] = username
    return redirect('/')


@app.route('/login', methods=['POST'])
def route_login():
    login_user = {
        'username': request.form.get('username'),
        'password': request.form.get('password')
    }
    if user.check_password(login_user):
        session['username'] = login_user['username']
        return redirect('/')

    if user.check_exists(login_user['username']):
        flash("Incorrect password")
        return redirect('/')

    flash("User is not in base. Please sign up.")
    return render_template('registration.html')


@app.route('/logout')
def route_logout():
    del session['username']
    return redirect('/')


def main():
    app.run(debug=True)


if __name__ == '__main__':
    main()
