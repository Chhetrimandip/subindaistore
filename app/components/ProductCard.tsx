const products = [
  {
    id: 1,
    brand: "Adidas Performance",
    name: "Manchester United 24/25 Home",
    price: 120,
    badge: "AUTHENTIC",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA5quBHUIigvjnTynHJg3Sd7WA8y4Mk4WrWlJQHg3fbN2eC7PsXaTxP2B0nXfv0amjF50inZHwlQ1r8SIk_-UDIDunv5g-CWp-Dc5zIMHx_9Ay8udUlI3GKltUWojo-HRwXUMd3qcjLGBOC3U0Kwfc1VqZ9UqCZLT7yHXb6p56NMvwJicMUhIUmJl9Deo6-Ilhu-BzX1yRUwQLyQXfuKDSlnuypQq_b7sUFC-V27LMcuEdelUibL23nIDoBuUgXOxLDkV6G2Jb-F5f6",
  },
  {
    id: 2,
    brand: "Nike Elite",
    name: "Warriors City Edition 24",
    price: 145,
    badge: "NEW ARRIVAL",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3-fq2HJ9cuSXHGfZtqY2OSpOiZvKtiLEfymnL2mTathGlGxE79c2srL4jGXKZwSCwjuxPAiPzKDeJ4Hvgmi8MTWzKKWqkz_-g3IAY4b3hA6oEYIcTqQe3AWV-tt7cRQWY_Q3qo_pzLS0pgnIrMwtXLJORx0xSLPQArigHIjUVqmP-xOTkeCfQj_IXNI0__T-zYn16tN69ftNVE7mepVaPpBkEkBKN8oCgpVStKcMb_bZuh0_hWQxldCw9yO5whLxsEI-f97YcJn2e",
  },
  {
    id: 3,
    brand: "Performax Pro",
    name: "Mumbai Indians Match Kit",
    price: 85,
    badge: "IMPORTED",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVz_d1E1g9L6ppYjfBJ97ylUYEHxulMwOjSTRV1FRTT9-3WBDp3LK22TDm5uPLDjn5AfvASO8719mHXjI4o4Lc4Fgcz3nFDjuwFUYhYrtfRa1dgeD-aEGluMQytrq6KKrd2lu8nsUxGOOl94ftWUh7oKgzNHC6Ci79IW4D62NJrc4duiozBP5-EK103jzRlU2a8gUQPcG3YicoTrItmE1mOmgnGu_B42chS92pgpWkuE-NlV8dpGdPuDJJb853YGTToAbrZNWL6Q32",
  },
  {
    id: 4,
    brand: "Adidas Pro",
    name: "Real Madrid Away 24/25",
    price: 115,
    badge: null,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCOtgFVOhqWkWlARK9qaaoKsORs_KpMXUroLvzCmUXZOtzoE8ZiHPDc-3kFNnXnVRnitw9x-8u2OzonWfdAVU33ZSLTbV5cxOzu0rYgOSJ3oIcJ2tJ5s0Wmgy02E_y8QGpNhOg3wnL-LwnPdf7_1LFk8xnSExpVERbhHJx-YaJrZ-VR53f1ERNnyWE9FBKW1GOupq40h6Layd3Azj8KqiQ9xXlGwF8UOuaBQ6LoQlVB28cLsrmOjUzPMKc4KNQ4ktcuBvwjthdHQLgB",
  },
  {
    id: 5,
    brand: "Gilbert Rugby",
    name: "Heritage Stripe Rugby Kit",
    price: 68,
    originalPrice: 95,
    badge: "SALE",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBo7RBPMDscUxn0c3Qc4NTP6--LpGx65otoDVyYFpgosUQpG22QDbUNQRWaqFI0SMBfcFbbzfKjdHTuLTDqSvu8jWrqmUZ9Id6N_5YzV57haqkxXWWqi9_BX4ycxtOb3NRDnsO2NMIrn1uhr77H6G9N9VmoDPAbpOuf_wU48E6UsIGrZWwHKgGmp41llRJ3P_kvSXucWviqdqVwez4DTRk6YR3elkF8MvCib2rAASq6g2JrYaYxDZhiuQqMxRSLap9GZJ758a6Ii49N",
  },
  {
    id: 6,
    brand: "Majestic Athletic",
    name: "NY Yankees Authentic Home",
    price: 160,
    badge: null,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBEnmyetiGGHVupqIl6-QbfLU7qZjr3--MqGkOp-hqCRpTbQl9g4Lyra25bWmJhN7AEVbTx7ipkhIs28Rb2EOyeejtA3jQZtRxLuHEt5bXPlTLeiF24t65db0_2Lb6FSwKot-LZ2wlOn3hVWxasIr8dznaIhQSNcroQSvOJccw_GCs-v9275pE8B1zPR8MqPZEfojOk8p-H9UP6sDjAH0hBEQzoqgbtpEFqV8Lb0ED2JNLW6i00Z2o8ZjzsZb3zBDvN88rxoylJh7Cd",
  },
];

export default function ProductCard({ product }: { product: typeof products[0] }) {
  return (
    <div className="group border border-slate-200 bg-white overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative bg-slate-50 aspect-[4/5] flex items-center justify-center p-8 overflow-hidden">
        {product.badge && (
          <span className={`absolute top-4 left-4 font-label-sm text-label-sm px-2 py-1 ${
            product.badge === "SALE" 
              ? "bg-secondary text-white" 
              : "bg-white shadow-sm"
          }`}>
            {product.badge}
          </span>
        )}
        <img
          alt={product.name}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
          src={product.image}
        />
        <button className="absolute bottom-4 right-4 bg-primary text-white p-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <span className="material-symbols-outlined">shopping_cart</span>
        </button>
      </div>
      <div className="p-6">
        <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-tighter mb-1">
          {product.brand}
        </p>
        <h3 className="font-headline-md text-headline-md mb-2">{product.name}</h3>
        <p className="font-headline-md text-headline-md text-secondary">
          {product.originalPrice && (
            <span className="line-through text-outline text-label-sm mr-2">${product.originalPrice}</span>
          )}
          ${product.price}
        </p>
      </div>
    </div>
  );
}

export { products };
