import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";

export default function Home() {
  return (
    <main>
      <Hero />
      <div id="products">
        <ProductGrid />
      </div>
    </main>
  );
}
