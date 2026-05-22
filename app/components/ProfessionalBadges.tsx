const badges = [
  {
    icon: "public",
    title: "Global Imports",
    description: "We source directly from premium manufacturers in Europe and the Americas to ensure authenticity.",
  },
  {
    icon: "verified",
    title: "Certified Quality",
    description: "Every item in our boutique is inspected for professional performance standards.",
  },
  {
    icon: "support_agent",
    title: "Expert Guidance",
    description: "Our consultants are former athletes trained to help you choose the right equipment.",
  },
];

function BadgeCard({ badge }: { badge: (typeof badges)[0] }) {
  return (
    <div className="flex flex-col items-center text-center">
      <span className="material-symbols-outlined text-secondary text-5xl mb-4">{badge.icon}</span>
      <h4 className="font-headline-md text-headline-md text-primary">{badge.title}</h4>
      <p className="font-body-md text-body-md text-on-surface-variant">{badge.description}</p>
    </div>
  );
}

export default function ProfessionalBadges() {
  return (
    <section className="bg-surface-container py-12">
      <div className="max-w-[1280px] mx-auto px-4 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        {badges.map((badge, idx) => (
          <BadgeCard key={idx} badge={badge} />
        ))}
      </div>
    </section>
  );
}
