import { Layout } from "@/layouts/default";
import { useProcessor } from "@/composable/unified";
import { Sidebar } from "@/components/sidebar";

const Hello = ({ page, navigation }) => {
    const { content, headings } = useProcessor(page.content);

    return (
        <main className="container mx-auto grid grid-cols-12 py-2">
            <aside className="col-span-2">
                <Sidebar items={navigation} />
            </aside>
            <div className="col-span-10 grid grid-cols-10">
                <article className="prose dark:prose-invert max-w-none prose-li:m-0 col-span-8">
                    {content}
                </article>
                <aside className="col-span-2">
                    <ul>
                        {headings.map((heading) => (
                            <li key={heading.id}>
                                <a href={`#${heading.id}`}>{heading.text}</a>
                            </li>
                        ))}
                    </ul>
                </aside>
            </div>
        </main>
    );
};

Hello.layout = Layout;

export default Hello;
