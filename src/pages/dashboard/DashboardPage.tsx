import { DataTable } from "@/components/data-display/DataTable";
import { Box, Button, Group } from "@mantine/core";
import { IconPencil, IconTrash } from "@tabler/icons-react";

export function DashboardPage() {
  return (
    <Box w="100%" h="100%">
      <DataTable
        enableColumnFilters
        enableMultiRowSelection
        enablePagination
        enableRowActions
        columns={[
          { header: "Name", accessorKey: "name" },
          { header: "Age", accessorKey: "age" },
          { header: "Email", accessorKey: "email" },
          { header: "Address", accessorKey: "address" },
        ]}
        data={[
          {
            name: "John Doe",
            age: 30,
            email: "john@example.com",
            address: "123 Main St",
          },
          {
            name: "Jane Doe",
            age: 25,
            email: "jane@example.com",
            address: "456 Elm St",
          },
          {
            name: "Bob Smith",
            age: 35,
            email: "bob@example.com",
            address: "789 Oak St",
          },
          {
            name: "Alice Johnson",
            age: 40,
            email: "alice@example.com",
            address: "987 Pine St",
          },
        ]}
        renderRowActions={({ row }) => {
          return (
            <Group>
              <Button
                variant="subtle"
                onClick={() => console.log(row.original)}
              >
                {<IconPencil />}
              </Button>
              <Button
                variant="subtle"
                onClick={() => {
                  console.log(row.original);
                }}
              >
                {<IconTrash />}
              </Button>
            </Group>
          );
        }}
      />
    </Box>
  );
}
