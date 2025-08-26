// src/components/Layout.jsx
import Navbar from "./Navbar";

export default function Layout({
  children,
  theme,
  toggleTheme,
  page,
  setPage
}) {
  const isContactPage = page === "contact";
  const darkImage = "/assets/Firewatch-D1.jpg";
  const lightImage = "/assets/Firewatch-L1.jpg";

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        theme === "dark" ? "bg-black text-gray-50" : "bg-white text-gray-900"
      }`}
    >
      {/* Background only for Contact */}
      {isContactPage && (
        <>
          <div
            className="fixed inset-0 bg-cover bg-center bg-no-repeat bg-fixed z-0"
            style={{
              backgroundImage: `url(${theme === "dark" ? darkImage : lightImage})`,
              backgroundSize: "100% 100%",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="fixed inset-0 bg-black/50 z-0"></div>
        </>
      )}

      {/* Navbar */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        setPage={setPage}
        currentPage={page}
        isContactPage={isContactPage}
      />

      {/* Foreground Content */}
      <main className="relative z-10 pt-20 px-4 sm:px-8">
        {children}
      </main>
    </div>
  );
}
