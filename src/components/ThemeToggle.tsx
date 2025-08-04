import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="ghost" size="sm" className="w-10 h-10 p-0">
        <div className="w-4 h-4" />
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="w-10 h-10 p-0 hover:bg-muted/50 group relative overflow-hidden"
    >
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all group-hover:scale-110 dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all group-hover:scale-110 dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default ThemeToggle;