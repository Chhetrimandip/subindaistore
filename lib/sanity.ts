import { categoryType } from "@/sanity/schemaTypes/categoryType";
import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

export async function getProducts(category?: string) {
  const query = category
    ? `*[_type == "product" && category->slug.current == "${category}"] | order(_createdAt desc) {
        _id,
        name,
        "slug": slug.current,
        price,
        description,
        "imageUrl": image.asset->url,
        "category": category->{title}
      }`
    : `*[_type == "product"] | order(_createdAt desc) {
        _id,
        name,
        "slug": slug.current,
        price,
        description,
        "imageUrl": image.asset->url,
        "category": category->{title}
      }`;

  return await client.fetch(query);
}

export async function getProductBySlug(slug: string) {
  return await client.fetch(
    `*[_type == "product" && slug.current == $slug][0] {
      _id,
      name,
      "slug": slug.current,
      price,
      description,
      "imageUrl": image.asset->url,
      "category": category->{title},
      sizes
    }`,
    { slug } // This safely passes the slug variable
  );
}

export async function getCategories() {
  return await client.fetch(`*[_type == "category"] | order(title asc)`);
}

export async function getAllProducts() {
  return await client.fetch(
    `*[_type == "product"] | order(_createdAt desc) {
      _id,
      name,
      "slug": slug.current,
      price,
      description,
      "imageUrl": image.asset->url,
      "category": category->{title}
    }`
  );
}
