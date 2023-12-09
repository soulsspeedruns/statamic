import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { usePage, Link, router } from "@inertiajs/react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useMemo, useEffect } from "react";
function Component() {
  const page = usePage();
  const user = page.props.user;
  const {
    theme,
    systemTheme,
    resolvedTheme,
    setTheme
  } = useTheme();
  const Icon = useMemo(() => resolvedTheme === "dark" ? Moon : Sun, [resolvedTheme]);
  useEffect(() => {
    console.log(theme);
  }, []);
  return /* @__PURE__ */ jsxs(Navbar, { children: [
    /* @__PURE__ */ jsx(NavbarBrand, { as: Link, href: "/", children: /* @__PURE__ */ jsx("p", { className: "font-bold text-inherit", children: "Souls Speedruns" }) }),
    /* @__PURE__ */ jsxs(NavbarContent, { className: "hidden sm:flex gap-4", justify: "center", children: [
      /* @__PURE__ */ jsx(NavbarItem, { children: /* @__PURE__ */ jsx(Link, { color: "foreground", href: "#", children: "Features" }) }),
      /* @__PURE__ */ jsx(NavbarItem, { isActive: true, children: /* @__PURE__ */ jsx(Link, { href: "#", "aria-current": "page", children: "Customers" }) }),
      /* @__PURE__ */ jsx(NavbarItem, { children: /* @__PURE__ */ jsx(Link, { color: "foreground", href: "#", children: "Integrations" }) })
    ] }),
    /* @__PURE__ */ jsxs(NavbarContent, { justify: "end", children: [
      /* @__PURE__ */ jsx(NavbarItem, { className: "hidden lg:flex", children: /* @__PURE__ */ jsx(Button, { variant: "ghost", isIconOnly: true, onClick: () => {
        const opposite = resolvedTheme == "dark" ? "light" : "dark";
        const next = opposite === systemTheme ? "system" : opposite;
        setTheme(next);
        router.post("/theme", {
          theme: next
        });
      }, children: /* @__PURE__ */ jsx(Icon, { className: "w-4 h-4" }) }) }),
      !user && /* @__PURE__ */ jsx(NavbarItem, { className: "hidden lg:flex", children: /* @__PURE__ */ jsx("a", { href: route("statamic.cp.login"), children: "Login" }) }),
      user && /* @__PURE__ */ jsx(NavbarItem, { className: "hidden lg:flex", children: /* @__PURE__ */ jsx("a", { href: route("statamic.cp.dashboard"), children: "Dashboard" }) })
    ] })
  ] });
}
function Layout(page) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Component, {}),
    page
  ] });
}
export {
  Layout as L
};
