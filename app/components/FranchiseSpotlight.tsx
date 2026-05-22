export default function FranchiseSpotlight() {
  return (
    <section className="max-w-[1280px] mx-auto py-12 px-4 md:px-20">
      <div className="bg-primary rounded-xl overflow-hidden flex flex-col md:flex-row">
        <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <h2 className="font-headline-xl text-headline-xl text-white mb-4">Our Physical Stores</h2>
          <p className="font-body-lg text-body-lg text-white/80 mb-8">
            Visit an Ankit Sports franchise near you to experience the gear firsthand. Our showrooms
            are designed for the modern athlete.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4 text-white/90">
              <span className="material-symbols-outlined text-secondary-container">location_on</span>
              <span className="font-body-md text-body-md">12 Flagship Locations Nationwide</span>
            </div>
            <div className="flex items-center gap-4 text-white/90">
              <span className="material-symbols-outlined text-secondary-container">schedule</span>
              <span className="font-body-md text-body-md">Open Daily: 10:00 AM - 9:00 PM</span>
            </div>
          </div>
          <button className="mt-8 self-start bg-white text-primary px-8 py-4 rounded-lg font-label-lg text-label-lg uppercase tracking-wider hover:bg-secondary-container hover:text-white transition-colors">
            Find a Store
          </button>
        </div>
        <div className="md:w-1/2 min-h-[400px]">
          <img
            alt="Showroom"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgGEOVzX34m1yBlsJZxRfZysOP3aStR0Av9-Q3_DKaO-6u52omrnhATnoB8OdSZRyxFsrMAvx3bHEvj_vmzfnm8R_NyU2VTGoYGSnTct0-ic-KfF6gGE6M2vutkxvwQ2uD5oykqTwoDB4SA57LjbBbias8cWvnOkjOW67dZS4olwDH2zsu-0mXe_r9rZs2x1pg3WMc_0bz6bAcmpTDRaz3nZUacaL9ovSl9iis7bBtruhFOFuHThWmUmzvO9CFGkKJC2cWjtz6G-wZ"
          />
        </div>
      </div>
    </section>
  );
}
