import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";

function App() {
    return (
        <div className="flex flex-col items-center h-svh max-w-2xl mx-auto pt-4">
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="email">Your email address</Label>
                <Input
                    type="email"
                    placeholder="Email"
                    name="email"
                    id="email"
                />
            </div>
        </div>
    );
}

export default App;
