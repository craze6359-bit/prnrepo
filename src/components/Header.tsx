import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search, Home, Grid3X3, TrendingUp, Info } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/categories", label: "Categories", icon: Grid3X3 },
  { href: "/trending", label: "Top Stories", icon: TrendingUp },
  { href: "/about", label: "About", icon: Info },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      {/* Upper Row: Logo + Search */}
      <div className="border-b border-border/50">
        <div className="container flex h-14 items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="flex h-9 w-9 items-center justify-center bg-primary">
              <span className="text-lg">🎬</span>
            </div>
            <span className="text-xl font-bold">
              <span className="text-primary">Desi</span>
              <span className="text-foreground">Flix</span>
            </span>
          </Link>

          {/* Search Box */}
          <div className="flex-1 max-w-2xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search videos, categories..."
                className="w-full h-10 pl-10 pr-4 bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex h-9 w-9 items-center justify-center bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground md:hidden"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Lower Row: Navigation */}
      <div className="border-b border-border/50">
        <div className="container">
          <nav className="hidden md:flex items-center gap-6 h-10">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                to={href}
                className={cn(
                  "text-sm font-medium text-muted-foreground transition-colors hover:text-primary",
                  location.pathname === href && "text-primary"
                )}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="absolute left-0 right-0 top-24 border-b border-border bg-background p-4 shadow-lg md:hidden animate-fade-in z-50">
          {navLinks.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              to={href}
              onClick={() => setIsMenuOpen(false)}
              className={cn(
                "flex items-center gap-3 px-4 py-3 text-foreground/80 transition-colors hover:bg-muted hover:text-primary",
                location.pathname === href && "bg-primary/10 text-primary font-medium"
              )}
            >
              <Icon className="h-5 w-5" />
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
