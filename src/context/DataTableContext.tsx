/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext } from "react";
import { MRT_TableInstance } from "mantine-react-table";

export type DataTableContextType<T extends Record<string, any>> = {
  table: MRT_TableInstance<T>;
};

export const DataTableContext = createContext<DataTableContextType<any> | null>(
  null
);

export const useDataTableContext = () => useContext(DataTableContext);
