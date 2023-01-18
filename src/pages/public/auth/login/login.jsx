import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { customLogin, login } from "../../../../store/slices/auth";

export const Login = () => {
  const formRef = useRef();
  const navigate = useNavigate();
  const { isLoading, hasError, loggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();

    let form = formRef.current;
    let body = {
      email: form.email.value,
      password: form.password.value,
    };

    dispatch(login(body));
    navigate("/");
  };

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <form onSubmit={handleLogin} ref={formRef}>
          <input name="email" type="email" placeholder="Email" required />
          <input
            name="password"
            type="password"
            minLength={8}
            placeholder="Password"
            required
          />
          <button type="submit">Login</button>
          <p>
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </form>
      )}
    </>
  );
};
