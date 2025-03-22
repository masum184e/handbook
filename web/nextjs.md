# Contents

- [Introduction](#introduction)
- [Project Structure](#project-structure)
- []()
- []()

# Introduction

Next.js is a React framework that enables server-side rendering (SSR) and static site generation (SSG) for building fast and SEO-friendly web applications.

## Key Features

- **Hybrid Rendering (SSR + SSG)** – It allows both Server-Side Rendering (SSR) and Static Site Generation (SSG) for better performance and SEO.
- **Automatic Code Splitting** – It loads only the necessary JavaScript for each page, improving performance.
- **File-based Routing** – Each file in the pages/ directory automatically becomes a route.
- **Built-in API Routes** – You can create backend endpoints using pages/api/.
- **Optimized Images** – It provides an next/image component for efficient image handling.
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

   - No need to install React Router; Next.js handles routing based on the pages/ folder structure.

4. **API Routes (Full Stack Capabilities)**

   - With pages/api/, Next.js can handle backend logic without needing an external server.

5. **Scalability & Flexibility**

   - Supports static generation, server rendering, and hybrid models based on project needs.

## Comparison

React is a JavaScript library for building UI components, while Next.js is a framework built on top of React that provides extra features like server-side rendering (SSR), static site generation (SSG), and API routes.

### Fetching Data With - React

```jsx
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

**⚡ Downsides of React (CSR)**

- The page loads without content initially (bad for SEO).
- JavaScript must execute before data is displayed.
- Slower time to first paint (TTFP).

### Fetching Data With - Next.js

```jsx
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

**✅ Benefits of Next.js (SSR)**

- Pre-rendered content → Better for SEO.
- No loading state → Content is available immediately.
- Fast Time to First Paint (TTFP).

# Project Structure

## Top-level folders

Top-level folders are used to organize your application's code and static assets.

- `app` - App Router
- `pages` - Pages Router
- `public` - Static assets to be served
- `src` - Optional application source folder

## Top-level files

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

# Image Optimization

## `<Image>` Component

It automatically optimizes images based on device size, format, and caching.

```jsx
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

Instead of setting a fixed width and height, use `layout="responsive"` to make the image adjust dynamically.

```jsx
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

```jsx
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

```js
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

```jsx
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

```jsx
<Image
  src="/example.jpg"
  alt="Blurred Image"
  width={500}
  height={300}
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQ..."
/>
```

# Server-Side Rendering

Next.js provides different rendering strategies, including Server-Side Rendering (SSR) and Static Site Generation (SSG), which determine how a page's content is generated and delivered to the client.

Use `getServerSideProps` when data is frequently changing such news update, use `getStaticProps` when data is not frequently changing such showing details of a product, post etc. it store the data in the cache after very first render.

## Server-Side Rendering (SSR)

SSR means that the HTML for a page is generated dynamically on each request at runtime. This is useful for pages that require **real-time or frequently updated** data.

### How SSR Works

1. A request is made to the server.
2. The server fetches the required data.
3. The HTML is generated on the server with the fetched data.
4. The fully rendered HTML is sent to the browser.
5. The browser displays the content.

### When to Use SSR

- Pages that need real-time data (e.g., stock prices, news updates, user-specific content).
- Content that changes frequently and cannot be cached effectively.
- Personalization based on request parameters or authentication.

### Example

```jsx
export async function getServerSideProps() {
  // Fetching data from an API at request time
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await res.json();

  return {
    props: { post: data }, // Will be passed as props to the component
  };
}

const ServerSidePage = ({ post }) => {
  return (
    <div>
      <h1>Server-Side Rendered Page</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};
```

- `getServerSideProps` is a special function in Next.js that runs on the server before the page is delivered.
- It fetches data at the time of the request and returns it as props.
- The page is rendered with fresh data on every request.
- it fetches data on each request.

### Trade-Offs

1. **Slower Page Loads Compared to Static Pages:** Since pages are generated on the server at request time, there is more processing overhead.
2. **Higher Server Load:** SSR puts more load on the server since every request triggers a new data fetch and page generation.
3. **Caching is Harder:** Since SSR pages change on every request, caching them is difficult compared to SSG. CDNs (like Vercel or Cloudflare) work better with static pages than server-rendered pages.
4. **Increased Complexity:** Implementing SSR requires handling server logic, database connections, and authentication on the server. This can make the code harder to maintain.

## Static Site Generation

SSG means that the HTML for a page is pre-generated at build time and served as a static file. The content remains the same until the site is rebuilt.

### How SSG Works

1. At build time, Next.js fetches the required data.
2. It pre-generates the HTML with this data.
3. The static HTML files are stored on a CDN or a server.
4. When a user requests the page, the static file is served instantly.

### When to Use SSG

- Pages with static content that do not need frequent updates.
- Blog posts, marketing pages, documentation, landing pages.
- Improved performance since pre-generated HTML loads instantly.

### Example

```jsx
export async function getStaticProps() {
  // Fetching data at build time
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await res.json();

  return {
    props: { post: data }, // Will be passed as props to the component
  };
}

const StaticSitePage = ({ post }) => {
  return (
    <div>
      <h1>Static Site Generated Page</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};
```

- `getStaticProps` runs at build time and fetches data.
- The page is pre-generated and served as a static file.
- Every user gets the same HTML, improving performance.

## Differences

| Feature                | SSR (Server-Side Rendering)                              | SSG (Static Site Generation)              |
| ---------------------- | -------------------------------------------------------- | ----------------------------------------- |
| When HTML is Generated | On every request (runtime)                               | At build time (before deployment)         |
| Performance            | Slower due to real-time generation                       | Faster since pages are pre-built          |
| Use Case               | Dynamic data that changes often                          | Static data that rarely updates           |
| SEO Friendly?          | ✅ Yes (search engines see fresh content)                | ✅ Yes (pre-generated content is indexed) |
| User Personalization?  | ✅ Yes (user-specific data possible-**Authentication** ) | ❌ No (same content for all users)        |

## `getServerSideProps`

It runs on the server at request time, meaning that every time a user requests a page, the data is fetched and the page is dynamically generated before being sent to the client.

### How Works

1. A user requests a page (e.g., `/products`).
2. The server runs `getServerSideProps` before rendering the page.
3. It fetches data from an API, database, or any external source.
4. The data is passed as `props` to the page component.
5. The page is rendered and sent to the user.

### When to

**✅ Use getServerSideProps when:**

- The data changes frequently and needs to be fresh on every request (e.g., news articles, stock prices).
- You need personalized content based on the user’s session or authentication (e.g., user dashboard).
- SEO is important, and you need server-rendered pages for search engines.

**❌ Avoid using getServerSideProps when:**

- The data does not change often (use Static Site Generation (SSG) instead).
- The page is slow due to API response time (SSR can cause performance issues).
- The page does not require real-time updates (use Incremental Static Regeneration (ISR) instead).

## `getStaticProps`

`getStaticProps` is a special Next.js function used for Static Site Generation (SSG). It fetches data at build time and pre-renders the page as static HTML. This approach makes pages super fast since they don’t need to fetch data on every request.

- **Data Fetching at Build Time:** The API request happens only once during build time.
- **Super Fast Page Loads:** Since the page is pre-built, it loads instantly without extra API calls.
- **SEO-Friendly:** The full page is rendered as HTML before being served to users.

### How Works

1. Next.js runs getStaticProps at build time.
2. It fetches data from an API, database, or CMS.
3. The page is pre-rendered into a static HTML file.
4. When users visit the page, the static HTML is instantly served (no waiting for API calls)

## 💡 When to Use SSR vs. SSG vs. CSR?

| Feature            | SSR (getServerSideProps)   | SSG (getStaticProps) | CSR (Client-Side Rendering) |
| ------------------ | -------------------------- | -------------------- | --------------------------- |
| Page Load Speed    | Slower                     | Fast                 | Fast after initial load     |
| SEO Optimized?     | ✅ Yes                     | ✅ Yes               | ❌ No                       |
| Personalized Data? | ✅ Yes                     | ❌ No                | ✅ Yes                      |
| Server Load        | High                       | Low                  | None                        |
| Best Use Cases     | Dashboards, Real-time Data | Blogs, Landing Pages | Web Apps, User Interactions |

## Dynamic Static Pages

getStaticPaths is a special Next.js function used along with getStaticProps to generate dynamic static pages at build time.

- It tells Next.js which dynamic routes should be pre-rendered as static HTML.
- Works best for SSG (Static Site Generation) where data doesn't change frequently.
