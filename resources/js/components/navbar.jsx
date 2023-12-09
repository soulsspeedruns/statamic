import { Link, useForm, usePage, router } from "@inertiajs/react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Button,
    Switch,
} from "@nextui-org/react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

function Component() {
    const page = usePage();
    const user = page.props.user;

    const { systemTheme, resolvedTheme, setTheme } = useTheme();
    const Icon = useMemo(
        () => (resolvedTheme === "dark" ? Moon : Sun),
        [resolvedTheme]
    );

    return (
        <Navbar maxWidth="full">
            <NavbarBrand as={Link} href="/">
                <p className="font-bold text-inherit">Souls Speedruns</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Features
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link href="#" aria-current="page">
                        Customers
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Integrations
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Button
                        variant="ghost"
                        isIconOnly
                        onClick={() => {
                            const opposite =
                                resolvedTheme == "dark" ? "light" : "dark";
                            const next =
                                opposite === systemTheme ? "system" : opposite;

                            setTheme(next);
                            router.post("/theme", {
                                theme: next,
                            });
                        }}
                    >
                        <Icon className="w-4 h-4" />
                    </Button>
                </NavbarItem>
                {!user && (
                    <NavbarItem className="hidden lg:flex">
                        <a href={route("statamic.cp.login")}>Login</a>
                    </NavbarItem>
                )}
                {user && (
                    <NavbarItem className="hidden lg:flex">
                        <a href={route("statamic.cp.dashboard")}>Dashboard</a>
                    </NavbarItem>
                )}
            </NavbarContent>
        </Navbar>
    );
}

export { Component as Navbar };
