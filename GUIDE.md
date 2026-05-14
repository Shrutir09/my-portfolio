# Asset & Link Replacement Guide

This guide will help you replace the placeholder text, images, and links throughout your new portfolio website with your actual content. 

First, we recommend placing all your images (profile picture, project screenshots) into the `public/assets/` directory (you may need to create the `assets` folder inside `public`). For example, you can save your profile picture as `public/assets/profile.jpg`. 

---

### 1. Profile Picture
**File to edit:** `src/components/Hero.jsx`
**Line to find (approx. Line 29):**
```jsx
{/* REPLACE the src below with your actual image path, e.g., '/assets/profile.jpg' */}
<img src="https://via.placeholder.com/300x300/1e293b/06b6d4?text=Profile+Picture" alt="Shruti Riya" className="hero-image" />
```
**What to do:** Change the `src` attribute from the placeholder URL to your actual image path. If you placed it in `public/assets/profile.jpg`, change it to:
```jsx
<img src="/assets/profile.jpg" alt="Shruti Riya" className="hero-image" />
```

### 2. Resume File
**File to edit:** `src/components/Hero.jsx`
**Line to find (approx. Line 23):**
```jsx
<a href="/assets/Shruti_Riya_Resume.pdf" download className="btn btn-outline">Download Resume</a>
```
**What to do:** Make sure your actual resume is placed at `public/assets/Shruti_Riya_Resume.pdf`. The download will automatically work!

### 3. Project Images and Links
**File to edit:** `src/components/Projects.jsx`
**Line to find (approx. Line 5 - 47):**
Inside the `projectList` array, you will see objects for each project like this:
```jsx
{
  title: "PhotoVerse",
  desc: "Interactive web platform for photosynthesis and environment simulation.",
  img: "https://via.placeholder.com/600x400/1e293b/3b82f6?text=PhotoVerse",
  link: "#" // REPLACE with actual link later
}
```
**What to do:**
1. Update `img`: Change the placeholder URL to the path of your screenshot (e.g., `"/assets/photoverse.jpg"`).
2. Update `link`: Change `"#"` to your actual GitHub or Live URL (e.g., `"https://github.com/Shrutir09/PhotoVerse"`).

### 4. Running Your App
To see your changes live while you edit:
1. Open your terminal and navigate to your project folder (`c:\Users\Shruti Riya\OneDrive\Desktop\Projects\portfolio`).
2. Run `npm run dev`.
3. Open `http://localhost:5173` in your browser.
