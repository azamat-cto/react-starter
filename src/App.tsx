import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "./components/ui/button";

function App() {
    return (
        <div className="flex flex-col items-center justify-center h-svh max-w-2xl mx-auto">
            <Popover>
                <PopoverTrigger asChild>
                    <Button variant="outline">Open</Button>
                </PopoverTrigger>
                <PopoverContent>
                    Place content for the popover here.
                </PopoverContent>
            </Popover>
        </div>
    );
}

export default App;
