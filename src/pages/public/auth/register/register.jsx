import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../../../store/slices/auth";

export const Register = () => {
  const formRef = useRef();
  const navigate = useNavigate();
  const { hasError, isLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleRegister = (e) => {
    e.preventDefault();

    let form = formRef.current;

    let body = {
      username: form.username.value,
      email: form.email.value,
      password: form.password.value,
      confirmPassword: form.confirmPass.value,
    };

    if (body.password === body.confirmPassword && body.password.length >= 8) {
      dispatch(register(body));
      navigate("/");
    }
  };

  return (
    <>
      {isLoading ? (
        <h1>Loading</h1>
      ) : (
        <form ref={formRef} onSubmit={handleRegister}>
          <label>
            Username
            <input type="text" name="username" required />
          </label>
          <label>
            Email
            <input type="email" name="email" required />
          </label>
          <label>
            Password
            <input type="password" name="password" required minLength={8} />
          </label>
          <label>
            Confirm Password
            <input type="password" name="confirmPass" required />
          </label>

          <button type="submit">Register</button>
          <p>
            Have an account ? <Link to="/login">Login</Link>{" "}
          </p>
        </form>
      )}
    </>
  );
};
