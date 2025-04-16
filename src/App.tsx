import * as React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "@/components/ui/sonner";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "./components/ui/breadcrumb";
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "./components/ui/sidebar";
import { Separator } from "./components/ui/separator";
import { AppSidebar } from "./components/app-sidebar";

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
                <SidebarProvider>
                    <AppSidebar />
                    <SidebarInset>
                        <header className="flex sticky top-0 bg-background h-16 shrink-0 items-center gap-2 border-b px-4">
                            <SidebarTrigger className="-ml-1" />
                            <Separator
                                orientation="vertical"
                                className="mr-2 h-4"
                            />
                            <Breadcrumb>
                                <BreadcrumbList>
                                    <BreadcrumbItem className="hidden md:block">
                                        <BreadcrumbLink href="#">
                                            Building Your Application
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator className="hidden md:block" />
                                    <BreadcrumbItem>
                                        <BreadcrumbPage>
                                            Data Fetching
                                        </BreadcrumbPage>
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumb>
                        </header>
                        <div className="flex flex-1 flex-col gap-4 p-4">
                            {Array.from({ length: 24 }).map((_, index) => (
                                <div
                                    key={index}
                                    className="aspect-video h-12 w-full rounded-lg bg-muted/50"
                                />
                            ))}
                        </div>
                    </SidebarInset>
                </SidebarProvider>
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
