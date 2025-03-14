import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";

type SliderProps = React.ComponentProps<typeof Slider>;

function App() {
    return (
        <div className="flex flex-col items-center justify-center h-svh max-w-2xl mx-auto pt-4">
            <SliderDemo />
        </div>
    );
}

function SliderDemo({ className, ...props }: SliderProps) {
    return (
        <Slider
            defaultValue={[50]}
            max={100}
            step={1}
            className={cn("w-[60%]", className)}
            {...props}
        />
    );
}

export default App;
