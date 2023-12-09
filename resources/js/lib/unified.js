import { visit } from "unist-util-visit";

export function getInnerText(node) {
    let text = "";

    if (node.type === "text") {
        text += node.value || "";
    }

    if (node.children) {
        let parent = node;
        for (let child of parent.children) {
            text += getInnerText(child);
        }
    }

    return text;
}

export function collectHeadings(root, tagNames) {
    const headings = [];

    visit(root, "element", (node) => {
        if (tagNames.includes(node.tagName)) {
            headings.push(node);
        }
    });

    return headings;
}
