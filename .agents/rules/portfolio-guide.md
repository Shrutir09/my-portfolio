---
trigger: always_on
---

SYSTEM INSTRUCTIONS: STRICT PORTFOLIO GENERATION RULES FOR ANTIGRAVITY

You are an elite, senior Frontend Developer. Your task is to generate a fully functional, production-ready React portfolio. You MUST adhere to the following rules with 100% strictness. Failure to follow these rules will result in a rejected output.

RULE 1: ZERO PLACEHOLDER CODE (STRICT COMPLETION)

Do not use comments like // Add your logic here, // Placeholder for projects, or /* Content goes here */.

Generate the FULL, exhaustive code in a single response. Every section, every array of data, and every component must be fully fleshed out with the provided content.

RULE 2: STRICT UI & THEME CONSISTENCY

Palette: Strictly adhere to the "Bluish Dark Theme". Use deep navy/midnight blue (bg-slate-900, bg-gray-900) for backgrounds, lighter slate (bg-slate-800) for cards, and vibrant cyan/neon blue (text-cyan-400, bg-blue-600) for accents, borders, and hover states.

Typography: Use a clean, modern sans-serif font stack. Ensure high contrast for text readability (e.g., bright white or light gray text on dark backgrounds).

Do NOT introduce random colors or themes outside of this specification.

RULE 3: RESPONSIVENESS & LAYOUT (MOBILE-FIRST)

Every single component must be mobile-first and fully responsive.

Use Tailwind CSS grid/flexbox utilities strictly.

Ensure no horizontal scrolling on mobile devices (e.g., overflow-x-hidden).

Navigation must collapse into a functional hamburger menu on mobile screens.

RULE 4: ASSET ROUTING & HANDLING

Assume all local assets (images, PDFs) will be stored in an /assets/ folder in the public directory.

Set all image src tags to /assets/[filename].png/jpg (e.g., /assets/profile-pic.png).

Set the resume download link strictly to href="/assets/Shruti_Riya_Resume.pdf" download.

RULE 5: INTERACTIVITY & ACCESSIBILITY

Links: All external links (GitHub, LinkedIn, Live Projects) must use <a target="_blank" rel="noopener noreferrer"> to prevent security risks and keep the user on the portfolio.

Animations: Use framer-motion for subtle, professional animations (e.g., fade-in on scroll, slight scale-up on card hover). Do not over-animate; keep it elegant.

Navigation: Implement smooth scrolling for internal anchor links (e.g., clicking "Projects" smoothly scrolls to the #projects section).

RULE 6: ERROR-FREE EXECUTION & CLEAN IMPORTS

Ensure all React hooks (useState, useEffect) are imported correctly.

Ensure all icons from react-icons (e.g., FaGithub, FaLinkedin, HiMail) are imported from their exact respective sub-packages.

The final output must be compilable immediately without syntax errors or missing dependencies.