import { DataTable } from "@/components/data-display/DataTable";
import { ActionIcon, Box, Group } from "@mantine/core";
import { IconPencil, IconTrash } from "@tabler/icons-react";
import { useGetAllUsers } from "./hooks";
import { MRT_ColumnDef } from "mantine-react-table";
import { DeleteButton, EditButton } from "./components/FormModal";

const columns: MRT_ColumnDef<User>[] = [
  {
    header: "Name",
    accessorKey: "firstname",
    Cell: ({ row }) => `${row.original.firstname} ${row.original.lastname}`,
  },
  { header: "Email", accessorKey: "email" },
  { header: "Phone", accessorKey: "phone" },
  { header: "Address", accessorKey: "address.street" },
];

export function DashboardPage() {
  const { data, isLoading } = useGetAllUsers();

  console.log("User Data", data);
  return (
    <Box w="100%" h="100%">
      <DataTable
        enableColumnFilters
        enableMultiRowSelection
        enablePagination
        enableRowActions
        columns={columns}
        data={data || []}
        loading={isLoading}
        renderRowActions={({ row }) => {
          return (
            <Group>
              <EditButton />
              <DeleteButton />
            </Group>
          );
        }}
      />
    </Box>
  );
}
