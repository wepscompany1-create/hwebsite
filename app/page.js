import "./globals.css";

const ventures = [
  {
    name: "WEPS",
    type: "Digital Logistics",
    text: "Building a digital logistics platform that simplifies international shipping, consolidation and cross-border freight for businesses and individuals.",
  },
  {
    name: "Industry Partner",
    type: "Industrial Supply",
    text: "Helping industrial companies source spare parts, equipment and technical supplies through an international procurement network.",
  },
  {
    name: "Jenius",
    type: "Printing & Technology",
    text: "A technology-driven business focused on practical printing products and commercial solutions.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="siteHeader">
        <a className="logo" href="#home">Haytham Ameen</a>
        <nav className="mainNav">
          <a href="#about">About</a>
          <a href="#ventures">Ventures</a>
          <a href="#vision">Vision</a>
          <a href="#connect">Contact</a>
        </nav>
        <a className="headerAction" href="#connect">Connect</a>
      </header>

      <section className="hero" id="home">
        <div className="heroCopy">
          <div className="eyebrow">ENTREPRENEUR · FOUNDER · BUSINESS BUILDER</div>
          <h1>
            Building businesses
            <span> around real-world problems.</span>
          </h1>
          <p className="heroIntro">
            I’m <strong>Haytham Ameen</strong>, an entrepreneur building companies
            across logistics, industrial supply and technology, with a focus on
            practical execution and emerging markets.
          </p>

          <div className="heroActions">
            <a className="primaryBtn" href="#ventures">Explore my ventures</a>
            <a className="secondaryBtn" href="#about">More about me</a>
          </div>

          <div className="heroMeta">
            <div>
              <span className="metaLabel">FOCUS</span>
              <strong>Logistics · Trade · Industry · Technology</strong>
            </div>
            <div>
              <span className="metaLabel">APPROACH</span>
              <strong>Build practical businesses with global reach</strong>
            </div>
          </div>
        </div>

        <div className="portraitArea">
          <div className="portraitFrame">
            <img src="/haytham-ameen.jpg" alt="Haytham Ameen" />
          </div>
          <div className="portraitCaption">
            <div>
              <strong>Haytham Ameen</strong>
              <span>Founder & Entrepreneur</span>
            </div>
            <span className="signatureMark">HA</span>
          </div>
        </div>
      </section>

      <section className="introStrip">
        <span>Business</span><i />
        <span>Logistics</span><i />
        <span>Industrial Supply</span><i />
        <span>Technology</span>
      </section>

      <section className="section aboutSection" id="about">
        <div className="sectionKicker">01 / ABOUT</div>
        <div className="aboutLayout">
          <h2>
            I turn operational problems into
            <span> scalable businesses.</span>
          </h2>
          <div className="aboutText">
            <p>
              My work sits at the intersection of commerce, operations and
              technology. I am particularly interested in markets where customers
              still face fragmented processes, limited transparency and difficult
              access to international services.
            </p>
            <p>
              Rather than starting with technology, I start with the problem:
              how people buy, move, source and operate. Technology then becomes
              the tool that makes the solution faster, clearer and more scalable.
            </p>
          </div>
        </div>
      </section>

      <section className="section venturesSection" id="ventures">
        <div className="sectionHeading">
          <div className="sectionKicker">02 / VENTURES</div>
          <h2>Companies I’m building.</h2>
        </div>

        <div className="ventureGrid">
          {ventures.map((venture, index) => (
            <article className="ventureCard" key={venture.name}>
              <div className="cardTop">
                <span className="cardIndex">0{index + 1}</span>
                <span className="cardType">{venture.type}</span>
              </div>
              <h3>{venture.name}</h3>
              <p>{venture.text}</p>
              <span className="cardArrow">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section visionSection" id="vision">
        <div className="sectionKicker">03 / VISION</div>
        <div className="visionLayout">
          <div className="visionStatement">
            Building infrastructure that makes global trade easier to
            <span> access, understand and trust.</span>
          </div>
          <div className="visionCopy">
            <p>
              I believe some of the most meaningful business opportunities are
              found where global systems do not yet work smoothly for local
              customers.
            </p>
            <p>
              Logistics is one of those areas. My long-term focus is to connect
              customers, suppliers, freight partners and operating hubs through
              a more transparent digital experience.
            </p>
            <a
              className="inlineLink"
              href="https://www.youtube.com/watch?v=oo54MLerm-w&t=2s"
              target="_blank"
              rel="noreferrer"
            >
              Watch founder video <span>↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="contactSection" id="connect">
        <div className="contactInner">
          <div>
            <div className="sectionKicker gold">04 / CONNECT</div>
            <h2>Open to meaningful conversations and partnerships.</h2>
          </div>
          <div className="contactCopy">
            <p>
              Strategic partnerships, logistics collaborations, industrial
              opportunities, technology and new ventures.
            </p>
            <div className="contactLinks">
              <a href="https://www.facebook.com/haytham.ameen.957276/" target="_blank" rel="noreferrer">Facebook ↗</a>
              <a href="https://www.youtube.com/watch?v=oo54MLerm-w&t=2s" target="_blank" rel="noreferrer">YouTube ↗</a>
              <a href="https://haythamameen.com" target="_blank" rel="noreferrer">Website ↗</a>
            </div>
          </div>
        </div>

        <footer>
          <span>© {new Date().getFullYear()} Haytham Ameen</span>
          <span>Founder · Entrepreneur · Business Builder</span>
        </footer>
      </section>
    </main>
  );
}
