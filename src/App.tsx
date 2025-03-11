import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function App() {
    return (
        <div className="flex flex-col items-center justify-center h-svh max-w-2xl mx-auto">
            <Avatar>
                <AvatarImage
                    alt="@shadcn"
                    src="https://github.com/shadcn.png"
                />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        </div>
    );
}

export default App;
