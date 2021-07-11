import React from 'react';
import './Auth-content.css';

function AuthContent() {
  return (
    <div className="Auth-Content">
      <form action="auth" className="Auth-Form">
        <label htmlFor="">Login</label>
        <input type="text" name="login" id="login_text_box" />
        <label htmlFor="">Password</label>
        <input type="password" name="password" id="password_text_box" />
        <input type="button" value="Авторизация" />
        <input type="button" value="Регистрация" />
      </form>
    </div>
  );
}

export default AuthContent;
