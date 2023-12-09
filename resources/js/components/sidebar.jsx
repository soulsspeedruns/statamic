import { Link } from "@inertiajs/react";
import { Fragment } from "react";
import { Listbox, ListboxItem } from "@nextui-org/react";
import { Link as NextLink } from "@nextui-org/react";

export function Sidebar({ items, ...props }) {
    if (!items.length) {
        return null;
    }

    return (
        <ul {...props}>
            {items.map((item) => (
                <Fragment key={item.id}>
                    <li>
                        <NextLink href={item.uri} as={Link}>
                            {item.title}
                        </NextLink>
                    </li>
                    <Sidebar items={item.children} />
                </Fragment>
            ))}
        </ul>
    );
}
