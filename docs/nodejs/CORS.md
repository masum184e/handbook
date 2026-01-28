CORS (Cross-Origin Resource Sharing) is a browser security mechanism.

In MERN:

- React dev server → http://localhost:3000
- Express API → http://localhost:5000

Different origin = browser blocks requests by default

CORS allows your Express API to explicitly say:
“Yes, this React app is allowed to talk to me.”

## What counts as a “different origin”?

An origin differs if any of these change:

- Protocol (`http` vs `https`)
- Domain (`localhost` vs `127.0.0.1`)
- Port (`3000` vs `5000`)

So React → Express in MERN always needs CORS.

## How CORS fits into RESTful API design

CORS is not part of REST itself, but:

- It protects REST APIs
- It controls who can consume your API
- It is enforced by browsers, not Node.js

Design goal:

> Allow trusted frontends, block everything else.

## How CORS fits into RESTful API design

CORS is not part of REST itself, but:

- It protects REST APIs
- It controls who can consume your API
- It is enforced by browsers, not Node.js

Design goal:

> Allow trusted frontends, block everything else.

**This middleware handles:**

- Response headers
- Preflight (`OPTIONS`) requests
- Allowed origins, methods, headers
