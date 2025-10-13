import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

const ThemeToggle = ({ variant = "default" }: { variant?: "default" | "icon" }) => {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  if (variant === "icon") {
    return (
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleTheme}
        className="hover:bg-primary/10 rounded-full"
      >
        {resolvedTheme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
      </Button>
    );
  }

  return (
    <Button
      variant="default"
      size="icon"
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 z-50 rounded-full shadow-lg w-12 h-12"
    >
      {resolvedTheme === "light" ? <Moon className="h-6 w-6" /> : <Sun className="h-6 w-6" />}
    </Button>
  );
};

export default ThemeToggle;
