import { jsxs, jsx } from "react/jsx-runtime";
import { L as Layout } from "./default-314c208f.mjs";
import "@inertiajs/react";
import "@nextui-org/react";
import "next-themes";
import "lucide-react";
import "react";
const ErrorPage = ({
  status
}) => {
  const title = {
    503: "503: Service Unavailable",
    500: "500: Server Error",
    404: "404: Page Not Found",
    403: "403: Forbidden"
  }[status];
  const description = {
    503: "Sorry, we are doing some maintenance. Please check back soon.",
    500: "Whoops, something went wrong on our servers.",
    404: "Sorry, the page you are looking for could not be found.",
    403: "Sorry, you are forbidden from accessing this page."
  }[status];
  return /* @__PURE__ */ jsxs("main", { className: "container max-w-screen-lg mx-auto prose dark:prose-invert", children: [
    /* @__PURE__ */ jsx("h1", { children: title }),
    /* @__PURE__ */ jsx("div", { children: description })
  ] });
};
ErrorPage.layout = Layout;
export {
  ErrorPage as default
};
