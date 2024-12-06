import { WithAuth } from "@/components/auth";
import { NothingFoundPage } from "@/components/common/Pages/404/NothingFoundPage";
import { DashboardLayout } from "@/layouts/DashboardLayout";
import { LoginPage } from "@/pages/auth/LoginPage";
import { DashboardPage } from "@/pages/dashboard/DashboardPage";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/d",
    element: <WithAuth component={<DashboardLayout />} />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
    ],
  },
  {
    path: "/*",
    element: <NothingFoundPage />,
  },
]);
