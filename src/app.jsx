import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUser } from "./store/slices/auth";
import { Public } from "./public.app";
import { Private } from "./private.app";

const App = () => {
  const { loggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, []);

  if (loggedIn) {
    return <Private />;
  }

  return <Public />;
};

export default App;
