export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For Startup Founders
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Daily startup metrics dashboard{" "}
          <span className="text-[#58a6ff]">in one screenshot</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Connect Stripe, Google Analytics, and more. Get a single polished dashboard screenshot delivered to your inbox or Slack every morning — ready for standup.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $19/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No credit card required for 7-day trial. Cancel anytime.</p>

        {/* Mock dashboard preview */}
        <div className="mt-14 bg-[#161b22] border border-[#30363d] rounded-xl p-6 text-left">
          <div className="flex items-center gap-2 mb-5">
            <div className="w-3 h-3 rounded-full bg-[#f85149]"></div>
            <div className="w-3 h-3 rounded-full bg-[#e3b341]"></div>
            <div className="w-3 h-3 rounded-full bg-[#3fb950]"></div>
            <span className="ml-2 text-xs text-[#8b949e]">kpi-snapshot — today.png</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "MRR", value: "$12,480", delta: "+4.2%" },
              { label: "New Users", value: "138", delta: "+11%" },
              { label: "Sessions", value: "3,204", delta: "+6.8%" },
              { label: "Churn", value: "1.3%", delta: "-0.2%" }
            ].map((m) => (
              <div key={m.label} className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4">
                <p className="text-xs text-[#8b949e] mb-1">{m.label}</p>
                <p className="text-xl font-bold text-white">{m.value}</p>
                <p className="text-xs text-[#3fb950] mt-1">{m.delta}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$19</p>
          <p className="text-[#8b949e] text-sm mb-6">/month · billed monthly</p>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 text-left">
            {[
              "Connect Stripe, GA4, Mixpanel & more",
              "Daily automated dashboard screenshot",
              "Email + Slack delivery",
              "Custom metric layout",
              "7-day free trial"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#3fb950] font-bold">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: "Which integrations are supported?",
              a: "We support Stripe, Google Analytics 4, Mixpanel, HubSpot, and Intercom via OAuth. More integrations are added monthly."
            },
            {
              q: "How is the screenshot delivered?",
              a: "Every morning at a time you choose, we render your dashboard and send a PNG to your email and/or a Slack channel of your choice."
            },
            {
              q: "Can I cancel anytime?",
              a: "Yes. Cancel from your account dashboard at any time. You keep access until the end of your billing period."
            }
          ].map(({ q, a }) => (
            <div key={q} className="border-b border-[#30363d] pb-6">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] pb-10">
        © {new Date().getFullYear()} Startup KPI Snapshot. All rights reserved.
      </footer>
    </main>
  );
}
