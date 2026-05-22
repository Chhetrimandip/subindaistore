"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { client } from "@/lib/sanity";

interface Product {
  _id: string;
  name: string;
  slug: string;
  price: number;
  imageUrl?: string;
  category?: { title: string };
  description?: string;
  tag?: string;
}

type SportType = "all" | "football" | "basketball" | "cricket";

const SPORT_KEYWORDS: Record<Exclude<SportType, "all">, string[]> = {
  football: ["football", "soccer", "goalkeeper", "striker", "defender", "manchester", "real madrid", "arsenal", "chelsea", "juventus", "barcelona", "psg"],
  basketball: ["basketball", "nba", "lakers", "warriors", "heat", "celtics", "nets", "bulls"],
  cricket: ["cricket", "ipl", "mumbai indians", "rcb", "csk", "kkr", "delhi capitals", "rajasthan", "sunrisers", "kolkata"],
};

export default function ballsPage() {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSport, setSelectedSport] = useState<SportType>("all");
  const [itemsToShow, setItemsToShow] = useState(9);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await client.fetch(
          `*[_type == "product" && category->slug.current == "balls"] | order(_createdAt desc) {
            _id,
            name,
            "slug": slug.current,
            price,
            description,
            "imageUrl": image.asset->url,
            "category": category->{title}
          }`
        );
        setAllProducts(products);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    let filtered = allProducts;

    // Filter by sport
    if (selectedSport !== "all") {
      filtered = filtered.filter((product) => {
        const text = `${product.name} ${product.description || ""}`.toLowerCase();
        return SPORT_KEYWORDS[selectedSport].some((keyword) =>
          text.includes(keyword.toLowerCase())
        );
      });
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Show only the first itemsToShow products
    setDisplayedProducts(filtered.slice(0, itemsToShow));
  }, [allProducts, searchQuery, selectedSport, itemsToShow]);

  const handleLoadMore = () => {
    setItemsToShow((prev) => prev + 9);
  };

  const filteredTotal = (() => {
    let count = allProducts;
    if (selectedSport !== "all") {
      count = count.filter((product) => {
        const text = `${product.name} ${product.description || ""}`.toLowerCase();
        return SPORT_KEYWORDS[selectedSport].some((keyword) =>
          text.includes(keyword.toLowerCase())
        );
      });
    }
    if (searchQuery) {
      count = count.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return count.length;
  })();

  if (loading) {
    return (
      <main className="min-h-screen bg-[#F8F9FC] text-slate-900 pt-28 pb-20 px-4 md:px-20 max-w-[1440px] mx-auto">
        <div className="flex items-center justify-center h-64">
          <p className="text-slate-500">Loading balls...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F8F9FC] text-slate-900 pt-28 pb-20 px-4 md:px-20 max-w-[1440px] mx-auto">
      {/* Page Header Area */}
      <header className="mb-10 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-950 mb-4">
          Premium balls
        </h1>
        <p className="text-sm md:text-base text-slate-500 leading-relaxed font-normal">
          Discover our curated collection of authentic, high-performance balls from elite global leagues. 
          Engineered for the modern athlete and the dedicated fan.
        </p>
      </header>

      {/* Main Content Split: Sidebar + Products */}
      <div className="flex flex-col lg:flex-row gap-10 items-start">
        
        {/* Left Side Filter Sidebar */}
        <aside className="w-full lg:w-60 shrink-0">
          {/* Search Bar */}
          <div className="mb-8">
            <label className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3 block">
              Search balls
            </label>
            <input
              type="text"
              placeholder="Search by name..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setItemsToShow(9); // Reset to show first 9 when searching
              }}
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-white text-sm text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
            />
          </div>

          {/* Sport Type Filter */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
              Sport Type
            </h2>
            <div className="flex flex-col gap-3">
              {(["all", "football", "basketball", "cricket"] as SportType[]).map((sport) => (
                <button
                  key={sport}
                  onClick={() => {
                    setSelectedSport(sport);
                    setItemsToShow(9); // Reset to show first 9 when filtering
                  }}
                  className={`text-left px-4 py-2.5 rounded-lg font-medium text-sm transition-all ${
                    selectedSport === sport
                      ? "bg-slate-950 text-white shadow-md"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {sport === "all"
                    ? "All balls"
                    : sport.charAt(0).toUpperCase() + sport.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Right Side Products Layout Container */}
        <div className="flex-grow w-full">
          {/* Header Stats bar */}
          <div className="mb-6">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Showing {displayedProducts.length} of {filteredTotal} Results
            </p>
          </div>

          {/* Clean Grid Layout */}
          {displayedProducts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 overflow-visible">
                {displayedProducts.map((product) => (
                  <Link
                    key={product._id}
                    href={`/balls/${product.slug}`}
                    className="group block overflow-hidden rounded-[1.5rem] bg-slate-50 shadow-sm transition duration-300 hover:shadow-md"
                  >
                    <div className="relative h-72 w-full overflow-hidden">
                      {product.tag && (
                        <span className="absolute left-4 top-4 z-10 rounded-full bg-slate-950 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-white">
                          {product.tag}
                        </span>
                      )}
                      {product.imageUrl ? (
                        <img
                          src={product.imageUrl}
                          alt={product.name}
                          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center bg-slate-200 text-slate-500">
                          No image
                        </div>
                      )}
                    </div>
                    <div className="space-y-2 px-4 pb-5 pt-4">
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                        {product.category?.title || "balls"}
                      </p>
                      <h2 className="text-lg font-semibold text-slate-950">{product.name}</h2>
                      <div className="flex items-center justify-between">
                        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                          View
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Load More Button */}
              {displayedProducts.length < filteredTotal && (
                <div className="flex justify-center mt-16">
                  <button
                    onClick={handleLoadMore}
                    className="px-8 py-3 bg-slate-950 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors shadow-md hover:shadow-lg"
                  >
                    Load More 9 balls
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="flex items-center justify-center h-64">
              <p className="text-slate-500 text-lg">No balls found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}