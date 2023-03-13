
import { onLogin, onLogout } from "../store/slices/auth/authSlice";

import { useDispatch, useSelector } from "react-redux";

export const useAuthStore = () => {
  const { status, user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const onLoginEmailAndPassword = async (payload) => {
    const { token, user } = payload;
    if (token && user) {
      dispatch(onLogin({ user, token }));
    }
  };

  const onLogoutHandle = () => {
    dispatch(onLogout());
  };

  return {
    status,
    user,
    onLoginEmailAndPassword,
    onLogoutHandle,
  };
};
