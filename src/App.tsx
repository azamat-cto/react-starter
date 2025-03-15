import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const SHEET_SIDES = ["top", "right", "bottom", "left"] as const;

function App() {
    return (
        <div className="flex flex-col items-center justify-center h-svh max-w-2xl mx-auto pt-4">
            <div className="grid grid-cols-2 gap-2">
                {SHEET_SIDES.map((side) => (
                    <Sheet key={side}>
                        <SheetTrigger asChild>
                            <Button variant="outline">{side}</Button>
                        </SheetTrigger>
                        <SheetContent className="p-6" side={side}>
                            <SheetHeader className="p-0">
                                <SheetTitle>Edit profile</SheetTitle>
                                <SheetDescription>
                                    Make changes to your profile here. Click
                                    save when you're done.
                                </SheetDescription>
                            </SheetHeader>
                            <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-1 items-center gap-2">
                                    <Label
                                        htmlFor="name"
                                        className="text-right"
                                    >
                                        Name
                                    </Label>
                                    <Input id="name" className="col-span-3" />
                                </div>
                                <div className="grid grid-cols-1 items-center gap-2">
                                    <Label
                                        htmlFor="username"
                                        className="text-right"
                                    >
                                        Username
                                    </Label>
                                    <Input
                                        id="username"
                                        className="col-span-3"
                                    />
                                </div>
                            </div>
                            <SheetFooter className="p-0">
                                <SheetClose asChild>
                                    <Button type="submit">Save changes</Button>
                                </SheetClose>
                            </SheetFooter>
                        </SheetContent>
                    </Sheet>
                ))}
            </div>
        </div>
    );
}

export default App;
