import { useMemo } from "react";
import { generateVideos } from "@/data/categories";
import VideoCard from "@/components/VideoCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { TrendingUp, Flame } from "lucide-react";

const TrendingPage = () => {
  const trendingVideos = useMemo(() => {
    return generateVideos("trending", 24);
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Page Title */}
        <section className="container py-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary">
              <TrendingUp className="h-5 w-5 text-primary-foreground" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">
              Top <span className="gradient-text">Stories</span>
            </h1>
          </div>
          <p className="text-muted-foreground max-w-2xl">
            The most popular and trending stories right now. Updated daily based on viewer engagement.
          </p>
        </section>

        {/* Trending Badge */}
        <section className="container pb-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 px-4 py-2">
            <Flame className="h-4 w-4 text-orange-500" />
            <span className="text-sm font-medium text-foreground">Hot & Trending Now</span>
          </div>
        </section>

        {/* Videos Grid */}
        <section className="container pb-12">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {trendingVideos.map((video, index) => (
              <VideoCard key={video.id} video={video} index={index} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TrendingPage;
