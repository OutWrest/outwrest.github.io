import type { SiteConfig } from "@/lib/types";
const prefix = process.env.BASE_PATH || "";
export { prefix };

const siteConfig: SiteConfig = {
  avatar: `${prefix}/avatar.png`,
  siteUrl: "https://outw.rest",
  siteName: "Outwrest",
  siteDescription: "Personal blog & whatever shananigans I'm up to.",
  siteThumbnail: `${prefix}/og-image.png`,
  nav: [
    { label: "Posts", href: "/posts" },
    { label: "About", href: "/about" },
  ],
  social: {
    github: "https://github.com/OutWrest",
  },
};
export default siteConfig;
