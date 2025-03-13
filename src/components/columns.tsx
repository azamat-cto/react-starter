import { ColumnDef } from "@tanstack/react-table";

export type Geo = {
    lat: string;
    lng: string;
};

export type Address = {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
};

export type Company = {
    name: string;
    catchPhrase: string;
    bs: string;
};

export type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
};

export const columns: ColumnDef<User>[] = [
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "username",
        header: "Username",
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "address.street",
        header: "Street",
        cell: ({ row }) => {
            return row.original.address.street;
        },
    },
    {
        accessorKey: "address.suite",
        header: "Suite",
        cell: ({ row }) => {
            return row.original.address.suite;
        },
    },
    {
        accessorKey: "address.city",
        header: "City",
        cell: ({ row }) => {
            return row.original.address.city;
        },
    },
    {
        accessorKey: "address.zipcode",
        header: "Zipcode",
        cell: ({ row }) => {
            return row.original.address.zipcode;
        },
    },
    {
        accessorKey: "address.geo.lat",
        header: "Geo lat",
        cell: ({ row }) => {
            return row.original.address.geo.lat;
        },
    },
    {
        accessorKey: "address.geo.lng",
        header: "Geo lng",
        cell: ({ row }) => {
            return row.original.address.geo.lng;
        },
    },
    {
        accessorKey: "phone",
        header: "Phone",
    },
    {
        accessorKey: "website",
        header: "Website",
    },
    {
        accessorKey: "company.name",
        header: "Company name",
        cell: ({ row }) => {
            return row.original.company.name;
        },
    },
    {
        accessorKey: "company.catchPhrase",
        header: "Company catch phrase",
        cell: ({ row }) => {
            return row.original.company.catchPhrase;
        },
    },
    {
        accessorKey: "company.bs",
        header: "Company bs",
        cell: ({ row }) => {
            return row.original.company.bs;
        },
    },
];
