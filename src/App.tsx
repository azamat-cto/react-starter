import { Checkbox } from "@/components/ui/checkbox";

function App() {
    return (
        <div className="flex flex-col items-center justify-center h-svh max-w-2xl mx-auto">
            <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    Accept terms and conditions
                </label>
            </div>
        </div>
    );
}

export default App;
