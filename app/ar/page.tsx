import CheckoutButton from "../CheckoutButton";

export default function HomeAr() {
  return (
    <main className="container" dir="rtl" lang="ar">
      <nav className="nav">
        <div className="brand">localclip-remix</div>
        <a className="lang" href="/">English</a>
      </nav>
      <section className="hero">
        <div className="badge">الموجة ١ — MVP</div>
        <h1>LocalClip Remix — فكرة واحدة، عشرة مقاطع</h1>
        <p className="lead">فكرة واحدة → حزم Core-10 للمحتوى القصير</p>
        <div className="cta-row">
          <CheckoutButton label="ابدأ — ١٠$ / أسبوع" />
          <span className="price">إلغاء في أي وقت · وضع اختبار Stripe</span>
        </div>
      </section>
      <section className="card">
        <h2>ماذا تحصل عليه</h2>
        <ul>
          <li>حوّل فكرة واحدة إلى حزمة Core-10 قصيرة</li>
          <li>إعدادات إعادة مزج محلية لتخصصك</li>
          <li>خطافات وقصات ودعوات جاهزة للتصدير</li>
        </ul>
      </section>
      <p className="footer">Parallel Reach · Stripe test · acct_1UEqg3KILdv5fyda</p>
    </main>
  );
}
