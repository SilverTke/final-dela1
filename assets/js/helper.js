/// <reference no-default-lib="true" />
/// <reference lib="dom" />
const dark = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (dark) {
  document.documentElement.setAttribute("data-theme", "sunset");
} else {
  document.documentElement.setAttribute("data-theme", "light");
}
