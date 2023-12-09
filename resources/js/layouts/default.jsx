import { Navbar } from "@/components/navbar";

export function Layout(page) {
    return (
        <>
            <Navbar />
            {page}
        </>
    );
}
