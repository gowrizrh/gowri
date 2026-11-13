export const site = {
  url: "https://www.gowri.ch/",
  name: "Gowri Sankar",
  title: "Gowri Sankar",
  description:
    "Gowri's personal site: field notes from the cloud, the wire, and the spaces in between.",
  image: "https://www.gowri.ch/social-preview.png",
  imageAlt: "Gowri Sankar — Platform engineering, cloud and networking. www.gowri.ch",
};

export const profileSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${site.url}#profile`,
  url: site.url,
  name: site.title,
  description: site.description,
  mainEntity: {
    "@type": "Person",
    "@id": `${site.url}#person`,
    name: site.name,
    url: site.url,
    jobTitle: "Platform Engineer",
  },
};
