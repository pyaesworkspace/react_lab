/* eslint-disable @typescript-eslint/no-explicit-any */
import { PropsWithChildren, useEffect, useMemo } from "react";
import { DataTableContext, DataTableContextType } from "../DataTableContext";

export const RESET_ROW_SELECT_EVENT = "reset:rowSelection";

export default function DataTableContextProvider(
  props: PropsWithChildren<DataTableContextType<any>>
) {
  const { table, children } = props;

  const value = useMemo(() => {
    return {
      table,
    };
  }, [table]);

  useEffect(() => {
    const callback = () => {
      table.resetRowSelection();
      table.reset();
    };
    document.addEventListener(RESET_ROW_SELECT_EVENT, callback);
    return () => {
      document.removeEventListener(RESET_ROW_SELECT_EVENT, callback);
    };
  }, [table]);

  return (
    <DataTableContext.Provider value={value}>
      {children}
    </DataTableContext.Provider>
  );
}
