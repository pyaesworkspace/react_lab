import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { QueryClientProvider } from "@tanstack/react-query";
import { Notifications } from "@mantine/notifications";
import { RouterProvider } from "react-router-dom";
import { queryClient, router } from "@/libs";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider withGlobalClasses>
        <RouterProvider router={router} />
        <Notifications position="top-right" />
      </MantineProvider>
    </QueryClientProvider>
  );
}

export default App;
