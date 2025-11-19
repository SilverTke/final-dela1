import lume from "lume/mod.ts";
import unocss from "lume/plugins/unocss.ts";
import { presetWind4 } from "unocss/preset-wind4";
import { presetIcons } from "unocss/preset-icons";
import { presetWebFonts } from "unocss/preset-web-fonts";

const site = lume();

site.use(unocss({
  cssFile: "assets/css/uno.css",
  options: {
    presets: [
      () => presetWind4({ prefix: "tw-" }),
      () =>
        presetIcons({
          collections: {
            "fa7-solid": () =>
              import("@icons/fa7-solid/icons.json", { with: { type: "json" } })
                .then((i) => i.default),
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
