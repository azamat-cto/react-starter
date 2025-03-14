import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PasswordInput } from "./components/ui/password-input";
import { CheckCircle, XCircle } from "lucide-react";

const passwordRules = [
    { regex: /.{8,}/, message: "At least 8 characters" },
    { regex: /[A-Z]/, message: "At least one uppercase letter" },
    { regex: /[a-z]/, message: "At least one lowercase letter" },
    { regex: /[0-9]/, message: "At least one number" },
    {
        regex: /[@$!%*?&#]/,
        message: "At least one special character (@$!%*?&#)",
    },
];

const formSchema = z.object({
    username: z
        .string({ required_error: "Please, enter your username" })
        .min(2, {
            message: "Username must be at least 2 characters long.",
        }),
    password: z
        .string({ required_error: "Please, enter your password" })
        .min(8, {
            message: "Password must be at least 8 characters long.",
        })
        .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
        .regex(/[a-z]/, "Password must contain at least one lowercase letter")
        .regex(/[0-9]/, "Password must contain at least one number")
        .regex(
            /[@$!%*?&#]/,
            "Password must contain at least one special character",
        ),
});

type FormData = z.infer<typeof formSchema>;

function App() {
    const [password, setPassword] = useState("");
    const [validations, setValidations] = useState<
        { message: string; valid: boolean }[]
    >([]);

    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            password: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
    }

    useEffect(() => {
        const newValidations = passwordRules.map(({ regex, message }) => ({
            message,
            valid: regex.test(password),
        }));
        setValidations(newValidations);
    }, [password]);

    return (
        <div className="flex flex-col items-center h-svh max-w-2xl mx-auto pt-4">
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-8"
                    >
                        <FormField
                            name="username"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Username</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="Enter your username"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            name="password"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem className="mb-4">
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <PasswordInput
                                            {...field}
                                            placeholder="Enter your password"
                                            onChange={(e) => {
                                                field.onChange(e);
                                                setPassword(e.target.value);
                                            }}
                                        />
                                    </FormControl>
                                    {password.length > 0 && (
                                        <div className="mt-2">
                                            {validations.map(
                                                ({ message, valid }) => (
                                                    <div
                                                        key={message}
                                                        className="flex items-center space-x-2 text-sm"
                                                    >
                                                        {valid ? (
                                                            <CheckCircle
                                                                size={16}
                                                                className="text-green-500"
                                                            />
                                                        ) : (
                                                            <XCircle
                                                                size={16}
                                                                className="text-red-500"
                                                            />
                                                        )}
                                                        <span
                                                            className={
                                                                valid
                                                                    ? "text-green-600"
                                                                    : "text-red-600"
                                                            }
                                                        >
                                                            {message}
                                                        </span>
                                                    </div>
                                                ),
                                            )}
                                        </div>
                                    )}
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button className="w-full" type="submit">
                            Submit
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    );
}

export default App;
