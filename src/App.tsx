import { AspectRatio } from "@/components/ui/aspect-ratio";

function App() {
    return (
        <div className="flex flex-col items-center justify-center h-svh max-w-2xl mx-auto">
            <AspectRatio ratio={16 / 9}>
                <img
                    alt="Image"
                    className="rounded-md object-cover"
                    src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                />
            </AspectRatio>
        </div>
    );
}

export default App;
