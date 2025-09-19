# Contents

- [Introduction](#introduction)
  - [Features](#key-features)
  - [Why Use Next.js](#why-use-nextjs)
  - [Comparison](#comparison)
- [Project Structure](#project-structure)
  - [Top-level Folders](#top-level-folders)
  - [Top-level Files](#top-level-files)
  - [Routing Files](#routing-files)
- [Styling](#styling)
  - [Tailwind CSS](#tailwind-css)
- [Deployment](#deployment)
  - [Environment Variables](#environment-variables)

# Introduction

Next.js is a React framework that enables server-side rendering (SSR) and static site generation (SSG) for building fast and SEO-friendly web applications.

## Key Features

- **Hybrid Rendering (SSR + SSG)** – It allows both Server-Side Rendering (SSR) and Static Site Generation (SSG) for better performance and SEO.
- **Automatic Code Splitting** – It loads only the necessary JavaScript for each page, improving performance.
- **File-based Routing** – Each file in the `pages/` directory automatically becomes a route.
- **Built-in API Routes** – You can create backend endpoints using `pages/api/`.
- **Optimized Images** – It provides an `next/image` component for efficient image handling.
- **Incremental Static Regeneration (ISR)** – Updates static content without rebuilding the entire app.
- **Middleware & Edge Functions** – For handling custom requests before they reach API endpoints.

## Why Use Next.js?

Next.js is used because it offers better performance, SEO, and developer experience compared to plain React apps. Here’s why:

1. **Improved SEO**
   - Traditional React apps use Client-Side Rendering (CSR), where content is generated in the browser. This makes it difficult for search engines to index the page.
   - Next.js uses Server-Side Rendering (SSR) or Static Site Generation (SSG) to deliver pre-rendered HTML, making it SEO-friendly.
2. **Faster Page Loads**
   - Since pages are pre-rendered or served from the server, they load faster.
   - Automatic code-splitting ensures users only download what's needed.
3. **Built-in Routing System**
   - No need to install React Router; Next.js handles routing based on the `pages/` folder structure.
4. **API Routes (Full Stack Capabilities)**
   - With `pages/api/`, Next.js can handle backend logic without needing an external server.
5. **Scalability & Flexibility**
   - Supports static generation, server rendering, and hybrid models based on project needs.

## Comparison

React is a JavaScript library for building UI components, while Next.js is a framework built on top of React that provides extra features like server-side rendering (SSR), static site generation (SSG), and API routes.

### Fetching Data With - React

```tsx
import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <h1>React App</h1>
      <p>{data.title}</p>
    </div>
  );
}

export default App;
```

**Downsides of React (CSR)**

- The page loads without content initially (bad for SEO).
- JavaScript must execute before data is displayed.
- Slower time to first paint (TTFP).

### Fetching Data With - Next.js

```tsx
export async function getServerSideProps() {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/1").then(
    (res) => res.json()
  );

  return {
    props: { todo: data },
  };
}

export default function Home({ todo }) {
  return (
    <div>
      <h1>Next.js App</h1>
      <p>{todo.title}</p>
    </div>
  );
}
```

**Benefits of Next.js (SSR)**

- Pre-rendered content → Better for SEO.
- No loading state → Content is available immediately.
- Fast Time to First Paint (TTFP).

# Project Structure

## Top-level Folders

Top-level folders are used to organize your application's code and static assets.

- `app` - App Router
- `pages` - Pages Router
- `public` - Static assets to be served
- `src` - Optional application source folder

## Top-level Files

Top-level files are used to configure your application, manage dependencies, run middleware, integrate monitoring tools, and define environment variables.

- `next.config.js` - Configuration file for Next.js
- `package.json` - Project dependencies and scripts
- `instrumentation.ts` - OpenTelemetry and Instrumentation file
- `middleware.ts` - Next.js request middleware
- `.env` - Environment variables
- `.env.local` - Local environment variables
- `.env.production` - Production environment variables
- `.env.development` - Development environment variables
- `.eslintrc.json` - Configuration file for ESLint
- `.gitignore` - Git files and folders to ignore
- `next-env.d.ts` - TypeScript declaration file for Next.js
- `tsconfig.json` - Configuration file for TypeScript
- `jsconfig.json` - Configuration file for JavaScript

## Routing Files

- `layout` - Layout
- `page` - Page
- `loading` - Loading UI
- `not-found` - Not found UI
- `error` - Error UI
- `global-error` - Global error UI
- `route` - API endpoint
- `template` - Re-rendered layout
- `default` - Parallel route fallback page

# Rendering

## Client-Side Rendering

Client-Side Rendering (CSR) is a method where the browser (client) downloads a minimal HTML file along with JavaScript files. The JavaScript executes in the browser, fetching data from an API, and dynamically rendering content on the page.

- When you visit a website using CSR, the browser first loads an empty page with almost no content.
- Then, it downloads a JavaScript file that builds the page dynamically.
  -The page loads slowly at first, but once everything is loaded, navigating between pages becomes very fast.

### Steps

1. **Browser Requests the Page:** The user enters a URL in the browser (e.g., `https://example.com`).
2. **Server Responds with Minimal HTML:** The server responds with a lightweight HTML and Javscripts file.

   ```html
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <title>CSR Example</title>
     </head>
     <body>
       <div id="root"></div>
       <!-- This is where React inserts the content -->
       <script src="bundle.js"></script>
       <!-- JavaScript file that builds the page -->
     </body>
   </html>
   ```

   At this point, the page is still empty! The content is missing because JavaScript hasn’t run yet.

3. **Browser Downloads JavaScript File:**

   - The browser loads bundle.js, which contains the React app.
   - React runs and fetches the blog post from an API.

4. **JavaScript Fetches Data and Updates the Page:**

   ```tsx
   import React, { useState, useEffect } from "react";

   function BlogPost() {
     const [data, setData] = useState(null);

     useEffect(() => {
       fetch("https://jsonplaceholder.typicode.com/posts/1") // API call
         .then((response) => response.json())
         .then((json) => setData(json)); // Set data
     }, []);

     return (
       <div>
         <h1>Client-Side Rendering Example</h1>
         {data ? <h2>{data.title}</h2> : <p>Loading...</p>}
       </div>
     );
   }

   export default BlogPost;
   ```

5. **Content is Rendered in the Browser:** The fetched data is used to dynamically generate and update the page's content.
6. **User Interacts with the Page:** Since the page is now fully loaded in the browser, interactions like clicking buttons or navigating between pages happen instantly without needing a full page reload.

## Pre Rendering

Server-Side Rendering (SSR) is a method where the server processes and renders the full HTML page before sending it to the browser. The browser only has to display the fully rendered content.

- Instead of sending an empty page, the server builds the page first and then sends the full HTML to the browser.
- The page loads quickly because the browser doesn’t have to wait for JavaScript to fetch the data.

Pre rendering can be done with:

1. Static Side Generation
2. Server Side Rendering

### Steps

1. **Browser Requests the Page:** The user enters a URL in the browser (e.g., `https://example.com`).
2. **Server Generates the HTML Page:** The server processes the request, executes any necessary database queries or API calls, and generates the full HTML page.
   In Next.js, we use `getServerSideProps` to fetch data before the page is sent:

   ```tsx
   export async function getServerSideProps() {
     const res = await fetch("https://jsonplaceholder.typicode.com/posts/1"); // API call
     const data = await res.json();

     return { props: { data } }; // Send data to the page
   }

   function BlogPost({ data }) {
     return (
       <div>
         <h1>Server-Side Rendering Example</h1>
         <h2>{data.title}</h2>
       </div>
     );
   }

   export default BlogPost;
   ```

3. **Server Sends a Fully Rendered Page**

   - The server fetches the blog post first and puts it inside the HTML file.
   - The fully rendered page (with all the necessary content) is sent to the browser.
   - The browser receives a complete HTML page, which looks like this:

   ```html
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <title>SSR Example</title>
     </head>
     <body>
       <div id="root">
         <h1>Server-Side Rendering Example</h1>
         <h2>My Blog Post Title</h2>
       </div>
     </body>
   </html>
   ```

4. **Browser Displays the Page Instantly:** Since the browser receives a ready-to-display HTML page, the content appears much faster.
5. **JavaScript Enhancements Load in the Background:** If JavaScript frameworks like React or Vue.js are used, they hydrate (attach interactivity to) the already rendered HTML.


# Client-Side Rendering

Client-Side Rendering (CSR) means that a page’s HTML is mostly empty on initial load, and the actual rendering happens in the browser using JavaScript.

- The server sends a minimal HTML file with a `<div id="__next"></div>` container.
- The browser downloads and executes the bundled React JavaScript code.
- The React code runs inside the user’s browser, fetches data (if needed), and renders components dynamically.

In Next.js, CSR is used when:

1. You want dynamic content that should be rendered after the page loads.
2. You don’t need SEO for that particular page (because search engines might not see the content immediately).
3. You fetch data inside `useEffect` or from client-side hooks instead of server-side functions.

## How CSR Works

1. User requests a page → Next.js server sends an empty shell HTML with React JS bundle.
2. Browser executes React → Loads components → Runs `useEffect` or fetch calls.
3. Data is fetched → React re-renders the UI inside the browser.

## Best use cases for CSR

1. Dynamic user-specific data
   - Example: A user dashboard (orders, messages, profile) where content is unique to the logged-in user.
   - Data shouldn’t be cached or indexed by search engines.
2. Highly interactive UI

   - Example: Chat apps, dashboards, or data that frequently updates.

3. Non-SEO critical pages

   - Example: Admin panels, analytics dashboards, or user settings.
   - Since content isn’t indexed, SEO doesn’t matter.

4. Third-party client-side SDKs

   - Example: Fetching data from Firebase, Stripe, or Auth0 where tokens are managed on the client.

5. Real-time data

   - Example: Stock prices, live sports scores, notifications.

**Advantages**

- Good for dynamic content (like dashboards, user-specific data).
- Lighter server load (server just sends shell).
- Better for highly interactive apps (like SPAs).
- Good for personalized dashboards and apps.
- Server doesn’t need to fetch/render user-specific content.
- Works well with APIs requiring authentication.

**Disadvantages**

- Slower First Contentful Paint (FCP) (user sees loading spinner).
- Not SEO friendly, since bots may not see dynamic content immediately.
- Depends on JavaScript being enabled in the browser.

## Data Fetching in CSR

When using Client-Side Rendering (CSR) in Next.js, data fetching happens inside the browser, not on the server.

- The server only returns a minimal HTML shell.
- After the page loads, React runs in the browser.
- React hooks like `useEffect` and `useState` are used to fetch and display the data.

This is different from `getServerSideProps` (SSR) or `getStaticProps` (SSG), because the data is not pre-rendered. Instead, the user first sees a loading state, and then the content once fetched.

## How to use CSR

In Next.js, CSR means skipping server-side data fetching (`getServerSideProps`, `getStaticProps`) and instead fetching data inside the component with `useEffect`.

Steps:

1. Render a basic HTML shell from the server.

2. Inside the component, use React hooks (`useEffect`, `useState`) to fetch data.

3. Update the UI once the data arrives.

In App Router (Next.js 13+ with `app/` directory), mark components with `"use client"` if they rely on state, effects, or event listeners.

**Example**

```tsx
"use client";

import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
};

export default function Dashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Fetch user data after component mounts (CSR)
  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const data = await res.json();
        setUser(data);
      } catch (err) {
        console.error("Failed to fetch user", err);
      } finally {
        setLoading(false);
      }
    }
    fetchUser();
  }, []);

  if (loading) return <p>Loading user dashboard...</p>;

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Client-Side Rendered Dashboard</h1>
      {user ? (
        <div className="mt-4">
          <p>
            <strong>ID:</strong> {user.id}
          </p>
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
        </div>
      ) : (
        <p>Failed to load user data</p>
      )}
    </div>
  );
}
```

1. `use client` → Marks this as a client component.
2. `useEffect` ensures the data is fetched after the page loads (in the browser).
3. `loading` state → Shows a loading message until data is ready.
4. On first request, the user sees:

   ```html
   <div id="__next">
     <p>Loading user dashboard...</p>
   </div>
   ```

5. Then, the browser fetches users from the API and updates the DOM with React.

- This is CSR, because:
  - No posts are pre-rendered on the server.
  - All rendering happens in the client’s browser.

**Why CSR is the Right Choice Here**

- The user’s profile is private → No need for SEO or server-side pre-rendering.
- Data is dynamic → Changes per logged-in user.
- Reduces server load → Next.js just sends the shell, client does the rest.

# Static Site Generation

Static Site Generation (SSG) means that a page’s HTML is pre-rendered at build time (during deployment). The generated HTML, along with JSON data if needed, is then cached and served to every user.

- The server (or build process) creates the HTML ahead of time.
- The browser just loads the static HTML and hydrates it with React for interactivity.
- Data is fetched at build time, not per request.

In Next.js, SSG is used when:

1. Content doesn’t change often.
2. SEO matters (pages are fully rendered upfront).
3. You want very fast load times (served from CDN).
4. You can tolerate waiting until the `next build` to see content updates.

## How SSG Works

1. During the build (`next build`), Next.js runs `getStaticProps` (and optionally `getStaticPaths`).

2. Pages are converted into static HTML + JSON.

3. User requests the page → HTML is instantly served (no server computation).

4. React hydrates the static HTML → makes the page interactive.

## Best use cases for SSG

1. Marketing sites / blogs

    - Example: Blog posts, documentation pages.
    - SEO important, content not updated frequently.

2. E-commerce product listings

    - Example: Product catalog pages with rarely changing data.

3. Landing pages

    - Example: Homepages, feature pages, static about pages.

4. Docs / Knowledge base

    - Example: Developer docs, help centers.

5. Publicly cached data

    - Example: News sites that rebuild periodically (with Incremental Static Regeneration).

**Advantages**

- Super fast (served from CDN, no server computation).
- SEO-friendly (full HTML delivered upfront).
- Scales well (static files, no database calls).
- Can use Incremental Static Regeneration (ISR) to update content after build.

**Disadvantages**

- Content is only as fresh as the last build (unless ISR is used).
- Build times grow with large numbers of pages.
- Not suitable for highly personalized content.
- Requires redeploy (or ISR) to reflect new data.

## Data Fetching in SSG

- Use `getStaticProps` → Runs at build time.
- Use `getStaticPaths` (for dynamic routes) → Tells Next.js which paths to pre-generate.
- Data is embedded into the HTML/JSON and reused on every request.

This is different from CSR (data fetched in browser after load) and SSR (data fetched at request time).

## How to use SSG

In Next.js, define `getStaticProps` (and optionally `getStaticPaths`) in your page component.

**Example**
```tsx
// pages/posts/[id].tsx

import { GetStaticProps, GetStaticPaths } from "next";

type Post = {
  id: string;
  title: string;
  body: string;
};

export default function PostPage({ post }: { post: Post }) {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p className="mt-4">{post.body}</p>
    </div>
  );
}

// Fetch all possible paths at build time
export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await res.json();

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: false };
};

// Fetch data for each page at build time
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params?.id}`
  );
  const post: Post = await res.json();

  return {
    props: { post },
    revalidate: 60, // ISR: Regenerate every 60 seconds
  };
};
```

1. `getStaticPaths` → Defines which post pages should be generated.
2. `getStaticProps` → Fetches data for each page at build time.
3. Pages are pre-built as static HTML + JSON.
4. `revalidate: 60` → Enables ISR (page will regenerate every 60s when requested).

**Why SSG is the Right Choice Here**

- Blog posts and product pages don’t change per user.
- SEO matters (content should be indexed).
- Pages load super fast (served from CDN).
- Updates are infrequent, so build time or ISR is acceptable.

# Incremental Static Regeneration

Normally in Static Site Generation (SSG), all pages are pre-rendered at build time.
But this creates a problem:

- If your data changes frequently (like blog posts, product prices, news articles), the static pages become outdated unless you rebuild the whole app.

ISR solves this by allowing you to update static pages in the background without rebuilding the entire site.

With ISR:

- Pages are generated once at build time (like SSG).
- After deployment, if the data changes, the pages can be incrementally regenerated on the server.
- Users see cached (old) pages until regeneration is done in the background, then the new static version replaces it.

## How ISR Works in Next.js

ISR uses the `revalidate` property inside `getStaticProps`.

- `revalidate: N` means:

    - The page is valid for `N` seconds.
    - After `N` seconds, the next user request triggers regeneration of the page in the background.
    - While regeneration happens, users still see the old page (no downtime).
    - Once regeneration completes, the new page replaces the old one for future users.

## How to Use ISR
`pages/blog/[id].js`

```tsx
import { useRouter } from "next/router";

export async function getStaticPaths() {
  // Pretend we fetch blog IDs from an API
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
    .then(res => res.json());

  const paths = posts.map(post => ({
    params: { id: post.id.toString() }
  }));

  return {
    paths,
    fallback: "blocking", // On-demand ISR for non-prebuilt paths
  };
}

export async function getStaticProps({ params }) {
  const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    .then(res => res.json());

  return {
    props: { post },
    revalidate: 10, // Regenerate page every 10 seconds
  };
}

export default function BlogPost({ post }) {
  const router = useRouter();

  // Show loading state if fallback page is loading
  if (router.isFallback) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <small>Last updated: {new Date().toLocaleTimeString()}</small>
    </div>
  );
}
```
1. `getStaticPaths`
- Pre-generates a few blog pages at build time (`/blog/1`, `/blog/2`, ...).
- Other blog pages use fallback + ISR to generate on-demand.
2. `getStaticProps` with `revalidate: 10`
- The page is cached and served for 10 seconds.
- After 10 seconds, the next request triggers regeneration in the background.
- While regenerating, users still see the old version.
- When done, the new version replaces the old one.
3. User Experience
- Fast loading (static pages).
- Always relatively fresh data without rebuilding the whole site.

## When to Use ISR

**Good for:**

- Blogs, news sites, product listings, documentation
- Data that changes often but not on every request
- Apps where rebuilding the whole site is slow or expensive

**Not ideal for:**

- Real-time data (stock prices, chat apps, dashboards → use SSR or CSR instead).

# Server-Side Rendering

Server-Side Rendering (SSR) means that the HTML for a page is generated on each request at runtime on the server. The server fetches the data, renders the React components into HTML, and then sends the fully rendered page to the client.

- The client receives a ready-to-view HTML page.
- After the initial render, React hydrates the page and takes over for interactivity.
- Every request triggers server-side data fetching and rendering.

In Next.js, SSR is used when:

1. You need dynamic content that changes per request.
2. SEO is important (search engines see the full HTML).
3. You can’t pre-render at build time (data changes too often).
4. You want fresh data on every page load.

## How SSR Works

1. User requests a page.

2. Next.js runs `getServerSideProps` on the server at request time.

3. Server fetches data → generates HTML.

4. Server sends HTML to browser → user sees fully rendered page.

5. React hydrates → adds interactivity.

## Best use cases for SSR

1. Dynamic, real-time content

    - Example: Stock prices, sports scores, live auctions.

2. SEO-sensitive pages with changing data

    - Example: News sites, event listings.

3. Personalized pages

    - Example: User-specific dashboards that must be indexed.

4. Authenticated pages

    - Example: Profile pages, order histories (when SEO is still needed).

**Advantages**

- Always fresh data (fetched at request time).
- SEO-friendly (full HTML delivered).
- Supports personalization (different users → different content).
- No rebuilds needed for data changes.

**Disadvantages**

- Slower response than SSG (server must fetch + render each request).
- Higher server load (compute required per request).
- Not as fast as CDN-served static files.
- Scaling requires more server resources.

## Data Fetching in SSR

- Use `getServerSideProps` → Runs on every request.
- Data is fetched at runtime → passed to the page as props.
- Unlike SSG, nothing is pre-built at build time.

## How to use SSR

In Next.js, define `getServerSideProps` in your page component.

**Example**
```tsx
// pages/profile.tsx

import { GetServerSideProps } from "next";

type User = {
  id: number;
  name: string;
  email: string;
};

export default function Profile({ user }: { user: User }) {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Server-Side Rendered Profile</h1>
      <p>
        <strong>ID:</strong> {user.id}
      </p>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const user: User = await res.json();

  return {
    props: { user }, // Sent to the component
  };
};
```

1. `getServerSideProps` → Runs on every request.
2. Server fetches the latest user data.
3. Page is rendered into HTML on the server.
4. User immediately sees a fully rendered profile page.

**Why SSR is the Right Choice Here**

- Profile data changes often → Needs fresh fetch each time.
- SEO matters → Profile pages should be indexed.
- Server can fetch + render the data on demand.
- Unlike CSR, the user doesn’t see a loading spinner first.

# Router

## `pages` Roter

The `pages` directory plays a crucial role in defining the structure of the application.

- File-based routing → Each file in `pages/` automatically becomes a route.
- Client Components by default (unlike `app/`, which defaults to Server Components).
- Data fetching with special functions (`getStaticProps`, `getServerSideProps`, `getStaticPaths`).
- Custom `_app.js` and `_document.js` for layout & document-level configuration.
- API Routes → Can be placed inside `pages/api/`.

### Folder Structure
- Each file inside `pages/` represents a route, and its default export is rendered as the page.
- Supports Client Components by default (unlike `app/` which defaults to Server Components).
- Uses special files (`_app.tsx`, `_document.tsx`, `_error.tsx`, `404.tsx`) for global layouts, document structure, and error handling.

| File/Folder      | Purpose                                                           |
| ---------------- | ----------------------------------------------------------------- |
| `index.tsx`      | Root route (`/`).                                                 |
| `about.tsx`      | Static route (`/about`).                                          |
| `[id].tsx`       | Dynamic route (e.g., `/blog/123`).                                |
| `[...slug].tsx`  | Catch-all route (`/docs/intro/getting-started`).                  |
| `_app.tsx`       | Wraps all pages (global layout, providers, styles).               |
| `_document.tsx`  | Customize HTML `<html>` and `<body>` (meta, lang, preload links). |
| `_error.tsx`     | Custom error page.                                                |
| `404.tsx`        | Custom 404 page.                                                  |
| `pages/api/*.ts` | API endpoints (serverless functions).                             |

### Routing

- Static route → `pages/about.tsx` → `/about`
- Dynamic route → `pages/blog/[id].tsx` → `/blog/123`
- Catch-all route → `pages/docs/[...slug].tsx` → `/docs/intro/getting-started`

**Example:**

```
my-next-app/
│── .next/                        # Auto-generated build output
│── node_modules/                 # Dependencies
│── public/                       # Static assets (served from /)
│   ├── favicon.ico
│   ├── images/
│   └── robots.txt
│
│── src/                          # Source code (recommended structure)
│   ├── pages/                    # Next.js Pages Router
│   │   ├── index.tsx             # Home page (route: /)
│   │   ├── about.tsx             # Example route (route: /about)
│   │   ├── blog/                 # Nested routes
│   │   │   ├── index.tsx         # Blog listing (route: /blog)
│   │   │   └── [id].tsx          # Dynamic blog route (route: /blog/123)
│   │   ├── api/                  # API routes (serverless functions)
│   │   │   └── hello.ts          # API endpoint (route: /api/hello)
│   │   ├── _app.tsx              # Custom App component (global layout/providers)
│   │   ├── _document.tsx         # Custom Document (HTML structure, lang, meta)
│   │   ├── _error.tsx            # Custom error page (fallback errors)
│   │   └── 404.tsx               # Custom 404 page
│   │
│   ├── components/               # Reusable UI components
│   │   ├── ui/                   # Generic UI elements (buttons, cards, etc.)
│   │   │   └── Button.tsx
│   │   ├── layout/               # Layout-specific components
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   └── shared/               # Reusable feature components
│   │       └── LoadingSpinner.tsx
│   │
│   ├── features/                 # Feature-based modules
│   │   ├── auth/
│   │   │   ├── hooks/            # Auth-specific hooks
│   │   │   │   └── useAuth.ts
│   │   │   ├── types.ts          # Auth-specific types
│   │   │   └── AuthProvider.tsx
│   │   ├── products/
│   │   │   ├── ProductCard.tsx
│   │   │   ├── utils.ts
│   │   │   └── types.ts
│   │   └── users/
│   │       ├── UserCard.tsx
│   │       └── types.ts
│   │
│   ├── lib/                      # Helpers & utility functions
│   │   ├── fetcher.ts
│   │   └── constants.ts
│   │
│   ├── hooks/                    # Global reusable hooks
│   │   └── useMediaQuery.ts
│   │
│   ├── context/                  # Global React Contexts
│   │   └── ThemeContext.tsx
│   │
│   ├── types/                    # Centralized global types/interfaces
│   │   ├── api.ts                # API response/request types
│   │   ├── user.ts               # Shared user types
│   │   ├── product.ts            # Shared product types
│   │   └── index.d.ts            # Global ambient types (extends Window, etc.)
│   │
│   ├── styles/                   # Styles
│   │   ├── globals.css
│   │   ├── variables.css
│   │   └── tailwind.css
│   │
│   └── tests/                    # Unit & integration tests
│       ├── components/
│       └── features/
│
│── .eslintrc.json                # ESLint config
│── .gitignore                    # Git ignore rules
│── next.config.js                # Next.js config
│── package.json                   # Dependencies & scripts
│── postcss.config.js             # PostCSS config (Tailwind, etc.)
│── tailwind.config.js            # Tailwind config
│── tsconfig.json                 # TypeScript config
```


### Data Fetching

Unlike the App Router, you must use special functions for data fetching.

1. `getStaticProps` (SSG)

Runs at build time, generates static HTML.
```tsx
// pages/posts.tsx
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return { props: { posts } };
}

export default function Posts({ posts }: { posts: any[] }) {
  return (
    <ul>
      {posts.slice(0, 5).map((p) => (
        <li key={p.id}>{p.title}</li>
      ))}
    </ul>
  );
}
```
2. `getServerSideProps` (SSR)

Runs on every request (server-side).
```tsx
// pages/time.tsx
export async function getServerSideProps() {
  return { props: { time: new Date().toISOString() } };
}

export default function TimePage({ time }: { time: string }) {
  return <p>Server time: {time}</p>;
}
```
3. `getStaticPaths` (Dynamic SSG)

Required for dynamic static routes.
```tsx
// pages/blog/[id].tsx
export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post = await res.json();
  return { props: { post } };
}

export default function BlogPost({ post }: any) {
  return <h1>{post.title}</h1>;
}
```
4. Client-Side Fetching

Use `useEffect` + `useState`.
```tsx
// pages/client.tsx
import { useEffect, useState } from "react";

export default function ClientPage() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then(setData);
  }, []);

  return <p>{data?.message}</p>;
}
```
5. API Routes (Pages Router)

Defined inside `pages/api/`.
```tsx
// pages/api/hello.ts
export default function handler(req, res) {
  res.status(200).json({ message: "Hello from API" });
}
```
### Data Fetching

1. `getStaticProps` → Static Site Generation (SSG)

- Runs at build time.
- Pre-renders HTML + JSON.
- Best for content that doesn’t change often.
- Visiting `/static` will always show the same pre-rendered content until the site is rebuilt.

2. `getServerSideProps` → Server-Side Rendering (SSR)

- Runs on every request (Node.js server or Vercel Function).
- Fetches fresh data each time.
- Visiting `/server` always returns the latest time (fresh data per request).

3. `getStaticPaths` (with `getStaticProps`) → Dynamic SSG

- Used with dynamic routes (`[id].tsx`).
- Pre-renders specific paths.

4. `getInitialProps` (Legacy)

- Runs on both server and client (not recommended anymore).
- Still exists for compatibility, but usually replaced with `getStaticProps` or `getServerSideProps`.

5. CSR via `useEffect`
6. ISR via `revalidate`
### Special Files

1. `_app.js`

   - **Custom App Component:** Wraps all pages to maintain global styles, state, or layout.

     ```tsx
     import "../styles/globals.css";

     export default function MyApp({ Component, pageProps }) {
       return <Component {...pageProps} />;
     }
     ```

2. `_document.js`

   - **Custom HTML Structure:** Used for modifying the <html> and <body> structure.

     ```tsx
     import { Html, Head, Main, NextScript } from "next/document";

     export default function Document() {
       return (
         <Html>
           <Head>
             <meta name="description" content="My Next.js App" />
           </Head>
           <body>
             <Main />
             <NextScript />
           </body>
         </Html>
       );
     }
     ```

### Components

In the Pages Router (unlike the App Router), everything is a client component by default.

- All pages/components run in the browser after hydration.
- Server-side work is done via:
  - `getServerSideProps` (SSR)
  - `getStaticProps` (SSG)
  - API routes (`pages/api/*`).
    So, the "Server Component" concept doesn’t exist here (that’s App Router only).
    But, you can still execute server-side logic via the lifecycle methods.

#### Rendering Modes in pages/

Next.js `pages/` supports four rendering strategies:

1. Static Generation (SSG) → `getStaticProps`
2. Server-Side Rendering (SSR) → `getServerSideProps`
3. Client-Side Rendering (CSR) → Fetching data inside `useEffect` in the browser
4. Incremental Static Regeneration (ISR) → `getStaticProps` + `revalidate`

## `app` Router

The App Router (app/ directory) was introduced in Next.js 13 to provide:

- File-based routing (like Pages Router, but more powerful).
- Server Components by default (improves performance).
- Flexible data fetching with async/await.
- Layouts, templates, and parallel routes.

### Folder Structure

- Each folder inside `app/` represents a route, and a `page.js` (or `page.tsx`) file inside it is rendered as the page.
- Supports Server Components by default (unlike `pages/` which defaults to Client Components).
- Introduces layouts, loading, and error handling.

| File/Folder      | Purpose                                                      |
| ---------------- | ------------------------------------------------------------ |
| `page.tsx`       | Defines a route’s **UI** (like old `pages/` files).          |
| `layout.tsx`     | Shared UI (e.g., navbar, sidebar) that **wraps children**.   |
| `template.tsx`   | Like `layout`, but **recreates on navigation** (not cached). |
| `loading.tsx`    | Displays a fallback UI while the route or data is loading.   |
| `error.tsx`      | Error boundary for a specific route segment.                 |
| `not-found.tsx`  | Custom 404 for a specific segment.                           |
| `head.tsx`       | Define `<head>` metadata (title, meta tags, etc.).           |
| `route.ts`       | Define API routes (replaces `pages/api`).                    |
| `(folder)`       | **Grouping**, does not affect URL.                           |
| `[...]` / `[id]` | Dynamic routes (same as Pages Router).                       |

### Routing

- Static route → `app/about/page.tsx` → `/about`
- Dynamic route → `app/blog/[id]/page.tsx` → `/blog/123`
- Catch-all route → `app/docs/[...slug]/page.tsx` → `/docs/intro/getting-started`
- Route groups → `app/(marketing)/about/page.tsx` → URL is /about but logically grouped.
- Nested routes → Folders create nested segments

```
my-next-app/
│── .next/                        # Auto-generated build output
│── node_modules/                 # Dependencies
│── public/                       # Static assets (served from /)
│   ├── favicon.ico
│   ├── images/
│   └── robots.txt
│
│── src/                          # Source code (recommended structure)
│   ├── app/                      # Next.js App Router (v13+)
│   │   ├── layout.tsx            # Root layout (shared UI)
│   │   ├── page.tsx              # Home page
│   │   ├── about/                # Example route
│   │   │   └── page.tsx
│   │   ├── dashboard/            # Nested routes
│   │   │   ├── layout.tsx        # Dashboard layout
│   │   │   ├── page.tsx
│   │   │   └── settings/
│   │   │       └── page.tsx
│   │   └── api/                  # API routes (server functions)
│   │       └── hello/route.ts
│   │
│   ├── components/               # Reusable UI components
│   │   ├── ui/                   # Generic UI elements (buttons, cards, etc.)
│   │   │   └── Button.tsx
│   │   ├── layout/               # Layout-specific components
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   └── shared/               # Reusable feature components
│   │       └── LoadingSpinner.tsx
│   │
│   ├── features/                 # Feature-based modules
│   │   ├── auth/
│   │   │   ├── hooks/            # Auth-specific hooks
│   │   │   │   └── useAuth.ts
│   │   │   ├── types.ts          # Auth-specific types
│   │   │   └── AuthProvider.tsx
│   │   ├── products/
│   │   │   ├── ProductCard.tsx
│   │   │   ├── utils.ts
│   │   │   └── types.ts
│   │   └── users/
│   │       ├── UserCard.tsx
│   │       └── types.ts
│   │
│   ├── lib/                      # Helpers & utility functions
│   │   ├── fetcher.ts
│   │   └── constants.ts
│   │
│   ├── hooks/                    # Global reusable hooks
│   │   └── useMediaQuery.ts
│   │
│   ├── context/                  # Global React Contexts
│   │   └── ThemeContext.tsx
│   │
│   ├── types/                    # Centralized global types/interfaces
│   │   ├── api.ts                # API response/request types
│   │   ├── user.ts               # Shared user types
│   │   ├── product.ts            # Shared product types
│   │   └── index.d.ts            # Global ambient types (extends Window, etc.)
│   │
│   ├── styles/                   # Styles
│   │   ├── globals.css
│   │   ├── variables.css
│   │   └── tailwind.css
│   │
│   └── tests/                    # Unit & integration tests
│       ├── components/
│       └── features/
│
│── .eslintrc.json                # ESLint config
│── .gitignore                    # Git ignore rules
│── next.config.js                 # Next.js config
│── package.json                   # Dependencies & scripts
│── postcss.config.js              # PostCSS config (Tailwind, etc.)
│── tailwind.config.js             # Tailwind config
│── tsconfig.json                  # TypeScript config
```

### Data Fetching

In App Router, data fetching is built into Server Components (no need for `getStaticProps` / `getServerSideProps`).

1. Async Server Components (default)

- Just make your component `async` and fetch data with `await`.
- Runs on the server at request/build time.
```tsx
// app/posts/page.tsx
export default async function PostsPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.slice(0, 5).map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
```

2. `fetch` caching strategies

- `fetch(..., { cache: "force-cache" })` → Default (SSG-like, cached at build).
- `fetch(..., { cache: "no-store" })` → Always fresh (SSR-like).
- `fetch(..., { next: { revalidate: 60 } })` → ISR (regenerates every 60s).

3. Client Components

- Mark with `"use client"`.
- Use `useEffect`, `useState`, or client-only libraries.

```tsx
"use client";
import { useEffect, useState } from "react";

export default function ClientData() {
  const [time, setTime] = useState("");

  useEffect(() => {
    setTime(new Date().toLocaleTimeString());
  }, []);

  return <p>Client time: {time}</p>;
}
```

4. API Routes with `route.ts`

- Replace `pages/api`.
- Works like Express-style handlers.

```tsx
// app/api/hello/route.ts
export async function GET() {
  return Response.json({ message: "Hello from API" });
}
```
### Components

#### Server Components (default)

- Run only on the server (never shipped to client).
- Can fetch data directly (use `fetch`, DB queries).
- Great for performance — smaller JS bundle.

#### Client Components

- Marked with `"use client"`.
- Can use state, hooks, event handlers.
- Cannot fetch data with `await` at the top level (must use client-side fetching like `useEffect`).

#### Rendering

| Mode                        | Trigger                                   | Example                 | Equivalent (Pages Router)           |
| --------------------------- | ----------------------------------------- | ----------------------- | ----------------------------------- |
| **Static Rendering (SSG)**  | `fetch(..., { cache: "force-cache" })`    | Pre-rendered at build   | `getStaticProps`                    |
| **Dynamic Rendering (SSR)** | `fetch(..., { cache: "no-store" })`       | Fresh on every request  | `getServerSideProps`                |
| **ISR (Revalidation)**      | `fetch(..., { next: { revalidate: N } })` | Updates every N seconds | ISR (`getStaticProps + revalidate`) |
| **CSR**                     | `"use client"` + `useEffect` fetch        | Rendered on client only | CSR with hooks                      |


# Data Fetching

## Pages Directory

- Uses `getStaticProps`, `getServerSideProps`, and `getInitialProps` for data fetching.
- Data fetching happens outside the component and is passed as props.
- Supports Static Site Generation (SSG) and Server-Side Rendering (SSR).

1. **SSG:** Fetching data at build time (fast, great for SEO).
2. **SSR:** Fetching data on every request (dynamic data).
3. **CSR:** Interactive pages that fetch data after the initial render.

## App Directory

- Uses React Server Components (RSC) by default.
- Fetches data directly in components (no `getStaticProps` or `getServerSideProps`).
- Supports streaming and Suspense for better performance.
- Automatic caching and revalidation with `fetch()`.

1. **Server Side Fetching:** Fetching data in Server Components (fast, no extra client-side requests).
2. **Client Side Fetching:** When using React hooks


# API Routes

Next.js allows you to create serverless API routes inside the `pages/api/` directory. These routes act like backend endpoints (similar to Express routes) but are built into Next.js without needing an extra server.

## How it Works

- The file `pages/api/todos.ts` becomes available at: `http://localhost:3000/api/todos`
- When a request comes in:
  - If it's a GET request, it returns all todos.
  - If it's a POST request, it creates a new todo.
  - If it’s another HTTP method (like `PUT` or `DELETE`), it responds with 405 Method Not Allowed.

## Key Points

1. `pages/api/*` files are server-side only, never shipped to the client.
2. Each file maps to a route.

- `pages/api/todos.ts` → `/api/todos`
- `pages/api/users/[id].ts` → `/api/users/:id` (dynamic API route)

3. `req` = HTTP request (`req.method`, `req.body`, `req.query`).
4. `res` = HTTP response (`res.status()`, `res.json()`, `res.end()`).
5. Works great with frontend requests (e.g., using `fetch` from React components).

## Key Points of Mongodb connection

- Serverless functions can re-run often, so caching MongoDB connection avoids multiple connections.
- Always use `await dbConnect()` at the start of an API route before querying DB.

# Image Optimization

Optimized images reduce page load time, improving user experience and SEO.

## `<Image>` Component

It automatically optimizes images based on device size, format, and caching.

```tsx
<Image
  src="/example.jpg"
  alt="Example Image"
  width={500}
  height={300}
  quality={80} // Adjust image quality (default is 75)
  priority // Loads the image with high priority
/>
```

- Automatic lazy loading
- Responsive image handling
- Automatic WebP conversion
- Optimized caching
- Automatic width/height handling – Prevents layout shift (important for Core Web Vitals).
- CDN optimization – If deployed on Vercel, images are cached and served globally.

Instead of setting a fixed width and height, use `layout="responsive"` to make the image adjust dynamically.

```tsx
<Image
  src="/my-image.jpg"
  alt="Responsive Image"
  layout="responsive"
  width={16} // Aspect ratio
  height={9} // Aspect ratio
/>
```

## Use `fill` for Responsive Images

Instead of defining width and height, you can use layout="fill" (or fill in Next.js 13+) to make images responsive.

```tsx
<Image
  src="/example.jpg"
  alt="Responsive Image"
  fill
  style={{ objectFit: "cover" }}
/>
```

- Images automatically resize to their container
- Prevents layout shifts

## External Image Optimization

If images are hosted externally (CDN, API), Next.js allows defining allowed domains in `next.config.js`

```ts
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "example.com",
      },
    ],
  },
};
```

## Serve Next-Gen Formats

WebP and AVIF formats reduce file size while maintaining quality. Next.js automatically converts images.

```tsx
<Image
  src="/example.jpg"
  alt="Optimized Image"
  width={500}
  height={300}
  quality={80}
  formats={["image/webp", "image/avif"]} // Converts to WebP/AVIF
/>
```

- Smaller file sizes
- Better performance than PNG/JPG

## Use Blur Placeholder for Lazy-Loaded Images

Next.js allows showing a blurred version before the full image loads.

```tsx
<Image
  src="/example.jpg"
  alt="Blurred Image"
  width={500}
  height={300}
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQ..."
/>
```

## Automatic image optimization with lazy loading

### Automatic Image Optimization

When you use the `<Image>` component instead of a plain `<img>` tag:

1. Optimized Formats – Images are served in modern formats like WebP when supported.

2. Responsive Sizes – Automatically generates different sizes (`srcset`) for different devices.

3. On-Demand Resizing – Images are processed on the server and cached (CDN friendly).

4. Lazy Loading – Images below the viewport are not loaded until scrolled into view, reducing initial page load time.

### How Lazy Loading Works

- By default, Next.js `<Image>` uses `loading="lazy"` for any image that is not in the initial viewport.
- That means images below the fold will load only when needed, saving bandwidth.
- You can override this behavior with `priority={true}` (for critical images like logos or hero banners).

### Example of Lazy Loading with Automatic Image Optimization

```ts
// pages/index.js
import Image from "next/image";

export default function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Next.js Automatic Image Optimization</h1>

      {/* Priority image (eager loading for hero/above the fold) */}
      <Image
        src="/hero.jpg"
        alt="Hero banner"
        width={1200}
        height={600}
        priority
      />

      <p style={{ marginTop: "100vh" }}>
        Scroll down to load the next image (lazy loading in action) 👇
      </p>

      {/* Lazy loaded image (default) */}
      <Image
        src="/nature.jpg"
        alt="Beautiful landscape"
        width={800}
        height={500}
      />
    </div>
  );
}
```

1. `priority` → The hero image loads immediately (good for above-the-fold content).

2. Default behavior (lazy loading) → The second image (`nature.jpg`) won’t load until the user scrolls near it.

3. Optimization → Both images are:

- Resized based on device screen.
- Served in modern formats (like WebP if supported).
- Cached automatically.

### Advanced Options

`placeholder="blur"` → Show a blurry preview before the full image loads.

```ts
<Image
  src="/nature.jpg"
  alt="Landscape"
  width={800}
  height={500}
  placeholder="blur"
  blurDataURL="/nature-blur.jpg"
/>
```

`sizes` attribute → Define responsive rules for different screen widths.

```ts
<Image
  src="/nature.jpg"
  alt="Landscape"
  fill
  sizes="(max-width: 768px) 100vw, 800px"
/>
```

## Configuring external image

By default, Next.js <Image> only optimizes images stored locally in your project (`/public`).
If you want to use images hosted on external domains (e.g., a CDN, CMS, or API like Unsplash, Cloudinary, Strapi, Sanity), you must explicitly allow those domains in your Next.js config.

This is required because:

- It prevents abuse (e.g., optimizing someone else’s images without permission).
- Ensures Next.js knows which domains are trusted for optimization.

### Configuring External Image Domains

You configure allowed domains in `next.config.js` under the `images.domains` property.

```ts
// next.config.js
module.exports = {
  images: {
    domains: ["images.unsplash.com", "res.cloudinary.com"],
  },
};
```

- `images.unsplash.com` → lets you use Unsplash images.
- `res.cloudinary.com` → allows Cloudinary-hosted images.

**Explaination**

1. The src points to external URLs.
2. Next.js will:

- Fetch and cache the image on first request.
- Optimize and serve it in modern formats (WebP/AVIF).
- Generate responsive sizes automatically.

3. Because we added domains in `next.config.js`, Next.js trusts these sources.

### Advance Configuration

If your images come from multiple subdomains or APIs, you can use `remotePatterns` (more flexible than `domains`).

```ts
// next.config.js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "example.com",
        port: "",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "cdn.myapp.com",
        pathname: "/assets/**",
      },
    ],
  },
};
```

**Why This Matters**

Without this config, you’ll see an error like:

```bash
Invalid src prop (https://...) on `next/image`, hostname not configured under images in your `next.config.js`
```

Configuring domains makes your app secure, optimized, and production-ready.

# How Helps in SEO

## Rendering

In CSR content(html) is rendered on the browser, then javascript executes, then javascript render the component. Browser don't consider javascript for SEO, so during SEO browser have a empty html.

While in next.js pre-renders pages on the server before sending them to the browser, this ensures search engine can easily index the page content.

In CSR, data fetching response json, but in SSR data fetching response html.

# Styling

## Modules

CSS Modules allow you to write styles that are scoped locally to the component where they are imported. This avoids conflicts between class names and ensures styles do not unexpectedly affect other parts of your application. CSS Module files must have the `.module.css` extension.

1. Create a file `Button.module.css` inside the `styles` or `components` folder:

```tsx
.button {
  background-color: #0070f3;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}
```

2. Now, create a React component `Button.js` and import the CSS Module.

```tsx
// components/Button.js
import styles from "../styles/Button.module.css";

export default function Button({ label }) {
  return <button className={styles.button}>{label}</button>;
}
```

### What Happens Under the Hood?

- Next.js converts the class names into unique, locally scoped names like `Button_button__3fg6d`.
- This prevents class name conflicts across different components.
- The styles are automatically applied to the correct component.

## Global Styles

In Next.js, global styles apply to the entire application and are not scoped to individual components. The best way to include global styles is by importing a CSS file inside `pages/_app.js`.

This is useful for:

- Defining base styles (e.g., typography, colors, spacing).
- Applying styles to layout components (e.g., headers, footers).
- Importing third-party CSS libraries.

1. First, create a global stylesheet file `styles/globals.css` inside the `styles` directory.

```tsx
body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  color: #333;
  line-height: 1.6;
}
```

2. Import Global Styles in `_app.js`

Next.js only allows global styles to be imported inside `pages/_app.js`.

```tsx
// pages/_app.js
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
```

### How Global Styles Work in Next.js

- Next.js compiles and applies `globals.css` to every page.
- You cannot import global CSS inside a component (e.g., inside `Button.js`)—it must be inside `_app.js`.
- All elements that match global styles (like `button`, `h1`, etc.) will be affected across the entire application.

## Tailwind CSS

1. Install Tailwind CSS

   ```shell
   npm install -D tailwindcss postcss autoprefixer
   ```

2. Generate Tailwind Configuration Files

   ```shell
   npx tailwindcss init -p
   ```

3. Configure Tailwind

   Open `tailwind.config.js` and update the `content` section to include Next.js files:

   ```tsx
   // tailwind.config.js
   module.exports = {
     content: [
       "./pages/**/*.{js,ts,jsx,tsx}",
       "./components/**/*.{js,ts,jsx,tsx}",
     ],
     theme: {
       extend: {},
     },
     plugins: [],
   };
   ```

4. Import Tailwind CSS in `_app.js`

   ```css
   /* styles/globals.css */
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

## Styled Components

Both Styled-components and Emotion are popular libraries that allow you to write CSS-in-JS, meaning you style your components directly inside JavaScript/TypeScript files using template literals. This makes styles scoped, dynamic, and maintainable in component-based applications like Next.js.

**Why use CSS-in-JS in Next.js?**

- Scoped styles → No CSS class name collisions.
- Dynamic styling → Styles can depend on props, state, or theme values.
- SSR (Server-Side Rendering) → Works seamlessly with Next.js to deliver styled HTML on first load.
- Theme support → Easily apply a global design system (colors, typography, spacing).

### Using Styled-components

```bash
npm install styled-components
npm install --save-dev babel-plugin-styled-components
```

#### Setup for Next.js

Create a `.babelrc` (or extend `next.config.js`) to enable SSR-friendly styled-components:

```tson
{
  "presets": ["next/babel"],
  "plugins": ["styled-components"]
}
```

#### Example of Styled-components

```tsx
// pages/index.js
import styled from "styled-components";

const Button = styled.button`
  background: ${(props) => (props.primary ? "#0070f3" : "white")};
  color: ${(props) => (props.primary ? "white" : "#0070f3")};
  padding: 10px 20px;
  border: 2px solid #0070f3;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: ${(props) => (props.primary ? "#005bb5" : "#e6f0ff")};
  }
`;

export default function Home() {
  return (
    <div>
      <h1>Hello Styled-components</h1>
      <Button>Default</Button>
      <Button primary>Primary</Button>
    </div>
  );
}
```

- `styled.button` creates a styled version of `<button>`.
- Props (`primary`) are used to toggle styles dynamically.
- Styles are scoped to `Button`, so they won’t affect other components.

### Using Emotion

```bash
npm install @emotion/react @emotion/styled
```

Example of Emotion

```ts
// pages/index.js
/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const Button = styled.button`
  background: ${(props) => (props.primary ? "#0070f3" : "white")};
  color: ${(props) => (props.primary ? "white" : "#0070f3")};
  padding: 10px 20px;
  border: 2px solid #0070f3;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: ${(props) => (props.primary ? "#005bb5" : "#e6f0ff")};
  }
`;

// Inline CSS with css prop
const textStyle = css`
  font-size: 20px;
  color: #333;
`;

export default function Home() {
  return (
    <div>
      <h1 css={textStyle}>Hello Emotion</h1>
      <Button>Default</Button>
      <Button primary>Primary</Button>
    </div>
  );
}
```

- Similar to `styled-components`, but with extra flexibility.
- You can use `css` prop (`<h1 css={textStyle}>`) for inline styles.
- Works great with TypeScript and theming out of the box.

### Styled-components vs Emotion

| Feature            | Styled-components          | Emotion                                      |
| ------------------ | -------------------------- | -------------------------------------------- |
| **Popularity**     | Very popular, older        | Newer but also widely used                   |
| **Performance**    | Great but slightly heavier | Faster, more lightweight                     |
| **CSS Prop**       | ❌ No                      | ✅ Yes                                       |
| **SSR in Next.js** | Requires Babel plugin      | Works smoothly                               |
| **Ecosystem**      | Large, stable              | More flexible (especially with inline `css`) |

- Use Styled-components if you prefer a stable, widely adopted library with good documentation.
- Use Emotion if you want performance, flexibility, and css prop support.

# Authentication and Authorization

## `next-auth`

1. Install with `npm install next-auth`
2. Configure API Route

```ts
// pages/api/auth/[...nextauth].js
import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt", // session can be JWT or database
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.id = user.id;
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      return session;
    },
  },
});
```

3. Add Authentication Hooks

```ts
// components/AuthButtons.js
"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export default function AuthButtons() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div>
        <p>Signed in as {session.user.email}</p>
        <button onClick={() => signOut()}>Sign Out</button>
      </div>
    );
  }

  return (
    <div>
      <button onClick={() => signIn("github")}>Sign In with GitHub</button>
    </div>
  );
}
```

4. Protecting Pages - Server Side

```ts
// pages/dashboard.js
import { getSession } from "next-auth/react";

export default function Dashboard({ user }) {
  return <h1>Welcome {user.email} to your dashboard!</h1>;
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: { destination: "/", permanent: false },
    };
  }

  return { props: { user: session.user } };
}
```

- `getSession(context)` checks the session on the server.
- If no session → redirect to login.
- Ensures pages are protected server-side.

## JWT Authentication

### How JWT Authentication Works

1. User logs in → POST credentials to API route.
2. Server verifies credentials and signs a JWT.
3. Client stores the JWT (HttpOnly cookie or localStorage).
4. Client sends token in headers or cookies for protected routes.
5. Server verifies token on each request.

**Protect Server Side**

```ts
// pages/dashboard.js
import jwt from "jsonwebtoken";

export default function Dashboard({ user }) {
  return (
    <h1>
      Welcome {user.email}! Role: {user.role}
    </h1>
  );
}

export async function getServerSideProps({ req }) {
  const token = req.headers.cookie?.split("=")[1] || "";

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    return { props: { user } };
  } catch (err) {
    return {
      redirect: { destination: "/login", permanent: false },
    };
  }
}
```

## Protecting API Routes

### SSR Protection

Use `getServerSideProps` to check authentication before rendering the page.

```ts
// pages/dashboard.js
import { getSession } from "next-auth/react";

export default function Dashboard({ user }) {
  return <h1>Welcome {user.name}!</h1>;
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: { user: session.user },
  };
}
```

- SSR ensures the page is protected on the server.
- Unauthenticated users are redirected to the login page before the page loads.

### Client-Side Protection

Sometimes, you want to protect components rendered on the client (SPA behavior).

```ts
// components/ProtectedComponent.js
"use client";
import { useSession, signIn } from "next-auth/react";
import { useEffect } from "react";

export default function ProtectedComponent({ children }) {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      signIn(); // redirect to login
    }
  }, [status]);

  if (status === "loading") return <p>Loading...</p>;
  if (!session) return null;

  return <>{children}</>;
}
```

- Checks session client-side.
- If unauthenticated → redirects to login.
- Shows children only if user is logged in.

## Role-Based Access Control

Example with `next-auth`

```ts
callbacks: {
  async jwt({ token, user }) {
    if (user) token.role = user.role; // attach role to JWT
    return token;
  },
  async session({ session, token }) {
    session.user.role = token.role;
    return session;
  },
}
```

### Protecting SSR by Role

```ts
// pages/admin-dashboard.js
import { getSession } from "next-auth/react";

export default function AdminDashboard() {
  return <h1>Admin Dashboard - Only Admins Can See This</h1>;
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return { redirect: { destination: "/login", permanent: false } };
  }

  if (session.user.role !== "admin") {
    return { redirect: { destination: "/", permanent: false } };
  }

  return { props: {} };
}
```

- First checks if the user is logged in.
- Then checks if the user’s `role` is `admin`.
- Redirects unauthorized users.

### Protecting Client Side by Role

```ts
// components/AdminOnly.js
"use client";
import { useSession } from "next-auth/react";

export default function AdminOnly({ children }) {
  const { data: session } = useSession();

  if (!session || session.user.role !== "admin") return null;

  return <>{children}</>;
}
```

- Useful when rendering certain UI elements only for admins.
- Prevents accidental display of restricted content.

# Performance Optimization

## Lazy Loading

- Lazy loading (or dynamic importing) is a way to defer loading of non-critical code until it’s actually needed.
- Useful for:
  - Heavy components (charts, maps, editors, video players)
  - Rarely used UI parts (modals, sidebars)
  - Third-party libraries

### How Next.js Supports Lazy Loading

Next.js provides a built-in function `next/dynamic` to load components lazily.

```ts
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("../components/Chart"));
```

By default:

- `Chart` will not be included in the initial JavaScript bundle.
- It will be loaded only when rendered.
  `pages/dashboard.ts`

```ts
import dynamic from "next/dynamic";

// Lazy load the Chart component
const Chart = dynamic(() => import("../components/Chart"), {
  loading: () => <p>Loading chart...</p>, // Optional fallback
  ssr: false, // Disable server-side rendering for client-only libs
});

export default function Dashboard() {
  return (
    <div>
      <h1>Welcome to Dashboard</h1>
      <p>User Info: John Doe</p>

      {/* Chart loads only when this line is rendered */}
      <Chart />
    </div>
  );
}
```

1. The initial load only includes Dashboard’s basic UI (small bundle).
2. The `Chart` code is split into a separate bundle.
3. When the Dashboard renders `<Chart />`, Next.js dynamically fetches that bundle.
4. The user sees `"Loading chart..."` until the Chart is ready.

## Prefetching

- Prefetching means downloading resources (like code or data) for future navigation before the user explicitly requests them.
- This makes navigations faster because Next.js already has the JavaScript bundle and/or data ready.

### How Next.js Handles Prefetching

- By default, when you use the built-in `<Link>` component, Next.js prefetches the JS bundle for the linked page when it appears in the viewport.
- This is done using `<link rel="prefetch">`.

Result: The next page loads almost instantly when the user clicks.

**Prefetching Page Bundles**

```ts
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>

      {/* Next.js automatically prefetches About.js bundle */}
      <Link href="/about">Go to About</Link>
    </div>
  );
}
```

1. When `<Link>` is visible in the viewport, Next.js prefetches `about.js` in the background.

2. When the user clicks, navigation is instant—no waiting for network fetch.

**Prefetch Control**

- Prefetch is enabled by default in production (not in dev mode).
- You can disable it if you don’t want background prefetching:

```tsx
<Link href="/about" prefetch={false}>
  Go to About
</Link>
```

## Preloading

- While prefetching handles the JS bundle, preloading data means fetching server-side or client-side data ahead of time so it’s ready when needed.
- Useful for:
  - Pages that need API data
  - Avoiding loading spinners on navigation

### How to Preload Data in Next.js

There are multiple strategies depending on where the data lives:

1. Using `getStaticProps` with Link prefetch

- If a page uses Static Generation (`getStaticProps`), Next.js can also prefetch the JSON data along with the JS bundle.

`pages/blog/[id].js`

```tsx
export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post = await res.json();

  return { props: { post } };
}

export async function getStaticPaths() {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=5`
  );
  const posts = await res.json();

  return {
    paths: posts.map((p) => ({ params: { id: p.id.toString() } })),
    fallback: false,
  };
}

export default function BlogPost({ post }) {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
```

`pages/index.js`

```tsx
import Link from "next/link";

export default function Home({ posts }) {
  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {/* Prefetches both JS + JSON data */}
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );
  const posts = await res.json();
  return { props: { posts } };
}
```

- When `Home` renders, Next.js prefetches both:

1. `blog/[id].js` JS bundle
2. The JSON data file generated by `getStaticProps`

- Clicking the link loads the blog post without a network call.

2. Preloading Data with React Query / SWR

For client-side fetching, you can preload queries before rendering a component.

```tsx
import useSWR, { preload } from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function Dashboard() {
  // Preload the data
  preload("/api/user", fetcher);

  // When rendered, it instantly has cached data
  const { data, error } = useSWR("/api/user", fetcher);

  if (error) return <p>Error loading</p>;
  if (!data) return <p>Loading...</p>;

  return <div>Welcome, {data.name}!</div>;
}
```

- `preload()` fetches the data in advance.
- When `<Dashboard />` renders, SWR already has the data → no spinner.

3. Preloading Components with `next/dynamic`

- You can also preload heavy components before user action:

```tsx
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("../components/Chart"));

Chart.preload(); // Preloads the component

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      {/* Chart loads instantly since it was preloaded */}
      <Chart />
    </div>
  );
}
```

### Prefetching vs Preloading Data

| Feature                | Prefetching                                  | Preloading Data                             |
| ---------------------- | -------------------------------------------- | ------------------------------------------- |
| **What it loads**      | Page JS bundles (+ static JSON if available) | API data, components, or resources          |
| **When it happens**    | When link/component enters viewport          | When you explicitly trigger preload         |
| **Default in Next.js** | ✅ Enabled with `<Link>` in production       | ❌ Manual (SWR, React Query, preload())     |
| **Goal**               | Faster navigation to new page                | Faster rendering with ready data/components |

- Prefetching: Automatic with `<Link>` → speeds up page navigation.
- Preloading Data: Manual (via `getStaticProps`, SWR, or `preload`) → avoids loading spinners.
- Combine both for blazing-fast navigation:
  - Prefetch the page bundle + static data
  - Preload client-side queries or components

### Performance Challenges in SSR

- Every request triggers:

1. Server fetch → render React → send HTML + JSON → hydrate on client.

- Bottlenecks:
  - Expensive DB/API queries
  - Unnecessary recomputation
  - Blocking the event loop
- Slow SSR = high Time to First Byte (TTFB)

**Optimizations for SSR**

1. Cache responses (HTTP caching, CDN, or Next.js middleware).

2. Use Incremental Static Regeneration (ISR) if real-time freshness isn’t needed.

3. Stream HTML (React 18 SSR streaming in App Router).

4. Reduce server payload size (strip unused data).

5. Parallelize data fetching with `Promise.all`.

```tsx
export async function getServerSideProps() {
  // Parallel fetching
  const [headlines, weather] = await Promise.all([
    fetch("https://newsapi.org/v2/top-headlines?country=us").then((r) =>
      r.json()
    ),
    fetch("https://api.weatherapi.com/v1/current.json?q=New York").then((r) =>
      r.json()
    ),
  ]);

  return {
    props: { headlines, weather },
  };
}

export default function News({ headlines, weather }) {
  return (
    <div>
      <h1>Top Headlines</h1>
      <ul>
        {headlines.articles.map((a, i) => (
          <li key={i}>{a.title}</li>
        ))}
      </ul>

      <h2>Weather in New York: {weather.current.temp_c}°C</h2>
    </div>
  );
}
```

- `Promise.all` → avoids sequential fetches.
- Page served fresh per request.
- Can be paired with server/CDN caching to reduce load.

### Performance Challenges in CSR

- Slower first paint (empty HTML shell at start).
- Extra network requests after page load.
- Bad for SEO if search engines can’t wait for hydration.

**Optimizations for CSR**

1. Lazy-load non-critical components (`next/dynamic`).
2. Preload client data (SWR `preload`, React Query `prefetchQuery`).
3. Use Suspense (React 18 streaming + Suspense boundaries).
4. Cache data locally (SWR/React Query) to avoid refetching.
5. Split bundles so only critical JS loads first.

```ts
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Dashboard() {
  // SWR caches and reuses data
  const { data, error } = useSWR("/api/user", fetcher, {
    revalidateOnFocus: false,
    dedupingInterval: 10000, // Cache data for 10s
  });

  if (error) return <p>Error loading dashboard</p>;
  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <h1>Welcome, {data.name}</h1>
      <p>Account Balance: ${data.balance}</p>
    </div>
  );
}
```

- Uses SWR to cache API data.
- Prevents redundant fetches with `dedupingInterval`.
- Only user-specific data is fetched on client.

### When to Use SSR vs CSR (Performance Trade-offs)

| Feature           | Server-Side Rendering (SSR)  | Client-Side Rendering (CSR)      |
| ----------------- | ---------------------------- | -------------------------------- |
| **First Load**    | Faster (HTML pre-rendered)   | Slower (empty shell first)       |
| **SEO**           | ✅ Great for SEO             | ❌ Not SEO-friendly              |
| **Freshness**     | Always fresh                 | Depends on client fetch          |
| **Server Load**   | Higher (compute per request) | Lower (server just serves shell) |
| **Best Use Case** | Public pages, SEO content    | User-specific dashboards, apps   |

Next.js allows mixing SSR + CSR:

- Use SSR for initial render (SEO + fast paint).
- Use CSR for interactive updates.

```ts
import useSWR from "swr";

export async function getServerSideProps() {
  const res = await fetch("https://api.example.com/posts");
  const initialPosts = await res.json();
  return { props: { initialPosts } };
}

export default function Posts({ initialPosts }) {
  const { data } = useSWR(
    "/api/posts",
    (url) => fetch(url).then((r) => r.json()),
    {
      fallbackData: initialPosts,
      refreshInterval: 10000, // Keep data fresh
    }
  );

  return (
    <div>
      <h1>Latest Posts</h1>
      <ul>
        {data.map((p) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </div>
  );
}
```

- Page first renders with SSR (fast + SEO).
- SWR then hydrates with fresh data in background (CSR).
- The user sees fast + always up-to-date content.

## Optimizing Fonts

**Why Fonts Matter for Performance**

- Custom fonts can block text rendering → causing FOIT (Flash of Invisible Text) or FOUT (Flash of Unstyled Text).
- Fonts are often large and loaded from third-party CDNs (Google Fonts, etc.), which adds network latency.

**What `next/font` Does**

- Self-hosts fonts (no external CDN calls).
- Automatic font optimization (only loads used subsets/styles).
- Prevents CLS by injecting correct fallback fonts.
- Works with:
  - Google Fonts: `next/font/google`
  - Local fonts: `next/font/local`

```ts
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap", // Fallback text until font loads
});
```

- No extra network call to Google Fonts → fonts are bundled and served from your app.
- Automatic `font-display: swap` ensures fallback text is shown → improves perceived speed and avoids layout shift.

##

##

# Deployment

## Vercel

Handles serverless API routes, ISR (Incremental Static Regeneration), and Edge Functions out-of-the-box.

- Vercel installs dependencies (npm install)
- Builds Next.js (npm run build)
- Deploys:
  - Static pages (SSG) → served via CDN
  - API routes → deployed as serverless functions
  - Middleware → deployed as edge functions

## Environment Variables

- Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser.
- Variables without `NEXT_PUBLIC_` are server-only and never exposed client-side.

```env
NEXT_PUBLIC_API_URL=https://api.example.com    # accessible in browser
DATABASE_URL=postgres://user:pass@host:5432/db   # server-only
JWT_SECRET=mysecretkey                           # server-only
```

## Optimizing the build process

### What is `next build`?

`next build` is the Next.js build command that prepares your app for production. It performs:

1. Compiling JavaScript and TypeScript

2. Generating static assets for SSG pages

3. Creating server-side rendered (SSR) pages

4. Optimizing images, CSS, and other assets

5. Tree-shaking and minifying code for production

Optimizing this process ensures faster builds, smaller bundles, and better performance.

### Strategies to Optimize Next.js Build

#### Analyze Bundle Size

Large bundles slow down both build and runtime. Use Webpack bundle analyzer:

```ts
npm install @next/bundle-analyzer
```

`next.config.js`:

```ts
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({});
```

Run analysis:

```bash
ANALYZE=true next build
```

- Helps identify heavy dependencies.
- Allows code-splitting and dynamic imports for large components.

### Use Dynamic Imports

For large components or libraries, use dynamic imports:

```tsx
import dynamic from "next/dynamic";

const HeavyComponent = dynamic(() => import("../components/HeavyComponent"), {
  ssr: false, // optional: render only on client
});
```

- Reduces initial JS bundle size.
- Improves Time to Interactive (TTI).

### Cache Dependencies in CI/CD

In Vercel, Netlify, or GitHub Actions, caching `node_modules` or `.next/cache` speeds up builds.

GitHub Actions Example:

```yaml
- name: Cache node modules
  uses: actions/cache@v2
  with:
    path: ~/.npm
    key: ${{ runner.os }}-node-${{ hashFiles('package-lock.json') }}
```

### Enable SWC Minification

Next.js uses SWC compiler by default. Ensure minification is enabled:

```ts
// next.config.js
module.exports = {
  swcMinify: true,
};
```

- Faster than Terser
- Produces smaller JS bundles

### Static Generation Where Possible

- Use SSG (`getStaticProps`) instead of SSR (`getServerSideProps`) when data is mostly static.
- SSG allows pre-rendering at build time, reducing runtime server load.

```ts
export async function getStaticProps() {
  const res = await fetch("https://api.example.com/posts");
  const posts = await res.json();

  return { props: { posts }, revalidate: 60 }; // ISR
}
```

ISR updates pages incrementally without rebuilding the whole site.

# Internationalization

Next.js has built-in internationalization support (since v10) that allows you to configure multiple languages (locales) for your app without needing third-party routing libraries.

## Key Concepts

1. Locales – The languages you want to support (e.g., `en`, `fr`, `es`).
2. Default Locale – The fallback language when no locale is specified.
3. Locale Detection – Next.js can automatically detect a user’s preferred language from the browser settings.
4. Localized Routing – URLs are prefixed with the locale, e.g., `/about` → `/fr/about`.

- English: `https://example.com/en/about`
- French: `https://example.com/fr/about`

## Configuration of Internationalization

### 1. Configure `next.config.js`

You configure i18n inside your Next.js config file:

```ts
// next.config.ts
module.exports = {
  i18n: {
    // ✅ Supported languages
    locales: ["en", "fr", "es"],

    // ✅ Default language
    defaultLocale: "en",

    // ✅ Optional: detect browser locale (default = true)
    localeDetection: true,
  },
};
```

- `locales`: List of languages you want to support.
- `defaultLocale`: The fallback language if none is specified.
- `localeDetection`: If enabled, Next.js will redirect users based on their browser’s preferred language.

### 2. Using Localized Routing

Next.js automatically prefixes routes with the locale.

For example, if you have a page `pages/about.js`:

- `http://localhost:3000/en/about` → English
- `http://localhost:3000/fr/about` → French
- `http://localhost:3000/es/about` → Spanish

### 3. Switching Locales in Code

You can switch between locales using the Next.js router:

```ts
// pages/index.js
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const switchToFrench = () => {
    router.push("/", "/", { locale: "fr" });
  };

  return (
    <div>
      <h1>Current locale: {router.locale}</h1>
      <button onClick={switchToFrench}>Switch to French</button>
    </div>
  );
}
```

- `router.locale`: Current active locale.
- `router.locales`: All supported locales ([`"en"`, `"fr"`, `"es"`]).
- `router.defaultLocale`: The default locale (`"en"` in this case).
- `router.push(path, as, { locale })`: Navigate to a page with a specific locale.

### 4. Adding Translations

Next.js does not handle translations itself—you need to provide them. Common approaches:

- Store translations in JSON files.
- Use libraries like `next-i18next` or `react-intl`.

Example: Simple JSON-based translations

`/locales/en/common.json`

```tson
{
  "welcome": "Welcome to our website!"
}
```

`/locales/fr/common.json`

```tson
{
  "welcome": "Bienvenue sur notre site!"
}
```

`/components/Welcome.js`

```tsx
import { useRouter } from "next/router";
import en from "../locales/en/common.json";
import fr from "../locales/fr/common.json";

export default function Welcome() {
  const { locale } = useRouter();
  const t = locale === "fr" ? fr : en;

  return <h1>{t.welcome}</h1>;
}
```

## Localizing Pages

After you configure i18n in next.config.js, the next step is making your pages and components display localized content depending on the active locale.

Localization involves:

1. Detecting the current locale.
2. Loading the correct translations.
3. Rendering localized text, links, and UI.

### Key Concepts of Localizing Pages

1. Localized Routing – URLs are tied to the locale.

- Example: `/en/about` vs `/fr/about`.

2. Per-locale Content – Each locale can have different static props, translations, or even layouts.

3. Components Localization – Reusable components should display different translations depending on the active locale.

4. Data Fetching with Locales – `getStaticProps` and `getServerSideProps` receive a `locale` parameter.

### 1. Localizing Pages with getStaticProps

Next.js passes the `locale` to your data fetching functions (`getStaticProps` or `getServerSideProps`).
This allows you to load translations dynamically.

`pages/index.js`

```ts
import en from "../locales/en/home.json";
import fr from "../locales/fr/home.json";

export default function Home({ messages }) {
  return (
    <div>
      <h1>{messages.title}</h1>
      <p>{messages.description}</p>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  const translations = locale === "fr" ? fr : en;

  return {
    props: {
      messages: translations,
    },
  };
}
```

`/locales/en/home.json`

```tson
{
  "title": "Welcome!",
  "description": "This is our English homepage."
}
```

`/locales/fr/home.json`

```josn
{
  "title": "Bienvenue!",
  "description": "Ceci est notre page d'accueil en français."
}
```

- Next.js provides `locale` inside `getStaticProps`.
- Depending on the locale, you load the right translation JSON.
- The component renders text based on `props.messages`.

### 2. Localizing Reusable Components

Let’s create a Welcome component that works in all languages.

`components/Welcome.js`

```ts
import { useRouter } from "next/router";
import en from "../locales/en/common.json";
import fr from "../locales/fr/common.json";

export default function Welcome() {
  const { locale } = useRouter();
  const t = locale === "fr" ? fr : en;

  return <h2>{t.greeting}</h2>;
}
```

`/locales/en/common.json`

```tson
{
  "greeting": "Hello, user!"
}
```

`/locales/fr/common.json`

```tson
{
  "greeting": "Bonjour, utilisateur!"
}
```

Now you can reuse `<Welcome />` in multiple pages, and it will display text according to the active locale.

### 3. Localizing Links and Navigation

When linking between pages, you should preserve the locale.
Next.js `<Link>` automatically handles this.

```tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <Link href="/" locale="en">
        English
      </Link>{" "}
      |{" "}
      <Link href="/" locale="fr">
        Français
      </Link>
    </nav>
  );
}
```

- `locale="en"` → Forces navigation in English.
- If you omit `locale`, Next.js uses the current locale.

### 4. Localizing Dynamic Pages

Dynamic routes (`[id].js`) also support locales.
You can fetch localized content inside `getStaticPaths`.

```tsx
export async function getStaticPaths({ locales }) {
  const posts = [{ id: "hello" }, { id: "bonjour" }];

  const paths = [];
  for (const locale of locales) {
    posts.forEach((post) => {
      paths.push({ params: { id: post.id }, locale });
    });
  }

  return { paths, fallback: false };
}
```

This ensures localized paths like:

- `/en/blog/hello`
- `/fr/blog/bonjour`

## Managing Translations

Once you enable i18n in next.config.js, the next big task is managing your actual translations.
This includes:

1. Where to store translation files
2. How to load translations into pages/components
3. How to switch translations based on locale
4. Choosing between built-in/manual or external libraries (like `next-i18next`)

### Strategies for Managing Translations

#### 1. Manual JSON Files (Simple Approach)

- Store translations in `/locales/{lang}/{namespace}.json`.
- Load translations manually in your pages/components.
- Works well for small projects.

#### 2. Using a Library (Scalable Approach)

- Popular option: `next-i18next`
- Provides `t()` function, namespaces, and automatic JSON loading.
- Great for large, production-grade apps.

1. Organizing Translation Files

A common convention is:

```
/locales
  /en
    common.json
    home.json
  /fr
    common.json
    home.json
```

- `common.json` → Shared UI strings (navbar, footer, buttons).
- `home.json` → Page-specific translations.

2. Loading Translations Manually

`pages/index.js`

```tsx
import en from "../locales/en/home.json";
import fr from "../locales/fr/home.json";
import { useRouter } from "next/router";

export default function Home() {
  const { locale } = useRouter();
  const t = locale === "fr" ? fr : en;

  return (
    <div>
      <h1>{t.title}</h1>
      <p>{t.description}</p>
    </div>
  );
}
```

`/locales/en/home.json`

```tson
{
  "title": "Welcome to our website",
  "description": "This is the English version of the homepage."
}
```

`/locales/fr/home.json`

```tson
{
  "title": "Bienvenue sur notre site",
  "description": "Ceci est la version française de la page d'accueil."
}
```

- Detect locale using useRouter().locale.
- Select the correct translation file.
- Use keys (t`.title`, `t.description`) to render localized content.

3. Managing Shared Translations (e.g., Navbar, Footer)

Instead of duplicating strings across pages, use a `common.json`.

`components/Navbar.js`

```tsx
import { useRouter } from "next/router";
import en from "../locales/en/common.json";
import fr from "../locales/fr/common.json";

export default function Navbar() {
  const { locale } = useRouter();
  const t = locale === "fr" ? fr : en;

  return (
    <nav>
      <a href="/">{t.home}</a> | <a href="/about">{t.about}</a>
    </nav>
  );
}
```

`/locales/en/common.json`

```tson
{
  "home": "Home",
  "about": "About"
}
```

`/locales/fr/common.json`

```tson
{
  "home": "Accueil",
  "about": "À propos"
}
```

4. Switching Translations at Runtime

You can switch locale programmatically:

```tsx
import { useRouter } from "next/router";

export default function LanguageSwitcher() {
  const router = useRouter();

  const changeLanguage = (locale) => {
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <div>
      <button onClick={() => changeLanguage("en")}>English</button>
      <button onClick={() => changeLanguage("fr")}>Français</button>
    </div>
  );
}
```

This allows the user to dynamically switch languages.

5. Scaling with `next-i18next` (Optional but Recommended)

For large apps, manually importing translations everywhere is repetitive.
Instead, `next-i18next` provides:

- Automatic translation loading.
- `t()` function for accessing keys.
- Namespaces (`common`, `home`, etc.).

```tsx
import { useTranslation } from "next-i18next";

export default function Home() {
  const { t } = useTranslation("home");

  return (
    <div>
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>
    </div>
  );
}
```

# Advance Topics

## `_app.js`

- It is a special Next.js file used to initialize pages.
- It allows you to persist layout between page changes, keep state, and inject global styles.
- It wraps every page in your Next.js app.
- Without `_app.js`, Next.js provides a default one internally.
  By creating your own, you gain full control over how pages are rendered.

**Common Uses:**

1. Add global CSS (must be imported here).
2. Persist layouts (like Navbars, Footers).
3. Wrap pages with providers (e.g., Redux, Context API, Theme provider).
4. Custom page initialization logic.

```ts
// pages/_app.js
import "@/styles/globals.css"; // Global CSS
import Layout from "@/components/Layout"; // A shared layout component

// The Component prop is the active page being rendered
// pageProps are props preloaded by getInitialProps, getServerSideProps, etc.
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      {/* Every page will be wrapped with Layout */}
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
```

- `Component` → The actual page (e.g., `pages/index.js`, `pages/about.js`).
- `pageProps` → Props injected by Next.js data-fetching methods.
- `Layout` → Ensures the same navbar/footer across all pages.

## `_document.js`

- It is used to customize the HTML document structure that Next.js uses to render pages.
- Unlike `_app.js`, which handles the React tree, `_document.js` controls the HTML & `<head>` part of your app.
- This file only runs on the server-side (never in the browser).
- It’s useful for adding things like:
  - Custom `lang` attribute on `<html>`.
  - Adding global meta tags.
  - Adding external fonts, scripts, or analytics.
  - Setting up custom document structure.

```ts
// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";

export default function MyDocument() {
  return (
    <Html lang="en">
      <Head>
        {/* External fonts or analytics */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <meta
          name="description"
          content="My Next.js App with custom document"
        />
      </Head>
      <body>
        {/* Main content will be injected here */}
        <Main />
        {/* Next.js scripts will be injected here */}
        <NextScript />
      </body>
    </Html>
  );
}
```

- `<Html>` → The root HTML tag. You can set `lang`, `dir`, etc.
- `<Head>` → Used for meta tags, links, and external stylesheets.
- `<Main>` → Where Next.js renders your pages.
- `<NextScript>` → Injects Next.js scripts for hydration & client-side transitions.

## Differences Between `_app.js` and `_document.js`

| Feature    | `_app.js` (App Component)         | `_document.js` (Document)             |
| ---------- | --------------------------------- | ------------------------------------- |
| Runs on    | Client & Server                   | Server only                           |
| Controls   | Page rendering & layout           | HTML document structure               |
| Common use | Layouts, global styles, providers | Meta tags, fonts, `<html>` attributes |
| Lifecycle  | Per page navigation               | Only on initial page load             |

## Custom Server

By default, Next.js provides a built-in server (using Node.js) that handles:

- Routing
- API routes
- Static files
- SSR (server-side rendering)

But sometimes you need more control over the server, such as:

- Adding custom routes not handled by Next.js.
- Adding custom middleware (e.g., authentication, logging).
- Integrating with an existing backend (e.g., Express, Koa, Fastify).
- Setting up custom headers or proxies.
- For this, you can create a custom server instead of relying only on Next.js’s built-in one.

**Important Note (Next.js 13+)**

- In modern versions, Next.js recommends using Middleware, API routes, or Edge Functions instead of custom servers.
- But for self-hosted apps (not Vercel) or legacy apps, custom servers are still useful.

### Setting Up a Custom Server

- Remove `next start` (default production start).
- Use `next` as a request handler inside your custom server.

`server.ts`

```ts
const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler(); // Next.js request handler

app.prepare().then(() => {
  const server = express();

  // Example custom route
  server.get("/p/:id", (req, res) => {
    const actualPage = "/post";
    const queryParams = { id: req.params.id };
    app.render(req, res, actualPage, queryParams);
  });

  // API-like route handled by Express
  server.get("/hello", (req, res) => {
    res.send("Hello from custom server!");
  });

  // Default handler (all Next.js pages & static files)
  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log("🚀 Server running on http://localhost:3000");
  });
});
```

- `next({ dev })` → Initializes Next.js in dev or production mode.
- `app.prepare()` → Prepares Next.js to handle requests.
- `handle` → Next.js’s built-in request handler (used for normal pages/static files).
- `server.get('/p/:id')` → Custom Express route mapping `/p/:id` → Next.js `/post` page.
- `server.all('*')` → For all other routes, fall back to Next.js default handler.

`pages/post.js`

```ts
export default function Post({ id }) {
  return <h1>Post ID: {id}</h1>;
}

Post.getInitialProps = async ({ query }) => {
  return { id: query.id };
};
```

### When to Use Custom Server?

**Use it if you need:**

- Custom routing logic (rewrites, redirects, slugs).
- Middleware (auth, logging, analytics).
- Integration with Express/Koa backend APIs.

**Avoid it if:**

- You’re deploying to Vercel → Vercel does not support custom servers.
- You only need rewrites/redirects → Use `next.config.js` instead.

### Differences vs. Default Next.js Server

| Feature               | Default Server (`next start`) | Custom Server                      |
| --------------------- | ----------------------------- | ---------------------------------- |
| Routing               | Automatic (file-based)        | Manual + Next.js handler           |
| Middleware            | Not supported                 | Fully supported (Express/Koa etc.) |
| Vercel support        | ✅ Yes                        | ❌ No                              |
| Deployment complexity | Easy                          | Higher (manage yourself)           |

## Custom Server Configuration

- `next.config.js` is a configuration file at the root of your Next.js project.
- It allows you to customize Next.js’s default behavior without modifying the framework itself.
- Common use cases:
  - Adding environment variables
  - Configuring custom webpack settings
  - Enabling experimental features
  - Optimizing images, redirects, and rewrites
  - Setting internationalization (i18n)

Think of it as the central place to tweak how Next.js works.

```ts
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Enable React strict mode
  swcMinify: true, // Use SWC for faster builds
};

module.exports = nextConfig;
```

This enables React strict mode (catches potential problems) and SWC minification for faster builds.

### Common Custom Configurations

1. **\*Environment Variables:** You can define public and server-side environment variables.

```ts
const nextConfig = {
  env: {
    CUSTOM_API_URL: "https://api.example.com",
  },
};

module.exports = nextConfig;
```

- Accessible in your code: `console.log(process.env.CUSTOM_API_URL)`
- `env` variables are exposed to the browser too. For server-only secrets, use `.env.local`.

2. **Custom Webpack Config:** Modify Webpack to add loaders or plugins.

```ts
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Example: Add a rule for SVG imports
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = nextConfig;
```

This lets you import SVGs as React components:

```ts
import Logo from "@/public/logo.svg";
export default function Home() {
  return <Logo />;
}
```

3. **Redirects:** Define server-side redirects.

```ts
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/old-blog/:slug*",
        destination: "/new-blog/:slug*",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
```

Visiting `/old-blog/hello-world` → Redirects to `/new-blog/hello-world`. 4. **Rewrites:** Rewrites allow you to mask an API endpoint with a different URL.

```ts
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://external-api.com/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
```

Visiting `/api/users` → Internally fetches from `https://external-api.com/users`.

5. **Headers:** Set custom HTTP headers (e.g., security headers).

```ts
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
```

This applies headers to all routes.

6. **Image Optimization:** Control domains allowed for `<Image />`.

```ts
const nextConfig = {
  images: {
    domains: ["example.com", "cdn.example.org"],
  },
};

module.exports = nextConfig;
```

Lets you safely load images from external domains.

7. **Internationalization (i18n):** Enable multiple locales.

```ts
const nextConfig = {
  i18n: {
    locales: ["en", "fr", "de"],
    defaultLocale: "en",
  },
};

module.exports = nextConfig;
```

Adds automatic locale-based routing:

- `/fr/about` → French version
- `/de/about` → German version

## Advanced middleware patterns

- Middleware in Next.js lets you run code before a request is completed.
- It sits between the request and the response, giving you a chance to:
  - Redirect
  - Rewrite
  - Add headers
  - Authenticate
  - Log requests

Middleware runs at the Edge Runtime, meaning it’s very fast and close to the user.

- File location: `middleware.js` (or `middleware.ts`) in the root of your project.
- Runs for every request (unless limited by `matcher`).

### Authentication & Role-Based Access

You can protect pages by checking authentication tokens or roles.

```ts
// middleware.js
import { NextResponse } from "next/server";

export function middleware(req) {
  const token = req.cookies.get("token")?.value;
  const url = req.nextUrl;

  // Redirect unauthenticated users
  if (!token && url.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Example role-based protection
  if (token === "admin" && url.pathname.startsWith("/user")) {
    return NextResponse.redirect(new URL("/admin", req.url));
  }

  return NextResponse.next();
}

// Apply only on selected paths
export const config = {
  matcher: ["/dashboard/:path*", "/user/:path*"],
};
```

### A/B Testing (Feature Flags)

Split traffic for experimentation.

```ts
// middleware.js
import { NextResponse } from "next/server";

export function middleware(req) {
  const url = req.nextUrl.clone();

  // Random A/B bucket
  const variant = Math.random() < 0.5 ? "A" : "B";

  if (url.pathname === "/experiment") {
    url.pathname = `/experiment-${variant}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/experiment"],
};
```

- Visitors to `/experiment` are randomly assigned to `/experiment-A` or `/experiment-B`.
- Useful for A/B testing or gradual rollouts.

### Geo-Location Based Routing

You can personalize experiences based on user location (using headers like `x-vercel-ip-country`).

```ts
// middleware.js
import { NextResponse } from "next/server";

export function middleware(req) {
  const country = req.geo?.country || "US";
  const url = req.nextUrl.clone();

  if (url.pathname === "/") {
    if (country === "FR") url.pathname = "/fr";
    else if (country === "DE") url.pathname = "/de";
    else url.pathname = "/en";

    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}
```

### Custom Headers for Security

You can set security headers globally.

```ts
// middleware.js
import { NextResponse } from "next/server";

export function middleware(req) {
  const res = NextResponse.next();

  res.headers.set("X-Frame-Options", "DENY");
  res.headers.set("X-Content-Type-Options", "nosniff");
  res.headers.set("X-XSS-Protection", "1; mode=block");

  return res;
}

export const config = {
  matcher: ["/((?!api).*)"], // Apply only to non-API routes
};
```

### Chained Middleware (Composability Pattern)

Organize middleware logic into reusable functions.

```ts
// middleware.js
import { NextResponse } from "next/server";

// Middleware utils
function withAuth(req) {
  const token = req.cookies.get("token")?.value;
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

function withLogger(req) {
  console.log(`[LOG] ${req.method} ${req.nextUrl.pathname}`);
}

// Main middleware
export function middleware(req) {
  return (
    withAuth(req) || // If withAuth returns a response, stop
    withLogger(req) ||
    NextResponse.next()
  );
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
```

- Each utility function acts like a mini-middleware.
- You can compose them together, making middleware cleaner.

### Key Things to Remember

1. Performance

- Middleware runs at the Edge → keep it lightweight (no heavy computation).

2. Execution Order

- If middleware returns a `Response` (redirect, rewrite, etc.), Next.js stops further processing.
- If it returns `NextResponse.next()`, request continues.

3. Scoping with `matcher`

- Always limit middleware to specific routes → avoids running it on every request.

4. Limitations

- No Node.js APIs (like `fs`).
- Runs in Edge runtime, so use Web APIs only.

# Testing

## Jest

Jest is a popular JavaScript testing framework maintained by Facebook. It is widely used in React and Next.js projects because it:

- Has built-in test runner and assertion library.
- Supports mocking functions, modules, and timers.
- Works seamlessly with TypeScript (with config).
- Provides fast test execution with watch mode.
- Integrates well with React Testing Library for component testing.

In Next.js, we mainly use Jest for:

- Unit tests → Testing individual functions, utilities, or React components in isolation.
- Integration tests → Testing multiple units together.
- (For end-to-end tests, tools like Playwright or Cypress are more common.)

**Setting up Jest in Next.js**

```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom @testing-library/user-event babel-jest identity-obj-proxy
```

- `jest` → test runner
- `@testing-library/react` → utilities to render and test React components
- `@testing-library/jest-dom` → custom DOM matchers like `toBeInTheDocument()`
- `@testing-library/user-event` → simulates user interactions (click, type, etc.)
- `babel-jest` → allows Jest to understand Next.js and modern JS syntax
- `identity-obj-proxy` → handles CSS module imports in tests

**Configure Jest:** Add `jest.config.js` in your project root:

```ts
const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./", // Path to Next.js app
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    // Handle CSS imports (with CSS modules)
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
    // Handle image imports
    "^.+\\.(png|jpg|jpeg|gif|webp|avif|svg)$":
      "<rootDir>/__mocks__/fileMock.js",
  },
  testEnvironment: "jest-environment-jsdom",
};

module.exports = createJestConfig(customJestConfig);
```

**Setup Jest DOM utilities (`jest.setup.js`):**

```ts
import "@testing-library/jest-dom";
```

**Mock static assets:** Create a `__mocks__/fileMock.js` file:

```ts
module.exports = "test-file-stub";
```

### Writing a Unit Test (Function Example)

Suppose we have a utility function in `utils/math.js`:

```ts
export function add(a, b) {
  return a + b;
}
```

Now, create a test file `utils/math.test.js`:

```ts
import { add } from "./math";

describe("add function", () => {
  test("adds two positive numbers", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("adds negative numbers", () => {
    expect(add(-2, -3)).toBe(-5);
  });
});
```

- `describe` groups related tests.
- `test` defines a single test case.
- `expect` and matchers (`toBe`, `toEqual`, etc.) assert the result.

### Writing a Unit Test (React Component Example)

Suppose we have a simple component in `components/Button.js`:

```tsx
export default function Button({ label, onClick }) {
  return <button onClick={onClick}>{label}</button>;
}
```

Now test it in `components/Button.test.js`:

```ts
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button component", () => {
  test("renders with correct label", () => {
    render(<Button label="Click Me" onClick={() => {}} />);
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  test("calls onClick when clicked", () => {
    const handleClick = jest.fn();
    render(<Button label="Click Me" onClick={handleClick} />);

    fireEvent.click(screen.getByText("Click Me"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

- `render` mounts the component in a virtual DOM.
- `screen.getByText` queries elements by their text.
- `toBeInTheDocument` comes from `@testing-library/jest-dom`.
- `jest.fn()` creates a mock function to check if it was called.
- `fireEvent.click` simulates a user click.

### Running Tests

Add this script to `package.json`:

```tson
"scripts": {
  "test": "jest"
}
```

Run tests:

```bash
npm test
```

Use watch mode:

```bash
npm test -- --watch
```

## React Testing Library

React Testing Library
is a lightweight testing utility that helps test React components by focusing on user interactions and behavior rather than implementation details.

Instead of checking internal state or class names, RTL encourages testing what the user sees and does:

- Rendering components
- Querying elements by text, role, label, etc.
- Simulating user actions (click, type, etc.)
- Making assertions about expected outcomes

This makes your tests more robust, readable, and closer to real-world usage.

### Setting up RTL in Next.js

If you already set up Jest (as we discussed earlier), you just need:

```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom @testing-library/user-event
```

- `@testing-library/react` → render and query components
- `@testing-library/jest-dom` → adds matchers like `toBeInTheDocument()`
- `@testing-library/user-event` → simulates realistic user actions (typing, clicking, tabbing, etc.)

In `jest.setup.js`:

```bash
import '@testing-library/jest-dom'
```

### Testing a Simple Component

Suppose we have `components/Greeting.js`:

```ts
export default function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}
```

Test: `components/Greeting.test.js`

```tsx
import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders greeting with the given name", () => {
    render(<Greeting name="Alice" />);
    expect(screen.getByText("Hello, Alice!")).toBeInTheDocument();
  });
});
```

- `render` mounts the component into a virtual DOM.
- `screen.getByText` queries by visible text (like a user would).
- `toBeInTheDocument` asserts the element is present.

### Using `user-event` for More Realistic Actions

`fireEvent` is fine, but `user-event` simulates real user behavior (typing, tabbing, pasting, etc.).

`components/LoginForm.js`:

```tsx
import { useState } from "react";

export default function LoginForm({ onSubmit }) {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(username);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
}
```

Test: `components/LoginForm.test.js`

```ts
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginForm from "./LoginForm";

describe("LoginForm component", () => {
  test("submits the entered username", async () => {
    const mockSubmit = jest.fn();
    render(<LoginForm onSubmit={mockSubmit} />);

    // Type into input
    await userEvent.type(screen.getByLabelText(/username/i), "Alice");

    // Click submit
    await userEvent.click(screen.getByRole("button", { name: /login/i }));

    // Assert callback was called
    expect(mockSubmit).toHaveBeenCalledWith("Alice");
    expect(mockSubmit).toHaveBeenCalledTimes(1);
  });
});
```

- `getByLabelText(/username/i)` → queries input by its label (better than getByText for forms).
- `userEvent.type` simulates typing text.
- `getByRole('button', { name: /login/i })` → queries button by role + name.
- `jest.fn()` mocks the submit handler so we can assert calls.

### Query Types in RTL

RTL provides different query methods depending on how a user would interact:

- `getBy...` → throws an error if not found (good for required elements).
- `queryBy...` → returns `null` if not found (good for optional elements).
- `findBy...` → async, waits for element to appear (useful for async components).
- Variants: `ByText`, `ByRole`, `ByLabelText`, `ByPlaceholderText`, etc.

```ts
// Required element
screen.getByRole("button", { name: /submit/i });

// Optional element
expect(screen.queryByText(/error/i)).toBeNull();

// Async element
expect(await screen.findByText(/welcome/i)).toBeInTheDocument();
```

## End-to-End Testing

E2E testing simulates real user workflows by running tests in a real browser. Instead of testing isolated functions or components, E2E tests cover the entire flow:

- Visiting pages in a Next.js app
- Filling out forms and submitting them
- Navigating between pages
- Checking authentication and protected routes
- Verifying API calls work with UI

### Cypress for E2E Testing

Cypress
is a JavaScript-based framework that runs tests in the browser with an interactive UI.

1. Install Cypress: `npm install --save-dev cypress`

2. Add Script in `package.json`

```tson
"scripts": {
  "e2e": "cypress open"
}
```

3. Open Cypress Test Runner: `npm run e2e`

- This launches Cypress’ UI where you can select and run tests.

4. Example: E2E Test for a Login Page

Suppose you have a login page at `/login`:

```tsx
export default function Login() {
  return (
    <form>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
}
```

Cypress test in `cypress/e2e/login.cy.js`:

```tsx
describe("Login Page", () => {
  it("allows a user to log in", () => {
    cy.visit("/login"); // open login page

    cy.get('input[placeholder="Username"]').type("alice");
    cy.get('input[placeholder="Password"]').type("mypassword");

    cy.get('button[type="submit"]').click();

    // Assert redirected or success message
    cy.url().should("include", "/dashboard");
  });
});
```

- `cy.visit('/login')` → opens the Next.js route in the browser.
- `cy.get(...)` → selects input fields by placeholder.
- `.type()` and `.click()` simulate user actions.
- `cy.url().should(...)` asserts navigation worked.

### Playwright for E2E Testing

Playwright is a Node.js framework from Microsoft that supports Chromium, Firefox, and WebKit. It’s more script-driven and works great in CI pipelines.

1. Install Playwright

```bash
npm install --save-dev @playwright/test
npx playwright install
```

2. Add Script in `package.json`

```tson
"scripts": {
  "e2e": "playwright test"
}
```

3. Example: E2E Test for a Login Page

Test file: `tests/login.spec.js`

```tsx
import { test, expect } from "@playwright/test";

test("user can log in", async ({ page }) => {
  await page.goto("http://localhost:3000/login");

  await page.fill('input[placeholder="Username"]', "alice");
  await page.fill('input[placeholder="Password"]', "mypassword");

  await page.click('button[type="submit"]');

  // Assert navigation
  await expect(page).toHaveURL(/.*dashboard/);
});
```

- `page.goto()` → navigates to the Next.js app running locally.
- `page.fill()` → types into inputs.
- `page.click()` → simulates button click.
- `expect(page).toHaveURL(...)` → verifies navigation happened.

### Cypress vs Playwright

| Feature       | Cypress                                            | Playwright                                   |
| ------------- | -------------------------------------------------- | -------------------------------------------- |
| **Setup**     | Easy, has GUI                                      | CLI-driven, script-based                     |
| **Browsers**  | Chromium only (plus Electron, WebKit experimental) | Chromium, Firefox, WebKit                    |
| **Speed**     | Slower in CI due to GUI overhead                   | Faster in CI, lightweight                    |
| **API Style** | More declarative (`cy.visit`, `cy.get`)            | More async/await (`page.goto`, `page.fill`)  |
| **Debugging** | Excellent GUI debugger                             | Trace viewer, snapshots                      |
| **Best For**  | Developers who want visual feedback                | CI/CD pipelines and cross-browser automation |

### Running E2E Tests in Next.js

Since Next.js apps need a server running:

1. Start the app in one terminal: `npm run dev`

2. Run Cypress or Playwright in another: `npm run e2e`

In CI/CD pipelines, you typically:

- Build and start Next.js (`npm run build && npm start`)
- Run tests against `http://localhost:3000`

## API routes Testing

Next.js allows you to write API routes inside the `pages/api` folder, for server-side logic such as fetching data, handling forms, or performing authentication.

- Testing these routes is essential to ensure:
- Correct HTTP responses (status codes, body content)
- Proper handling of errors
- Integration with databases or external APIs
- Server-side logic correctness (functions, validations, etc.)

Unlike React components, API routes are pure Node.js functions, so we can test them as unit tests or integration tests using Jest and supertest.

**Setting Up for API Testing**

1. Install dependencies

```bash
npm install --save-dev jest supertest
```

- `jest` → test runner
- `supertest` → helps test HTTP endpoints programmatically

2. Setup Jest: Make sure `jest.config.js` is ready (as in unit testing setup).

### Testing a Simple API Route

Suppose we have an API route: `pages/api/hello.js`

```ts
export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json({ message: "Hello World" });
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
```

Test: `__tests__/api/hello.test.js`

```ts
import handler from "../../pages/api/hello";
import { createMocks } from "node-mocks-http";

describe("/api/hello API Endpoint", () => {
  test("returns 200 and a message on GET", async () => {
    const { req, res } = createMocks({ method: "GET" });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(res._getJSONData()).toEqual({ message: "Hello World" });
  });

  test("returns 405 on non-GET", async () => {
    const { req, res } = createMocks({ method: "POST" });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(405);
    expect(res._getJSONData()).toEqual({ error: "Method Not Allowed" });
  });
});
```

- `node-mocks-http` or similar libraries allow us to mock `req` and `res` objects.
- `_getStatusCode()` returns the response status.
- `_getJSONData()` parses JSON response body.
- This test doesn’t need a running server, making it fast and isolated.

### Testing API Routes with `supertest`

If you want to test the API with a running server:

1. Install `supertest` if not already:

```bash
npm install --save-dev supertest
```

2. Suppose you have a Next.js custom server (using Express) or use `next-connect`:

`server.js`:

```ts
const express = require("express");
const next = require("next");
const helloHandler = require("./pages/api/hello").default;

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const server = express();

server.get("/api/hello", helloHandler);
server.all("*", (req, res) => handle(req, res));

module.exports = server;
```

Test: `__tests__/api/hello.supertest.test.js`

```ts
import request from "supertest";
import server from "../../server";

describe("GET /api/hello", () => {
  it("returns 200 and a JSON message", async () => {
    const res = await request(server).get("/api/hello");
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ message: "Hello World" });
  });
});
```

- `supertest` sends real HTTP requests to your server.
- Useful for integration testing, e.g., when testing middleware, authentication, or database interaction.
- The test mimics a real user request.

### Best Practices for API Testing

1. Separate logic from the handler

- Move core business logic to plain functions and call them in API routes.
- Makes unit testing easier.

```ts
// utils/greet.js
export function greet(name) {
  return `Hello ${name}`;
}
```

```ts
// pages/api/hello.js
import { greet } from "../../utils/greet";

export default function handler(req, res) {
  res.status(200).json({ message: greet("World") });
}
```

2. Use mocks for external services

- Databases, APIs, authentication can be mocked to isolate tests.

3. Test status codes and payloads

- Ensure correct HTTP status for all possible methods and errors.

4. Unit test first, E2E later

- Unit tests catch most logic errors quickly.
- E2E tests can verify full API flow.

# SEO and Metadata

## `<Head>` Component

Metadata provides extra information about a web page that is not visible on the page itself but is important for:

- SEO (Search Engine Optimization) → helps search engines understand your page.
- Social Sharing (Open Graph, Twitter Cards, etc.) → controls how your page appears on platforms like Facebook, LinkedIn, and Twitter.
- Browser behavior → controls page title, favicon, viewport scaling, etc.

### <Head> Component in Next.js

Next.js provides a special `<Head>` component from the `next/head` module.

It lets you add elements to the `<head>` section of an HTML document, such as:

- Page `<title>`
- `<meta>` tags (description, keywords, viewport, charset, etc.)
- Social media metadata (Open Graph, Twitter cards)
- Favicons, external fonts, or scripts

Unlike plain React where you might use a library like `react-helmet`, Next.js has `<Head>` built-in for better performance and SSR (server-side rendering).

### How <Head> Works

- Any `<Head>` component in your pages will merge into the document `<head>`.
- If multiple `<Head>` components exist (for example, in `_app.js` and in a page), they are combined.
- Duplicate `<meta>` tags (like `<title>`) get overridden by the last one defined.

```ts
// pages/index.js
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | My Next.js App</title>
        <meta
          name="description"
          content="This is the homepage of my Next.js app."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Welcome to My Next.js App</h1>
      <p>This is the homepage.</p>
    </>
  );
}
```

- `<title>` → Appears in the browser tab and search engine results.
- `<meta name="description">` → Helps search engines understand the content (used in search snippets).
- `<meta name="viewport">` → Makes the website responsive on mobile devices.
- `<meta charSet="UTF-8">` → Defines character encoding.
- `<link rel="icon">` → Adds a favicon.

SEO & Social Media Tags

```ts
// pages/about.js
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | My Next.js App</title>
        <meta
          name="description"
          content="Learn more about our company and team."
        />

        {/* Open Graph (Facebook, LinkedIn) */}
        <meta property="og:title" content="About Us | My Next.js App" />
        <meta
          property="og:description"
          content="Learn more about our company and team."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://myapp.com/about" />
        <meta property="og:image" content="https://myapp.com/og-image.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us | My Next.js App" />
        <meta
          name="twitter:description"
          content="Learn more about our company and team."
        />
        <meta name="twitter:image" content="https://myapp.com/og-image.jpg" />
      </Head>

      <h1>About Us</h1>
      <p>This page contains information about our company.</p>
    </>
  );
}
```

- Open Graph Tags (`og:`) → Control how the page looks when shared on Facebook, LinkedIn, etc.
- Twitter Cards → Similar but specific to Twitter.
- `og:image` and `twitter:image` → Show a preview image when shared.

### Best Practices

1. Set defaults in `_app.js` or a custom `<SEO>` component (e.g., default title, favicon, charset, viewport).

2. Override per page → Each page can define its own `<title>`, `<meta>`, and Open Graph data.

3. Avoid duplicate titles → Last one declared in `<Head>` takes priority.

4. Dynamic metadata → Use props or `getStaticProps` / `getServerSideProps` to generate metadata dynamically.

## Dynamic Metadata

Static metadata works fine for simple pages (like `/about`), but dynamic pages (like blogs, product pages, user profiles) need metadata that changes depending on the content.

- `/blog/hello-world` → Title: “Hello World | My Blog”
- `/blog/nextjs-seo` → Title: “Next.js SEO Guide | My Blog”

If metadata is not dynamic, every page might look the same to search engines and social media, hurting SEO.

### Dynamic Metadata in Pages Router

You can use `getStaticProps`, `getServerSideProps`, or route parameters to inject dynamic values into `<Head>`.

```ts
// pages/blog/[slug].js
import Head from "next/head";

// Dummy data
const posts = {
  "hello-world": {
    title: "Hello World",
    description: "This is the first blog post.",
    image: "https://example.com/hello-world.png",
  },
  "nextjs-seo": {
    title: "Next.js SEO Guide",
    description: "Learn how to improve SEO with Next.js.",
    image: "https://example.com/nextjs-seo.png",
  },
};

export default function BlogPost({ post }) {
  return (
    <>
      <Head>
        <title>{post.title} | My Blog</title>
        <meta name="description" content={post.description} />

        {/* Open Graph */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:image" content={post.image} />
        <meta property="og:type" content="article" />
      </Head>

      <h1>{post.title}</h1>
      <p>{post.description}</p>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: Object.keys(posts).map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      post: posts[params.slug],
    },
  };
}
```

- Metadata (`title`, `description`, `og:image`) is generated per post.
- `getStaticProps` fetches post data and passes it into `<Head>`.
- Each blog page has unique SEO-friendly metadata.

### Dynamic Metadata in App Router

In Next.js 13+, you don’t need `<Head>` anymore. Instead, you use the generateMetadata function in `page.js` or `layout.js`.

```ts
// app/blog/[slug]/page.js

// Dummy data (in real-world, fetch from DB or API)
const posts = {
  "hello-world": {
    title: "Hello World",
    description: "This is the first blog post.",
    image: "https://example.com/hello-world.png",
  },
  "nextjs-seo": {
    title: "Next.js SEO Guide",
    description: "Learn how to improve SEO with Next.js.",
    image: "https://example.com/nextjs-seo.png",
  },
};

// 1. Generate metadata dynamically
export async function generateMetadata({ params }) {
  const post = posts[params.slug];

  return {
    title: `${post.title} | My Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [post.image],
      type: "article",
      url: `https://myblog.com/blog/${params.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.image],
    },
  };
}

// 2. Page component
export default function BlogPost({ params }) {
  const post = posts[params.slug];

  return (
    <main>
      <h1>{post.title}</h1>
      <p>{post.description}</p>
    </main>
  );
}
```

- `generateMetadata()` runs server-side and returns metadata for that route.
- The metadata is automatically inserted into the `<head>` tag.
- Supports structured metadata like `openGraph` and `twitter` out of the box.
- No need to manually write `<meta>` tags.

### Best Practices for Dynamic Metadata

1. Always include a unique title + description per page.

2. Add Open Graph & Twitter metadata for better social media previews.

3. Use canonical URLs (`<link rel="canonical">`) to prevent duplicate content issues.

4. Leverage dynamic data from your database or CMS (e.g., WordPress, Sanity, Strapi).

5. Fallback defaults → Always provide default metadata (e.g., in `layout.js`) to avoid missing fields.

## Open Graph & Social Media Meta Tags

Why Do They Matter?

When you share a link on social media (Facebook, LinkedIn, Twitter, WhatsApp, etc.), those platforms use metadata in your HTML `<head>` to generate a preview card.

Without proper metadata:

- Your link may show only the URL (no title, no description, no image).
- Previews may look generic, hurting engagement.

With Open Graph (OG) and social media tags:

- Each page gets a rich preview with title, description, and image.
- You control how your site looks on different platforms.

### Open Graph Protocol

- Originally created by Facebook.
- Used by most platforms (LinkedIn, WhatsApp, Slack, etc.).
- Defines properties like `og:title`, `og:description`, `og:image`, and `og:url`.

Common Open Graph tags:

```html
<meta property="og:title" content="My Next.js Blog Post" />
<meta
  property="og:description"
  content="Learn how to use Open Graph in Next.js for SEO and social sharing."
/>
<meta property="og:type" content="article" />
<meta property="og:url" content="https://example.com/blog/nextjs-og" />
<meta property="og:image" content="https://example.com/images/nextjs-og.png" />
```

### Twitter Cards

- Twitter uses its own meta tags but falls back to Open Graph if missing.
- `twitter:card` defines the style (e.g., `summary`, `summary_large_image`).

Common Twitter tags:

```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="My Next.js Blog Post" />
<meta
  name="twitter:description"
  content="Learn how to use Open Graph in Next.js for SEO and social sharing."
/>
<meta name="twitter:image" content="https://example.com/images/nextjs-og.png" />
<meta name="twitter:site" content="@mytwitterhandle" />
```

### Best Practices for Social Media Metadata

1. Always include at least:

   - `og:title`
   - `og:description`
   - `og:image`
   - `og:url`
   - `twitter:card`

2. Use **absolute URLs** for `og:url` and `og:image` (social media bots can’t resolve relative paths).

3. Image recommendations:

   - Open Graph: **1200×630 px**
   - Twitter Card: **1200×628 px**
   - Under 5 MB, JPG or PNG preferred.

4. Test with:
   - [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
   - [Twitter Card Validator](https://cards-dev.twitter.com/validator)

# Error Handling

In Next.js, errors can occur both:

1. During server-side rendering (SSR) – when pages are generated on the server (via `getServerSideProps`, `getStaticProps`, or middleware).

2. During client-side rendering (CSR) – when React components execute in the browser.

## Handling Errors in Server-Side Rendering

When rendering pages on the server, errors can occur in data fetching or API calls. Next.js allows handling these inside: `getServerSideProps`, `getStaticProps`, `getStaticPaths`

```ts
// pages/user/[id].tsx
import { GetServerSideProps, GetServerSidePropsContext } from "next";

interface User {
  id: string;
  name: string;
  email: string;
}

interface UserPageProps {
  user: User;
}

export const getServerSideProps: GetServerSideProps<UserPageProps> = async (
  context: GetServerSidePropsContext
) => {
  try {
    const id = context.params?.id;
    if (!id || Array.isArray(id)) {
      return { notFound: true };
    }

    const res = await fetch(`https://api.example.com/users/${id}`);

    if (!res.ok) {
      // API returns 404
      return { notFound: true };
    }

    const data: User = await res.json();

    return {
      props: { user: data },
    };
  } catch (error) {
    console.error("Server Error:", error);

    // Redirect to custom error page
    return {
      redirect: {
        destination: "/500",
        permanent: false,
      },
    };
  }
};

const UserPage: React.FC<UserPageProps> = ({ user }) => {
  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserPage;
```

- If the API returns 404, we return `{ notFound: true }`, which shows Next.js’s built-in 404 page.
- If a server error occurs (e.g., database down), we redirect to a custom `/500` page.
- This ensures the app doesn’t break and users see a friendly error message.

## Handling Errors in Client-Side Rendering

Errors can occur inside React components due to:

- Invalid state updates
- Failed client-side API requests
- JavaScript runtime errors

To handle these gracefully, Next.js supports React Error Boundaries and custom `_error`.js.

`// components/ErrorBoundary.ts`

```ts
// components/ErrorBoundary.tsx
import React, { ReactNode, ErrorInfo } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export default class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    // Update state so the next render shows the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Client Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong on the client side.</h2>;
    }

    return this.props.children;
  }
}
```

`// pages/index.ts`

```ts
// pages/index.tsx
import React from "react";
import ErrorBoundary from "../components/ErrorBoundary";

const BuggyComponent: React.FC = () => {
  throw new Error("Unexpected client-side error!");
};

const Home: React.FC = () => {
  return (
    <ErrorBoundary>
      <h1>Welcome to Next.js</h1>
      <BuggyComponent />
    </ErrorBoundary>
  );
};

export default Home;
```

- If a client-side error happens (e.g., inside `BuggyComponent`), the Error Boundary catches it.
- Instead of crashing the whole app, it shows `"Something went wrong on the client side."`
- This improves UX and avoids blank screens.

## Custom Error

### Custom 404 Page (`pages/404.js`)

- Next.js serves a default static 404 page when a route is not found.
- To customize it, simply create `pages/404.js`. This page is statically generated at build time, ensuring fast performance

### Custom 500 Page (`pages/500.js`)

- Next.js provides a default static 500 error page for server-side failures.
- You can override it by creating a `pages/500.js`. Like the 404 page, it's statically generated with minimal overhead

### Using Custom `_error.ts` or `error.ts` (App Router)

- In the Pages Router (`pages/`), you can create a `pages/_error.ts` file.
- In the App Router (app/), you can create an `error.ts` file inside a route segment.

`pages/_error.ts`

```ts
// pages/_error.tsx
import { NextPageContext } from "next";

interface ErrorProps {
  statusCode: number;
}

const Error = ({ statusCode }: ErrorProps) => {
  return (
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on the server`
        : "An error occurred on the client"}
    </p>
  );
};

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res?.statusCode ?? err?.statusCode ?? 404;
  return { statusCode };
};

export default Error;
```

## Error Boundaries

In React, Error Boundaries are special components that catch JavaScript errors anywhere in their child component tree.
Instead of letting the entire React app crash, they display a fallback UI.

Error Boundaries:

- Catch rendering errors inside components.
- Do not catch errors from:
  - Event handlers
  - Asynchronous code (like `setTimeout`, `fetch`)
  - Server-side rendering (SSR)
  - Errors thrown in the error boundary itself

Since Next.js is built on React, you can use Error Boundaries to provide graceful fallback UI for parts of your application.

**Why Use Error Boundaries in Next.js?**

- Prevents the whole app from breaking due to one faulty component.
- Useful when dealing with 3rd-party libraries or dynamic UI pieces (charts, media players, etc.).
- Provides a better user experience by showing a custom error screen or fallback instead of a blank page.

### Create an ErrorBoundary Component

```ts
// components/ErrorBoundary.js
import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so next render shows fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error to monitoring service (e.g. Sentry, LogRocket)
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Render fallback UI
      return (
        <div className="p-6 text-center">
          <h2 className="text-red-600 text-xl font-bold">
            Something went wrong.
          </h2>
          <p>Please try again later.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
```

### Wrap Components with the Error Boundary

```ts
// pages/index.js
import ErrorBoundary from "../components/ErrorBoundary";
import BuggyComponent from "../components/BuggyComponent";

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to Next.js App</h1>

      {/* Wrap only risky components */}
      <ErrorBoundary>
        <BuggyComponent />
      </ErrorBoundary>
    </div>
  );
}
```

### Example of a Faulty Component

```ts
// components/BuggyComponent.js
export default function BuggyComponent() {
  // Simulate error
  throw new Error("Oops! This component crashed.");

  // Won’t be reached
  return <p>This will not render</p>;
}
```

### How it Works

1. When BuggyComponent throws an error:

- Normally, React would unmount the entire app.
- But since it’s wrapped in ErrorBoundary, the error is caught.

2. The ErrorBoundary sets hasError = true via getDerivedStateFromError.
3. The fallback UI is rendered:

```
Something went wrong.
Please try again later.
```

### Best Practices in Next.js

- Use granular error boundaries (wrap only risky parts, not the entire app).
- Log errors inside `componentDidCatch` to a monitoring service.
- Combine with Next.js error pages:
- `pages/_error.js` → handles SSR and runtime errors at the page level.
  Error Boundaries → handle client-side rendering errors in components.

# Proxying API Requests

When you have a Next.js frontend and a separate backend (e.g., running on `http://localhost:5000`), your frontend may need to make API calls to the backend.

**Problem**

- Next.js dev server runs at `http://localhost:3000`.
- Backend runs at `http://localhost:5000`.
- If frontend directly fetches `http://localhost:5000/api/...`, you run into CORS issues and must configure CORS on the backend.
- In production, the frontend and backend may even live under different domains (`frontend.com` vs `api.backend.com`).

**Solution → Proxy**

Proxying means:

- The frontend still calls something like `/api/...` from the same Next.js domain.
- The Next.js dev server forwards that request to the backend (`http://localhost:5000`).
- This avoids CORS issues and makes development simpler.

## Ways to Proxy in Next.js

There are two common ways:

1. Using `next.config.js` rewrites (recommended, built-in).
2. Creating a custom API route in Next.js that forwards requests (manual proxy).

### Proxy with `next.config.js`

In `next.config.js`:

```ts
// next.config.js
module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*", // when frontend requests /api/*
        destination: "http://localhost:5000/api/:path*", // forward to backend
      },
    ];
  },
};
```

Usage in Frontend

```ts
// pages/products.js
export default function ProductsPage({ products }) {
  return (
    <div>
      <h1>Products via Proxy</h1>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} - ${p.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  // Notice: We call /api/products (Next.js server)
  const res = await fetch("http://localhost:3000/api/products");
  const products = await res.json();

  return { props: { products } };
}
```

- Frontend calls `/api/products`.
- Next.js intercepts and proxies it to `http://localhost:5000/api/products`.
- No CORS required because the browser thinks it’s talking to the same origin (`localhost:3000`).

### Proxy with Next.js API Route (Custom Middleware)

Sometimes you want to add logic before proxying (e.g., authentication, caching, rate-limiting). In that case, you can create your own proxy endpoint in `/pages/api`.

```ts
// pages/api/proxy/[...path].js
export default async function handler(req, res) {
  const { path } = req.query;
  const backendURL = `http://localhost:5000/api/${path.join("/")}`;

  try {
    const backendRes = await fetch(backendURL, {
      method: req.method,
      headers: {
        "Content-Type": "application/json",
      },
      body: req.method !== "GET" ? JSON.stringify(req.body) : undefined,
    });

    const data = await backendRes.json();
    res.status(backendRes.status).json(data);
  } catch (error) {
    res.status(500).json({ error: "Proxy error", details: error.message });
  }
}
```

- Frontend calls `/api/proxy/products`.
- Next.js API route receives it and forwards the request to `http://localhost:5000/api/products`.
- You can modify the request/response (add headers, auth tokens, etc.).

### When to Use Which?

- `next.config.js rewrites` → Simple, lightweight, good for local dev to avoid CORS.
- API route proxy → More control, when you need to add logic (auth, caching, validation).

# Question

1. Slower time to first paint (TTFP).
2. No loading state → Content is available immediately.
3. Fast Time to First Paint (TTFP).
