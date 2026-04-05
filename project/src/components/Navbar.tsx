import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Для кого", href: "#for-whom" },
  { label: "Результат", href: "#results" },
  { label: "Как проходит", href: "#process" },
  { label: "Что входит", href: "#included" },
  { label: "Обсудить задачу", href: "#cta" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto flex items-center justify-between h-14 px-4 md:px-6">
        <span className="font-display text-base font-semibold text-foreground tracking-tight">
          Алексей Захаров
        </span>

        <div className="hidden md:flex items-center gap-0.5">
          {navItems.slice(0, -1).map((item) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.href)}
              className="px-3 py-1.5 text-[13px] text-text-secondary hover:text-foreground transition-colors rounded-md"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("#cta")}
            className="ml-3 px-4 py-1.5 text-[13px] font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            Обсудить задачу
          </button>
        </div>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-t border-border overflow-hidden"
          >
            <div className="flex flex-col p-3 gap-0.5">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollTo(item.href)}
                  className="text-left px-3 py-2 text-sm text-text-secondary hover:text-foreground rounded-md transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
