import { categories } from "@/data/categories";
import CategoryCard from "@/components/CategoryCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">

        {/* Categories Grid */}
        <section className="container pb-12">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
            {categories.map((category, index) => (
              <CategoryCard 
                key={category.id} 
                category={category} 
                index={index}
              />
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 py-12">
          <div className="container">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text">2,500+</div>
                <div className="text-sm text-muted-foreground mt-1">Stories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text">22</div>
                <div className="text-sm text-muted-foreground mt-1">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text">50K+</div>
                <div className="text-sm text-muted-foreground mt-1">Daily Viewers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text">10+</div>
                <div className="text-sm text-muted-foreground mt-1">Languages</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
