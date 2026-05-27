import Link from "next/link";
const categories = [
  {
    name: "Jersey",
    description: "Imported club & international kits.",
    image: "/jerseys.png",
    colSpan: "md:col-span-8",
  },
  {
    name: "Shorts",
    description: "Advanced breathability.",
    image: "/shorts.png",
    colSpan: "md:col-span-4",
  },
  {
    name: "Balls",
    description: "",
    image: "/different kinds of balls.png",
    colSpan: "md:col-span-4",
  },
  {
    name: "Shoes",
    description: "Elite traction & comfort.",
    image: "shoes.png",
    colSpan: "md:col-span-4",
  },
  {
    name: "Trophies",
    description: "Celebrate every win.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAruQiy2r4a-tnjOQI2W30aKxal8beC9DnJhUN-9ZcgM-EQ_q1zWnAiQhk5QUMVLwaZMCfI6_7C68p6UniuIj44Lz5ICGLZ97VlBSw3zDr_t74E-HZHwXBeQRce2pJFixWvQTLp7O2PetAfYjMcXh5-EUh93gohRavpOvOGgM6fwDrQId8I_6TQ223GULjKIGkB0Q0nWd_TL7mRBj1e4THzHuJHScRE8xlf13OVvb4d_TaaoqqO-E4R-YBL5pLrrK2avcIYw_TTpKfP",
    colSpan: "md:col-span-4",
  },
];

function CategoryCard({ category }: { category: (typeof categories)[0] }) {
  return (
    <div className={`${category.colSpan} group relative overflow-hidden rounded-xl border border-outline-variant/30 shadow-sm bg-surface-container-low`}>
      <Link href={`${category.name.toLowerCase()}`}>
        <img
        alt={category.name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        src={category.image}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
      <div className="absolute bottom-6 left-6">
        <h3 className="text-white font-headline-md text-headline-md">{category.name}</h3>
        <p className="text-white/80 font-body-md text-body-md">{category.description}</p>
      </div>
      </Link>
    </div>
  );
}

export default function CategoriesBento() {
  return (
    <section className="max-w-[1280px] mx-auto py-12 px-4 md:px-20">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-primary">Elite Categories</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Selected by professionals for performance.
          </p>
        </div>
        <button className="text-secondary font-label-lg text-label-lg flex items-center gap-1 hover:underline">
          All Categories <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[700px]">
        {categories.map((category, idx) => (

          <CategoryCard  key={idx} category={category} />
        ))}
      </div>
    </section>
  );
}
