import { profileSchema } from "@/lib/seo";

const credentials = [
  {
    name: "aws_solutions_architect_professional.cert",
    href: "https://www.credly.com/badges/095584ba-fd51-491a-a225-249420d01006",
  },
  {
    name: "azure_administrator_associate.cert",
    href: "https://learn.microsoft.com/api/credentials/share/en-us/GowriS-1440/41A023A99083613D",
  },
];

function Prompt({ cmd, heading }: { cmd: string; heading?: string }) {
  const Tag = heading ? "h2" : "p";

  return (
    <Tag id={heading} className="mt-10 first:mt-0 text-inherit font-normal">
      <span data-nosnippet="" className="whitespace-nowrap text-primary glow">
        guest@home
      </span>
      <span className="text-muted-foreground">:</span>
      <span className="text-primary">~</span>
      <span className="text-muted-foreground">$ </span>
      <span>{cmd}</span>
    </Tag>
  );
}

export default function Home() {
  return (
    <main
      data-palette="original amber"
      className="retro min-h-screen px-6 pt-24 pb-12 md:py-20"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(profileSchema).replace(/</g, "\\u003c"),
        }}
      />
      <div className="mx-auto max-w-3xl text-sm leading-relaxed md:text-base">
        <Prompt cmd="whoami" />
        <h1 className="font-display mt-3 text-6xl leading-none text-primary glow md:text-8xl">
          Gowri
        </h1>

        <section aria-labelledby="about-heading" className="mt-10">
          <Prompt cmd="cat about.txt" heading="about-heading" />
          <p className="mt-3 glow">
            field notes from the cloud, the wire, and the spaces in between.
          </p>
        </section>

        <section id="credentials" aria-label="Credentials" className="my-10 scroll-mt-24">
          <Prompt cmd="ls /etc/pki/tls/certs" heading="credentials-heading" />
          <ul aria-label="Certification credentials" className="mt-3 space-y-1">
            {credentials.map((credential) => (
              <li key={credential.name} className="break-all">
                <a
                  href={credential.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Opens in a new tab"
                  className="text-primary glow underline decoration-primary/40 underline-offset-4 hover:decoration-primary focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4"
                >
                  {credential.name}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section id="projects" aria-labelledby="projects-heading" className="my-10 scroll-mt-24">
          <Prompt cmd="ls ~/projects" heading="projects-heading" />
          <ul aria-label="Selected projects" className="mt-3 space-y-4">
            <li>
              <div className="flex flex-wrap items-baseline gap-x-3">
                <a
                  href="https://github.com/mage-os/mageos-async-events"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Opens in a new tab"
                  className="break-words text-primary glow underline decoration-primary/40 underline-offset-4 hover:decoration-primary focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4"
                >
                  mageos-async-events
                </a>
                <span className="text-muted-foreground">php · magento · rabbitmq</span>
              </div>
              <p className="mt-1">
                Open-source asynchronous event handling for Magento, with delivery tracing, retries,
                and replays.
              </p>
            </li>
          </ul>
        </section>

        <p className="mt-10">
          <span data-nosnippet="" className="whitespace-nowrap text-primary glow">
            guest@home
          </span>
          <span className="text-muted-foreground">:~$ </span>
          <span className="cursor-blink inline-block h-5 w-2.5 translate-y-1 bg-foreground" />
        </p>
      </div>
    </main>
  );
}
