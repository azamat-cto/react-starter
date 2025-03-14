import { Toggle } from "@/components/ui/toggle";
import { Bold } from "lucide-react";

function App() {
    return (
        <div className="flex flex-col items-center justify-center h-svh max-w-2xl mx-auto pt-4">
            <Toggle aria-label="Toggle italic">
                <Bold className="h-4 w-4" />
            </Toggle>
        </div>
    );
}

export default App;
