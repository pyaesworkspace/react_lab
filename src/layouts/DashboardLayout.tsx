import { AppShell, Avatar, Group, ScrollArea } from "@mantine/core";
import { Outlet } from "react-router-dom";

export function DashboardLayout() {
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 250, breakpoint: "sm" }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Avatar variant="filled" radius="sm" src="" size="md" />
        </Group>
      </AppShell.Header>
      <AppShell.Navbar>
        <ScrollArea></ScrollArea>
      </AppShell.Navbar>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}
