import * as prod from "react/jsx-runtime";
import { Link } from "@inertiajs/react";
import { Link as NextLink } from "@nextui-org/react";
import rehypeParse from "rehype-parse";
import rehypeReact from "rehype-react";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { unified } from "unified";
import { collectHeadings, getInnerText } from "@/lib/unified";

export function useProcessor(text) {
    return useMemo(() => {
        let headings = [];

        const { result } = unified()
            .use(rehypeParse, {
                fragment: true,
            })
            .use(rehypeSlug)
            .use(rehypeAutolinkHeadings)
            .use(() => (root) => {
                headings = collectHeadings(root, ["h2", "h3"]);
            })
            .use(rehypeReact, {
                Fragment: prod.Fragment,
                jsx: prod.jsx,
                jsxs: prod.jsxs,
                components: {
                    a: (props) => <NextLink {...props} as={Link} />,
                },
            })
            .processSync(text);

        const mapped = headings.map((heading) => ({
            id: String(heading.properties.id),
            text: getInnerText(heading),
        }));

        return {
            headings: mapped,
            content: result,
        };
    }, [text]);
}
