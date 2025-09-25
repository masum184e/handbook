# Contents

- [Introduction](#introduction)
  - [Features](#key-features)
  - [Why Use Next.js](#why-use-nextjs)
  - [Comparison](#comparison)
- [Project Structure](#project-structure)
  - [Top-level Folders](#top-level-folders)
  - [Top-level Files](#top-level-files)
  - [Routing Files](#routing-files)
- [Client-Side Rendering](#client-side-rendering-1)
  - [How It Works](#how-csr-works)
  - [Use Cases](#best-use-cases-for-csr)
  - [Data Fetching](#data-fetching-in-csr)
  - [How to Use](#how-to-use-csr)
  - [CSR with SSR/SSG](#how-to-combine-csr-with-ssrssg)
- [Pre Rendering](#pre-rendering)
  - [How It Works](#how-pre-rendering-works)
- [Static Site Generation](#static-site-generation)
  - [How It Works](#how-ssg-works)
  - [Use Cases](#best-use-cases-for-ssg)
  - [Data Fetching](#data-fetching-in-ssg)
  - [How to Use](#how-to-use-ssg)
  - [`getStaticProps` Explained](#getstaticprops-explained)
  - [`getStaticPaths` Explained](#getstaticpaths-explained)
    - [`fallback` Options](#fallback-options)
    - [Alternatives of SSG](#alternatives-of-ssg)
- [Incremental Static Regeneration](#incremental-static-regeneration)
  - [How It Works](#how-isr-works)
  - [How to Use](#how-to-use-isr)
  - [When to Use](#when-to-use-isr)
- [Server-Side Rendering](#server-side-rendering)
  - [How It Works](#how-ssr-works)
  - [Use Cases](#best-use-cases-for-ssr)
  - [Data Fetching](#data-fetching-in-ssr)
  - [How to Use](#how-to-use-ssr)
- [Router](#router)
  - [`pages` Router](#pages-router)
    - [Folder Structure](#folder-structure)
    - [Routing](#routing)
    - [Data Fetching](#data-fetching)
    - [API Routes](#api-routes)
    - [Components](#components)
    - [Rendering Modes](#rendering-modes)
    - [Special Files](#special-files)
  - [`app` Router](#app-router)
    - [Folder Structure](#folder-structure-1)
    - [Routing](#routing-1)
    - [Data Fetching](#data-fetching-1)
    - [Components](#components-1)
  - [Catch-All Routes](#catch-all-routes)
- [Image Optimization](#image-optimization)
  - [`<Image>` Component](#image-component)
    - [Responsive Images](#responsive-images)
    - [Serve Next-Gen Formats](#serve-next-gen-formats)
    - [Blur Placeholder for Lazy-Loaded Images](#blur-placeholder-for-lazy-loaded-images)
  - [How Lazy Loading Works](#how-lazy-loading-works)
  - [Configuring External Image](#configuring-external-image)
    - [Configuring External Image Domains](#configuring-external-image-domains)
    - [Advance Configuration](#advance-configuration)
  - [Image Optimization With Lazy Loading](#image-optimization-with-lazy-loading)
- [Font Optimization](#font-optimization)
- [SEO and Metadata](#seo-and-metadata)
  - [`<Head>` Component](#head-component)
    - [How It Works](#how-it-works-1)
    - [Best Practices](#best-practices)
  - [Dynamic Metadata](#dynamic-metadata)
    - [In Pages Router](#dynamic-metadata-in-pages-router)
    - [In App Router](#dynamic-metadata-in-app-router)
    - [Best Practices](#best-practices-for-dynamic-metadata)
  - [Open Graph](#open-graph)
    - [Open Graph Protocol](#open-graph-protocol)
    - [Twiiter Cards](#twitter-cards)
    - [Best Practices](#best-practices-for-social-media-metadata)
- [Styling](#styling)
  - [Modules](#modules)
  - [Global Styles](#global-styles)
  - [Tailwind CSS](#tailwind-css)
  - [Styled Components](#styled-components)
    - [Using Styled-components](#using-styled-components)
    - [Using Emotion](#using-emotion)
    - [Styled-components vs Emotion](#styled-components-vs-emotion)
- [Authentication and Authorization](#authentication-and-authorization)
  - [`next-auth`](#next-auth)
    - [Configure Environment Variables](#configure-environment-variables)
    - [Configure API Route](#configure-api-route)
    - [Sign In with Credentials](#sign-in-with-credentials)
    - [Sign Up](#sign-up)
    - [Protect Client Components](#protect-client-components)
    - [Protect Server-Side Routes](#protect-server-side-routes)
  - [JWT Authentication](#jwt-authentication)
    - [How JWT Authentication Works](#how-jwt-authentication-works)
    - [Protecting Server-Side Routes](#protect-server-side-routes)
  - [Role-Based Access Control](#role-based-access-control)
    - [Adding Roles to JWT and Session](#adding-roles-to-jwt-and-session)
    - [Protecting Client-Side Components by Role](#protecting-client-side-components-by-role)
    - [Protecting Server-Side Routes by Role](#protecting-server-side-routes-by-role)
- [Middleware](#middleware)
  - [Features](#features-of-nextjs-middleware)
  - [Custom Logic](#custom-logic)
    - [Steps for Writing Middleware](#steps-for-writing-middleware)
    - [Custom Header Validation](#custom-header-validation)
    - [Time-Based Access Control](#time-based-access-control)
  - [Understanding `next.config.js`](#understanding-nextconfigjs)
    - [Key Points](#key-points)
    - [Middleware with Inline Matcher](#middleware-with-inline-matcher)
    - [Centralized Routing](#centralized-routing)
    - [Localization](#localization)
    - [Headers + Middleware](#headers--middleware)
- [Performance Optimization](#performance-optimization)
  - [Lazy Loading](#lazy-loading)
    - [How Next.js Supports Lazy Loading](#how-nextjs-supports-lazy-loading)
  - [Prefetching](#prefetching)
    - [How Next.js Handles Prefetching](#how-nextjs-handles-prefetching)
  - [Preloading](#preloading)
  - [Performance Challenges in SSR](#performance-challenges-in-ssr)
  - [Performance Challenges in CSR](#performance-challenges-in-csr)
- [Deployment](#deployment)
  - [Vercel](#vercel)
  - [Environment Variables](#environment-variables)
  - [Optimizing the build process](#optimizing-the-build-process)
    - [What is `next build`]()
    - [Strategies to Optimize Next.js Build]()
- [Internationalization](#internationalization)
  - [Configure i18n](#configure-i18n)
  - [Organize Translation Dictionaries](#organize-translation-dictionaries)
  - [Create a Translation Loader](#create-a-translation-loader)
  - [Define Locale-Specific Routes](#define-locale-specific-routes)
  - [Use Translations in Layout](#use-translations-in-layout)
  - [Example with Data Fetching](#example-with-data-fetching)
  - [How It Works](#how-internationalization-works)
- [Custom Server](#custom-server)
  - [Set Up Custom Server](#set-up-custom-server)
  - [Custom Server Configuration](#custom-server-configuration)
- [Testing](#testing)
  - [Utitlity Function Testing](#utility-function-testing)
  - [Component Testing](#component-testing)
  - [End-to-End Testing](#end-to-end-testing)
    - [Why Puppeteer](#why-puppeteer-for-e2e-testing)
    - [Setting up Puppeteer](#setting-up-puppeteer)
    - [Writing an E2E Test](#writing-an-e2e-test)
    - [NPM Configuration](#npm-configuration)
    - [Running E2E Tests](#running-e2e-tests)
  - [API routes Testing](#api-routes-testing)
    - [Testing Simple Routes](#testing-a-simple-api-route)
    - [Testing with `supertest`](#testing-api-routes-with-supertest)
    - [Best Practices](#best-practices-for-api-testing)
- [Error Handling](#error-handling)
  - [Custom Error Pages](#custom-error-pages)
    - [`error.tsx`](#errortsx)
    - [`not-found.tsx`](#not-foundtsx)
    - [`global-error.tsx`](#global-errortsx)
    - [`pages/_error.js`](#pages_errorjs)
    - [`pages/404.js`](#pages404js)
    - [`pages/500.js`](#pages500js)
  - [Error Boundaries](#error-boundaries)
    - [Route Level](#route-level-error-boundary)
    - [Global](#global-error-boundary)
    - [Custom Error Boundary](#custom-errorboundary-component)
  - [Errors in SSR](#errors-in-ssr)
  - [Errors in CSR](#errors-in-csr)
- [Proxying API Requests](#proxying-api-requests)
  - [Proxy with `next.config.js`](#proxy-with-nextconfigjs)
  - [Proxy with Next.js API Route](#proxy-with-nextjs-api-route-custom-middleware)
  - [When to Use Which](#when-to-use-which)

# Introduction

Next.js is a React framework that enables server-side rendering (SSR) and static site generation (SSG) for building fast and SEO-friendly web applications.

## Key Features

- **Hybrid Rendering (SSR + SSG)** – It allows both Server-Side Rendering (SSR) and Static Site Generation (SSG) for better performance and SEO.
- **Automatic Code Splitting** – It loads only the necessary JavaScript for each page, improving performance.
- **File-based Routing** – Each file in the `pages/` or `app/` directory automatically becomes a route.
- **Built-in API Routes** – You can create backend endpoints using `pages/api/` or `app/api`.
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
   - No need to install React Router; Next.js handles routing based on the `pages/` or `app/` folder structure.
4. **API Routes (Full Stack Capabilities)**
   - With `pages/api/` or `app/api/`, Next.js can handle backend logic without needing an external server.
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

# Client-Side Rendering

Client-Side Rendering (CSR) means that a page’s HTML is mostly empty on initial load, and the actual rendering happens in the browser using JavaScript.

- The server sends a minimal HTML file with a `<div id="__next"></div>` container.
- The browser downloads and executes the bundled React JavaScript code.
- The React code runs inside the user’s browser, fetches data (if needed), and renders components dynamically.
- The page loads slowly at first, but once everything is loaded, navigating between pages becomes very fast.

In Next.js, CSR is used when:

1. You want dynamic content that should be rendered after the page loads.
2. You don’t need SEO for that particular page (because search engines might not see the content immediately).
3. You fetch data inside `useEffect` or from client-side hooks instead of server-side functions.

## How CSR Works

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

## How to Use CSR

In Next.js, CSR means skipping server-side data fetching (`getServerSideProps`, `getStaticProps`) and instead fetching data inside the component with `useEffect`.

Steps:

1. Render a basic HTML shell from the server.

2. Inside the component, use React hooks (`useEffect`, `useState`) to fetch data.

3. Update the UI once the data arrives.

In App Router (Next.js 13+ with `app/` directory), mark components with `"use client"` if they rely on state, effects, or event listeners.

```tsx
// pages/users/profile.tsx
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

## How to Combine CSR with SSR/SSG

- Use SSR/SSG for the base page (`getServerSideProps` or `getStaticProps`).
- Use CSR (`useEffect` + `useState`) for parts of the page that need client-side fetching

**Example**

```tsx
"use client"; // For app directory in Next.js 13+, not needed in pages dir

import { useEffect, useState } from "react";

// ---------- Server-side Rendering ----------
export async function getServerSideProps(context) {
  const { id } = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();

  return {
    props: { post }, // passed to component as props
  };
}

// ---------- Page Component ----------
export default function BlogPost({ post }) {
  // CSR states for comments
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  // ---------- Client-side Rendering for Comments ----------
  useEffect(() => {
    async function fetchComments() {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${post.id}/comments`
      );
      const data = await res.json();
      setComments(data);
      setLoading(false);
    }

    fetchComments();
  }, [post.id]);

  return (
    <div>
      {/* SSR Content */}
      <h1>{post.title}</h1>
      <p>{post.body}</p>

      {/* CSR Content */}
      <h2>Comments</h2>
      {loading ? (
        <p>Loading comments...</p>
      ) : (
        <ul>
          {comments.slice(0, 3).map((comment) => (
            <li key={comment.id}>
              <strong>{comment.name}</strong>: {comment.body}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
```

# Pre Rendering

Server-Side Rendering (SSR) is a method where the server processes and renders the full HTML page before sending it to the browser. The browser only has to display the fully rendered content.

- Instead of sending an empty page, the server builds the page first and then sends the full HTML to the browser.
- The page loads quickly because the browser doesn’t have to wait for JavaScript to fetch the data.

Pre rendering can be done with:

1. Static Side Generation
2. Server Side Rendering

### How Pre Rendering Works

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

## Best Use Cases for SSG

- **Blogs / Marketing sites** → SEO-friendly, rarely changing content.
- **E-commerce product catalogs** → Products don’t change per user.
- **Landing pages** → Homepages, feature pages.
- **Documentation / Knowledge bases** → Developer docs, help centers.
- **News sites / public data** → Can use ISR to rebuild periodically.

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

## How to Use SSG

In Next.js, define `getStaticProps` (and optionally `getStaticPaths`) in your page component.

```tsx
// pages/posts/[id].tsx
import { GetStaticProps, GetStaticPaths, NextPage } from "next";

type Post = {
  id: string;
  title: string;
  body: string;
};

interface PostPageProps {
  post: Post;
}

const PostPage: NextPage<PostPageProps> = ({ post }) => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p className="mt-4">{post.body}</p>
    </div>
  );
};

export default PostPage;

// Fetch all possible paths at build time
export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await res.json();

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: false }; // fallback options explained below
};

// Fetch data for each page at build time
export const getStaticProps: GetStaticProps<PostPageProps> = async ({
  params,
}) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params?.id}`
  );
  const post: Post = await res.json();

  return {
    props: { post },
    revalidate: 60, // ISR: Regenerate page every 60 seconds
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

## `getStaticProps` Explained

- Runs at build time (server-side only).
- Fetches data for a page and passes it as props.
- Only works in page components, not regular components.

### Step-by-step:

1. Create a page component.
2. Export async `function getStaticProps()`.
3. Fetch data from API, database, or filesystem.
4. Return `{ props: { ... } }`.
5. Next.js pre-renders the page as static HTML.
6. On client load, React hydrates the page for interactivity.

## `getStaticPaths` Explained

- Used with dynamic routes (e.g., `[id].tsx`).
- Tells Next.js which paths to pre-render.

### Step-by-step:

1. Create a dynamic route (`[id].tsx`).
2. Export `async function getStaticPaths()`.
3. Fetch all dynamic entries (e.g., posts).
4. Return `{ paths: [...], fallback: ... }`.
5. Next.js pre-renders those paths with `getStaticProps`.

### `fallback` Options

| fallback value | Behavior                                                                                                                                             |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `false`        | Only pre-rendered paths exist. Any other path → 404.                                                                                                 |
| `true`         | New paths are generated on-demand. The client sees a **loading state** (`router.isFallback`) while the page is being built.                          |
| `"blocking"`   | New paths are generated on-demand **server-side before sending HTML**. The user **does not see a loading state**; they wait until the page is ready. |

### Alternatives of SSG

1. Server-Side Rendering (SSR):

   ```ts
   export async function getServerSideProps({ params }) {
     const res = await fetch(`https://api.example.com/posts/${params.id}`);
     const post = await res.json();
     return { props: { post } };
   }
   ```

   - Runs on every request.
   - No need for `getStaticPaths`.

2. Client-Side Fetching (CSR):

   - Fetch data in a component using `useEffect`.
   - Slower initial load, poor SEO.

# Incremental Static Regeneration

Normally in Static Site Generation (SSG), all pages are pre-rendered at build time.
But this creates a problem:

- If your data changes frequently (like blog posts, product prices, news articles), the static pages become outdated unless you rebuild the whole app.

ISR solves this by allowing you to update static pages in the background without rebuilding the entire site.

With ISR:

- Pages are generated once at build time (like SSG).
- After deployment, if the data changes, the pages can be incrementally regenerated on the server.
- Users see cached (old) pages until regeneration is done in the background, then the new static version replaces it.

## How ISR Works

With ISR:

1. Pages are generated at build time like SSG.
2. After deployment, pages can be regenerated incrementally on the server when data changes.
3. Users see the cached old page until regeneration finishes.
4. Once regeneration is complete, the new static page replaces the old version automatically.

The key to ISR is the `revalidate` property in `getStaticProps`.

```
revalidate: N
```

- The page is cached for N seconds.
- After N seconds, the next request triggers regeneration in the background.
- While regenerating, users still see the old page (no downtime).
- After regeneration, the new page replaces the old page for future requests.

## How to Use ISR

```tsx
// pages/blog/[id].tsx
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";

type Post = {
  id: string;
  title: string;
  body: string;
};

interface BlogPostProps {
  post: Post;
}

const BlogPost: NextPage<BlogPostProps> = ({ post }) => {
  const router = useRouter();

  // Show loading state if fallback page is being generated
  if (router.isFallback) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p className="mt-4">{post.body}</p>
      <small>Last updated: {new Date().toLocaleTimeString()}</small>
    </div>
  );
};

export default BlogPost;

// Pre-generate some blog pages at build time
export const getStaticPaths: GetStaticPaths = async () => {
  const posts: Post[] = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  ).then((res) => res.json());

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return {
    paths,
    fallback: "blocking", // Other pages generated on-demand with ISR
  };
};

// Fetch data and enable ISR
export const getStaticProps: GetStaticProps<BlogPostProps> = async ({
  params,
}) => {
  const post: Post = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params?.id}`
  ).then((res) => res.json());

  return {
    props: { post },
    revalidate: 10, // Regenerate page in the background every 10 seconds
  };
};
```

1. `getStaticPaths`
   - Pre-generates a few pages at build time (`/blog/1`, `/blog/2`, …).
   - Other pages are generated on-demand via `fallback: "blocking"`.
2. `getStaticProps` with `revalidate`
   - Page is cached and served for `revalidate` seconds.
   - After that, the next request triggers background regeneration.
   - Users see the old page while regeneration occurs.
   - Once done, the new page replaces the old one.
3. User experience
   - Pages load fast (static).
   - Data is relatively fresh without rebuilding the entire site.

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

## How to Use SSR

In Next.js, define `getServerSideProps` in your page component.

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

## `pages` Router

The Pages Router in Next.js defines the application’s routes and rendering behavior using the file system. Each file inside `pages/` automatically becomes a route.

- File-based routing: Each file in `pages/` is a route.
- Client Components by default: Unlike the App Router (`app/`) which defaults to Server Components.
- Data fetching: `getStaticProps`, `getServerSideProps`, `getStaticPaths`.
- Uses special files (`_app.tsx`, `_document.tsx`, `_error.tsx`, `404.tsx`) for global layouts, document structure, and error handling.
- API routes: Inside `pages/api/`, served as serverless functions.

### Folder Structure

- Each file inside `pages/` represents a route, and its default export is rendered as the page. The default export from that file must be a React component.
- Supports Client Components by default (unlike `app/` which defaults to Server Components).

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

**Example Structure:**

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

### Routing

- Static route → `pages/about.tsx` → `/about`
- Dynamic route → `pages/blog/[id].tsx` → `/blog/123`
- Catch-all route → `pages/docs/[...slug].tsx` → `/docs/intro/getting-started`

### Data Fetching

1. CSR via `useEffect` → Client-Side Rendering
   - Data fetching happens entirely in the browser.
   - No pre-rendering; the page loads first, then fetches data via API.
2. `getStaticProps` → Static Site Generation (SSG)
   - Runs at build time.
   - Pre-renders HTML + JSON for each page.
   - Best for content that doesn’t change often.
   - Visiting `/static` will always show the same pre-rendered content until the site is rebuilt.
3. `getStaticPaths` (with `getStaticProps`) → Dynamic SSG
   - Used with dynamic routes (e.g., `[id].tsx`).
   - Pre-renders a set of paths at build time.
   - Supports three fallback modes:
     - `false` → Only pre-rendered paths exist; others return 404.
     - `true` → Not-prebuilt paths generate on-demand with a loading state.
     - `"blocking"` → Not-prebuilt paths generate on-demand server-side (no loading state).
4. ISR via `revalidate` → Incremental Static Regeneration
   - Hybrid between SSG and dynamic updates.
   - Runs `getStaticProps` at build time (like SSG).
   - Adds a `revalidate` property → defines how often the page should update.
   - After `N` seconds, the next request triggers regeneration in the background.
   - Users see the cached page until regeneration finishes, then future users get the fresh page.
5. `getServerSideProps` → Server-Side Rendering (SSR)
   - Runs on every request (on Node.js server or Vercel Function).
   - Fetches fresh data each time before sending the HTML.
   - Visiting `/server` always returns the latest data.
6. `getInitialProps` (Legacy)
   - Runs on both server and client.
   - Can cause larger JavaScript bundles and worse performance.
   - Mostly replaced by `getStaticProps` and `getServerSideProps`.
   - Still useful in some libraries like NextAuth.js (for session handling).

**Summary:**
| Method | When it Runs | Use Case |
| -------------------- | ---------------------- | -------------------------------------------------------------- |
| `getStaticProps` | Build time | Static content (blogs, docs, marketing pages) |
| `getServerSideProps` | On every request | Always-fresh content (dashboards, stock prices) |
| `getStaticPaths` | Build time / On-demand | Dynamic routes (blog posts, products) |
| `getInitialProps` | Server + client | Legacy use, libraries compatibility |
| CSR (`useEffect`) | Client only | User-specific or non-SEO critical content (chat, dashboards) |
| ISR (`revalidate`) | Build + background | Mix of static speed + fresh data (news, product prices, blogs) |

### API Routes

API routes in Next.js allow you to build serverless functions directly inside your app.
They live inside the `pages/api/` directory, and each file automatically becomes an API endpoint.

- They run only on the server (never bundled into client-side JavaScript).
- Can handle `GET`, `POST`, `PUT`, `DELETE` requests.
- Useful for handling forms, authentication, database queries, webhooks, etc.

```tsx
// pages/api/users.ts
export default function handler(req, res) {
  if (req.method === "GET") {
    // Fetch users
    res.status(200).json({ users: ["Alice", "Bob", "Charlie"] });
  } else if (req.method === "POST") {
    // Add a new user (example only)
    const { name } = req.body;
    res.status(201).json({ message: `User ${name} created!` });
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
```

### Components

In the Pages Router, unlike the App Router, everything is a Client Component by default:

- Pages and components are rendered in the browser after hydration.
- There is no concept of Server Components (that’s exclusive to the App Router).
- However, you can still perform server-side logic using special data-fetching methods:
  - `getStaticProps` → Static Site Generation (SSG)
  - `getServerSideProps` → Server-Side Rendering (SSR)
  - API Routes → `pages/api/*` for serverless functions

In the Pages Router, components always run in the client, but you can inject server-side logic through Next.js lifecycle functions.

### Rendering Modes

Next.js `pages/` supports four rendering strategies:

1. Static Generation (SSG) → `getStaticProps`
2. Server-Side Rendering (SSR) → `getServerSideProps`
3. Client-Side Rendering (CSR) → Fetching data inside `useEffect` in the browser
4. Incremental Static Regeneration (ISR) → `getStaticProps` + `revalidate`

### Special Files

1. **Custom App Component (`_app.tsx`):**

   - Wraps all pages in your application.
   - Useful for global styles, providers (e.g., Redux, Context, Theme), and persistent layouts.
   - Runs on both client and server.

   ```tsx
   // pages/_app.tsx
   import "../styles/globals.css";

   export default function MyApp({ Component, pageProps }) {
     return <Component {...pageProps} />;
   }
   ```

   Use cases:

   - Import global CSS.
   - Add global state providers (Redux, Context API, React Query, etc.).
   - Implement layouts that persist across pages.

2. **Custom HTML Structure (`_document.tsx`):**

   - Used to modify the overall HTML document structure.
   - Only rendered on the server (never on the client).
   - Useful for `<html>`, `<body>`, meta tags, language attributes, and preload links.
   - Unlike `_app.js`, which handles the React tree, `_document.js` controls the HTML & `<head>` part of your app.
   - This file only runs on the server-side (never in the browser).
   - It’s useful for adding things like:
     - Custom `lang` attribute on `<html>`.
     - Adding global meta tags.
     - Adding external fonts, scripts, or analytics.
     - Setting up custom document structure.

   ```tsx
   // pages/_document.tsx
   import { Html, Head, Main, NextScript } from "next/document";

   export default function Document() {
     return (
       <Html lang="en">
         <Head>
           <meta name="description" content="My Next.js App" />
           <link rel="preconnect" href="https://fonts.googleapis.com" />
         </Head>
         <body>
           <Main />
           <NextScript />
         </body>
       </Html>
     );
   }
   ```

   Use cases:

   - Adding `lang` attribute for accessibility/SEO.
   - Preloading fonts or external resources.
   - Adding global `<meta>` tags.

     **Differences Between `_app.js` and `_document.js`**

   | Feature    | `_app.js` (App Component)         | `_document.js` (Document)             |
   | ---------- | --------------------------------- | ------------------------------------- |
   | Runs on    | Client & Server                   | Server only                           |
   | Controls   | Page rendering & layout           | HTML document structure               |
   | Common use | Layouts, global styles, providers | Meta tags, fonts, `<html>` attributes |
   | Lifecycle  | Per page navigation               | Only on initial page load             |

3. **Custom Error Page (for 404 & 500 errors) (`_error.ts`):**

   - Replaces the default Next.js error screen.

   ```tsx
   // pages/_error.tsx
   export default function ErrorPage({ statusCode }) {
     return (
       <div>
         <h1>{statusCode ? `Error ${statusCode}` : "An error occurred"}</h1>
         <p>Something went wrong. Please try again later.</p>
       </div>
     );
   }
   ```

   Use cases:

   - Show branded error pages.
   - Handle server errors gracefully.

4. **Custom Not Found Page (`404.js`):**
   - Used specifically when a page or route does not exist.
   ```tsx
   // pages/404.tsx
   export default function NotFoundPage() {
     return (
       <div>
         <h1>404 - Page Not Found</h1>
         <p>Sorry, the page you are looking for does not exist.</p>
       </div>
     );
   }
   ```
   Use cases:
   - Friendly 404 messages.
   - Links back to the homepage or search.

## `app` Router

The App Router (`app/` directory) was introduced in Next.js 13 to provide:

- File-based routing (like Pages Router, but more powerful).
- Server Components by default (improves performance).
- Flexible data fetching with `async/await`.
- Layouts, templates, and parallel routes.

### Folder Structure

- Each folder inside `app/` represents a route, and a `page.js` (or `page.tsx`) file inside it is rendered as the page.
- Supports Server Components by default (unlike `pages/` which defaults to Client Components).
- Special files add layouts, error boundaries, loading states, etc.

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

**Example Structure:**

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

### Routing

- Static route → `app/about/page.tsx` → `/about`
- Dynamic route → `app/blog/[id]/page.tsx` → `/blog/123`
- Catch-all route → `app/docs/[...slug]/page.tsx` → `/docs/intro/getting-started`
- Route groups → `app/(marketing)/about/page.tsx` → URL is /about but logically grouped.
- Nested routes → Folders create nested segments

### Data Fetching

In App Router, data fetching is built into Server Components (no need for `getStaticProps` / `getServerSideProps`).

- Supports streaming and Suspense for better performance.
- Automatic caching and revalidation with `fetch()`.

1. **Async Server Components (default)**

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

2. **`fetch` caching strategies**

   - `fetch(..., { cache: "force-cache" })` → Default (SSG-like, cached at build).
   - `fetch(..., { cache: "no-store" })` → Always fresh (SSR-like).
   - `fetch(..., { next: { revalidate: 60 } })` → ISR (regenerates every 60s).

3. **Client Components**

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

4. **API Routes with `route.ts`**

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

## Catch-All Routes

In Next.js, dynamic routes allow you to create pages that depend on parameters (like `/blog/[id]`).

A catch-all route goes one step further: it matches any number of path segments.

```bash
app/blog/[...slug].ts
```

Here, `[...slug]` is a catch-all segment.
It means:

- `/blog/a` → `slug = ['a']`
- `/blog/a/b` → `slug = ['a', 'b']`
- `/blog/a/b/c` → `slug = ['a', 'b', 'c']`
  So, it "catches all" nested paths under `/blog/`.

```ts
import { useRouter } from "next/router";

export default function BlogPage() {
  const router = useRouter();
  const { slug } = router.query; // slug will be an array

  return (
    <div>
      <h1>Catch-All Blog Route</h1>
      <p>Slug: {JSON.stringify(slug)}</p>
    </div>
  );
}
```

### Optional Catch-All Routes

Sometimes, you want the route to also work without any slug.

For that, you use double brackets:

```ts
app / blog / [[...slug]].ts;
```

Difference:

- `/blog` → `slug = undefined`
- `/blog/hello` → `slug = ["hello"]`
- `/blog/hello/world` → `slug = ["hello", "world"]`

### Practical Use Cases

1. Blog Posts with Categories/Tags
   - `/blog/technology/javascript/nextjs`
   - You can use slug to determine category hierarchy.
2. Docs/Knowledge Base
   - `/docs/getting-started/setup/windows`
   - `slug = ["getting-started", "setup", "windows"]`
3. Dynamic Navigation (like breadcrumbs)
   - You can use the array to generate breadcrumb navigation.

# Image Optimization

Optimized images reduce page load time, improving user experience and SEO.

## `<Image>` Component

The Next.js `<Image>` component provides automatic optimizations:

- Lazy loading (except for priority images)
- Responsive resizing based on device viewport
- Automatic WebP/AVIF conversion (when supported by the browser)
- Prevents layout shift by requiring `width` & `height` or `fill`
- CDN caching (if deployed on Vercel, images are globally cached)

```tsx
<Image
  src="/example.jpg"
  alt="Example Image"
  width={500}
  height={300}
  quality={80} // default is 75
  priority // preloads the image
/>
```

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

### Responsive Images

Instead of fixed dimensions, use `fill` with a parent container for responsive layouts:

```tsx
<div className="relative w-full h-64">
  <Image
    src="/my-image.jpg"
    alt="Responsive Image"
    fill
    sizes="(max-width: 768px) 100vw, 50vw" // helps with responsive optimization
    priority
  />
</div>
```

- `fill` makes the image automatically scale within the container.
- `sizes` ensures the browser only downloads the necessary image size.
- No layout shift, since the container controls dimensions

### Serve Next-Gen Formats

WebP and AVIF formats reduce file size while maintaining quality.
Next.js automatically detects browser support and serves optimized formats without extra configuration.

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

- Smaller file sizes compared to PNG/JPG
- Better performance with no extra setup needed

### Blur Placeholder for Lazy-Loaded Images

Next.js supports showing a low-resolution blurred version before the full image loads, improving perceived performance.

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

- Enhances user experience for slow connections
- Useful for large or hero images

## How Lazy Loading Works

Lazy Loading means images below the viewport are not loaded until scrolled into view, reducing initial page load time.

- By default, Next.js `<Image>` uses `loading="lazy"` for any image that is not in the initial viewport.
- That means images below the fold will load only when needed, saving bandwidth.
- You can override this behavior with `priority={true}` (for critical images like logos or hero banners).

## Configuring External Image

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

# Font Optimization

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

# SEO and Metadata

In CSR (Client-Side Rendering), the browser initially loads an empty HTML shell. Then JavaScript runs, fetches data, and renders components. Since search engine crawlers may not fully process JavaScript, this can hurt SEO.

In contrast, Next.js uses SSR (Server-Side Rendering) or SSG (Static Site Generation). Pages are pre-rendered into HTML on the server before being sent to the browser, ensuring that search engines can easily read and index the content.

- CSR → Data fetching returns JSON, then rendered client-side.
- SSR/SSG → Data fetching returns HTML, already rendered for SEO.

## `<Head>` Component

Metadata provides extra information about a web page that is not visible on the page itself but is important for:

- SEO (Search Engine Optimization) → helps search engines understand your page.
- Social Sharing (Open Graph, Twitter Cards, etc.) → controls how your page appears on platforms like Facebook, LinkedIn, and Twitter.
- Browser behavior → controls page title, favicon, viewport scaling, etc.

Next.js provides a special `<Head>` component from the `next/head` module.

It lets you add elements to the `<head>` section of an HTML document, such as:

- Page `<title>`
- `<meta>` tags (description, keywords, viewport, charset, etc.)
- Social media metadata (Open Graph, Twitter cards)
- Favicons, external fonts, or scripts

Unlike plain React where you might use a library like `react-helmet`, Next.js has `<Head>` built-in for better performance and SSR (server-side rendering).

### How It Works

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

**SEO & Social Media Tags**

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
  // Fetch the list of posts to get the slugs dynamically from the API
  const res = await fetch(API_URL);
  const posts = await res.json();

  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false, // Set to true or 'blocking' for dynamic content
  };
}

export async function getStaticProps({ params }) {
  // Fetch the post data for a specific slug from the API
  const res = await fetch(`${API_URL}/${params.slug}`);
  const post = await res.json();

  // If the post does not exist, return a 404 (Optional)
  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
}
```

- Metadata (`title`, `description`, `og:image`) is generated per post.
- `getStaticProps` fetches post data and passes it into `<Head>`.
- Each blog page has unique SEO-friendly metadata.

### Dynamic Metadata in App Router

In Next.js 13+, you don’t need `<Head>` anymore. Instead, you use the `generateMetadata` function in `page.js` or `layout.js`.

```ts
// app/blog/[slug]/page.js

// Generate metadata dynamically
export async function generateMetadata({ params }) {
  // Fetch post data for the specific slug
  const res = await fetch(`${API_URL}/${params.slug}`);
  const post = await res.json();

  if (!post) {
    return {
      title: "Post not found | My Blog",
      description: "This post doesn't exist.",
      openGraph: {
        title: "Post not found",
        description: "This post doesn't exist.",
        images: [],
        type: "article",
        url: `https://myblog.com/blog/${params.slug}`,
      },
      twitter: {
        card: "summary_large_image",
        title: "Post not found",
        description: "This post doesn't exist.",
        images: [],
      },
    };
  }

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

// Page component
export default async function BlogPost({ params }) {
  // Fetch the post data from the API
  const res = await fetch(`${API_URL}/${params.slug}`);
  const post = await res.json();

  if (!post) {
    return (
      <main>
        <h1>Post Not Found</h1>
        <p>This post does not exist.</p>
      </main>
    );
  }

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

## Open Graph

**Why Do They Matter?**

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

   - `og:title` - The title of your page/post when shared. Usually matches your `<title>` tag but can be customized for social.
   - `og:description` - A short summary shown under the title in the preview. Should entice clicks, like a meta description.
   - `og:image` - The preview image (thumbnail) displayed with the link. Needs to be a public absolute URL, large enough for social previews.
   - `og:url` - The canonical URL for the shared content. Prevents duplicates if the same content is available under different query strings/paths.

2. Use **absolute URLs** for `og:url` and `og:image` (social media bots can’t resolve relative paths).

3. Image recommendations:

   - Open Graph: **1200×630 px**
   - Twitter Card: **1200×628 px**
   - Under 5 MB, JPG or PNG preferred.

4. Test with:
   - [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
   - [Twitter Card Validator](https://cards-dev.twitter.com/validator)

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

For global styles, we typically use a `.css` file imported inside your custom `_app.ts` or `app/layout.ts` (depending on whether you use the Pages Router or App Router).

```ts
import "./global.css";
```

- `globals.css` defines base styling rules that affect the entire application.
- These styles are not scoped—they apply everywhere.

### How Global Styles Work

- Next.js compiles and applies `globals.css` to every page.
- You cannot import global CSS inside a component (e.g., inside `Button.js`) — it must be inside `_app.ts` or `app/layout.ts`.
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

### Install NextAuth

```bash
npm install next-auth
```

### Configure Environment Variables

Create a `.env` file with the following values:

```env
NEXT_PUBLIC_BASE_URL=http://localhost:3000
NEXTAUTH_SECRET=strong_secret
NEXTAUTH_URL=http://localhost:3000
GITHUB_ID=your_github_client_id
GITHUB_SECRET=your_github_client_secret
```

### Configure API Route

Create the NextAuth API route in `app/api/auth/[...nextauth].ts`:

```ts
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { verfiyUser } from "@/lib/auth"; // your custom verify function

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
    }),
    CredentialsProvider({
      credentials: {
        email: { label: "Email Address", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          if (credentials?.email && credentials?.password) {
            return await verfiyUser(credentials.email, credentials.password);
          }
        } catch (error) {
          console.error(error);
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/signin",
  },
});

export { handler as GET, handler as POST };
```

### Sign In with Credentials

Use the `signIn` function from `next-auth/react`:

```ts
import { signIn } from "next-auth/react";

const response = await signIn("credentials", { email, password });
```

### Sign Up

Create a sign-up API route or call an existing endpoint:

```ts
const response = await fetch("/api/auth/signup", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name, email, password }),
});
```

### Protect Client Components

Use `useSession` to check authentication:

```ts
import { useSession, signIn, signOut } from "next-auth/react";

export default function Component() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        Signed in as {session.user?.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }

  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}
```

### Protect Server-Side Routes

Use `getServerSession` in API routes:

```ts
import { getServerSession } from "next-auth/next";
import { authOptions } from "./auth/[...nextauth]";

export default async (req, res) => {
  const session = await getServerSession(req, res, authOptions);

  if (session) {
    res.send({
      content:
        "This is protected content. You can access it because you are signed in.",
    });
  } else {
    res.send({
      error: "You must be signed in to view this content.",
    });
  }
};
```

- `getSession(context)` can also be used for server-rendered pages.
- Redirect users to login if no session is found.
- Ensures server-side protection for pages and API routes.

## JWT Authentication

### How JWT Authentication Works

1. **Login**: User submits credentials via a POST request to your API.
2. **Verify & Sign**: Server verifies credentials and issues a JWT.
3. **Store Token**: Client stores the JWT (in an HttpOnly cookie or `localStorage`).
4. **Authenticated Requests**: Client includes the JWT in headers or cookies when accessing protected routes.
5. **Verify Token**: Server checks the JWT on each protected request.

### Protecting Server-Side Routes

```ts
import jwt from "jsonwebtoken";

export default function Dashboard({ user }) {
  return (
    <h1>
      Welcome {user.email}! Role: {user.role}
    </h1>
  );
}

export async function getServerSideProps({ req }) {
  // Extract token from cookies
  const token = req.headers.cookie?.split("=")[1] || "";

  try {
    // Verify JWT
    const user = jwt.verify(token, process.env.JWT_SECRET);
    return { props: { user } };
  } catch (err) {
    // Redirect to login if verification fails
    return {
      redirect: { destination: "/login", permanent: false },
    };
  }
}
```

- Prefer HttpOnly cookies for storing JWTs to prevent XSS attacks.
- Always verify the JWT on every request to protected server-side pages.
- Customize payload to include user roles or permissions for fine-grained access control.

## Role-Based Access Control

### Adding Roles to JWT and Session

Configure the callbacks in your NextAuth options to attach user roles:

```ts
callbacks: {
  async jwt({ token, user }) {
    if (user) token.role = user.role; // attach role to JWT
    return token;
  },
  async session({ session, token }) {
    session.user.role = token.role; // make role available in session
    return session;
  },
}
```

### Protecting Client-Side Components by Role

```ts
"use client";
import { useSession } from "next-auth/react";

export default function AdminOnly({ children }) {
  const { data: session } = useSession();

  // Hide content if not logged in or not an admin
  if (!session || session.user.role !== "admin") return null;

  return <>{children}</>;
}
```

- Useful for rendering UI elements that only admins should see.
- Prevents accidental exposure of restricted content on the client.

### Protecting Server-Side Routes by Role

```ts
import { getSession } from "next-auth/react";

export default function AdminDashboard() {
  return <h1>Admin Dashboard - Only Admins Can See This</h1>;
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  // Redirect if not logged in
  if (!session) {
    return { redirect: { destination: "/login", permanent: false } };
  }

  // Redirect if not an admin
  if (session.user.role !== "admin") {
    return { redirect: { destination: "/", permanent: false } };
  }

  return { props: {} };
}
```

- First check ensures the user is authenticated.
- Second check ensures the user has the required `admin` role.
- Unauthorized users are redirected accordingly.

# Middleware

Middleware in Next.js is a powerful feature that lets you run code before a request is completed. It sits between the client request and the response, allowing you to modify requests, responses, or perform conditional routing.

## Features of Next.js Middleware

1. **Execution**:
   - Runs on the Edge Runtime (lighter, faster, no Node.js APIs).
   - Executes before rendering a page or running an API route.
2. **Use Cases**:
   - Authentication & authorization (redirect unauthorized users).
   - URL rewrites or redirects.
   - Logging, analytics, A/B testing.
   - Localization (redirecting users based on locale or region).
3. **File Location**:
   - Create a `middleware.ts` or `middleware.js` file at the root of your project (same level as `pages/` or `app/`).
   - Or inside specific directories for scoped middleware.
4. **Request Object**:
   - Middleware receives a `NextRequest` object.
   - Returns a `NextResponse` object to control what happens next.

## Custom Logic

Middleware in Next.js isn’t just for authentication or redirects—you can also write custom logic that runs before your routes are processed. This allows you to intercept, modify, or enforce rules at the edge layer.

### Steps for Writing Middleware

1. **Create the middleware file**

   - Add a `middleware.ts` or `middleware.js` at the root of your project (next to `pages/` or `app/`).
   - You can also scope it to a directory (e.g., `app/dashboard/middleware.ts`) if you want it to apply only to specific routes.

2. **Define your middleware function**
   - The function receives a `NextRequest` object.
   - You return a `NextResponse` that either:
     - Allows the request: `NextResponse.next()`
     - Redirects: `NextResponse.redirect()`
     - Rewrites: `NextResponse.rewrite()`
     - Or blocks / sends a custom response.
3. **(Optional) Add configuration**
   - Use the `config.matcher` property to decide which routes the middleware applies to.

### Custom Header Validation

Suppose you want all API requests to include a custom header `x-api-key`. If it’s missing or incorrect, reject the request.

```ts
// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Only check API routes
  if (request.nextUrl.pathname.startsWith("/api")) {
    const apiKey = request.headers.get("x-api-key");

    if (apiKey !== process.env.API_KEY) {
      return new NextResponse(
        JSON.stringify({ error: "Unauthorized request" }),
        { status: 401, headers: { "Content-Type": "application/json" } }
      );
    }
  }

  // Otherwise allow the request
  return NextResponse.next();
}
```

- We check if the request URL starts with `/api`.
- If yes, validate the `x-api-key` header.
- If invalid, return a custom 401 Unauthorized JSON response.
- If valid, continue with `NextResponse.next()`.

### Time-Based Access Control

Only allow access to `/dashboard` during working hours (9 AM – 6 PM). Outside this time, redirect to `/closed`.

```ts
// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const hour = new Date().getHours();

  // Only allow during 9 AM - 6 PM
  if (hour < 9 || hour >= 18) {
    return NextResponse.redirect(new URL("/closed", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/dashboard/:path*",
};
```

- Uses `Date().getHours()` to check the server’s time.
- If the request is outside working hours, users are redirected to `/closed`.
- Applies only on `/dashboard/*` routes via `matcher`.

## Understanding `next.config.js`

By default, middleware in Next.js is controlled using the `config` export inside `middleware.ts` (with the `matcher` option).

But sometimes you need global project-level configuration that lives in `next.config.js`. This file defines build-time and runtime configurations for your Next.js project, and it can also influence how middleware behaves.

### Key Points

1. `matcher` vs `next.config.js`
   - Middleware itself can export a `config` with `matcher`.
   - But in some advanced cases, you may centralize route matching and rewrites in `next.config.js` so that middleware and routing work consistently.
2. Where it fits
   - `next.config.js` configures global behavior such as rewrites, redirects, and headers.
   - Middleware can then react to those rules.
3. What you can configure in `next.config.js` that affects middleware
   - `async rewrites()` – rewrite incoming requests before middleware executes.
   - `async redirects()` – define static redirects.
   - `headers()` – add security or custom headers globally.
   - `experimental.middlewarePrefetch (older versions)` – controls prefetch behavior with middleware.

### Middleware with Inline Matcher

```ts
// middleware.ts
export const config = {
  matcher: ["/dashboard/:path*", "/profile/:path*"],
};
```

### Centralized Routing

```ts
// next.config.js
module.exports = {
  async redirects() {
    return [
      {
        source: "/old-dashboard/:path*",
        destination: "/dashboard/:path*",
        permanent: true,
      },
    ];
  },
};
```

- If someone visits `/old-dashboard/settings`, Next.js redirects to `/dashboard/settings` before middleware runs.
- Then, middleware with `/dashboard/:path*` matcher takes over for authentication, logging, etc.

### Localization

```ts
// next.config.js
module.exports = {
  async rewrites() {
    return [
      { source: "/fr/:path*", destination: "/:path*" },
      { source: "/bd/:path*", destination: "/:path*" },
    ];
  },
};
```

```ts
// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const country = request.geo?.country || "US";

  if (request.nextUrl.pathname === "/") {
    if (country === "FR") {
      return NextResponse.redirect(new URL("/fr", request.url));
    }
    if (country === "BD") {
      return NextResponse.redirect(new URL("/bd", request.url));
    }
  }

  return NextResponse.next();
}
```

- `next.config.js` ensures `/fr/*` and `/bd/*` map internally to the same routes (`/:path*`).
- Middleware adds dynamic redirection so `/` visitors get redirected to `/fr` or `/bd` based on location.

This combo makes localization powerful and consistent.

### Headers + Middleware

```ts
// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
        ],
      },
    ];
  },
};
```

```ts
// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  console.log(`Request to: ${request.nextUrl.pathname}`);
  return NextResponse.next();
}
```

- `next.config.js` ensures every route gets security headers automatically.
- Middleware focuses only on custom logic (logging, authentication, etc.).
- This separation of concerns keeps middleware lightweight.

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

Next.js provides multiple strategies to preload both data and components, depending on where your data lives and how you fetch it.

### Preloading Data with `getStaticProps` + Link Prefetch

When a page uses Static Generation (`getStaticProps`), Next.js can prefetch both the JavaScript bundle and the JSON data in advance when using `<Link>`.

**Example: Blog Posts**

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

**What gets preloaded?**

- The `blog/[id].ts` JavaScript bundle
- The JSON data file generated by getStaticProps

### Preloading Data with SWR / React Query

For client-side fetching, you can preload queries so that data is available immediately when the component renders.

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

### Preloading Components with `next/dynamic`

You can also preload heavy components before user action:

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

Useful for charts, editors, or other expensive components.

### Prefetching vs Preloading Data

| Feature                | Prefetching                                  | Preloading Data                             |
| ---------------------- | -------------------------------------------- | ------------------------------------------- |
| **What it loads**      | Page JS bundles (+ static JSON if available) | API data, components, or resources          |
| **When it happens**    | When link/component enters viewport          | When you explicitly trigger preload         |
| **Default in Next.js** | Enabled with `<Link>` in production          | Manual (SWR, React Query, preload())        |
| **Goal**               | Faster navigation to new page                | Faster rendering with ready data/components |

- Prefetching: Automatic with `<Link>` → speeds up page navigation.
- Preloading Data: Manual (via `getStaticProps`, SWR, or `preload`) → avoids loading spinners.
- Combine both for blazing-fast navigation:
  - Prefetch the page bundle + static data
  - Preload client-side queries or components

## Performance Challenges in SSR

- Every request triggers: Server fetch → render React → send HTML + JSON → hydrate on client.

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
  return <DisplayWeatherData />;
}
```

- `Promise.all` → avoids sequential fetches.
- Page served fresh per request.
- Can be paired with server/CDN caching to reduce load.

## Performance Challenges in CSR

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
| **SEO**           | Great for SEO                | Not SEO-friendly                 |
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

### What is `next build`

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

#### Use Dynamic Imports

For large components or libraries, use dynamic imports:

```tsx
import dynamic from "next/dynamic";

const HeavyComponent = dynamic(() => import("../components/HeavyComponent"), {
  ssr: false, // optional: render only on client
});
```

- Reduces initial JS bundle size.
- Improves Time to Interactive (TTI).

#### Cache Dependencies in CI/CD

In Vercel, Netlify, or GitHub Actions, caching `node_modules` or `.next/cache` speeds up builds.

GitHub Actions Example:

```yaml
- name: Cache node modules
  uses: actions/cache@v2
  with:
    path: ~/.npm
    key: ${{ runner.os }}-node-${{ hashFiles('package-lock.json') }}
```

#### Enable SWC Minification

Next.js uses SWC compiler by default. Ensure minification is enabled:

```ts
// next.config.js
module.exports = {
  swcMinify: true,
};
```

- Faster than Terser
- Produces smaller JS bundles

#### Static Generation Where Possible

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

Next.js provides built-in i18n routing support, but you’ll often combine it with either translation libraries (like `next-intl` or `next-i18next`) or custom dictionaries. With the App Router, you don’t rely on `_app.tsx` anymore — instead, you structure translations around layouts, server components, and data fetching.

## Configure i18n

Next.js has built-in locale routing, so you declare your supported locales here:

```ts
// next.config.ts
/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en", "fr", "bn"], // English, French, Bangla
    defaultLocale: "en",
  },
};

module.exports = nextConfig;
```

- This enables URLs like: `/en/products`, `/fr/products`, `/bn/products`
- The locale will be available on both the server and client via `params` or `useParams()`

## Organize Translation Dictionaries

Instead of a library, we’ll use simple JSON dictionaries for each language.

```json
// messages/en.json
{
  "welcome": "Welcome to our store",
  "products": "Products"
}

// messages/fr.json
{
  "welcome": "Bienvenue dans notre magasin",
  "products": "Produits"
}

// messages/bn.json
{
  "welcome": "আমাদের দোকানে স্বাগতম",
  "products": "পণ্যসমূহ"
}
```

## Create a Translation Loader

We’ll load dictionary files dynamically based on the locale.

```ts
// lib/get-dictionary.ts
export type Locale = "en" | "fr" | "bn";

export async function getDictionary(locale: Locale) {
  const dictionaries = {
    en: () => import("../messages/en.json").then((m) => m.default),
    fr: () => import("../messages/fr.json").then((m) => m.default),
    bn: () => import("../messages/bn.json").then((m) => m.default),
  };

  return dictionaries[locale]?.() ?? dictionaries.en();
}
```

## Define Locale-Specific Routes

With the App Router, you can scope everything under `[locale]`.

```
app/
 ├─ [locale]/
 │   ├─ layout.tsx
 │   ├─ page.tsx
 │   └─ products/
 │       └─ page.tsx
 └─ globals.css
```

## Use Translations in Layout

```tsx
// app/[locale]/layout.tsx
import { ReactNode } from "react";
import { getDictionary, Locale } from "@/utils/get-dictionary";

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "fr" }, { locale: "bn" }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: Locale };
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <html lang={locale}>
      <body>
        <header className="p-4 bg-gray-200">
          <h1>{dict.welcome}</h1>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
```

## Example with Data Fetching

Let’s fetch product data and localize UI labels.

```tsx
// app/[locale]/page.tsx
import { getDictionary, Locale } from "@/utils/get-dictionary";

type Product = {
  id: number;
  name: string;
};

async function getProducts(): Promise<Product[]> {
  // Example: server-side fetching (e.g., from an API or DB)
  return [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Phone" },
  ];
}

export default async function ProductsPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const products = await getProducts();

  return (
    <section className="p-4">
      <h2 className="text-xl font-bold">{dict.products}</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </section>
  );
}
```

## How Internationalization Works

1. **Routing**
   - `/en/products` → loads English dictionary
   - `/fr/products` → loads French dictionary
   - `/bn/products` → loads Bangla dictionary
2. **Data Fetching**
   - `getProducts()` runs on the server.
   - Dictionary is also fetched on the server.
   - Both are merged in the server component before rendering.
3. **Scalability**
   - You can fetch dictionaries from APIs instead of JSON files.
   - You can add middleware to redirect users based on `Accept-Language` header.

# Custom Server

## Set Up Custom Server

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

1. **Install Dependencies**

   ```bash
   npm install next react react-dom express@4
   npm install --save-dev typescript @types/node @types/react @types/react-dom @types/express ts-node nodemon
   ```

2. **Update `package.json` Scripts**

   ```json
   "scripts": {
     "dev": "nodemon --watch server.ts --exec ts-node server.ts",
     "build": "next build",
     "start": "NODE_ENV=production node dist/server.js"
   }
   ```

   - `dev` → runs your custom server in development mode (with hot reload).
   - `build` → compiles your Next.js app.
   - `start` → runs the compiled server in production.

3. **Write `server.ts`**

   ```ts
   import express, { type Request, type Response } from "express";
   import next from "next";

   const dev = process.env.NODE_ENV !== "production";
   const app = next({ dev });
   const handle = app.getRequestHandler(); // Next.js request handler

   app.prepare().then(() => {
     const server = express();

     server.get("/p/:id", (req: Request, res: Response) => {
       app.render(req, res, "/post", { id: req.params.id });
     });

     server.get("/hello", (_req: Request, res: Response) => {
       res.send("Hello from custom server!");
     });

     // Express 5 compatible catch-all
     server.all(/.*/, (req: Request, res: Response) => handle(req, res));

     server.listen(3000, (err?: Error) => {
       if (err) throw err;
       console.log("🚀 Server running at http://localhost:3000");
     });
   });
   ```

   - `next({ dev })` → Initializes Next.js in dev or production mode.
   - `app.prepare()` → Prepares Next.js to handle requests.
   - `handle` → Next.js’s built-in request handler (used for normal pages/static files).
   - `server.get('/p/:id')` → Custom Express route mapping `/p/:id` → Next.js `/post` page.
   - `server.all('*')` → For all other routes, fall back to Next.js default handler.

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

#### Environment Variables

You can define public and server-side environment variables.

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

#### Custom Webpack Config

Modify Webpack to add loaders or plugins.

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

#### Redirects

Define server-side redirects.

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

Visiting `/old-blog/hello-world` → Redirects to `/new-blog/hello-world`.

#### Rewrites

Rewrites allow you to mask an API endpoint with a different URL.

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

#### Headers

Set custom HTTP headers (e.g., security headers).

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

#### Image Optimization

Control domains allowed for `<Image />`.

```ts
const nextConfig = {
  images: {
    domains: ["example.com", "cdn.example.org"],
  },
};

module.exports = nextConfig;
```

Lets you safely load images from external domains.

#### Internationalization (i18n)

Enable multiple locales.

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

# Testing

Jest is a popular JavaScript testing framework:

- Built-in test runner and assertion library.
- Excellent TypeScript support.
- Works seamlessly with React and Next.js.
- Can be extended with React Testing Library for user-focused component testing.

## Utility Function Testing

### Installing Dependencies

Install Jest and TypeScript helpers:

```bash
npm install --save-dev jest @types/jest ts-jest
```

### Configuring Jest

Create a `jest.config.ts` file at the root:

```ts
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
};

export default createJestConfig(customJestConfig);
```

### Utility Function

## Component Testing

Suppose you have a simple math utility:

```ts
// src/utils/math.ts
export const add = (a: number, b: number): number => a + b;
export const subtract = (a: number, b: number): number => a - b;
```

Create a test file: `src/utils/math.test.ts`

```ts
import { add, subtract } from "./math";

describe("Math Utilities", () => {
  it("adds two numbers correctly", () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-2, -3)).toBe(-5);
  });

  it("subtracts two numbers correctly", () => {
    expect(subtract(5, 3)).toBe(2);
    expect(subtract(-2, -3)).toBe(1);
  });
});
```

- `describe` groups related tests.
- `it` (or `test`) defines a single test case.
- `expect(...).toBe(...)` asserts expected results.

**Run Tests**

```
npm test -- --runInBand
```

### Installing Dependencies

Install React Testing Library for component testing:

```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom @testing-library/user-event jest-environment-jsdom
```

### Configuring Jest

Create `jest.setup.ts` to add RTL matchers:

```ts
import "@testing-library/jest-dom"; // Provides custom matchers like toBeInTheDocument()
```

Add a test script in `package.json`:

```json
"scripts": {
  "test": "jest --config jest.config.ts",
}
```

- `jest` → runs tests once.
- `jest --watch` → reruns tests when files change.

### React Components

React Testing Library encourages testing components as a user would interact with them.

```ts
// src/components/Title.tsx
interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  return <h1 className="text-4xl font-bold">{title}</h1>;
};

export default Title;
```

Example Test

```ts
// src/components/__tests__/Title.test.tsx
import { render, screen } from "@testing-library/react";
import Title from "../Title";

describe("Title Component", () => {
  it("renders the provided title", () => {
    render(<Title title="Hello World" />);
    const heading = screen.getByRole("heading", { name: /hello world/i });

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass("text-4xl", "font-bold");
  });

  it("renders different titles dynamically", () => {
    render(<Title title="Next.js Testing" />);
    expect(screen.getByText(/next\.js testing/i)).toBeInTheDocument();
  });
});
```

## End-to-End Testing

E2E testing simulates real user interactions with your application. Unlike unit or integration tests, which test small pieces of functionality, E2E tests verify the entire workflow from the front-end UI to the back-end server.

For example, in a Next.js app, an E2E test might:

1. Open the browser.
2. Navigate to a page.
3. Click buttons or fill forms.
4. Verify that the expected behavior occurs (like a redirect or a new element appearing).

### Why Puppeteer for E2E Testing?

Puppeteer is a Node library that provides a high-level API to control Chrome/Chromium. It is perfect for E2E testing because:

- Runs a real browser for accurate tests.
- Supports headless mode (faster CI/CD runs).
- Can simulate user actions (click, type, scroll, etc.).
- Can take screenshots or record performance metrics.

### Setting up Puppeteer

#### Install dependencies

```bash
npm install --save-dev puppeteer  @types/puppeteer
```

#### Configure Jest for E2E tests

You may want a separate folder for E2E tests:

```
project-root/
│
├─ e2e/
│   └─ homePage.e2e.test.ts
```

Create a basic Jest config (`jest.e2e.config.ts`)

```ts
import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "node", // Puppeteer runs in Node
  testTimeout: 30000, // E2E tests can take longer
  testMatch: ["<rootDir>/e2e/**/*.test.ts"],
};

export default config;
```

Do not use `jest-environment-jsdom` for Puppeteer.

### Writing an E2E Test

Testing a Next.js homepage with a button that redirects.

File: `e2e/homePage.e2e.test.ts`

```ts
import puppeteer, { Browser, Page } from "puppeteer";

let browser: Browser;
let page: Page;

beforeAll(async () => {
  // Launch a real Chromium browser
  browser = await puppeteer.launch({
    headless: true, // set false if you want to see the browser
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  page = await browser.newPage();
});

afterAll(async () => {
  if (browser) await browser.close();
});

describe("Home Page E2E Tests", () => {
  it("should load the homepage and display the title", async () => {
    await page.goto("http://localhost:3000"); // Make sure your Next.js app is running
    await page.waitForSelector("h1");

    const title = await page.$eval("h1", (el) => el.textContent);
    expect(title).toBe("Welcome to My Next.js App");
  });

  it("should navigate to About page when button is clicked", async () => {
    await page.goto("http://localhost:3000");

    await page.click('a[href="/about"]'); // App Router uses <Link>
    await page.waitForNavigation(); // Wait for navigation

    const url = page.url();
    expect(url).toBe("http://localhost:3000/about");

    const heading = await page.$eval("h1", (el) => el.textContent);
    expect(heading).toBe("About Us");
  }, 10000);
});
```

File: `/src/app/home.tsx`

```ts
import Link from "next/link";
import React from "react";

const HomePage: React.FC = () => {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Welcome to My Next.js App</h1>
      <p>This is the homepage using the App Router.</p>

      <Link href="/about">
        <button
          style={{
            marginTop: "1rem",
            padding: "0.5rem 1rem",
            cursor: "pointer",
          }}
        >
          Go to About Page
        </button>
      </Link>
    </main>
  );
};

export default HomePage;
```

File: `/src/app/about.tsx`

```ts
import Link from "next/link";
import React from "react";

const AboutPage: React.FC = () => {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>About Us</h1>
      <p>This is the About page of your app.</p>

      <Link href="/">
        <button
          style={{
            marginTop: "1rem",
            padding: "0.5rem 1rem",
            cursor: "pointer",
          }}
        >
          Back to Home
        </button>
      </Link>
    </main>
  );
};

export default AboutPage;
```

1. `puppeteer.launch`
   - Starts a new Chromium instance.
   - `headless: true` runs the browser without a UI.
   - `args: ['--no-sandbox']` needed sometimes for CI environments.
2. `page.goto(url)`
   - Opens a page in the browser.
3. `page.waitForSelector('h1')`
   - Waits until the element appears in the DOM, ensuring the page is fully loaded.
4. `page.$eval(selector, callback)`
   - Extracts data from a DOM element.
   - Here, we get the text content of `<h1>`.
5. `page.click(selector)`
   - Simulates a user click.
6. `page.waitForNavigation()`
   - Waits until navigation is complete (useful for links and form submissions).
7. `expect()`
   - Jest assertion to verify the test results.

### NPM Configuration

```json
{
  "scripts": {
    "test:e2e": "jest --config jest.e2e.config.ts --watch"
  }
}
```

### Running E2E Tests

1. Start your Next.js app:

```bash
npm run dev
```

2. Run Jest with your E2E test:

```bash
npm run test:e2e
```

You should see the test opening a headless browser, navigating pages, and checking your elements.

## API routes Testing

Next.js allows you to write API routes inside the `pages/api` or `app/api` folder, for server-side logic such as fetching data, handling forms, or performing authentication.

Testing these routes is essential to ensure:

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

2. Setup Jest: Make sure `jest.config.ts` is ready (as in unit testing setup).

### Testing a Simple API Route

Suppose we have an API route: `app/api/hello/route.ts`

```ts
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.json({ message: "Hello World" });
}
```

Test: `__tests__/api/hello.test.js`

```ts
import { GET } from "@/app/api/hello/route";
import { NextRequest } from "next/server";

describe("/api/hello App Router API Endpoint", () => {
  test("returns 200 and a message on GET", async () => {
    const request = new NextRequest("http://localhost/api/hello"); // must use NextRequest
    const response = await GET(request);

    expect(response.status).toBe(200);
    const data = await response.json();
    expect(data).toEqual({ message: "Hello World" });
  });

  test("response has JSON content-type header", async () => {
    const request = new NextRequest("http://localhost/api/hello");
    const response = await GET(request);

    expect(response.headers.get("content-type")).toMatch(/application\/json/);
  });

  test("response body has a 'message' key of type string", async () => {
    const request = new NextRequest("http://localhost/api/hello");
    const response = await GET(request);

    const data = await response.json();
    expect(data).toHaveProperty("message");
    expect(typeof data.message).toBe("string");
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

   ```ts
   // server.ts
   import express from "express";
   import { GET } from "./app/api/hello/route";

   const server = express();

   // Wrap App Router GET handler to work with Express
   server.get("/api/hello", async (req, res) => {
     try {
       // Convert Express req to a minimal NextRequest-like object
       const nextReq = new Request(`http://localhost${req.url}`, {
         method: req.method,
         headers: req.headers as any,
       });

       const response = await GET(nextReq as any); // cast for simplicity
       const data = await response.json();

       res.status(response.status).json(data);
     } catch (err) {
       res.status(500).json({ error: "Internal Server Error" });
     }
   });

   export default server;
   ```

Test: `__tests__/api/hello.supertest.test.js`

```ts
import request from "supertest";
import server from "../server"; // path to server.ts

describe("GET /api/hello", () => {
  it("returns 200 and a JSON message", async () => {
    const res = await request(server).get("/api/hello");

    expect(res.status).toBe(200);
    expect(res.body).toEqual({ message: "Hello World" });
  });

  it("response has JSON content-type header", async () => {
    const res = await request(server).get("/api/hello");
    expect(res.headers["content-type"]).toMatch(/application\/json/);
  });

  it("response body has a 'message' key of type string", async () => {
    const res = await request(server).get("/api/hello");
    expect(res.body).toHaveProperty("message");
    expect(typeof res.body.message).toBe("string");
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
2. Use mocks for external services
   - Databases, APIs, authentication can be mocked to isolate tests.
3. Test status codes and payloads
   - Ensure correct HTTP status for all possible methods and errors.
4. Unit test first, E2E later
   - Unit tests catch most logic errors quickly.
   - E2E tests can verify full API flow.

# Error Handling

## Custom Error Pages

### App Router

#### `error.tsx`

- Works like a React error boundary.
- Automatically catches both server and client-side errors inside the same route segment.
- Receives two props:
  - `error` → The actual error object.
  - `reset` → A function to retry rendering.

```tsx
// app/dashboard/error.tsx
"use client";

export default function DashboardError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div style={{ padding: "20px", background: "#fee" }}>
      <h2>Oops, dashboard failed!</h2>
      <p>{error.message}</p>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
```

This overrides the default Next.js error overlay for just `/dashboard`.

Even though your `error.tsx` is a Client Component, it still handles server-side errors.

1. **Rendering starts on the server**
   - If something fails during server rendering (e.g., DB query throws, fetch fails, code bug), Next.js catches it.
2. **Error is serialized and sent to the client**
   - Next.js passes the `error` object (with its `.message`) into your `error.tsx` component.
3. **Your `error.tsx` runs in the browser**
   - That’s why `"use client"` is required: you get the `error` and a `reset()` function to retry rendering.

#### `not-found.tsx`

- Used to define custom 404 pages (missing routes or resources).
- Can be per-route or global.
- Works with the `notFound()` helper function from `next/navigation`.
- It wont't work if `notFound()` explicityl triggered, both for global and route level.

```tsx
// app/not-found.tsx (global 404)
export default function GlobalNotFound() {
  return (
    <div style={{ padding: "20px", background: "#eef" }}>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, we couldn’t find the page you’re looking for.</p>
    </div>
  );
}
```

Now, in any route, you can trigger it manually:

```tsx
// app/blog/[id]/page.tsx
import { notFound } from "next/navigation";

export default function BlogPost({ params }: { params: { id: string } }) {
  if (params.id !== "123") {
    notFound();
  }

  return <h1>Blog Post {params.id}</h1>;
}
```

#### `global-error.tsx`

- Acts as a root-level error boundary.
- Catches any uncaught errors across the entire app.
- Unlike `error.tsx`, you must include `<html>` and `<body>`.
- It only catches errors during the initial render / top-level hydration, not route errors.
- Almost never fires in day-to-day development, so it feels “dead code” until something catastrophic happens.

```tsx
// app/global-error.tsx
"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <html>
      <body style={{ padding: "20px", background: "#fdd" }}>
        <h2>Global error occurred!</h2>
        <p>{error.message}</p>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}
```

### Pages Router

#### `pages/_error.js`

- A fallback for both SSR errors and CSR runtime errors.
- Receives `statusCode` as a prop.
- You can customize based on whether it’s `404`, `500`, etc.

```js
// pages/_error.js
function Error({ statusCode }) {
  return (
    <div style={{ padding: "20px", background: "#fee" }}>
      <h1>{statusCode ? `Error ${statusCode}` : "An error occurred"}</h1>
      <p>Something went wrong on our end.</p>
    </div>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
```

This replaces the default Next.js error screen globally.

#### `pages/404.js`

- A dedicated page for handling 404 errors.
- Automatically rendered if no route matches.

```js
// pages/404.js
export default function Custom404() {
  return (
    <div style={{ padding: "20px", background: "#eef" }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you requested does not exist.</p>
    </div>
  );
}
```

#### `pages/500.js`

- Optional.
- Handles server-side errors (500-level).
- Displayed when an SSR request crashes.

```js
// pages/500.js
export default function Custom500() {
  return (
    <div style={{ padding: "20px", background: "#fdd" }}>
      <h1>500 - Server-side Error</h1>
      <p>Sorry, something broke on our server.</p>
    </div>
  );
}
```

## Error Boundaries

### App Router

In the App Router (Next.js 13+), you don’t usually need to create your own error boundary, because Next.js provides built-in error boundaries via special files:

- `error.tsx` → Per-route error boundary.
- `global-error.tsx` → Root-level fallback.

These act like React error boundaries, but you don’t write a class component manually. Instead, you just create the special file.

#### Route-level error boundary

Imagine a dashboard page with a client component that might throw an error:

```tsx
// app/dashboard/ClientComponent.tsx
"use client";

export default function ClientComponent() {
  const handleClick = () => {
    throw new Error("Button action failed!");
  };

  return <button onClick={handleClick}>Click me</button>;
}
```

Now add a route-level error boundary:

```tsx
// app/dashboard/error.tsx
"use client";

export default function DashboardError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div style={{ padding: "20px", background: "#fee" }}>
      <h2>Something went wrong in Dashboard!</h2>
      <p>{error.message}</p>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
```

- If the button throws an error, instead of crashing the entire app, `error.tsx` shows the fallback UI.
- Clicking Try again calls `reset()`, which re-renders the segment.

#### Global error boundary

- If you want a single error page for the entire app use `gloabal-error.tsx`

### Pages Router

In the Pages Router, Next.js does not provide built-in React error boundaries.

- `pages/_error.js` handles SSR and generic errors, but not runtime errors in React components.
- So you must create your own error boundary using React’s `componentDidCatch` or `getDerivedStateFromError`.

#### Custom ErrorBoundary component

```tsx
// components/ErrorBoundary.js
import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render shows fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log error to monitoring service if needed
    console.error("ErrorBoundary caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: "20px", background: "#fee" }}>
          <h2>Something went wrong!</h2>
          <p>{this.state.error?.message}</p>
        </div>
      );
    }
    return this.props.children;
  }
}
```

Usage in a page

```tsx
// pages/dashboard.js
import ErrorBoundary from "../components/ErrorBoundary";

function ClientComponent() {
  const handleClick = () => {
    throw new Error("Crash in client component!");
  };

  return <button onClick={handleClick}>Crash me</button>;
}

export default function DashboardPage() {
  return (
    <ErrorBoundary>
      <h1>Dashboard</h1>
      <ClientComponent />
    </ErrorBoundary>
  );
}
```

- If the button throws an error, the `ErrorBoundary` component catches it and renders fallback UI.
- Without it, the entire app would unmount in the client.

## Errors in SSR

### App Router

- When rendering a server component or fetching data via `fetch()` inside `page.js` or `layout.js`, errors can happen.
- If an error occurs during SSR:
  - Next.js will automatically catch it.
  - It will show your `error.js` file (local error boundary) if present.
  - If no local boundary exists, the error bubbles up to the nearest parent error boundary.
  - If none exist, the global error page is shown.

Define an error boundary:

```tsx
// app/dashboard/error.tsx
"use client";

export default function DashboardError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <p>{error.message}</p>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
```

- On first SSR render, the error is caught and shown via `error.tsx`.
- If a client-side navigation later hits the same error, it’s also caught here.

### Pages Router

- Errors during SSR typically occur in: `getServerSideProps`, `getStaticProps`
- If you throw an error, Next.js will render the error page (pages/\_error.js).

```ts
// pages/dashboard.js
export async function getServerSideProps() {
  try {
    const res = await fetch("https://api.example.com/data");

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    return { props: { data } };
  } catch (err) {
    return {
      notFound: true, // or redirect to custom error page
    };
  }
}
```

- Return `{ notFound: true }` → show `404`.
- Return `{ redirect: { destination: "/error" } }` → redirect.
- Or let Next.js show `_error.js`.

## Errors in CSR

### App Router

Errors can occur during:

- Client navigation (moving between pages with `Link`).
- Client components (event handlers, React hooks, etc.).
- Since App Router uses React error boundaries, the same `error.tsx` will catch them.

```tsx
// app/dashboard/ClientComponent.tsx
"use client";

export default function ClientComponent() {
  const handleClick = () => {
    throw new Error("Button click failed!");
  };

  return <button onClick={handleClick}>Break me</button>;
}
```

If the button is clicked, the error will be caught by the nearest `error.tsx`.

### Pages Router

For client-side errors (button clicks, component crashes, navigation issues), you must use React error boundaries manually.

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

### When to Use Which

- `next.config.js rewrites` → Simple, lightweight, good for local dev to avoid CORS.
- API route proxy → More control, when you need to add logic (auth, caching, validation).

# Question

1. Slower time to first paint (TTFP).
2. No loading state → Content is available immediately.
3. Fast Time to First Paint (TTFP).
4. Static Site Generation (SSG) means that a page’s HTML is pre-rendered at build time (during deployment). The generated HTML, along with JSON data if needed, is then cached and served to every user.
   - The server (or build process) creates the HTML ahead of time.
   - The browser just loads the static HTML and hydrates it with React for interactivity.
5. SEO matters (pages are fully rendered upfront).
6. You want very fast load times (served from CDN).
7. You can tolerate waiting until the `next build` to see content updates.
8. Pages are converted into static HTML + JSON.
9. React hydrates the static HTML → makes the page interactive.
10. Publicly cached data
    - Example: News sites that rebuild periodically (with Incremental Static Regeneration).
11. Super fast (served from CDN, no server computation).
12. Scales well (static files, no database calls).
13. Requires redeploy (or ISR) to reflect new data.
14. React hydrates → adds interactivity.
15. Not as fast as CDN-served static files.
16. Scaling requires more server resources.
17. Data is embedded into the HTML/JSON and reused on every request.
18. Updates are infrequent, so build time or ISR is acceptable.
19. served as serverless functions.
20. you can inject server-side logic through Next.js lifecycle functions.
21. Supports streaming and Suspense for better performance.
22. Automatic caching and revalidation with `fetch()`.
23. Use SSR/SSG for the base page Use CSR for parts of the page - why?
24. Automatic width/height handling – Prevents layout shift (important for Core Web Vitals).
25. CDN optimization – If deployed on Vercel, images are cached and served globally.
26. It automatically optimizes images based on device size, format, and caching. - how handle caching? what does caching means here?
27. what is lazy loading and webP
28. style={{ objectFit: "cover" }}
29. Custom fonts can block text rendering → causing FOIT (Flash of Invisible Text) or FOUT (Flash of Unstyled Text).
30. Automatic `font-display: swap` ensures fallback text is shown → improves perceived speed and avoids layout shift.
31. Use canonical URLs (`<link rel="canonical">`) to prevent duplicate content issues.
32. how `NextResponse.rewrite()` work?
