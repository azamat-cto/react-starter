import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

function App() {
    return (
        <div className="flex flex-col items-center justify-center h-svh max-w-2xl mx-auto pt-4">
            <div className="flex items-center space-x-2">
                <Switch id="airplane-mode" />
                <Label htmlFor="airplane-mode">Airplane Mode</Label>
            </div>
        </div>
    );
}

export default App;
