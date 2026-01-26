---
title: Introduction
sidebar_position: 1
---

Welcome to the ReactJS handbook.

- For Banking/Health application use memory + cookies as storage
- All environment variable names must start with `REACT_APP_`.
- Anything in `.env` in React is visible to the browser.

## React Router DOM

- `BrowserRouter` uses the HTML5 history API to keep the UI in sync with the URL.
- It must wrap your entire app if you want routing everywhere.
- `BrowserRouter` – Enables routing in the app.
- `Routes` – Wraps multiple `Route` components.
- `Route` – Maps a `path` to a `React component`.
  - `path="/"` → Home page.
  - `path="*"` → Catch-all route for 404.
  - `element` → The React component to render.
  - `children` → Nested routes.
- Dynamic URL Example: We can pass parameters using `:id` (covered below).
- Nested routes allow components to render child routes inside a parent component. Use `<Outlet>` in the parent.
- If you want a default child route for a parent, use the `index` prop.
- Navigation:
  - `<Link>` component – declarative navigation (like an HTML `<a>` but without page reload).
  - `useNavigate` hook – programmatic navigation (imperative navigation triggered by events, e.g., button click).
    - `replace: true` → replaces the current history entry instead of pushing a new one.
    - `state: { key: value }` → pass state to the new route.
    - `navigate("/about")` → pushes new entry in history (Back button works).
    - `navigate("/about", { replace: true })` → replaces current entry (Back button skips it).

- `useLocation()` allows access to `state` passed during navigation.
## Question

- what the difference between dev and production server, why dev server is slow and unoptimized where production is optimized for speed, what happens under the hood
