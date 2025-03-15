import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

function App() {
    return (
        <>
            <div className="flex flex-col items-center justify-center h-svh">
                <div>
                    <RadioGroup defaultValue="option-one">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem
                                value="option-one"
                                id="option-one"
                            />
                            <Label htmlFor="option-one">Option One</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem
                                value="option-two"
                                id="option-two"
                            />
                            <Label htmlFor="option-two">Option Two</Label>
                        </div>
                    </RadioGroup>
                </div>
            </div>
        </>
    );
}

export default App;
