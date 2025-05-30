// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightGiscus from "starlight-giscus";

// https://astro.build/config
export default defineConfig({
  site: "https://essia.dev",
  redirects: {
    "/": "/home",
    "/blog": "/home",
  },
  integrations: [
    starlight({
      title: "essia.dev",
      plugins: [
        starlightGiscus({
          repo: "vaaleyard/blog",
          repoId: String(import.meta.env.GISCUS_REPOSITORY_ID),
          category: "General",
          categoryId: String(import.meta.env.GISCUS_CATEGORY_ID),
          inputPosition: "top",
        }),
      ],
      head: [
        {
          tag: "script",
          attrs: {
            "data-goatcounter": "https://essia.goatcounter.com/count",
            async: true,
            src: "//gc.zgo.at/count.js",
          },
        },
        {
          tag: "script",
          attrs: {
            defer: true,
            src: "https://cloud.umami.is/script.js",
            "data-website-id": "9267db14-70d3-4308-8705-8c6537cb37ad",
          },
        },
      ],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/vaaleyard",
        },
        {
          icon: "rss",
          label: "RSS",
          href: "/rss.xml",
        },
      ],
      sidebar: [
        { label: "Home", link: "/home/" },
        { label: "About", link: "/about/" },
      ],
    }),
  ],
});
