import { Link } from "react-router-dom";
import { Category } from "@/data/categories";
import { Play } from "lucide-react";

interface CategoryCardProps {
  category: Category;
  index: number;
}

// Placeholder thumbnails - you can replace these with your own URLs
const categoryThumbnails: Record<string, string> = {
  "family-stories": "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=300&fit=crop",
  "college-life": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=300&fit=crop",
  "village-tales": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=300&fit=crop",
  "office-dramas": "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=300&fit=crop",
  "neighbor-stories": "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&h=300&fit=crop",
  "cinema-inspired": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=300&fit=crop",
  "teen-stories": "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=400&h=300&fit=crop",
  "office-romance": "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=400&h=300&fit=crop",
  "roleplay": "https://images.unsplash.com/photo-1464863979621-258859e62245?w=400&h=300&fit=crop",
  "celebrity-inspired": "https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=400&h=300&fit=crop",
  "relaxation": "https://images.unsplash.com/photo-1496440737103-cd596325d314?w=400&h=300&fit=crop",
  "student-life": "https://images.unsplash.com/photo-1469460340997-2f854421e72f?w=400&h=300&fit=crop",
  "train-journeys": "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=400&h=300&fit=crop",
  "love-friendship": "https://images.unsplash.com/photo-1504703395950-b89145a5425b?w=400&h=300&fit=crop",
  "college-crush": "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=300&fit=crop",
  "festival-nights": "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=400&h=300&fit=crop",
  "mature-life": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=300&fit=crop",
  "domestic-tales": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
  "friends-roommates": "https://images.unsplash.com/photo-1526510747491-27f8c49b6d42?w=400&h=300&fit=crop",
  "party-stories": "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=400&h=300&fit=crop",
  "regional-cultural": "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?w=400&h=300&fit=crop",
  "short-clips": "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?w=400&h=300&fit=crop",
};

const CategoryCard = ({ category, index }: CategoryCardProps) => {
  const thumbnail = categoryThumbnails[category.id] || `https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=300&fit=crop&seed=${index}`;

  return (
    <Link
      to={`/category/${category.id}`}
      className="category-card group block opacity-0 animate-fade-in"
      style={{ animationDelay: `${index * 30}ms` }}
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        {/* Thumbnail Image */}
        <img
          src={thumbnail}
          alt={category.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

        {/* Play Icon */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          <div className="flex h-12 w-12 items-center justify-center bg-primary text-primary-foreground">
            <Play className="h-5 w-5 fill-current ml-0.5" />
          </div>
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-sm font-semibold text-white leading-tight">
            {category.title}
          </h3>
          <p className="mt-1 text-xs text-white/70">
            {category.count} stories
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;