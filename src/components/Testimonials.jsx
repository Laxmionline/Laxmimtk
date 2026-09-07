export default function Testimonials() {
  const testimonials = [
    {
      name: 'Manish Verma',
      location: 'Surat, Gujarat',
      amount: '₹24,000',
      date: 'Yesterday',
      comment: 'Laxmi Online app is super fast! I downloaded the official APK and created my account in 1 minute. Withdrawal of ₹24,000 came into my UPI instantly.',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200',
      rating: 5
    },
    {
      name: 'Priya Rathore',
      location: 'Indore, MP',
      amount: '₹15,500',
      date: '2 days ago',
      comment: 'Trustworthy application for IPL & Casino games. Downloaded the APK directly from here. No hidden charges and complete transparency.',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
      rating: 5
    },
    {
      name: 'Amit Patel',
      location: 'Kolkata, WB',
      amount: '₹50,000',
      date: '3 days ago',
      comment: 'Best smooth gaming app! Easy download, secure login, and 24/7 customer support via app live chat. All payments are 100% safe.',
      avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&q=80&w=200',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-slate-50/70 border-y border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 badge mb-4">
            <i className="fas fa-star text-amber-500"></i> Verified User Feedback
          </div>
          <h2 className="section-title">What Our Members Say About <span className="gradient-text">Laxmi Online</span></h2>
          <p className="text-slate-600 mt-4">Real feedback from players across India who enjoy our fast withdrawals and 24/7 in-app support.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="testimonial-card">
              <div className="flex items-center justify-between mb-4">
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="fas fa-star text-amber-400 mr-0.5"></i>
                  ))}
                </div>
                <span className="badge">Verified Player</span>
              </div>
              <p className="text-slate-700 italic mb-6">"{testimonial.comment}"</p>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-10 h-10 rounded-full object-cover border border-blue-300" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-slate-500">{testimonial.location}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-blue-700">{testimonial.amount}</span>
                  <span className="text-xs text-slate-400 block">{testimonial.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
