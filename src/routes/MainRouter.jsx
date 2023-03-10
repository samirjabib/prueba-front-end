import { Suspense } from "react";
import { lazily } from "react-lazily";
import { Routes, Route, Navigate } from "react-router-dom";

import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { Login } from "../auth";
import { GlobalLoading } from "../components";
import { useAuthStore, useProviderTheme } from "../hooks";

const { DashboardRoutes } = lazily(() => import("../dashboard"));

export const AppRouter = () => {
  const { status, user, onLogoutHandle } = useAuthStore();
  const { handleThemeSwitch, theme } = useProviderTheme();

  const body = document.getElementsByTagName("body")[0];
  if (theme === "dark") {
    body.style.background = "#111827 ";
  }
  if (theme === "light") {
    body.style.background = "white ";
  }
  return (
    <Suspense fallback={<GlobalLoading />}>
      <ToastContainer
        autoClose={2000}
        pauseOnHover={false}
        pauseOnFocusLoss={false}
        position={"bottom-right"}
        theme={theme}
        toastStyle={{backgroundColor:'#2563eb'}}
      />
      ;
      <Routes>
        {status === "not-authenticated" ? (
          <Route
            path="/*"
            element={<Login theme={theme} handleTheme={handleThemeSwitch} />}
          />
        ) : (
          <Route
            path="/*"
            element={
              <Suspense fallback={<GlobalLoading />}>
                <DashboardRoutes
                  user={user}
                  onLogout={onLogoutHandle}
                  theme={theme}
                  handleTheme={handleThemeSwitch}
                />
              </Suspense>
            }
          />
        )}
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};

import "react-toastify/dist/ReactToastify.css";
