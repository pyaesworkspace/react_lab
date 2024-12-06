import { Center, Text } from "@mantine/core";
import { MRT_TableOptions } from "mantine-react-table";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getTableOption<T extends Record<string, any>>() {
  const option: Partial<MRT_TableOptions<T>> = {
    enableStickyHeader: true,
    enableRowVirtualization: true,
    enableSorting: false,
    enableColumnActions: false,
    enableTopToolbar: false,
    enableBottomToolbar: false,
    enablePagination: false,
    positionActionsColumn: "last",
    displayColumnDefOptions: {
      "mrt-row-numbers": {
        maxSize: 50,
      },
      "mrt-row-actions": {
        minSize: 120,
        enablePinning: true,
      },
    },
    mantineTableHeadRowProps: {
      bg: "#E6EAF1",
      style: {
        boxShadow: "None",
      },
    },
    renderEmptyRowsFallback: () => (
      <Center>
        <Text fs="italic" c="gray">
          No Record to Display
        </Text>
      </Center>
    ),
    mantinePaperProps: {
      radius: "none",
      shadow: "none",
      withBorder: false,
      style: { overflow: "auto" },
    },
    mantineTableProps: {
      highlightOnHover: true,
    },
    mantineTableBodyCellProps: {
      fw: 500,
      style: { color: "#4E4B66" },
    },
    mantineTableContainerProps: {
      style: {
        maxHeight: "calc(100vh - 18rem)",
        maxWidth: "calc(100vw)",
      },
    },
  };

  return option;
}
