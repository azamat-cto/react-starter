import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "./components/ui/button";

function App() {
    return (
        <div className="flex flex-col items-center justify-center h-svh max-w-2xl mx-auto">
            <Card>
                <CardHeader>
                    <CardTitle className="text-lg font-semibold">
                        Card Title
                    </CardTitle>
                    <CardDescription className="leading-snug text-muted-foreground">
                        Lorem ipsum dolor sit amet consectetur.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <img
                        className="h-40 w-full object-cover object-center"
                        src="https://shadcnblocks.com/images/block/placeholder-1.svg"
                        alt="placeholder"
                    />
                </CardContent>
                <CardFooter>
                    <Button className="w-full" variant="outline">
                        Read More
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}

export default App;
