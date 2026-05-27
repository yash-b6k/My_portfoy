import React, { useState } from "react";

import blogLightImage from "../assets/blog-typist-light.png";
import blogDarkImage from "../assets/blog-typist-dark.png";

const tempImages = {
  webDev:
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
  uiux:
    "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=900&q=80",
  javascript:
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80",
  tools:
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
  career:
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
};

export default function CategoryTabs({ theme }) {
  const categories = [
    "All",
    "Web Development",
    "UI/UX Design",
    "JavaScript",
    "Tools",
    "Career",
  ];

  const blogs = [
    {
      id: 1,
      title: "How to Start Web Development",
      category: "Web Development",
      image: tempImages.webDev,
      shortDescription:
        "Learn the basic path to start web development with HTML, CSS, JavaScript, and React.",
      fullDescription: `Web development is the process of creating websites and web applications that users can access through a browser. A beginner should first understand HTML because it creates the structure of a webpage, such as headings, images, forms, buttons, and links.

After HTML, CSS is used to style the page with colors, spacing, layout, fonts, responsiveness, and animations. CSS helps convert a basic structure into a clean and attractive interface that works well on different screen sizes.

JavaScript is used to add interaction to the website. For example, dropdown menus, popup windows, sliders, form validation, theme switching, and dynamic content are usually handled with JavaScript.

After learning the basics, React is a good next step because it helps developers build modern websites using reusable components. This makes the code cleaner, easier to manage, and faster to scale.

The best way to learn web development is by building small projects. A portfolio website, login page, blog layout, product card, dashboard, and landing page are good beginner projects that improve both coding and design thinking.`,
    },
    {
      id: 2,
      title: "UI/UX Design Process for Beginners",
      category: "UI/UX Design",
      image: tempImages.uiux,
      shortDescription:
        "Understand the design process from research to wireframes and final UI screens.",
      fullDescription: `The UI/UX design process starts with understanding the user, the business goal, and the problem that needs to be solved. A designer should not directly start with colors and screens without understanding the actual user need.

The first step is research. In this stage, the designer studies user pain points, target audience, competitors, and the purpose of the product. This helps in making design decisions based on real needs instead of assumptions.

After research, the designer creates user flows and wireframes. User flow shows how the user moves from one step to another, while wireframes help plan the screen structure without focusing too much on visual design.

Once the structure is clear, high-fidelity UI screens are created using proper typography, spacing, colors, icons, buttons, and reusable components. This is where the visual design becomes clear and polished.

Finally, prototyping and testing help improve the design. A good UI/UX design is not only beautiful, but also simple, useful, accessible, and easy for users to understand.`,
    },
    {
      id: 3,
      title: "JavaScript Basics Every Designer Should Know",
      category: "JavaScript",
      image: tempImages.javascript,
      shortDescription:
        "Important JavaScript concepts that help designers understand frontend better.",
      fullDescription: `JavaScript is important because it brings life to a website. HTML creates the structure, CSS creates the visual style, and JavaScript makes the page interactive for users.

For a UI/UX designer, learning basic JavaScript is helpful because it improves communication with frontend developers. Designers do not need to become advanced programmers, but they should understand how interactions work.

For example, when a user clicks a button, opens a modal, submits a form, switches tabs, filters content, or sees an animation, JavaScript is usually involved behind the screen.

Basic concepts like events, functions, conditions, arrays, DOM updates, and form validation help designers understand what is possible in frontend development.

This knowledge also helps while creating prototypes. A designer can think more practically about hover effects, transitions, error messages, loading states, and micro-interactions.`,
    },
    {
      id: 4,
      title: "Best Tools for UI/UX Designers",
      category: "Tools",
      image: tempImages.tools,
      shortDescription:
        "Explore useful tools like Figma, Canva, Photoshop, Illustrator, and Framer.",
      fullDescription: `UI/UX designers use different tools for different parts of the design process. The right tool helps improve speed, quality, collaboration, and presentation.

Figma is one of the most important tools for UI/UX design. It is used for wireframes, UI screens, design systems, components, prototyping, and team collaboration.

Adobe Photoshop is useful for image editing, banners, posters, visual correction, and creative graphics. Adobe Illustrator is mainly used for vector graphics, icons, logos, and brand assets.

Canva is helpful for quick social media posts, simple presentations, thumbnails, and marketing visuals. It is useful when fast design output is needed.

Framer is useful for creating interactive website prototypes and visually rich landing pages. A designer who understands these tools can handle UI design, graphics, branding, and presentation work more confidently.`,
    },
    {
      id: 5,
      title: "How to Build a UI/UX Career",
      category: "Career",
      image: tempImages.career,
      shortDescription:
        "Learn how to prepare your portfolio, improve skills, and apply for UI/UX roles.",
      fullDescription: `Building a career in UI/UX design requires strong fundamentals, practical projects, and clear communication. A designer should focus on solving problems, not only creating attractive screens.

First, learn design basics like alignment, spacing, contrast, typography, color theory, visual hierarchy, and consistency. These fundamentals make the design clean and professional.

Next, practice by designing real-world projects like mobile apps, dashboards, landing pages, booking apps, food delivery apps, banking apps, and portfolio websites.

A strong portfolio is very important. Each project should explain the problem, target users, user flow, wireframes, final UI design, and the reason behind design decisions.

Communication is also a major skill in UI/UX. Designers work with developers, product managers, clients, and business teams, so they must explain their ideas clearly and accept feedback professionally.`,
    },
    {
      id: 6,
      title: "Responsive Design Tips",
      category: "Web Development",
      image: tempImages.webDev,
      shortDescription:
        "Simple tips to make websites work well on mobile, tablet, and desktop.",
      fullDescription: `Responsive design means creating layouts that work properly on different screen sizes such as mobile, tablet, laptop, and desktop. A website should not look good only on one device.

A good responsive design usually starts with a mobile-first approach. Since mobile screens have less space, the designer must decide what content is most important and how it should be shown clearly.

Spacing, font size, button size, image scaling, and layout structure are very important in responsive design. Buttons should be easy to tap, text should be readable, and sections should not feel crowded.

Navigation should also adapt based on device size. For example, desktop websites may use a full navbar, while mobile screens may use a hamburger menu or bottom navigation.

Testing is very important. A layout that looks perfect on desktop may break on mobile, so designers and developers should test across multiple screen widths before final delivery.`,
    },
  ];

  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const currentBlogImage = theme === "dark" ? blogDarkImage : blogLightImage;

  const filteredBlogs =
    activeCategory === "All"
      ? blogs
      : blogs.filter((blog) => blog.category === activeCategory);

  const blogsPerPage = 3;
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
  const startIndex = (currentPage - 1) * blogsPerPage;
  const visibleBlogs = filteredBlogs.slice(
    startIndex,
    startIndex + blogsPerPage
  );

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  return (
    <div className="w-full px-4 py-8 sm:py-10">
      {/* Floating Animation */}
      <style>
        {`
          @keyframes blogFloat {
            0%, 100% {
              transform: translateY(0) scaleX(-1);
            }
            50% {
              transform: translateY(-18px) scaleX(-1);
            }
          }

          @media (min-width: 768px) {
            @keyframes blogFloat {
              0%, 100% {
                transform: translateY(0) scaleX(-1);
              }
              50% {
                transform: translateY(-29px) scaleX(-1);
              }
            }
          }

          .blog-float {
            animation: blogFloat 3s ease-in-out infinite;
          }

          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }

          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }

          .hidden-scroll-content::-webkit-scrollbar {
            display: none;
          }

          .hidden-scroll-content {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>

      {/* Blog Hero Section */}
      <div
        className="
          mx-auto mb-10 flex w-full max-w-6xl flex-col-reverse items-center justify-between gap-8
          px-4 py-6 text-center
          md:flex-row md:gap-12 md:px-18 md:text-left
        "
      >
        <div className="text-center md:text-left">
          <h1 className="text-5xl font-extrabold  dark:text-[#ffffff] sm:text-6xl md:text-8xl">
            My <span className="text-yellow-500">Blog</span>
          </h1>

          <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed  dark:text-[#ffffff] sm:mt-6 md:mx-0 md:mt-8 md:text-base">
            Sharing thoughts, tutorials, and insights about web development,
            design, and technology.
          </p>
        </div>

        <div className="flex w-full justify-center md:block md:w-auto">
          <img
            key={theme}
            src={currentBlogImage}
            alt="Blog illustration"
            className="blog-float h-40 w-44 object-contain sm:h-44 sm:w-52 md:h-44 md:w-42"
          />
        </div>
      </div>

      {/* Category Buttons */}
      <div className="hide-scrollbar mx-auto w-full max-w-6xl overflow-x-auto px-2 pb-2">
        <div
          className="
            mx-auto flex w-max min-w-fit flex-nowrap items-center justify-start gap-4
            rounded-full px-2 py-4 backdrop-blur-xl
            sm:gap-6 sm:px-4
            md:gap-10
            lg:w-full lg:justify-center lg:gap-16 lg:px-6
          "
        >
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`
                  relative shrink-0 rounded-full border px-5 py-2.5 text-xs font-semibold
                  transition-all duration-300 ease-out
                  hover:-translate-y-1 hover:scale-105 active:scale-95
                  sm:px-6 sm:py-3 sm:text-sm
                  md:px-7
                  ${
                    isActive
                      ? `
                        border-blue-600 bg-gradient-to-r from-blue-600 to-indigo-600
                        text-white
                      `
                      : `
                        border-gray-200 bg-white text-gray-800
                        shadow-[0_6px_18px_rgba(0,0,0,0.06)]
                        hover:text-[#558bff]
                        dark:border-white/10 dark:bg-[#0b1220] dark:text-gray-200
                        dark:shadow-[0_6px_20px_rgba(0,0,0,0.35)]
                        dark:hover:border-blue-500 dark:hover:text-blue-400
                      `
                  }
                `}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      {/* Blog Cards */}
      <div className="mx-auto mt-12 grid w-full max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {visibleBlogs.map((blog) => (
          <div
            key={blog.id}
            className="
              overflow-hidden rounded-[28px] bg-white
              shadow-[0_14px_45px_rgba(0,0,0,0.08)]
              transition-all duration-300 hover:-translate-y-2
              hover:shadow-[0_22px_60px_rgba(0,0,0,0.12)]
              dark:bg-[#0b1220] dark:shadow-[0_14px_45px_rgba(0,0,0,0.35)]
            "
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="h-52 w-full object-cover"
            />

            <div className="p-6">
              <span
                className="
                  rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600
                  dark:bg-blue-500/10 dark:text-blue-400
                "
              >
                {blog.category}
              </span>

              <h3 className="mt-4 text-xl font-bold text-gray-900 dark:text-white">
                {blog.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                {blog.shortDescription}
              </p>

              <button
                onClick={() => setSelectedBlog(blog)}
                className="
                  mt-6 inline-flex items-center gap-2 rounded-full
                  bg-gradient-to-r from-blue-600 to-indigo-600
                  px-5 py-2.5 text-sm font-semibold text-white
                  transition-all duration-300 hover:scale-105
                "
              >
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {filteredBlogs.length > blogsPerPage && (
        <div className="mt-12 flex items-center justify-center gap-3">
          <button
            onClick={() => setCurrentPage(1)}
            className={`
              h-9 min-w-9 rounded-md border px-3 text-sm font-semibold transition-all
              ${
                currentPage === 1
                  ? "border-blue-600 bg-blue-600 text-white"
                  : "border-gray-200 bg-white text-gray-700 hover:bg-gray-50 dark:border-white/10 dark:bg-[#0b1220] dark:text-gray-200"
              }
            `}
          >
            1
          </button>

          {totalPages >= 2 && (
            <button
              onClick={() => setCurrentPage(2)}
              className={`
                h-9 min-w-9 rounded-md border px-3 text-sm font-semibold transition-all
                ${
                  currentPage === 2
                    ? "border-blue-600 bg-blue-600 text-white"
                    : "border-gray-200 bg-white text-gray-700 hover:bg-gray-50 dark:border-white/10 dark:bg-[#0b1220] dark:text-gray-200"
                }
              `}
            >
              2
            </button>
          )}

          {totalPages >= 3 && (
            <button
              onClick={() => setCurrentPage(3)}
              className={`
                h-9 min-w-9 rounded-md border px-3 text-sm font-semibold transition-all
                ${
                  currentPage === 3
                    ? "border-blue-600 bg-blue-600 text-white"
                    : "border-gray-200 bg-white text-gray-700 hover:bg-gray-50 dark:border-white/10 dark:bg-[#0b1220] dark:text-gray-200"
                }
              `}
            >
              3
            </button>
          )}

          {totalPages > 4 && (
            <span className="px-2 text-gray-500 dark:text-gray-400">...</span>
          )}

          {totalPages > 3 && (
            <button
              onClick={() => setCurrentPage(totalPages)}
              className={`
                h-9 min-w-9 rounded-md border px-3 text-sm font-semibold transition-all
                ${
                  currentPage === totalPages
                    ? "border-blue-600 bg-blue-600 text-white"
                    : "border-gray-200 bg-white text-gray-700 hover:bg-gray-50 dark:border-white/10 dark:bg-[#0b1220] dark:text-gray-200"
                }
              `}
            >
              {totalPages}
            </button>
          )}

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="
              h-9 rounded-md border border-gray-200 bg-white px-5 text-sm font-semibold
              text-gray-700 transition-all hover:bg-gray-50 disabled:cursor-not-allowed
              disabled:opacity-50 dark:border-white/10 dark:bg-[#0b1220] dark:text-gray-200
            "
          >
            Next →
          </button>
        </div>
      )}

      {/* Blog Popup */}
      {selectedBlog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm">
          <div
            className="
              relative w-full max-w-2xl rounded-[28px] bg-white p-6
              shadow-[0_25px_80px_rgba(0,0,0,0.25)]
              dark:bg-[#0b1220]
            "
          >
            <button
              onClick={() => setSelectedBlog(null)}
              className="
                absolute right-5 top-5 rounded-full bg-gray-100 px-3 py-1.5
                text-sm font-bold text-gray-700 transition hover:bg-gray-200
                dark:bg-white/10 dark:text-white dark:hover:bg-white/20
              "
            >
              ✕
            </button>

            <img
              src={selectedBlog.image}
              alt={selectedBlog.title}
              className="h-64 w-full rounded-2xl object-cover"
            />

            <span
              className="
                mt-5 inline-block rounded-full bg-blue-50 px-3 py-1
                text-xs font-semibold text-blue-600
                dark:bg-blue-500/10 dark:text-blue-400
              "
            >
              {selectedBlog.category}
            </span>

            <h2 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white">
              {selectedBlog.title}
            </h2>

            <p
              className="
                hidden-scroll-content mt-4 max-h-[260px] overflow-y-auto
                whitespace-pre-line pr-2 leading-8 text-gray-600 dark:text-gray-300
              "
            >
              {selectedBlog.fullDescription}
            </p>

            <button
              onClick={() => setSelectedBlog(null)}
              className="
                mt-7 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600
                px-6 py-3 text-sm font-semibold text-white
                transition-all duration-300 hover:scale-105
              "
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}