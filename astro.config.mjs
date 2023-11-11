import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import vercelStatic from '@astrojs/vercel/static';
// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), sitemap(), tailwind()],
  output: 'static',
  site: "https://vercel.com/silas-projects-fb48baf7/portfolio/53QhdKCdyAegq89pnff4mnReVQXU",
  adapter: vercelStatic(),
});