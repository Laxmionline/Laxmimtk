export default function FAQs() {
  return (
    <section id="faqs" className="py-16 md:py-24 bg-white border-t border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 border border-blue-200 rounded-3xl p-8 md:p-12 space-y-8">
          <div className="space-y-2 border-b border-slate-200 pb-8">
            <div className="inline-flex items-center gap-2 badge mb-4">
              <i className="fas fa-shield text-blue-600"></i> Meta Advertising Policy Compliance Hub
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-slate-900">Transparency & Consumer Protection Standards</h3>
            <p className="text-sm md:text-base text-slate-600">Laxmi Online complies strictly with Meta (Facebook/Instagram) ad standards regarding customer verification, data privacy, responsible gaming disclosures, and 18+ age restrictions.</p>
          </div>

          {/* Legal Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: 'fas fa-file', title: 'Privacy Policy', desc: 'Read how we protect and encrypt user personal information.', label: 'PDF / TEXT', color: 'blue' },
              { icon: 'fas fa-file', title: 'Terms & Conditions', desc: 'Rules governing account setup, withdrawals, and fair play.', label: 'TERMS', color: 'blue' },
              { icon: 'fas fa-warning', title: 'Responsible Gaming', desc: 'Disclosures on budget limits, self-exclusion, and safe play.', label: '18+ ONLY', color: 'amber' },
              { icon: 'fas fa-headset', title: 'Contact Support', desc: '24/7 Official email, in-app chat, and registered business details.', label: 'SUPPORT', color: 'indigo' }
            ].map((item, idx) => (
              <div key={idx} className="p-5 bg-white border border-slate-200 hover:border-blue-300 rounded-2xl cursor-pointer transition-all">
                <div className="flex items-center justify-between mb-2">
                  <i className={`${item.icon} text-xl text-${item.color}-600`}></i>
                  <span className={`text-xs bg-${item.color}-50 text-${item.color}-700 border border-${item.color}-100 px-2 py-0.5 rounded uppercase font-bold`}>{item.label}</span>
                </div>
                <h4 className="font-extrabold text-slate-900 text-sm mb-2">{item.title}</h4>
                <p className="text-xs text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Compliance Box */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4">
            <div className="flex items-center gap-2 text-amber-800 font-bold mb-2">
              <i className="fas fa-warning text-amber-600"></i>
              Mandatory Legal & Age Disclaimer (18+)
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              This site is strictly meant for individuals aged 18 and above. Online gaming and skill-based entertainment involve financial risk and may be habit-forming. Please play responsibly. Services are not accessible in jurisdictions where online gaming IDs are prohibited by regional regulations.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
