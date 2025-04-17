import { useMemo, useState } from "react";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import {
    ColumnDef,
    flexRender,
    useReactTable,
    getCoreRowModel,
    PaginationState,
} from "@tanstack/react-table";

import {
    Table,
    TableRow,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
} from "@/component/ui/table";
import { Button } from "../ui/button";
import { Person } from "@/type/person";
import { fetchData } from "@/lib/faker";

export function UserTable() {
    const columns = useMemo<ColumnDef<Person>[]>(
        () => [
            {
                accessorKey: "firstName",
                cell: (info) => info.getValue(),
                header: "Fist Name",
            },
            {
                accessorKey: "lastName",
                cell: (info) => info.getValue(),
                header: "Last Name",
            },
            {
                accessorKey: "age",
                header: "Age",
            },
            {
                accessorKey: "visits",
                header: "Visits",
            },
            {
                accessorKey: "status",
                header: "Status",
            },
            {
                accessorKey: "progress",
                header: "Profile Progress",
            },
        ],
        [],
    );
    const [pagination, setPagination] = useState<PaginationState>({
        pageIndex: 0,
        pageSize: 10,
    });
    const dataQuery = useQuery({
        queryKey: ["data", pagination],
        queryFn: () => fetchData(pagination),
        placeholderData: keepPreviousData,
    });
    const defaultData = useMemo(() => [], []);

    const table = useReactTable({
        data: dataQuery.data?.rows ?? defaultData,
        columns,
        rowCount: dataQuery.data?.rowCount,
        state: {
            pagination,
        },
        onPaginationChange: setPagination,
        getCoreRowModel: getCoreRowModel(),
        manualPagination: true,
        debugTable: true,
    });

    return (
        <div>
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                      header.column.columnDef
                                                          .header,
                                                      header.getContext(),
                                                  )}
                                        </TableHead>
                                    );
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={
                                        row.getIsSelected() && "selected"
                                    }
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext(),
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={columns.length}
                                    className="h-24 text-center"
                                >
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="flex items-center justify-end space-x-2 py-4">
                <Button
                    size="sm"
                    variant="outline"
                    onClick={() => table.firstPage()}
                    disabled={!table.getCanPreviousPage()}
                >
                    {"<<"}
                </Button>
                <Button
                    size="sm"
                    variant="outline"
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                >
                    {"<"}
                </Button>
                <Button
                    size="sm"
                    variant="outline"
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                >
                    {">"}
                </Button>
                <Button
                    size="sm"
                    variant="outline"
                    onClick={() => table.lastPage()}
                    disabled={!table.getCanNextPage()}
                >
                    {">>"}
                </Button>
                <div className="flex items-center">
                    <div className="mr-1">
                        Page {table.getState().pagination.pageIndex + 1} of
                    </div>
                    <div>{table.getPageCount()}</div>
                </div>
            </div>
        </div>
    );
}
