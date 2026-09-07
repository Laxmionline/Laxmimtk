export default function Features() {
  const features = [
    {
      icon: 'fas fa-bolt',
      title: 'Instant 2-Minute Withdrawal',
      desc: 'Receive your winnings directly into your UPI or Bank account 24/7 in under 2 minutes.',
      tag: 'UPI, PhonePe, Paytm, IMPS',
      color: 'blue'
    },
    {
      icon: 'fas fa-headset',
      title: '24/7 In-App Live Support & Chat',
      desc: 'Dedicated support team ready in-app round the clock to help with queries.',
      tag: 'Response in < 30 secs',
      color: 'indigo'
    },
    {
      icon: 'fas fa-lock',
      title: '100% Privacy & 256-Bit SSL',
      desc: 'Your personal data and transaction details are encrypted with bank-grade security.',
      tag: 'Bank-Grade Security',
      color: 'sky'
    },
    {
      icon: 'fas fa-coins',
      title: 'Minimum Deposit ₹100 Only',
      desc: 'Start your journey with an affordable minimum deposit with complete flexibility.',
      tag: 'Zero Platform Commission',
      color: 'blue'
    },
    {
      icon: 'fas fa-trophy',
      title: 'Highest Matka Game Rates',
      desc: 'Single Digit 1:9.5, Jodi Digit 1:95, Single Panna 1:150, Double Panna 1:300.',
      tag: 'Best Rates 10 ka 950',
      color: 'amber'
    },
    {
      icon: 'fas fa-shield',
      title: 'Meta Ad & Compliance Verified',
      desc: 'Built adhering strictly to Meta ad compliance with age restrictions (18+).',
      tag: 'Meta Policy Compliant',
      color: 'blue'
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 badge mb-4">
            <i className="fas fa-star text-blue-600"></i> Why Millions Choose Laxmi Online
          </div>
          <h2 className="section-title">Designed for <span className="gradient-text">Fast, Safe & Transparent</span> Experience</h2>
          <p className="text-slate-600 mt-4">Enjoy India's most dependable online gaming ID portal with automated fast payouts, top-tier privacy, and 24/7 support.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feat, idx) => (
            <div key={idx} className="feature-card">
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 bg-${feat.color}-50 border border-${feat.color}-200 rounded-2xl text-${feat.color}-600`}>
                  <i className={`${feat.icon} text-2xl`}></i>
                </div>
                <span className={feat.color === 'amber' ? 'badge hot' : 'badge'}>{feat.tag}</span>
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-2">{feat.title}</h3>
              <p className="text-sm text-slate-600 mb-4">{feat.desc}</p>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-sm font-bold text-blue-600">
                <span>Guaranteed Service</span>
                <i className="fas fa-arrow-right"></i>
              </div>
            </div>
          ))}
        </div>

        {/* Payment Methods */}
        <div className="bg-slate-50 border border-blue-100 rounded-3xl p-8 text-center">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Accepted Instant Payment Methods</p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
            {['PhonePe UPI', 'Google Pay', 'Paytm Wallet', 'IMPS Bank Transfer'].map((method, idx) => (
              <div key={idx} className="px-4 py-2 bg-white border border-slate-200 rounded-xl flex items-center gap-2 font-bold text-sm text-slate-700">
                <span className="w-3 h-3 rounded-full bg-blue-600"></span> {method}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
