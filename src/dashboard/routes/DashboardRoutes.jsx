import { lazily } from "react-lazily";
import { Routes, Route, Navigate } from "react-router-dom";
import { useGetCompaniesQuery } from "../../store/api/businessApi";
import { DashboardLayout } from "../components";

const { BusinessDetail, Companies } = lazily(() => import("../pages"));

export const DashboardRoutes = ({ user, onLogout, theme, handleTheme }) => {
  const { data, error, isFetching } = useGetCompaniesQuery();

  return (
    <Routes>
      <Route
        path="/"
        element={
          <DashboardLayout
            user={user}
            onLogout={onLogout}
            theme={theme}
            handleTheme={handleTheme}
          />
        }
      >
        <Route
          path="/"
          element={<Companies data={data} isLoading={true} error={error} user={user} isFetching={isFetching}/>}
        />
        <Route path=":id" element={<BusinessDetail />} />

        <Route
          path="/"
          element={<Companies data={data} isLoading={true} error={error} />}
        />
        <Route path="/details/:id" element={<BusinessDetail user={user} />} />

        <Route path="/*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
