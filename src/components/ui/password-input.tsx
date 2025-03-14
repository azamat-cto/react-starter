import { useState } from "react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { EyeIcon, EyeOffIcon } from "lucide-react";

function PasswordInput({ className, ...props }: React.ComponentProps<"input">) {
    const [showPassword, setShowPassword] = useState(false);
    const disabled =
        props.value === "" || props.value === undefined || props.disabled;

    return (
        <div className="relative">
            <Input
                {...props}
                type={showPassword ? "text" : "password"}
                className={cn("hide-password-toggle pr-10", className)}
            />
            <Button
                size="sm"
                type="button"
                variant="ghost"
                disabled={disabled}
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
            >
                {showPassword && !disabled ? (
                    <EyeIcon className="h-4 w-4" aria-hidden="true" />
                ) : (
                    <EyeOffIcon className="h-4 w-4" aria-hidden="true" />
                )}
                <span className="sr-only">
                    {showPassword ? "Hide password" : "Show password"}
                </span>
            </Button>

            {/* hides browsers password toggles */}
            <style>
                {`
					.hide-password-toggle::-ms-reveal,
					.hide-password-toggle::-ms-clear {
						visibility: hidden;
						pointer-events: none;
						display: none;
					}
				`}
            </style>
        </div>
    );
}

export { PasswordInput };
