React forwards API requests to the backend as if they came from the same origin.

- So instead of: `fetch("http://localhost:5000/api/users")`
- You can write: `fetch("/api/users")`

**Architecture**

```
React (localhost:3000)
   |
   |  /api/users
   v
React Dev Proxy
   |
   |  http://localhost:5000/api/users
   v
Node / Express API
```

## Proxying in Create React App

1. Add proxy in `package.json`

```json
{
  "name": "client",
  "version": "0.1.0",
  "proxy": "http://localhost:5000"
}
```

2. Call API without backend URL

```js
fetch("/api/users")
  .then((res) => res.json())
  .then((data) => console.log(data));
```

What happens

- React sees /api
- Forwards request to localhost:5000
- Express handles it normally

### Proxying with Vite

CRA is fading; Vite is common now: `vite.config.js`

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
      },
    },
  },
});
```

Vite forwards `/api/*` → Node backend.

### Proxying specific routes only

Only proxy API routes, not everything:

```js
proxy: {
  "/api": {
    target: "http://localhost:5000",
  }
}
```

## Proxy vs CORS
| Feature                    | Proxy | CORS    |
| -------------------------- | ----- | ------- |
| Used in dev                | ✅     | ✅       |
| Used in prod               | ❌     | ✅       |
| Solves browser restriction | ✅     | ✅       |
| Config location            | React | Express |
| Hides backend URL          | ✅     | ❌       |

In real MERN apps:

- Dev → proxy
- Prod → CORS + reverse proxy (Nginx, Vercel, etc.)
