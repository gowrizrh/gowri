export const site = {
  url: "https://www.gowri.ch/",
  name: "Gowri",
  title: "Gowri — Platform Engineer | Cloud & Networking",
  description:
    "Gowri's personal site: platform engineering, Kubernetes, hybrid cloud and private networking, with career experience, certifications and projects.",
  image: "https://www.gowri.ch/social-preview.png",
  imageAlt: "Gowri — Platform engineering, cloud and networking. www.gowri.ch",
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
