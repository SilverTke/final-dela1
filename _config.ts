import lume from "lume/mod.ts";
import unocss from "lume/plugins/unocss.ts";
import { presetWind4 } from "unocss/preset-wind4";
import { presetIcons } from "unocss/preset-icons";
import { presetWebFonts } from "unocss/preset-web-fonts";

const site = lume({
  location: new URL("https://silvertke.github.io/final-dela1"),
});

site.use(unocss({
  cssFile: "assets/css/uno.css",
  options: {
    theme: {
      colors: {
        "secondary": "var(--color-secondary)",
        primary: "var(--color-primary)",
      },
    },
    presets: [
      () =>
        presetWind4({
          prefix: "tw-",
          dark: {
            dark: '[data-theme="sunset"]',
            light: '[data-theme="light"]',
          },
        }),
      () =>
        presetIcons({
          collections: {
            "fa7-solid": () =>
              import("@icons/fa7-solid/icons.json", { with: { type: "json" } })
                .then((i) => i.default),
            "simple-icons": () =>
              import("@icons/simple-icons/icons.json", {
                with: { type: "json" },
              }).then((i) => i.default),
          },
        }),
      () =>
        presetWebFonts({
          provider: "google",
          fonts: {
            sans: "Roboto",
          },
        }),
    ],
  },
}));

site.add("assets");

export default site;
