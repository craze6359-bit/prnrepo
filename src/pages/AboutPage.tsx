import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Info, Heart, Shield, Globe } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Page Title */}
        <section className="container py-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary">
              <Info className="h-5 w-5 text-primary-foreground" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">
              About <span className="gradient-text">DesiFliz</span>
            </h1>
          </div>
        </section>

        {/* Content */}
        <section className="container pb-12">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="bg-card rounded-2xl p-6 md:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Heart className="h-5 w-5 text-primary" />
                Our Mission
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                DesiFliz is your ultimate destination for Indian and South Indian entertainment content. 
                We curate and organize stories across multiple categories to help you discover content 
                that resonates with your cultural background and interests. From family dramas to 
                college romances, village tales to office stories – we bring the best of regional 
                entertainment to your fingertips.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-6 md:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Globe className="h-5 w-5 text-primary" />
                What We Offer
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  20+ curated entertainment categories
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  Thousands of stories in multiple Indian languages
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  Mobile-first design for on-the-go entertainment
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  Regular updates with new content
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-2xl p-6 md:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                Disclaimer
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                DesiFliz is a content aggregator and directory service. We do not host any content 
                directly. All stories and videos are hosted on external platforms. We simply organize 
                and categorize content for easier discovery. Users are advised to verify the legality 
                of content in their jurisdiction before viewing.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
