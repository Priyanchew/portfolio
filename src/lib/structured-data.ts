import { site, writing } from "@/data/portfolio";
import { withBasePath } from "./site-path";

const homeUrl = `${site.url}${withBasePath("/")}`;

export const profileSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${homeUrl}#profile`,
  url: homeUrl,
  name: site.title,
  description: site.description,
  inLanguage: "en",
  mainEntity: {
    "@type": "Person",
    "@id": `${homeUrl}#person`,
    name: site.name,
    alternateName: site.handle,
    url: homeUrl,
    image: `${site.url}${withBasePath(site.avatar)}`,
    description: site.tagline,
    jobTitle: "Founder’s office",
    worksFor: { "@type": "Organization", name: "Osvi AI", url: "https://osvi.ai/" },
    homeLocation: { "@type": "Place", name: site.location },
    knowsAbout: ["AI agents", "Large language models", "Product engineering", "Developer tools"],
    sameAs: site.links.filter(link => link.href.startsWith("https:")).map(link => link.href),
  },
};

export const writingSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  url: `${site.url}${withBasePath("/blogs/")}`,
  name: `Writing | ${site.name}`,
  author: { "@type": "Person", "@id": `${homeUrl}#person`, name: site.name, url: homeUrl },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: writing.map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: post.title,
      url: post.href,
    })),
  },
};

// Keep future content edits from closing the inline script element.
export const serializeSchema = (schema: unknown) => JSON.stringify(schema).replace(/</g, "\\u003c");
