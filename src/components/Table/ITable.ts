import React from "react";

export interface ITable {
  dataNames: string[];
  prices: any;
  onRowClick: { (name: string): React.MouseEventHandler<HTMLTableRowElement> | undefined };
}
