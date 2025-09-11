# Contents

- [Introduction](#introduction)
  - [Key Features](#key-features)
  - [Why Use Next.js](#why-use-nextjs)
  - [Comparison](#comparison)
- [Project Structure](#project-structure)
  - [Top-level Folders](#top-level-folders)
  - [Top-level Files](#top-level-files)
  - [Routing Files](#routing-files)
- [Image Optimization](#image-optimization)
- [Rendering](#rendering)
  - [Client Side Rendering](#client-side-rendering)
  - [Pre Rendering](#pre-rendering)
- [Client Side Rendering](#client-side-rendering)
  - [When to use](#when-to-use-csr-in-nextjs)
  - [How to use](#how-to-use-csr-in-nextjs)
  - [Combination](#combination)
- [Static Site Generation](#static-site-generation)
  - [What is `getStaticProps`?](#what-is-getstaticprops)
  - [What is `getStaticPaths`?](#what-is-getstaticpaths)
  - [Incremental Static Regeneration](#incremental-static-regeneration)
- [Server Side Rendering](#server-side-rendering)
  - [What is `getServerSideProps`?](#what-is-getserversideprops)
  - [How SSR Works](#how-ssr-works)
  - [When to use SSR](#when-to-use-ssr)
  - [Key Features of SSR](#key-features-of-ssr)
  - [Example](#example)
- [How Helps in SEO](#how-helps-in-seo)
  - [Rendering](#rendering)
  - [Image Optimization](#image-optimization-1)
- [Styling](#styling)
  - [Modules](#modules)
  - [Global Styles](#global-styles)
  - [Tailwind CSS](#tailwind-css)

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

   ```jsx
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

   ```jsx
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

Client-Side Rendering (CSR) in Next.js means that the page's content is generated on the user's browser rather than on the server. In CSR, Next.js sends a minimal HTML file and JavaScript bundle to the client, and then React hydrates the page in the browser.

## When to Use CSR in Next.js?

CSR is useful in scenarios where:

1. **User Interactivity is Required:** If your page heavily relies on client-side interactions (e.g., dashboards, interactive forms, charts).
2. **Data is User-Specific:** If the data being displayed is user-specific and does not need to be pre-rendered on the server (e.g., user dashboards, personalized feeds).
3. **Avoiding Frequent Server Requests:** If the data changes frequently and fetching it on the server would lead to unnecessary re-renders.
4. **Third-Party API Calls from the Client:** If you need to fetch data from an external API that does not support server-side fetching (e.g., some authentication flows).
5. **Reducing Server Load:** CSR shifts the load to the client, reducing the burden on the server.

## How to Use CSR in Next.js?

Client-Side Rendering (CSR) in Next.js means fetching and rendering data only on the client-side rather than pre-rendering it on the server. This is done using React hooks like `useState` and `useEffect`. CSR is useful when:

- The data is user-specific or personalized.
- You want to reduce the load on the server.
- The data changes frequently (e.g., real-time data).
- SEO is not a priority (as the content is rendered dynamically in the browser).

### Example

Let's create a simple Next.js page that fetches user data from an API using CSR.

**Steps to Implement CSR in Next.js**

1. Use React's `useState` to manage the state.
2. Use `useEffect` to fetch data when the component mounts.
3. Render the fetched data on the client.

```jsx
"use client";
import { useState, useEffect } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
```

- `useState([])` → Initializes users as an empty array and loading as true.
- `useEffect` Hook → Runs once when the component mounts to fetch user data.
- **Fetch Request** → Calls the API (jsonplaceholder.typicode.com/users) and updates the state.
- **Conditional Rendering** → Displays "Loading..." until the data is fetched.
- **Render Data** → Loops through the users array and displays the list.

## Combination

| Rendering Type                                  | When to Use                                            | Example                                               |
| ----------------------------------------------- | ------------------------------------------------------ | ----------------------------------------------------- |
| **CSR (Client-Side Rendering)**                 | User-specific, frequently updated data, interactive UI | Dashboards, Chat apps                                 |
| **SSR (Server-Side Rendering) + CSR**           | SEO-sensitive, personalized data                       | News articles with user comments                      |
| **SSG (Static Site Generation) + CSR**          | Static content with dynamic client-side updates        | Blog with real-time comments                          |
| **ISR (Incremental Static Regeneration) + CSR** | Mix of static and dynamic content                      | E-commerce product pages with real-time stock updates |

### SSR for Blog Posts + CSR for Comments

```jsx
// pages/blog/[id].js
import { useState, useEffect } from "react";

// Fetch post data on the server (SSR)
export async function getServerSideProps(context) {
  const { id } = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();

  return { props: { post } };
}

export default function BlogPost({ post }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch comments on the client side (CSR)
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
      <h1>{post.title}</h1>
      <p>{post.body}</p>

      <h2>Comments</h2>
      {loading ? (
        <p>Loading comments...</p>
      ) : (
        comments.map((comment) => (
          <div key={comment.id}>
            <strong>{comment.name}</strong>: {comment.body}
          </div>
        ))
      )}
    </div>
  );
}
```

- SSR (`getServerSideProps`) pre-renders blog content for SEO.
- CSR (`useEffect`) fetches comments dynamically on the client side.
- This ensures faster initial loading while allowing dynamic updates.

| Combination   | Best Use Case                            | Example                               |
| ------------- | ---------------------------------------- | ------------------------------------- |
| **SSR + CSR** | SEO-friendly pages with real-time data   | Blogs with live comments              |
| **SSG + CSR** | Static pages with dynamic updates        | Product pages with live stock updates |
| **ISR + CSR** | Partially static, but updated frequently | News articles with real-time likes    |

# Static Site Generation

Static Site Generation (SSG) allows you to pre-render pages at build time, meaning the HTML is generated once and served to users as a static file. This makes your website faster and more SEO-friendly.

## What is `getStaticProps`?

`getStaticProps` is a special Next.js function used to fetch data at build time and pass it as props to a page component. This is useful for content that doesn’t change frequently, such as blog posts, product pages, or documentation.

### Key Features:

- Runs only at build time – It does not execute on every request.
- Used for fetching external or local data – e.g., from APIs, databases, or local files.
- Improves performance and SEO – Since pages are pre-generated, they load instantly.
- Supports revalidation (`revalidate`) – Allows rebuilding the page at a set interval without needing a full site rebuild.

### Example

```jsx
import React from "react";

const Home = ({ posts }) => {
  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

// getStaticProps fetches data at build time
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return {
    props: { posts }, // Pass the data to the component as props
    revalidate: 10, // (optional) Rebuild the page every 10 seconds
  };
}

export default Home;
```

### Benefits of `getStaticProps`

- **Fast Loading**: Since pages are generated ahead of time, they load instantly.
- **SEO-Friendly**: Pre-rendered content helps with search engine indexing.
- **Efficient**: The API call is made only once at build time instead of every request.
- **Incremental Static Regeneration (ISR)**: With `revalidate`, you can update pages without rebuilding the whole site.

### When to Use `getStaticProps`?

| Use Case                                | Should You Use `getStaticProps`? |
| --------------------------------------- | -------------------------------- |
| **Blog posts**                          | ✅ Yes                           |
| **Product pages**                       | ✅ Yes                           |
| **User dashboards**                     | ❌ No (Use `getServerSideProps`) |
| **Real-time data (e.g., stock prices)** | ❌ No (Use client-side fetching) |

## What is `getStaticPaths`?

When working with static site generation (SSG), sometimes you need to create multiple pages dynamically based on external data. This is where `getStaticPaths` comes in!

`getStaticPaths` is a special Next.js function used to pre-generate dynamic pages at build time. It works **together with** `getStaticProps` to generate static pages for each dynamic route (e.g., `/posts/[id]` for individual blog posts).

### Key Features

- Pre-generates pages dynamically based on available data.
- Works with `getStaticProps` to fetch data for each dynamic page.
- Improves performance by serving static pages instead of generating them on request.
- Supports Incremental Static Regeneration (ISR) for automatic page updates.

### Example

Let’s say we have a list of blog posts, and each post has its own dynamic page (`/posts/[id]`). We will:

1. Fetch all blog post IDs using `getStaticPaths` to generate dynamic routes.
2. Fetch post details using `getStaticProps` for each page.
3. Render the blog post page with static content.

```jsx
import React from "react";

const Post = ({ post }) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

// Generate all possible paths dynamically
export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() }, // Must be a string
  }));

  return {
    paths, // Defines the pages to generate
    fallback: "blocking", // Handle non-prebuilt pages
  };
}

// Fetch post data based on the dynamic route
export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post = await res.json();

  return {
    props: { post },
    revalidate: 10, // Update every 10 seconds (ISR)
  };
}

export default Post;
```

**Generating Dynamic Routes with `getStaticPaths`**

- Fetch all blog post IDs from an API.
- Convert each post ID into a dynamic route (`/posts/1`, `/posts/2`, etc.).
- Return an array of `params` that Next.js uses to pre-generate pages.
- The `fallback: "blocking"` setting allows Next.js to generate new pages on demand if they weren’t prebuilt.

**Fetching Data for Each Page with `getStaticProps`**

- `params.id` contains the dynamic route parameter (e.g., `1`, `2`).
- Fetch the specific blog post from the API.
- Return the post data as props to render the page.
- `revalidate: 10` enables Incremental Static Regeneration (ISR).

### Handling Fallback Options in `getStaticPaths`

| Option       | Behavior                                                                       |
| ------------ | ------------------------------------------------------------------------------ |
| `false`      | Returns a 404 for pages not generated at build time.                           |
| `true`       | Shows a loading state while generating the page on-demand.                     |
| `"blocking"` | Waits until the new page is generated before serving it (recommended for SEO). |

### Benefits of `getStaticPaths`

- **Pre-generates dynamic pages** for better performance.
- **Reduces server load** by serving static files.
- **Supports Incremental Static Regeneration (ISR)** to update content without rebuilding the site.
- **SEO-friendly** since pages are fully rendered before being indexed.

### When to Use `getStaticPaths`?

| Use Case                                 | Should You Use `getStaticPaths`?  |
| ---------------------------------------- | --------------------------------- |
| **Blog post pages**                      | ✅ Yes                            |
| **Product detail pages**                 | ✅ Yes                            |
| **User profiles**                        | ✅ Yes, but only for public users |
| **Live data pages (e.g., stock prices)** | ❌ No (Use `getServerSideProps`)  |

### Conclusion

- Use `getStaticPaths` to pre-generate dynamic routes at build time.
- Use `getStaticProps` to fetch data for each page.
- Combine with ISR (`revalidate`) for automatic updates.
- Set `fallback: "blocking"` for on-demand page generation.

## Incremental Static Regeneration

Incremental Static Regeneration (ISR) is a Next.js feature that allows you to update static pages after deployment without needing to rebuild the entire website.

With ISR, you can:

- Pre-generate static pages at build time.
- Update them automatically in the background without redeploying.
- Serve fast, pre-built pages while keeping them fresh with automatic revalidation.

### How ISR Works

ISR works with getStaticProps, using the revalidate option.

### Lifecycle of ISR:

1. **First Request**: The page is served from the cache (static HTML).
2. **After revalidate Time Expires:**
   -The next request triggers a background regeneration.

- The old page is served while the new one is built.
- Once ready, the new page replaces the old one.

3. **Subsequent Requests:** Serve the updated static page.

### How ISR Works in Action

1. A user visits `/posts/1`.
2. The page is served from the static cache.
3. After 10 seconds, another visitor requests `/posts/1`.
4. Next.js fetches fresh data in the background and updates the page.
5. All future requests get the new version of `/posts/1`.

# Server Side Rendering

Server-Side Rendering (SSR) in Next.js refers to the process where a webpage is pre-rendered on the server at request time. This means that every time a user requests a page, the server generates the HTML dynamically before sending it to the client. This helps improve performance, SEO, and ensures that data is always up-to-date.

## What is `getServerSideProps`?

Use `getServerSideProps` when data is frequently changing such news update, use `getStaticProps` when data is not frequently changing such showing details of a product, post etc. it store the data in the cache after very first render.

## How SSR Works

1. A request is made to the server.
2. The server fetches the required data.
3. The HTML is generated on the server with the fetched data.
4. The fully rendered HTML is sent to the browser.
5. The browser displays the content.

## When to Use SSR

- Pages that need real-time data (e.g., stock prices, news updates, user-specific content).
- Content that changes frequently and cannot be cached effectively.
- Personalization based on request parameters or authentication.

## Key Features of SSR

1. **Real-time Data Fetching** – Data is fetched at request time, ensuring fresh content for each request.
2. **Improved SEO** – Since the page is rendered on the server, search engines can easily index the content.
3. **Slower Initial Load** – SSR can be slower than static generation because it requires generating the page at every request.

## Example

```jsx
// pages/users.js

export async function getServerSideProps() {
  // Fetch data from an API
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  // Return data as props to be used in the component
  return {
    props: { users },
  };
}

const UsersPage = ({ users }) => {
  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
```

- `getServerSideProps` is a special function in Next.js that runs on the server before the page is delivered.
- It fetches data at the time of the request and returns it as props.
- The page is rendered with fresh data on every request.
- it fetches data on each request.

**Fetching Single User:**

```jsx
// pages/users/[id].js

export async function getServerSideProps(context) {
  const { id } = context.params; // Get the ID from the URL
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const user = await response.json();

  return {
    props: { user }, // Pass the fetched user as props
  };
}

const UserPage = ({ user }) => {
  return (
    <div>
      <h1>User Details</h1>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Phone:</strong> {user.phone}
      </p>
      <p>
        <strong>Website:</strong> {user.website}
      </p>
    </div>
  );
};

export default UserPage;
```

# Router

## `pages` directory

The `pages` directory plays a crucial role in defining the structure of the application. It follows a file-based routing system, where each file inside the pages directory automatically becomes a route in your application.

### Routing

- Each `.js`, `.jsx`, `.ts`, or `.tsx` file inside the `pages` directory represents a route.
- The folder structure determines the URL path.
- The `pages/api/` directory is special for API routes.

**Example:**

```
/pages
  ├── index.js           →  '/'
  ├── about.js           →  '/about'
  ├── contact.js         →  '/contact'
  ├── blog
  │   ├── index.js       →  '/blog'
  │   ├── post.js        →  '/blog/post'
  ├── api
  │   ├── hello.js       →  '/api/hello'
```

### Special File

1. **`_app.js` - Custom App Component:** Wraps all pages to maintain global styles, state, or layout.

```jsx
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
```

2. **`_document.js` - Custom HTML Structure:** Used for modifying the <html> and <body> structure.

```jsx
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

## `app` router

With Next.js 13+, a new App Router was introduced, replacing the traditional `pages` directory with a more flexible and powerful routing system using the `app` directory. This new system is built on React Server Components (RSC) and introduces features like layouts, loading states, server actions, and streaming.

### How Work

- The `app` directory follows a folder-based routing system (like `pages/`).
- Each folder inside `app/` represents a route, and a `page.js` (or `page.tsx`) file inside it is rendered as the page.
- Supports Server Components by default (unlike `pages/` which defaults to Client Components).
- Introduces layouts, loading, and error handling.

#### Structure

```
/app
  ├── layout.js        →  Root layout for all pages
  ├── page.js          →  '/'
  ├── about
  │   ├── page.js      →  '/about'
  ├── blog
  │   ├── page.js      →  '/blog'
  │   ├── [id]
  │   │   ├── page.js  →  '/blog/:id' (Dynamic Route)
  ├── loading.js       →  Loading state for all routes
  ├── error.js         →  Error handling for all routes
  ├── api
  │   ├── route.js     →  API route at '/api'
```

### Features

1. **File-Based Routing:** Each folder is a route, and `page.js` inside defines the actual page.
2. **Layouts:** Layouts wrap multiple pages inside a route and persist across navigation.
3. **Server Components:** Pages are server-rendered by default, but you can use `"use client"` to enable client-side behavior.
4. **Streming & Suspense:** Next.js supports streaming and React Suspense for loading states and progressive rendering.
5. **API Routes:** API routes now use `route.js` and support full HTTP methods.

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

# How Helps in SEO

## Rendering

In CSR content(html) is rendered on the browser, then javascript executes, then javascript render the component. Browser don't consider javascript for SEO, so during SEO browser have a empty html.

While in next.js pre-renders pages on the server before sending them to the browser, this ensures search engine can easily index the page content.

In CSR, data fetching response json, but in SSR data fetching response html.

## Image Optimization

Optimized images reduce page load time, improving user experience and SEO.

# Styling

## Modules

CSS Modules allow you to write styles that are scoped locally to the component where they are imported. This avoids conflicts between class names and ensures styles do not unexpectedly affect other parts of your application. CSS Module files must have the `.module.css` extension.

1. Create a file `Button.module.css` inside the `styles` or `components` folder:

```jsx
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

```jsx
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

```jsx
body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  color: #333;
  line-height: 1.6;
}
```

2. Import Global Styles in `_app.js`

Next.js only allows global styles to be imported inside `pages/_app.js`.

```jsx
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

```jsx
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
const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler() // Next.js request handler

app.prepare().then(() => {
  const server = express()

  // Example custom route
  server.get('/p/:id', (req, res) => {
    const actualPage = '/post'
    const queryParams = { id: req.params.id }
    app.render(req, res, actualPage, queryParams)
  })

  // API-like route handled by Express
  server.get('/hello', (req, res) => {
    res.send('Hello from custom server!')
  })

  // Default handler (all Next.js pages & static files)
  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('🚀 Server running on http://localhost:3000')
  })
})
```

- `next({ dev })` → Initializes Next.js in dev or production mode.
- `app.prepare()` → Prepares Next.js to handle requests.
- `handle` → Next.js’s built-in request handler (used for normal pages/static files).
- `server.get('/p/:id')` → Custom Express route mapping `/p/:id` → Next.js `/post` page.
- `server.all('*')` → For all other routes, fall back to Next.js default handler.

`pages/post.js`
```ts
export default function Post({ id }) {
  return <h1>Post ID: {id}</h1>
}

Post.getInitialProps = async ({ query }) => {
  return { id: query.id }
}
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
| Vercel support        | ✅ Yes                         | ❌ No                               |
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
  reactStrictMode: true,   // Enable React strict mode
  swcMinify: true,         // Use SWC for faster builds
}

module.exports = nextConfig
```
This enables React strict mode (catches potential problems) and SWC minification for faster builds.

### Common Custom Configurations
1. ***Environment Variables:** You can define public and server-side environment variables.
```ts
const nextConfig = {
  env: {
    CUSTOM_API_URL: 'https://api.example.com',
  },
}

module.exports = nextConfig
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
      use: ['@svgr/webpack'],
    })

    return config
  },
}

module.exports = nextConfig
```
This lets you import SVGs as React components:

```ts
import Logo from '@/public/logo.svg'
export default function Home() {
  return <Logo />
}
```
3. **Redirects:** Define server-side redirects.

```ts
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/old-blog/:slug*',
        destination: '/new-blog/:slug*',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
```

Visiting `/old-blog/hello-world` → Redirects to `/new-blog/hello-world`.
4. **Rewrites:** Rewrites allow you to mask an API endpoint with a different URL.
```ts
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://external-api.com/:path*',
      },
    ]
  },
}

module.exports = nextConfig
```
Visiting `/api/users` → Internally fetches from `https://external-api.com/users`.

5. **Headers:** Set custom HTTP headers (e.g., security headers).
```ts
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
        ],
      },
    ]
  },
}

module.exports = nextConfig
```

This applies headers to all routes.

6. **Image Optimization:** Control domains allowed for `<Image />`.
```ts
const nextConfig = {
  images: {
    domains: ['example.com', 'cdn.example.org'],
  },
}

module.exports = nextConfig
```
Lets you safely load images from external domains.

7. **Internationalization (i18n):** Enable multiple locales.
```ts
const nextConfig = {
  i18n: {
    locales: ['en', 'fr', 'de'],
    defaultLocale: 'en',
  },
}

module.exports = nextConfig
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
import { NextResponse } from 'next/server'

export function middleware(req) {
  const token = req.cookies.get('token')?.value
  const url = req.nextUrl

  // Redirect unauthenticated users
  if (!token && url.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  // Example role-based protection
  if (token === 'admin' && url.pathname.startsWith('/user')) {
    return NextResponse.redirect(new URL('/admin', req.url))
  }

  return NextResponse.next()
}

// Apply only on selected paths
export const config = {
  matcher: ['/dashboard/:path*', '/user/:path*'],
}
```
### A/B Testing (Feature Flags)

Split traffic for experimentation.
```ts
// middleware.js
import { NextResponse } from 'next/server'

export function middleware(req) {
  const url = req.nextUrl.clone()

  // Random A/B bucket
  const variant = Math.random() < 0.5 ? 'A' : 'B'

  if (url.pathname === '/experiment') {
    url.pathname = `/experiment-${variant}`
    return NextResponse.rewrite(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/experiment'],
}
```
- Visitors to `/experiment` are randomly assigned to `/experiment-A` or `/experiment-B`.
- Useful for A/B testing or gradual rollouts.

### Geo-Location Based Routing

You can personalize experiences based on user location (using headers like `x-vercel-ip-country`).

```ts
// middleware.js
import { NextResponse } from 'next/server'

export function middleware(req) {
  const country = req.geo?.country || 'US'
  const url = req.nextUrl.clone()

  if (url.pathname === '/') {
    if (country === 'FR') url.pathname = '/fr'
    else if (country === 'DE') url.pathname = '/de'
    else url.pathname = '/en'

    return NextResponse.rewrite(url)
  }

  return NextResponse.next()
}
```
### Custom Headers for Security

You can set security headers globally.
```ts
// middleware.js
import { NextResponse } from 'next/server'

export function middleware(req) {
  const res = NextResponse.next()

  res.headers.set('X-Frame-Options', 'DENY')
  res.headers.set('X-Content-Type-Options', 'nosniff')
  res.headers.set('X-XSS-Protection', '1; mode=block')

  return res
}

export const config = {
  matcher: ['/((?!api).*)'], // Apply only to non-API routes
}
```
### Chained Middleware (Composability Pattern)

Organize middleware logic into reusable functions.
```ts
// middleware.js
import { NextResponse } from 'next/server'

// Middleware utils
function withAuth(req) {
  const token = req.cookies.get('token')?.value
  if (!token) {
    return NextResponse.redirect(new URL('/login', req.url))
  }
}

function withLogger(req) {
  console.log(`[LOG] ${req.method} ${req.nextUrl.pathname}`)
}

// Main middleware
export function middleware(req) {
  return (
    withAuth(req) || // If withAuth returns a response, stop
    withLogger(req) ||
    NextResponse.next()
  )
}

export const config = {
  matcher: ['/dashboard/:path*'],
}
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
          <h2 className="text-red-600 text-xl font-bold">Something went wrong.</h2>
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
        source: "/api/:path*",   // when frontend requests /api/*
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
          <li key={p.id}>{p.name} - ${p.price}</li>
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
