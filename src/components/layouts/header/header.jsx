import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCog } from "react-icons/fa";
import { HiLogout } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
import { logOut } from "../../../store/slices/auth";
import "./_header.scss";
import { useState } from "react";

export const Header = () => {
  const [openSettings, setOpenSettings] = useState();
  const { loggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    dispatch(logOut());
    navigate("/");
    localStorage.removeItem("authToken");
  };

  return (
    <header className="header">
      <div className="container header__inner">
        <Link className="header__logo" to="/">
          GuyTheDeveloper
        </Link>

        {loggedIn ? (
          <nav className="header__nav">
            <Link to="/category/web-technology" className="header__link">
              Web technology
            </Link>
            <Link to="/category/mobile-technology" className="header__link">
              Mobile technology
            </Link>
            <Link to="/category/design-technology" className="header__link">
              Design technology
            </Link>
            <div
              className="header__user"
              onClick={() => setOpenSettings((prev) => !prev)}
            >
              <FaUserCog style={{ fontSize: "24px" }} />

              <div
                className={`header__settings ${
                  openSettings ? "header__settings--active" : ""
                }`}
                aria-label="user menu"
              >
                <Link className="header__settings__link" to="/user/new-course">
                  create course
                </Link>
                <Link className="header__settings__link" to="/user/courses">
                  My courses
                </Link>
                <button onClick={handleSignOut} className="header__logout">
                  Logout <HiLogout style={{ fontSize: "18px" }} />
                </button>
              </div>
            </div>
          </nav>
        ) : (
          <nav className="header__nav">
            {/* <Link className="header__link">About</Link> */}
            <Link className="header__link header__login" to="/login">
              Login
            </Link>
            <Link className="header__link" to="/register">
              Register
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};
