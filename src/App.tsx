import * as React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "@/components/ui/sonner";
import { UserTable } from "@/components/user/user-table";

const queryClient = new QueryClient();
const ReactQueryDevtoolsProduction = React.lazy(() =>
    import("@tanstack/react-query-devtools/production").then((d) => ({
        default: d.ReactQueryDevtools,
    })),
);

function App() {
    const [showDevtools, setShowDevtools] = React.useState(false);

    React.useEffect(() => {
        // @ts-expect-error: Assigning a function to window.toggleDevtools is not type-safe, but it's necessary for our use case.
        window.toggleDevtools = () => setShowDevtools((old) => !old);
    }, []);

    return (
        <>
            <QueryClientProvider client={queryClient}>
                <div className="flex flex-col items-center justify-center h-svh max-w-2xl mx-auto">
                    <div className="w-full overflow-x-auto">
                        <UserTable />
                    </div>
                </div>
                <Toaster />
                <ReactQueryDevtools initialIsOpen={false} />
                {showDevtools && (
                    <React.Suspense fallback={null}>
                        <ReactQueryDevtoolsProduction />
                    </React.Suspense>
                )}
            </QueryClientProvider>
        </>
    );
}

export default App;
