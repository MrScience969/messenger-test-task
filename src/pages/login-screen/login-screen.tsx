import React, { FormEvent, useRef } from 'react';

type LoginScreenProps = {
  getConversations: (email: string) => void;
}

function LoginScreen ({getConversations}: LoginScreenProps): JSX.Element {
    const loginRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);
  
    const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
      evt.preventDefault();
  
      if (loginRef.current && passwordRef.current) {
        getConversations(loginRef.current.value);
      }
    };

    return (
        <div className="page--login">
        <main className="page__main--login">
          <div className="page__login-container container">
            <section className="login">
              <h1 className="login__title">Sign in</h1>
              <form
                className="login__form form"
                action=""
                onSubmit={handleSubmit}
              >
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden" htmlFor="email">E-mail</label>
                  <input
                    ref={loginRef}
                    className="login__input form__input"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden" htmlFor="password">Password</label>
                  <input
                    ref={passwordRef}
                    className="login__input form__input"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    required
                  />
                </div>
                <button
                  className="login__submit form__submit button"
                  type="submit"
                >
                  Sign in
                </button>
              </form>
            </section>
          </div>
        </main>
      </div>
    )
}

export default LoginScreen;