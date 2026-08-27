import "./globals.css";

const PartnershipForm=({brand,email,theme})=>(
  <form className={`brandForm ${theme}`} action={`mailto:${email}`} method="post" encType="text/plain">
    <div className="formHead"><span>PARTNERSHIP INQUIRY</span><strong>{brand}</strong></div>
    <div className="two">
      <label>Your name<input name="Name" required placeholder="Full name"/></label>
      <label>Company<input name="Company" required placeholder="Company name"/></label>
    </div>
    <label>Work email<input type="email" name="Email" required placeholder="name@company.com"/></label>
    <label>Partnership interest<select name="Interest" defaultValue="">
      <option value="" disabled>Select an opportunity</option>
      <option>Air Freight Partnership</option><option>Ocean Freight Partnership</option>
      <option>Market Expansion</option><option>Local / Regional Representation</option>
      <option>Sourcing & Procurement</option><option>Commercial Partnership</option>
    </select></label>
    <label>Tell me about the opportunity<textarea name="Message" rows="4" placeholder="Market, route, capability or partnership idea..."/></label>
    <button type="submit">Start a conversation <span>↗</span></button>
    <a className="directMail" href={`mailto:${email}`}>{email}</a>
  </form>
);

export default function Home(){
return <main>
<header>
  <a className="wordmark" href="#top">HAYTHAM <b>AMEEN</b></a>
  <nav><a href="#logistics">Logistics</a><a href="#sourcing">Sourcing</a><a href="#ventures">Ventures</a><a href="#contact">Partner with me</a></nav>
  <a className="talk" href="#contact">PARTNERSHIPS ↗</a>
</header>

<section className="hero" id="top">
 <div className="heroText">
  <div className="tag"><i/> YEMEN · GCC · GLOBAL TRADE</div>
  <h1>Building <span>partnerships</span><br/>that move markets.</h1>
  <p>I’m <b>Haytham Ameen</b>, founder and entrepreneur focused on connecting Yemen and Gulf markets with global logistics, freight networks, industrial sourcing and new commercial opportunities.</p>
  <div className="heroBtns"><a className="orange" href="#logistics">Explore logistics partnerships</a><a className="outline" href="#sourcing">Sourcing partnerships</a></div>
  <div className="opportunities">
   <span>OPEN TO</span><b>Air Freight</b><b>Ocean Freight</b><b>Market Expansion</b><b>Industrial Sourcing</b>
  </div>
 </div>
 <div className="photoWrap">
  <div className="photoAccent"/>
  <img src="/haytham-ameen.jpg" alt="Haytham Ameen"/>
  <div className="photoCard"><b>Haytham Ameen</b><span>Founder · Entrepreneur · Partner</span></div>
 </div>
</section>

<section className="ticker"><span>LOGISTICS</span><i/> <span>FREIGHT</span><i/> <span>MARKET ACCESS</span><i/> <span>SOURCING</span><i/> <span>PARTNERSHIPS</span></section>

<section className="logistics section" id="logistics">
 <div className="sectionTop"><div><span className="num">01</span><span className="mini">LOGISTICS & MARKET EXPANSION</span></div><img className="wepsLogo" src="/weps.png" alt="WEPS"/></div>
 <div className="split">
  <div className="bigCopy"><h2>Connect your logistics network to <em>Yemen & the Gulf.</em></h2>
   <p>WEPS is building partnerships with freight forwarders, airlines, GSAs, consolidators, NVOCCs, shipping partners, warehouses and regional logistics operators.</p>
   <div className="pillGrid"><span>Air freight capacity</span><span>LCL / FCL ocean freight</span><span>Origin consolidation</span><span>UAE hub partnerships</span><span>Yemen market access</span><span>New GCC markets</span></div>
  </div>
  <PartnershipForm brand="WEPS" email="gm@wepickship.com" theme="wepsForm"/>
 </div>
</section>

<section className="sourcing section" id="sourcing">
 <div className="sectionTop darkTop"><div><span className="num">02</span><span className="mini">INDUSTRIAL SOURCING & SUPPLY</span></div><img className="industryLogo" src="/industry-partner.jpg" alt="Industry Partner"/></div>
 <div className="split">
  <div className="bigCopy darkCopy"><h2>Build supply partnerships for <em>industrial markets.</em></h2>
   <p>Industry Partner works across industrial spare parts, equipment and technical sourcing. I’m interested in relationships with manufacturers, authorized distributors, engineering suppliers and specialized procurement partners.</p>
   <div className="pillGrid darkPills"><span>Manufacturers</span><span>Authorized distributors</span><span>Industrial spare parts</span><span>Technical equipment</span><span>Regional supply</span><span>Long-term sourcing</span></div>
  </div>
  <PartnershipForm brand="Industry Partner" email="info@in-partner.com" theme="industryForm"/>
 </div>
</section>

<section className="ventures section" id="ventures">
 <div className="ventureIntro"><span className="num">03</span><span className="mini">VENTURES</span><h2>Three businesses.<br/><em>One partnership mindset.</em></h2></div>
 <div className="ventureCards">
   <article className="vcard wepsCard"><img src="/weps.png" alt="WEPS"/><p>Digital logistics, international freight and market expansion.</p><a href="#logistics">Partner with WEPS ↗</a></article>
   <article className="vcard industryCard"><img src="/industry-partner.jpg" alt="Industry Partner"/><p>Industrial sourcing, technical supply and procurement partnerships.</p><a href="#sourcing">Partner in sourcing ↗</a></article>
   <article className="vcard jeniusCard"><img src="/jenius.png" alt="Jenius"/><p>Printing solutions and commercial supply opportunities.</p><a href="#jenius-contact">Partner with Jenius ↗</a></article>
 </div>
</section>

<section className="jeniusContact section" id="jenius-contact">
 <div className="jeniusPitch"><span className="num">04</span><span className="mini">JENIUS · COMMERCIAL PARTNERSHIPS</span><h2>Print that lasts.<br/><em>Partnerships that scale.</em></h2><p>For distribution, supply, printing technology and commercial partnership opportunities.</p></div>
 <PartnershipForm brand="Jenius" email="info@in-partner.com" theme="jeniusForm"/>
</section>

<section className="final" id="contact">
 <div><span className="mini">LET’S CREATE THE NEXT ROUTE, MARKET OR SUPPLY OPPORTUNITY.</span><h2>Have a partnership<br/>worth discussing?</h2></div>
 <div className="mailList"><a href="mailto:gm@wepickship.com"><span>LOGISTICS / WEPS</span><b>gm@wepickship.com ↗</b></a><a href="mailto:info@in-partner.com"><span>SOURCING / JENIUS</span><b>info@in-partner.com ↗</b></a></div>
</section>
<footer><b>HAYTHAM AMEEN</b><span>Yemen · GCC · Global Partnerships</span><span>© {new Date().getFullYear()}</span></footer>
</main>}