/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from "react";
import {
  MantineReactTable,
  MRT_TableInstance,
  useMantineReactTable,
  type MRT_TableOptions,
} from "mantine-react-table";
import DataTableContextProvider from "@/context/providers/DataTableContextProvider";
import { Pagination, Paper } from "@mantine/core";
import { Toolbar } from "../common/Toolbar";
import { getTableOption } from "./config";

interface DataTableProps {
  fetching?: boolean;
  loading?: boolean;
  leftSelection?: ReactNode;
  rightSelection?: ReactNode;
  showToolbar?: boolean;
  isEmpty?: boolean;
  title?: string;
  subTitle?: string;
}

export function DataTable<TData extends Record<string, any> = object>({
  fetching,
  loading,
  leftSelection,
  rightSelection,
  showToolbar = true,
  isEmpty = false,

  ...props
}: DataTableProps & MRT_TableOptions<TData>) {
  const { state = {} } = props;
  const table = useMantineReactTable({
    state: {
      ...state,
      isLoading: fetching || loading,
      columnPinning: {
        right: ["mrt-row-actions"],
      },
    },
    mantineTableContainerProps: {
      style: {
        maxHeight: "calc(100vh - 18rem)",
        maxWidth: `calc(100vw - 2rem )`,
      },
    },
    mantineTableProps: {
      style: {
        overflow: "hidden",
      },
    },
    ...getTableOption<TData>(),
    ...props,
  });
  return (
    <DataTableContextProvider table={table as MRT_TableInstance<any>}>
      <Paper shadow="md" radius="md">
        {showToolbar && (
          <Toolbar
            leftSections={leftSelection}
            rightSections={rightSelection}
          />
        )}
        <div style={{ position: "relative" }}>
          <MantineReactTable table={table} />
          <div
            style={{
              position: "absolute",
              top: "60px",
              width: "100%",
            }}
          >
            {isEmpty && (
              <div
                style={{
                  height: "60dvh",
                  background: "white",
                }}
              ></div>
            )}
          </div>
        </div>
        {props.rowCount ? <Pagination total={props.rowCount ?? 0} /> : ""}
      </Paper>
    </DataTableContextProvider>
  );
}
