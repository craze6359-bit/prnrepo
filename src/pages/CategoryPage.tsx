import { useParams, Link } from "react-router-dom";
import { useState, useMemo } from "react";
import { categories, generateVideos } from "@/data/categories";
import VideoCard from "@/components/VideoCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Filter } from "lucide-react";

const ITEMS_PER_PAGE = 12;

const CategoryPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [currentPage, setCurrentPage] = useState(1);
  
  const category = categories.find((c) => c.id === categoryId);
  
  const allVideos = useMemo(() => {
    if (!categoryId) return [];
    return generateVideos(categoryId, 48);
  }, [categoryId]);

  const totalPages = Math.ceil(allVideos.length / ITEMS_PER_PAGE);
  const paginatedVideos = allVideos.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  if (!category) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 container py-12 text-center">
          <h1 className="text-2xl font-bold text-foreground">Category not found</h1>
          <Link to="/" className="text-primary hover:underline mt-4 inline-block">
            Return to Home
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Videos Grid */}
        <section className="container py-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-foreground">
              All Stories
            </h2>
            <button className="flex items-center gap-2 rounded-lg bg-muted px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-muted/80 transition-colors">
              <Filter className="h-4 w-4" />
              Filter
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
            {paginatedVideos.map((video, index) => (
              <VideoCard key={video.id} video={video} index={index} />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-8 flex items-center justify-center gap-2">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="rounded-lg bg-muted px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-primary hover:text-primary-foreground disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Previous
              </button>
              
              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`h-10 w-10 rounded-lg text-sm font-medium transition-colors ${
                      currentPage === page
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground hover:bg-primary/20"
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="rounded-lg bg-muted px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-primary hover:text-primary-foreground disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Next
              </button>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CategoryPage;
