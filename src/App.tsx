import { Outlet } from "react-router";

import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "./component/ui/sidebar";
import { Toaster } from "@/component/ui/sonner";
import { AppSidebar } from "./component/app-sidebar";

function App() {
    return (
        <>
            <SidebarProvider>
                <AppSidebar />
                <SidebarInset>
                    <header className="flex sticky top-0 bg-background h-16 shrink-0 items-center gap-2 border-b px-4">
                        <SidebarTrigger className="-ml-1" />
                    </header>
                    <div className="flex flex-1 flex-col gap-4 p-4">
                        <Outlet />
                    </div>
                </SidebarInset>
            </SidebarProvider>
            <Toaster />
        </>
    );
}

export default App;
