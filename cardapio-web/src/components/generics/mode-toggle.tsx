import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "../theme-provider";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
        <Button variant="outline" size="icon" onClick={ () => setTheme(theme == "dark" ? "light" : "dark")}>
          <Sun 
            className={`h-[1.2rem] w-[1.2rem] transition-all ${
              theme === "dark" ? "rotate-0 scale-0" : "rotate-0 scale-100"
            }`}
          />
          <Moon
            className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${
              theme === "dark" ? "rotate-0 scale-100" : "rotate-90 scale-0"
            }`}
          />
        </Button>
  );
}
