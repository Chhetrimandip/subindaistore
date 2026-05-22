import { getProductBySlug, getProducts } from "@/lib/sanity";
import Link from "next/link";

interface Product {
  _id: string;
  name: string;
  slug: { current: string };
  price: number;
  description?: string;
  imageUrl?: any;
  sizes?: string[];
  category?: { title: string };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product: Product = await getProductBySlug(slug);
  console.log("Products : ", product);
  const relatedProducts: Product[] = await getProducts("shoes");

  if (!product) {
    return (
      <main className="pt-24 pb-20 px-4 md:px-20 max-w-[1280px] mx-auto">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Product not found
          </h1>
          <Link href="/shoes" className="text-blue-600 underline">
            Back to shoes
          </Link>
        </div>
      </main>
    );
  }

  // Collect thumbnail images — use same image repeated if no extras
  const thumbnails = [
    product.imageUrl,
    product.imageUrl,
    product.imageUrl,
    product.imageUrl,
  ].filter(Boolean);

  return (
    <main className="pt-24 pb-20 px-4 md:px-20 max-w-[1280px] mx-auto">
      {/* ── Product Details ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">

        {/* LEFT — Image + Thumbnails */}
        <div className="flex flex-col gap-4">
          {/* Main image */}
          <div className="bg-[#1a1a2e] rounded-xl overflow-hidden aspect-[4/5] flex items-center justify-center">
            {product.imageUrl && (
              <img
                alt={product.name}
                src={product.imageUrl}
                className="w-full h-full object-contain p-6"
              />
            )}
          </div>

          {/* Thumbnails */}
          {thumbnails.length > 0 && (
            <div className="grid grid-cols-4 gap-2">
              {thumbnails.map((thumb, i) => (
                <div
                  key={i}
                  className="bg-[#1a1a2e] rounded-lg overflow-hidden aspect-square flex items-center justify-center cursor-pointer border-2 border-transparent hover:border-green-500 transition-all"
                >
                  <img
                    alt={`${product.name} view ${i + 1}`}
                    src={thumb}
                    className="w-full h-full object-contain p-2"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT — Product Info */}
        <div className="flex flex-col justify-start gap-4">
          {/* Badge */}
          {product.category?.title && (
            <span className="inline-block self-start text-xs font-semibold uppercase tracking-wider text-green-700 bg-green-100 border border-green-300 px-3 py-1 rounded-full">
              {product.category.title}
            </span>
          )}

          {/* Name */}
          <h1 className="text-3xl font-bold text-gray-900 leading-tight">
            {product.name}
          </h1>

          {/* Price
          <p className="text-2xl font-bold text-green-600">
            ${product.price.toFixed(2)}
          </p> */}

          {/* Sizes */}
          {product.sizes && product.sizes.length > 0 && (
            <div className="mt-2">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-3">
                Select Size
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className="px-4 py-2 border border-gray-300 rounded text-sm font-semibold text-gray-700 hover:border-green-500 hover:bg-green-50 hover:text-green-700 transition-all"
                  >
                    {size.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* WhatsApp / Inquire CTA */}
          <a
            href={`https://wa.me/?text=I'm interested in ${encodeURIComponent(product.name)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold text-sm uppercase tracking-widest px-6 py-4 rounded-lg flex items-center justify-center gap-3 transition-colors shadow-md"
          >
            {/* WhatsApp SVG icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 flex-shrink-0"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Inquire on WhatsApp
          </a>

          {/* Description */}
          {product.description && (
            <p className="text-sm text-gray-600 leading-relaxed mt-1">
              {product.description}
            </p>
          )}

          {/* Trust Badges */}
          <div className="mt-4 border-t border-gray-200 pt-5 space-y-4">
            <div className="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p className="text-sm font-semibold text-gray-800">100% Authentic Import</p>
                <p className="text-xs text-gray-500">Verified genuine premium gear.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <div>
                <p className="text-sm font-semibold text-gray-800">Franchise Warranty</p>
                <p className="text-xs text-gray-500">Full coverage on manufacturing defects.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
              <div>
                <p className="text-sm font-semibold text-gray-800">Easy Store Exchange</p>
                <p className="text-xs text-gray-500">Hassle-free returns at any outlet.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Related Products ── */}
      <section className="border-t border-gray-200 pt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Related Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.slice(0, 4).map((p) => (
            <Link key={p._id} href={`/short/${p.slug}`}>
              <div className="group border border-gray-200 bg-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer h-full">
                <div className="bg-[#1a1a2e] aspect-[4/5] flex items-center justify-center p-6">
                  {p.imageUrl && (
                    <img
                      alt={p.name}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      src={p.imageUrl}
                    />
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-gray-800 mb-1 line-clamp-2">
                    {p.name}
                  </h3>
                  {/* <p className="text-base font-bold text-green-600">
                    ${p.price.toFixed(2)}
                    price can be added later
                  </p> */}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}