import { profileSchema } from "@/lib/seo";

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(profileSchema).replace(/</g, "\\u003c"),
        }}
      />
      <h1>Gowri</h1>
    </main>
  );
}
