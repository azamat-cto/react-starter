import { toast } from "sonner";
import { Button } from "@/components/ui/button";

function App() {
    toast("Event has been created.");

    return (
        <>
            <div className="flex flex-col items-center justify-center h-svh">
                <Button
                    variant="outline"
                    onClick={() =>
                        toast("Event has been created", {
                            description: "Sunday, December 03, 2023 at 9:00 AM",
                            action: {
                                label: "Undo",
                                onClick: () => console.log("Undo"),
                            },
                        })
                    }
                >
                    Show Toast
                </Button>
            </div>
        </>
    );
}

export default App;
