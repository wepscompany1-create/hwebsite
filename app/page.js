import "./globals.css";

const ventures = [
  {
    number: "01",
    name: "WEPS",
    category: "Digital Logistics",
    description:
      "A digital shipping platform built to make cross-border logistics clearer, faster and more accessible for businesses and individuals.",
  },
  {
    number: "02",
    name: "Industry Partner",
    category: "Industrial Supply",
    description:
      "Supporting industrial companies with sourcing, spare parts, technical supply and international procurement.",
  },
  {
    number: "03",
    name: "Jenius",
    category: "Printing & Technology",
    description:
      "A business built around practical printing solutions, products and technology-driven execution.",
  },
];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#top" aria-label="Haytham Ameen home">
          HA<span>.</span>
        </a>

        <div className="navLinks">
          <a href="#about">About</a>
          <a href="#ventures">Ventures</a>
          <a href="#vision">Vision</a>
          <a href="#connect">Connect</a>
        </div>

        <a className="navCta" href="#connect">Let&apos;s talk ↗</a>
      </nav>

      <section className="hero" id="top">
        <div className="heroEyebrow">
          <span className="dot" />
          Founder · Entrepreneur · Builder
        </div>

        <div className="heroGrid">
          <div>
            <h1>
              Building businesses
              <br />
              that move <em>things</em>
              <br />
              forward.
            </h1>
          </div>

          <div className="heroSide">
            <p>
              I&apos;m <strong>Haytham Ameen</strong>, an entrepreneur building
              companies across logistics, industrial supply and technology —
              with a focus on solving practical problems in underserved markets.
            </p>
            <a className="textLink" href="#about">Discover my story ↓</a>
          </div>
        </div>

        <div className="heroVisual">
          <div className="portraitPlaceholder portraitPhoto">
            <img
              src="/haytham-ameen.jpg"
              alt="Haytham Ameen"
              className="founderPortrait"
            />
            <div className="portraitLabel">HAYTHAM AMEEN · FOUNDER</div>
          </div>
          <div className="statement">
            <span>Based in Yemen.</span>
            <span>Thinking globally.</span>
          </div>
        </div>
      </section>

      <section className="section" id="about">
        <div className="sectionLabel">01 — About</div>
        <div className="aboutGrid">
          <h2>
            I build at the intersection of
            <span> trade, logistics & technology.</span>
          </h2>
          <div className="bodyCopy">
            <p>
              My work starts with real operational problems: sourcing a critical
              industrial part, moving a shipment across borders, simplifying an
              opaque process, or creating a better experience through technology.
            </p>
            <p>
              I believe strong companies are built when deep market knowledge,
              execution and technology work together — not when technology is
              added for its own sake.
            </p>
          </div>
        </div>
      </section>

      <section className="section venturesSection" id="ventures">
        <div className="sectionLabel light">02 — What I&apos;m building</div>
        <div className="venturesHeader">
          <h2>Companies & ventures.</h2>
          <p>A portfolio shaped around real commerce and operational needs.</p>
        </div>

        <div className="ventureList">
          {ventures.map((venture) => (
            <article className="ventureCard" key={venture.name}>
              <span className="ventureNumber">{venture.number}</span>
              <div>
                <div className="ventureCategory">{venture.category}</div>
                <h3>{venture.name}</h3>
              </div>
              <p>{venture.description}</p>
              <span className="arrow">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section visionSection" id="vision">
        <div className="sectionLabel">03 — Vision</div>
        <div className="visionGrid">
          <div className="visionQuote">
            “The opportunity is not only to move goods faster. It is to make
            global trade easier to understand, access and trust.”
          </div>
          <div>
            <p>
              A large part of my focus is logistics infrastructure for markets
              where international shipping is still fragmented, manual and
              difficult to navigate.
            </p>
            <p>
              The long-term goal is to connect customers, suppliers, freight
              partners and operational hubs through a clearer digital layer.
            </p>
            <a
              className="textLink dark"
              href="https://www.youtube.com/watch?v=oo54MLerm-w&t=2s"
              target="_blank"
              rel="noreferrer"
            >
              Watch founder video ↗
            </a>
          </div>
        </div>
      </section>

      <section className="signalSection">
        <div className="signalTrack">
          <span>BUILD</span><span>•</span>
          <span>MOVE</span><span>•</span>
          <span>SOURCE</span><span>•</span>
          <span>CONNECT</span><span>•</span>
          <span>BUILD</span>
        </div>
      </section>

      <section className="section connectSection" id="connect">
        <div className="sectionLabel light">04 — Connect</div>
        <div className="connectGrid">
          <h2>
            Let&apos;s build
            <br />
            something useful.
          </h2>
          <div className="connectSide">
            <p>
              Open to strategic partnerships, business opportunities, logistics
              collaborations and conversations with people building ambitious
              companies.
            </p>

            <div className="socials">
              <a
                href="https://www.facebook.com/haytham.ameen.957276/"
                target="_blank"
                rel="noreferrer"
              >
                Facebook ↗
              </a>
              <a
                href="https://haythamameen.com"
                target="_blank"
                rel="noreferrer"
              >
                haythamameen.com ↗
              </a>
              <a
                href="https://www.youtube.com/watch?v=oo54MLerm-w&t=2s"
                target="_blank"
                rel="noreferrer"
              >
                YouTube ↗
              </a>
            </div>
          </div>
        </div>

        <footer>
          <span>© {new Date().getFullYear()} Haytham Ameen</span>
          <span>Founder · Entrepreneur · Builder</span>
        </footer>
      </section>
    </main>
  );
}
