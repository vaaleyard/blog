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
            src: import.meta.env.UMAMI_URL,
            "data-website-id": import.meta.env.UMAMI_ID,
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
