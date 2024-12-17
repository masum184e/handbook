# How The Web Works

**Client-Server Architecture/Request-Response Model:**

- Client send request to the server
- server response the client's request

## Components

1. **Internet:** The physical network infrastructure (servers, routers, cables, etc.) that connects devices globally.
2. **World Wide Web (WWW):** A service that runs on the Internet, enabling users to access web pages and resources using browsers.
3. **Web Browser:** Software (like Chrome, Firefox, Edge) that requests, processes, and displays web pages.
4. **Web Servers:** Computers that host websites and respond to client (browser) requests.
5. **HTTP/HTTPS:** Communication protocols used to send and receive data between a client (browser) and a server.
6. **HTML, CSS, JavaScript:** The core technologies used to create web pages.
7. **DNS (Domain Name System):** Translates human-friendly domain names (like `example.com`) into IP addresses understood by machines.

## Step-by-Step process

When a user enters a URL into a browser (e.g., `https://example.com`), here’s what happens behind the scenes:

1. User Request:

- The user types a URL (Uniform Resource Locator) into their browser.
- The URL consists of:
  - Protocol: https (HyperText Transfer Protocol Secure)
  - Domain Name: example.com
  - Path (optional): /about

2. DNS Resolution:

- The browser sends a request to a DNS server to resolve the domain name (`example.com`) into an IP address (e.g., `192.0.2.1`).
- The IP address points to the web server hosting the website.

3. Browser Sends HTTP Request:

- Using the resolved IP address, the browser sends an HTTP/HTTPS request to the web server.
- The request includes:
  - The method (e.g., GET, POST)
  - Headers (metadata about the request, like the browser type)
  - The path/resource requested (/about).

4. Server Processes Request:

- The web server receives the request.
- It locates the requested resource (e.g., about.html) on the server and processes it.
- The server may interact with databases or application logic if the resource is dynamic (like retrieving user data).

5. Server Sends Response:

- The server sends an HTTP response back to the browser.
- The response includes:
  - A status code (e.g., 200 OK, 404 Not Found, 500 Internal Server Error)
  - Headers (like content type, caching rules)
  - The content (HTML, CSS, JavaScript files, or other data).

6. Browser Renders Web Page:

- The browser receives the response and processes it.
- It parses: - HTML (structure and content of the page) - CSS (styles like fonts, colors, layout) - JavaScript (interactivity and dynamic behavior).
  -The browser then renders the page on the user's screen.

7. Additional Resources:

- If the page has external resources (like images, scripts, stylesheets), the browser sends separate HTTP requests to fetch them.
