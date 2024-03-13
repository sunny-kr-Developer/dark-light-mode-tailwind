import { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    if (theme == "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  const handleClick = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <>
      <div className="h-screen bg-white dark:bg-black flex flex-col justify-center items-center">
        <div className="xs:w-[220px] sm:w-[400px] md:w-[750px] ">
          <div className="flex justify-between pt-5 pb-5 items-center">
            <div>
              <p className="text-black dark:text-white font-serif font-bold text-2xl">
                About
              </p>
            </div>
            <div>
              <button
                onClick={handleClick}
                id="theme-toggle"
                type="button"
                className="outline-0 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
              >
                {theme === "dark" && (
                  <span className="text-black dark:text-white">light mode</span>
                )}
                {theme !== "dark" && (
                  <span className="text-black dark:text-white">dark mode</span>
                )}
              </button>
            </div>
          </div>
          <p className="text-black dark:text-white font-serif">
            Hey, I'm Sunny kumar singh, a Software Engineer based in India. I
            know how to code for the browser & server but I personally enjoy
            building stuff for the terminals.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
