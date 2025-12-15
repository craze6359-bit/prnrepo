import { categories } from "@/data/categories";
import CategoryCard from "@/components/CategoryCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Grid3X3 } from "lucide-react";

const CategoriesPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Page Title */}
        <section className="container py-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary">
              <Grid3X3 className="h-5 w-5 text-primary-foreground" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">
              All <span className="gradient-text">Categories</span>
            </h1>
          </div>
          <p className="text-muted-foreground max-w-2xl">
            Browse through our complete collection of entertainment categories. Find stories that match your mood and interests.
          </p>
        </section>

        {/* Categories Grid */}
        <section className="container pb-12">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {categories.map((category, index) => (
              <CategoryCard 
                key={category.id} 
                category={category} 
                index={index}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CategoriesPage;
