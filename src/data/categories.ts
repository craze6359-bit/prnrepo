export interface Category {
  id: string;
  title: string;
  icon: string;
  gradient: string;
  count: number;
}

export const categories: Category[] = [
  { id: "family-stories", title: "Family Stories", icon: "👨‍👩‍👧‍👦", gradient: "from-orange-500 to-red-500", count: 145 },
  { id: "college-life", title: "College Life Stories", icon: "🎓", gradient: "from-blue-500 to-purple-500", count: 89 },
  { id: "village-tales", title: "Village Tales", icon: "🌾", gradient: "from-green-500 to-emerald-500", count: 67 },
  { id: "office-dramas", title: "Office Dramas", icon: "💼", gradient: "from-slate-500 to-gray-600", count: 112 },
  { id: "neighbor-stories", title: "Neighbor Stories", icon: "🏘️", gradient: "from-amber-500 to-orange-500", count: 78 },
  { id: "cinema-inspired", title: "Cinema Inspired Stories", icon: "🎬", gradient: "from-red-500 to-pink-500", count: 156 },
  { id: "teen-stories", title: "Teen & Young Adult Stories", icon: "🎵", gradient: "from-violet-500 to-purple-500", count: 134 },
  { id: "office-romance", title: "Office Romance Stories", icon: "💕", gradient: "from-pink-500 to-rose-500", count: 98 },
  { id: "roleplay", title: "Roleplay & Imaginative Stories", icon: "🎭", gradient: "from-indigo-500 to-blue-500", count: 56 },
  { id: "celebrity-inspired", title: "Celebrity Inspired Stories", icon: "⭐", gradient: "from-yellow-500 to-amber-500", count: 87 },
  { id: "relaxation", title: "Massage & Relaxation Stories", icon: "🧘", gradient: "from-teal-500 to-cyan-500", count: 45 },
  { id: "student-life", title: "Student Life Stories", icon: "📚", gradient: "from-blue-600 to-indigo-500", count: 123 },
  { id: "train-journeys", title: "Train & Bus Journeys", icon: "🚂", gradient: "from-orange-600 to-red-600", count: 76 },
  { id: "love-friendship", title: "Love & Friendship Tales", icon: "❤️", gradient: "from-rose-500 to-pink-600", count: 189 },
  { id: "college-crush", title: "College Crush Stories", icon: "😍", gradient: "from-pink-400 to-red-400", count: 167 },
  { id: "festival-nights", title: "Festival & Night Celebrations", icon: "🎉", gradient: "from-purple-500 to-pink-500", count: 92 },
  { id: "mature-life", title: "Mature Life Stories", icon: "🍷", gradient: "from-rose-600 to-red-700", count: 78 },
  { id: "domestic-tales", title: "Domestic Life Tales", icon: "🏠", gradient: "from-amber-600 to-yellow-500", count: 134 },
  { id: "friends-roommates", title: "Friends & Roommates", icon: "🤝", gradient: "from-cyan-500 to-blue-500", count: 145 },
  { id: "party-stories", title: "Party & Social Stories", icon: "🎊", gradient: "from-fuchsia-500 to-purple-600", count: 67 },
  { id: "regional-cultural", title: "Regional & Cultural Stories", icon: "🪔", gradient: "from-orange-500 to-yellow-500", count: 156 },
  { id: "short-clips", title: "Short Clips / Quick Stories", icon: "⚡", gradient: "from-yellow-400 to-orange-500", count: 234 },
];

export interface Video {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  views: string;
  externalUrl: string;
}

export const generateVideos = (categoryId: string, count: number = 12): Video[] => {
  const titles: Record<string, string[]> = {
    "family-stories": [
      "Joint Family Reunion", "Father's Surprise", "Mother's Love", "Siblings Bond",
      "Grandma's Secret Recipe", "Family Wedding Drama", "Cousin's Visit", "Family Picnic Day",
      "Parent's Anniversary", "Uncle's Wisdom", "Family Road Trip", "Festival at Home"
    ],
    "college-life": [
      "First Day at Campus", "Hostel Nights", "Library Romance", "Sports Day Fun",
      "Farewell Party", "Exam Stress Relief", "College Canteen Stories", "Annual Fest",
      "Bunking Classes", "Last Lecture", "Freshers Night", "Campus Love"
    ],
    default: [
      "Untold Story Part 1", "Secret Moments", "Hidden Tales", "Unexpected Turn",
      "Special Episode", "Memorable Day", "The Revelation", "New Beginnings",
      "Last Chapter", "Sweet Memories", "The Journey", "Final Destination"
    ]
  };

  const categoryTitles = titles[categoryId] || titles.default;

  return Array.from({ length: count }, (_, i) => ({
    id: `${categoryId}-video-${i + 1}`,
    title: categoryTitles[i % categoryTitles.length] + (i >= categoryTitles.length ? ` - Part ${Math.floor(i / categoryTitles.length) + 1}` : ''),
    thumbnail: `https://picsum.photos/seed/${categoryId}${i}/400/225`,
    duration: `${Math.floor(Math.random() * 20) + 5}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}`,
    views: `${Math.floor(Math.random() * 900) + 100}K`,
    externalUrl: "#"
  }));
};
