import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";

function App() {
    const [progress, setProgress] = useState(13);

    useEffect(() => {
        const timer = setTimeout(() => setProgress(66), 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="flex flex-col items-center h-svh max-w-2xl mx-auto pt-4">
            <Progress value={progress} className="w-[60%]" />
        </div>
    );
}

export default App;
