# Movie Search App with TMDB API & Next.js

This project is a responsive movie search and details application built with Next.js (version 13/14) and the TMDB API. It leverages advanced Next.js features to create a smooth and optimized user experience with infinite scrolling, server-rendered movie details, a dynamic watchlist, and a user-friendly interface.

## 🚀 Live Demo
[Access the live project here](#) _(https://nagorik-assestment.vercel.app)_

## 📂 Repository
[GitHub Repository](#) _(https://github.com/monirhabderabby/nagorik-assestment)_

---

## 🎯 Objectives
- **Homepage**: Display popular movies with infinite scrolling or a "Load More" button.
- **Search**: Provide a search bar to find movies by title, with infinite scrolling.
- **Movie Details Page**: Show detailed information about each movie with SSR and ISR.
- **Watchlist**: Allow users to add or remove movies to a watchlist.
- **Favouritelist**: Allow users to add or remove movies to a favouritelist.

## 🛠️ Key Features
### 1. Homepage with Infinite Scrolling
- Utilizes TMDB's popular movies API to fetch movies in pages.
- Implements infinite scrolling to dynamically load more movies.
- Lazy-loaded images for optimized performance.

### 2. Movie Details with Server-Side Rendering
- Dynamic routes for each movie's detailed information.
- ISR (Incremental Static Regeneration) updates movie data periodically.
- Displays movie details including genres, release date, cast, and recommendations.

### 3. Watchlist with Server Actions
- Watchlist accessible on a separate page to manage saved movies.
- Used Server Actions adding/removing movies
- Watchlist status is managed using global state for consistency.

### 4. Favouritelist with Server Actions
- Favouritelist accessible on a separate page to manage saved movies.
- Used Server Actions adding/removing movies.
- Favouritelist status is managed using global state for consistency.

### 4. Dark Mode & User Preferences
- Persistent dark mode toggle.
- Middleware ensures the preferred theme is applied on initial load.
- State management with React Context or Zustand for global accessibility.

### 5. Extra Credits & Enhancements
- **Zod Validation**: Validates API responses for data consistency.
- **React Hook Form**: Manages search input with debouncing to prevent excessive API calls.
- **Optimistic UI**: Provides instant UI updates for adding/removing movies from the watchlist.
- **Dynamic Caching**: Caches API responses for improved performance.

## 🚀 Tech Stack
- **Frontend**: Next.js, React, Tailwind CSS
- **APIs**: TMDB API
- **State Management**: Zustand
- **Validation**: Zod
- **Forms**: React Hook Form

## 📂 Project Structure
```
├── actions
├── app
│   ├── index.js            # Homepage with popular movies
│   ├── movie/[id].js       # Movie details page
│   └── watchlist.js        # Watchlist management page
├── components
├── hooks
├── lib
├── provider
├── schemas
└── types
```

## ⚙️ Setup & Installation
1. **Clone the repository**:
   ```bash
   git clone https://github.com/monirhabderabby/nagorik-assestment
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Add TMDB API Key**:
   - Create a `.env` file and add your TMDB API key:
     ```
     NEXT_PUBLIC_TMDB_API_KEY=your_api_key
     NEXT_PUBLIC_IMAGE_BASE_URL=https://image.tmdb.org/t/p/original
     ```
4. **Run the application**:
   ```bash
   npm run dev
   ```



