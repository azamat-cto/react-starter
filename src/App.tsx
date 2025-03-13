import { columns, User } from "@/components/columns";
import { DataTable } from "@/components/data-table";
import { useEffect, useState } from "react";

function App() {
    const [data, setData] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            try {
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/users",
                );
                if (!response.ok) {
                    throw new Error("Failed to fetch users");
                }
                const data: User[] = await response.json();
                setData(data);
            } catch (error) {
                setError((error as Error).message);
            } finally {
                setLoading(false);
            }
        };
        getData();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="flex flex-col items-center justify-center h-svh max-w-2xl mx-auto">
            <div className="w-full overflow-x-auto">
                <DataTable columns={columns} data={data} />
            </div>
        </div>
    );
}

export default App;
