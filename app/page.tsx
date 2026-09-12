import CheckoutButton from "./CheckoutButton";

export default function Home() {
  return (
    <main className="container">
      <nav className="nav">
        <div className="brand">localclip-remix</div>
        <a className="lang" href="/ar">العربية</a>
      </nav>
      <section className="hero">
        <div className="badge">Wave 1 MVP</div>
        <h1>LocalClip Remix — one idea, ten clips</h1>
        <p className="lead">one idea → Core-10 short-form packs</p>
        <div className="cta-row">
          <CheckoutButton label="Start — $10/week" />
          <span className="price">Cancel anytime · Stripe test mode</span>
        </div>
      </section>
      <section className="card">
        <h2>What you get</h2>
        <ul>
          <li>Turn one idea into a Core-10 short-form pack</li>
          <li>Local-first remix presets for your niche</li>
          <li>Export-ready hooks, cuts, and CTAs</li>
        </ul>
      </section>
      <p className="footer">Parallel Reach · Stripe test · acct_1UEqg3KILdv5fyda</p>
    </main>
  );
}
