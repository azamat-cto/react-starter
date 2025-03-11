import { Terminal } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

function App() {
    return (
        <div className="flex flex-col items-center justify-center h-svh max-w-2xl mx-auto">
            <Alert>
                <Terminal className="h-4 w-4" />
                <AlertTitle>Heads up!</AlertTitle>
                <AlertDescription>
                    You can add components to your app using the cli.
                </AlertDescription>
            </Alert>
        </div>
    );
}

export default App;
