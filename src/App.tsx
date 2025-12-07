import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Blogs from "./components/Blogs";
import Description from "./components/Description";

function App() {
  const [theme, setTheme] = useState<string>(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    const isDark =
      theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <main className="w-full min-h-dvh bg-zinc-100 dark:bg-[#1C1E21] text-black dark:text-white">
      <Navbar theme={theme} handleTheme={handleTheme} />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<Description theme={theme} />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<Description theme={theme} />} />
      </Routes>
    </main>
  );
}

export default App;
