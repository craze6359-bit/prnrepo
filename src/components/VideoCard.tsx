import { Video } from "@/data/categories";
import { Play, Eye } from "lucide-react";

interface VideoCardProps {
  video: Video;
  index: number;
}

const VideoCard = ({ video, index }: VideoCardProps) => {
  return (
    <a
      href={video.externalUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="video-card group block opacity-0 animate-fade-in"
      style={{ animationDelay: `${index * 30}ms` }}
    >
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden bg-muted">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
        
        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          <div className="flex h-12 w-12 items-center justify-center bg-primary text-primary-foreground">
            <Play className="h-5 w-5 fill-current ml-0.5" />
          </div>
        </div>

        {/* Duration Badge */}
        <div className="absolute bottom-2 left-2 bg-black/80 px-2 py-0.5 text-xs font-medium text-white">
          {video.duration}
        </div>

        {/* Views Badge */}
        <div className="absolute bottom-2 right-2 flex items-center gap-1 bg-black/80 px-2 py-0.5 text-xs font-medium text-white">
          <Eye className="h-3 w-3" />
          {video.views}
        </div>
      </div>

      {/* Info */}
      <div className="p-3 bg-card">
        <h3 className="font-medium text-foreground text-sm line-clamp-2 transition-colors group-hover:text-muted-foreground">
          {video.title}
        </h3>
      </div>
    </a>
  );
};

export default VideoCard;