import Link from "next/link";
const categories = [
  {
    name: "Jersey",
    description: "Imported club & international kits.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBP-2ppFwva0Jbp0p7IEFNVIGk5svPGxgSRTmP7Nmz9ka4X1nFGE63vmrhDS5ZL-HtSKyWYfYKFGIILdD14H2qUOawu3EASSaYUVxSMXkWhGBReuTLW-lyRVewGL7RRYLKlUPzOyz2G15BX-_aoFOk5m-YmDk89WI3r0Ef-m8qIuAn_iXk97BpPZZo0TDC6IwH-oFXoyW8NVwMEJLNdv39DZtP4BSKDGMTAByvNYHd_Mhgoyb57p8n3nOuiZfPq56NZNaHS4RcZHjwq",
    colSpan: "md:col-span-8",
  },
  {
    name: "Shorts",
    description: "Advanced breathability.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCC0bnhi9UxbfNGRvE8EUjZcp5uvWGXXLTGgX3XKM0FSQtiVj_5qqm6tssZwZnaTnpoBoWUhVCNOyjrPQtFPg4W1VQfp90RCQZKHXD-MC8WMUdzh9seXXiF5XRebGJ7JyVSwajGxNeb6pvJKcfcaJJLZMjUtxIbtHvxbudyUV34lRGE8Mwkz6LRUFtwzh_EcMpax3n3LLqLFVrm-do3ar5pzPh_Id3DNvs6io9iClOaxxp78rcksCQjtlDqQv1voGwDAcLG1bvYZkmr",
    colSpan: "md:col-span-4",
  },
  {
    name: "Balls",
    description: "FIFA & ICC certified gear.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC8E2yyZS9NudLFLqhA1cfmZFhSOkOex6t5g-iHogRWcc-kDxXfnz7G3SZJ_J2JOfL8Cb1SU-itBSSIsTXtTV--9NBjveXmF3IWWlLmDDY96sUmL9l6gPIPBKB4gKES4-D2rHfXfg4HpPE_w0ZtfPEP9GqSAqqEAf0rGUuTPrHXPnRVNamhoZD4fyReiOGWs1-HiZjTGFSbakTX_2kDvveiG1F3MjzdN4hhnK5OVpSp-T8NdlFN8fkBNTi_67cRGh5kXWehV0urWB3e",
    colSpan: "md:col-span-4",
  },
  {
    name: "Shoes",
    description: "Elite traction & comfort.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_rBCKUMhb5lkIm-Wnmm_k8uGy9O6p_yzu1gMdE2EsLRcMs7NTyIvs9alpwVVJkQ1xnXBU1ulGXsQQRj9cBz4oyewbEOc9yf5rFjQOpCCSufwd8rbquWEWwxlanfxKdOep2XxkChvJF67aKUbn_epmSaB1GVNTv9iK5Cd-5_RIouV5Th2Nv6v4CsBUnaChSHkd_SPMpCqx8NRaViYdVR4cu9nwraWQA7Cph6wqa64p9QHYVJ-Grwn5mpAfag5d74LoWo_42w_koSpf",
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
