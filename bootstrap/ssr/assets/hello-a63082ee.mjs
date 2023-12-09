import * as prod from "react/jsx-runtime";
import { jsx, jsxs, Fragment as Fragment$1 } from "react/jsx-runtime";
import { useMemo, Fragment, useState } from "react";
import { block, renderReactScope, For } from "million/react";
import { L as Layout } from "./default-314c208f.mjs";
import { Link as Link$1 } from "@inertiajs/react";
import { Link } from "@nextui-org/react";
import rehypeParse from "rehype-parse";
import rehypeReact from "rehype-react";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { unified } from "unified";
import { visit } from "unist-util-visit";
import "next-themes";
import "lucide-react";
function getInnerText(node) {
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
function collectHeadings(root, tagNames) {
  const headings = [];
  visit(root, "element", (node) => {
    if (tagNames.includes(node.tagName)) {
      headings.push(node);
    }
  });
  return headings;
}
function useProcessor(text) {
  return useMemo(() => {
    let headings = [];
    const {
      result
    } = unified().use(rehypeParse, {
      fragment: true
    }).use(rehypeSlug).use(rehypeAutolinkHeadings).use(() => {
      return (root) => {
        headings = collectHeadings(root, ["h2", "h3"]);
      };
    }).use(rehypeReact, {
      Fragment: prod.Fragment,
      jsx: prod.jsx,
      jsxs: prod.jsxs,
      components: {
        a: (props) => /* @__PURE__ */ jsx(Link, { ...props, as: Link$1 })
      }
    }).processSync(text);
    const mapped = headings.map((heading) => ({
      id: String(heading.properties.id),
      text: getInnerText(heading)
    }));
    return {
      headings: mapped,
      content: result
    };
  }, [text]);
}
function Sidebar({
  items,
  ...props
}) {
  if (!items.length) {
    return null;
  }
  return /* @__PURE__ */ jsx("ul", { ...props, children: items.map((item) => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: item.uri, as: Link$1, children: item.title }) }),
    /* @__PURE__ */ jsx(Sidebar, { items: item.children })
  ] }, item.id)) });
}
const M$2 = ({
  page,
  navigation
}) => {
  const {
    content,
    headings
  } = useProcessor(page.content);
  const _portal = useState(() => ({
    $: new Array(2)
  }))[0], _ = renderReactScope(/* @__PURE__ */ jsx(Sidebar, { items: navigation }), false, _portal.$, 0, false), _2 = renderReactScope(/* @__PURE__ */ jsx(For, { each: headings, children: (heading) => _temp({
    heading,
    headings
  }) }), false, _portal.$, 1, false);
  return /* @__PURE__ */ jsxs(Fragment$1, { children: [
    /* @__PURE__ */ jsx(P$, { _, content, _2 }),
    _portal.$.map((p) => p.portal)
  ] });
};
const P$ = (
  /*million:transform*/
  block(({
    _,
    content,
    _2
  }) => {
    return /* @__PURE__ */ jsxs("main", { className: "container mx-auto flex gap-3", children: [
      /* @__PURE__ */ jsx("aside", { className: "w-full max-w-xs", children: _ }),
      /* @__PURE__ */ jsx("article", { className: "prose dark:prose-invert max-w-none prose-li:m-0", children: content }),
      /* @__PURE__ */ jsx("aside", { className: "w-full max-w-xs", children: /* @__PURE__ */ jsx("ul", { children: _2 }) })
    ] });
  }, {
    svg: false,
    shouldUpdate: (a, b) => (a == null ? void 0 : a._) !== (b == null ? void 0 : b._) || (a == null ? void 0 : a.content) !== (b == null ? void 0 : b.content) || (a == null ? void 0 : a._2) !== (b == null ? void 0 : b._2)
  })
);
const Hello = M$2;
Hello.layout = Layout;
const callback$ = ({
  heading,
  headings
}) => {
  const _3 = heading.id, _4 = `#${heading.id}`, _5 = heading.text;
  return /* @__PURE__ */ jsx(P$2, { _3, _4, _5 });
};
const P$2 = (
  /*million:transform*/
  block(({
    _3,
    _4,
    _5
  }) => {
    return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: _4, children: _5 }) }, _3);
  }, {
    svg: false,
    shouldUpdate: (a, b) => (a == null ? void 0 : a._3) !== (b == null ? void 0 : b._3) || (a == null ? void 0 : a._4) !== (b == null ? void 0 : b._4) || (a == null ? void 0 : a._5) !== (b == null ? void 0 : b._5)
  })
);
callback$.__block_callable__ = true;
const _temp = callback$;
export {
  Hello as default
};
