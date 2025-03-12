import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";

function App() {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return (
        <div className="flex flex-col items-center justify-center h-svh max-w-2xl mx-auto">
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border shadow"
            />
        </div>
    );
}

export default App;
