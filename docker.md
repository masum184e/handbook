# Fundamentals

## Docker

Docker is an open-source platform that allows developers to build, package, and run applications in isolated environments called containers. These containers are lightweight, portable, and consistent across different environments (development, testing, production).

- Key idea: “Build once, run anywhere.”
- Components of Docker:
  - Docker Engine: The runtime that runs containers.
  - Docker Images: Read-only templates used to create containers.
  - Docker Containers: Running instances of Docker images.
  - Docker Hub: Public registry for sharing Docker images.

**Why Use Docker?**

- **Isolation** – Each container runs separately, like its own mini-computer.
- **Portability** – Runs the same across any environment (dev, test, production).
- **Efficiency** – Uses less memory and resources compared to VMs.
- **Consistency** – Works the same everywhere: your machine, a colleague’s machine, or production.

Docker as a way to package your app and all its dependencies into a single unit, ensuring it runs the same way everywhere — on your laptop, on a server, or in the cloud.

## Containers vs Virtual Machines

| Feature            | **Virtual Machines (VMs)**                | **Containers (Docker)**           |
| ------------------ | ----------------------------------------- | --------------------------------- |
| **Isolation**      | Full OS for each VM                       | Share the same OS kernel          |
| **Size**           | Heavy (GBs)                               | Lightweight (MBs)                 |
| **Startup time**   | Minutes (boot OS)                         | Seconds (start container)         |
| **Performance**    | Slower (virtualized hardware)             | Faster (native performance)       |
| **Resource usage** | More (CPU, RAM overhead)                  | Less (efficient resource sharing) |
| **Portability**    | Works on hypervisors (VMware, VirtualBox) | Works anywhere Docker runs        |

- VMs are like having multiple computers on one machine.
- Containers are like having multiple apps running in isolated environments on the same OS.

### Without Docker (Using VMs or manual setup)

- You’d set up a VM (Linux Ubuntu).
- Install Python, Flask, PostgreSQL manually.
- Configure environment variables.
- Run the app.
- If you deploy it to another server, you repeat everything → tedious and error-prone.

## Docker CLI vs Docker Desktop

| Feature              | **Docker CLI**                     | **Docker Desktop**                          |
| -------------------- | ---------------------------------- | ------------------------------------------- |
| **Interface**        | Text-based (terminal)              | Graphical + CLI                             |
| **Platform**         | Available on Linux, Windows, macOS | Only for Windows & macOS                    |
| **Dependency**       | Needs Docker Daemon (dockerd)      | Bundles Docker Daemon + CLI + Compose + GUI |
| **Purpose**          | Run/manage containers via commands | Provides full dev environment with GUI      |
| **Resource Control** | Manual (configs)                   | Easy sliders for CPU/RAM/Disk               |
| **Kubernetes**       | Not included                       | Optional built-in Kubernetes cluster        |
| **Use Case**         | Developers who prefer terminal     | Beginners / GUI users on Windows/Mac        |

**Docker CLI:**

- It communicates with the Docker Daemon (dockerd) via REST API (Unix socket or TCP).
- The CLI is OS-independent: works the same on Linux, Windows, and macOS.

**Docker Desktop:**

- Docker Desktop is a GUI + packaged installer for Docker on Windows and macOS.
- It includes:
  - Docker Engine (daemon)
  - Docker CLI
  - Docker Compose
  - A graphical dashboard (to view/manage containers, images, volumes visually)
- On Linux, you usually install Docker Engine directly (no Docker Desktop).

**Docker REST API**

Docker exposes a RESTful API that allows clients (like the Docker CLI, Docker Compose, or other tools) to talk to the daemon programmatically.

- Endpoint: The daemon listens on either:
  - Unix socket: `/var/run/docker.sock` (default on Linux/macOS)
  - TCP socket: `tcp://host:port` (optional, usually for remote access)
- Example:

  To list all containers using the REST API directly:

  ```
  GET /containers/json
  ```

  This returns a JSON array describing all running containers.

  This is equivalent to:

  ```bash
  docker ps -a
  ```

- Example using `curl`:

  - Enable Docker API over TCP:

    Open Docker Desktop → Settings → General → Enable “Expose daemon on tcp://localhost:2375 without TLS”

    ```bash
    curl http://localhost:2375/containers/json
    ```

**How REST API Works**

1. You run a Docker CLI command, e.g., `docker ps`.
2. The CLI sends a REST API request to `dockerd` via the Unix or TCP socket.
3. `dockerd` processes the request, interacts with containers/images, and sends back a JSON response.
4. The CLI formats this response for human-readable output.

## Docker Architecture

Docker follows a client-server architecture. Its core components are:

1. Docker Client
2. Docker Daemon
3. Docker Registry
4. Docker Images
5. Docker Containers

These components work together to build, ship, and run containerized applications.

<img src="./images/docker-architecture.png" />

### Core Components and Their Roles

#### Docker Client

- Command-line tool (`docker`) or GUI tool (like Docker Desktop).
- Used by the user to interact with Docker (e.g., `docker build`, `docker run`).
- Sends commands to the Docker daemon via REST API over Unix socket or network.

```shell
docker run hello-world
```

This sends a request to the daemon to create and start a container from the `hello-world` image.

#### Docker Daemon (`dockerd`)

- Runs in the background on your host machine.
- Responsible for:
  - Building, running, and distributing containers.
  - Managing images, networks, and volumes.
- Listens for Docker API requests from the client.

**Workflow:**

```
Client → API request → Daemon pulls image → Creates container → Runs container.
```

#### Docker Registry

- A place to store and distribute Docker images.
- Default public registry: Docker Hub.
- You can have private registries too (e.g., AWS ECR, GitHub Container Registry).
- When you run a container with an image that doesn’t exist locally, the daemon pulls it from a registry.

#### Docker Images

- Read-only templates used to create containers.
- Built using a Dockerfile (instructions + base image).
- Layered file system — each instruction in a Dockerfile creates a new image layer (via Union File System).

#### Docker Containers

- Running instances of Docker images.
- They have:
  - Isolated filesystem (from the host).
  - Their own CPU, memory, network namespace.
- Containers are lightweight because they share the host OS kernel.

### Example Workflow of Docker Architecture

1. Docker Client command:

```bash
docker run -d -p 8080:80 nginx
```

2. Docker Daemon actions:

   - Checks if `nginx` image exists locally.
   - If not, pulls it from Docker Hub registry.
   - Creates a container from that image.
   - Starts it.

3. Registry:
   - Supplies the nginx image to the daemon.
4. Image:
   - `nginx` image contains everything needed to run Nginx server.
5. Container:
   - A running instance of Nginx server, accessible on `http://localhost:8080`.

### Supporting Elements in Docker Architecture

#### Docker Engine

- Combines:
  - Docker Daemon
  - Docker REST API
  - Docker CLI
- Available for Linux, Windows, Mac.

#### Storage & Networking

**Storage:**

- Images are stored in /var/lib/docker on Linux by default.
- Persistent data stored via volumes or bind mounts.

**Networking:**

- Bridge network (default)
- Host network
- Overlay networks (for multi-host setups)

### How the Architecture Works Together

Let’s walk through docker run nginx:

1. Docker Client sends docker run nginx to Docker Daemon.
2. Docker Daemon checks if the nginx image exists locally:
   - If not, it pulls from Docker Hub.
3. Daemon creates a container from the nginx image.
4. Daemon sets up:
   - Filesystem from image layers
   - Network bridge
   - Container ID & metadata
5. The container starts and serves on port 80 inside the isolated environment.

## Installation

### Prerequisites

Before installing Docker:

- Windows: 64-bit Windows 10/11 Pro, Enterprise, or Education (or Windows 10 Home with WSL2).
- macOS: macOS 10.15 or newer (Catalina, Big Sur, Monterey, Ventura).
- Linux: Most modern distributions (Ubuntu, Debian, Fedora, CentOS, etc.).

Other requirements:

- At least 4 GB RAM.
- Virtualization enabled in BIOS (for Windows/macOS with Docker Desktop).

### Installation on Windows

1. Install Docker Desktop

- Download Docker Desktop for Windows from Docker official website
  .
- Run the installer.
- During installation:
  - Enable WSL2 (for Windows Home) or Hyper-V (for Pro/Enterprise).
  - Check “Add Docker to PATH” option.

2. Start Docker Desktop

- Open Docker Desktop.
- Ensure the Docker Daemon is running (green icon in system tray).

3. Verify Installation

Open PowerShell or Command Prompt:

```bash
docker --version
docker run hello-world
```

- `docker --`version` → Checks Docker CLI version.
- `docker run hello-world` → Downloads a test image and runs it in a container to verify the setup.

### Post-Installation Configuration

Check Docker status:

```bash
docker info
```

- Configure memory, CPUs, disk space: (Docker Desktop for Windows/macOS)
- Enable experimental features: via Docker Desktop settings.

### Common Issues & Fixes

| Issue                           | Fix                                                                |
| ------------------------------- | ------------------------------------------------------------------ |
| Docker command not found        | Ensure Docker Desktop is installed and PATH is set (Windows/macOS) |
| Cannot connect to Docker Daemon | Start Docker Desktop or run `sudo systemctl start docker` (Linux)  |
| WSL2 issues (Windows Home)      | Install WSL2 kernel update and set default version to 2            |
| Permission denied (Linux)       | Add user to `docker` group                                         |

## Most Used Command

### Basic Docker Commands

| Command          | Description                        |
| ---------------- | ---------------------------------- |
| `docker version` | Show Docker version installed      |
| `docker info`    | Display system-wide information    |
| `docker help`    | Show all available Docker commands |

### Image Commands

| Command                          | Description                            |
| -------------------------------- | -------------------------------------- |
| `docker build -t <image_name> .` | Build Docker image from a `Dockerfile` |
| `docker pull <image_name>`       | Download image from Docker Hub         |
| `docker images`                  | List local images                      |
| `docker rmi <image_id>`          | Remove image                           |

### Container Commands

| Command                                 | Description                                    |
| --------------------------------------- | ---------------------------------------------- |
| `docker run -it <image_name>`           | Run a container interactively                  |
| `docker run -d -p 8080:80 <image_name>` | Run a container in detached mode and map ports |
| `docker ps`                             | Show running containers                        |
| `docker ps -a`                          | Show all containers (including stopped)        |
| `docker stop <container_id>`            | Stop a running container                       |
| `docker start <container_id>`           | Start a stopped container                      |
| `docker restart <container_id>`         | Restart a container                            |
| `docker rm <container_id>`              | Remove a container                             |

#### `docker run`

`docker run` required `image-name` and without port mapping, You can't access it.

You’ll get:

- This site can’t be reached or
- Connection refused”

**Why?**

Because the port is not published to your host. It’s only listening inside the container.

**Possible Reasons to work it without port mapping**

1. You're accessing it from inside the container (e.g., via browser or curl within the container)

   - Try running:

     ```bash
     docker exec -it <container_id> curl http://localhost:3000
     ```

     This works because "localhost" means inside the container.

2. Another container is accessing it on Docker's internal network

   - Containers can talk to each other on `172.17.x.x` without explicit port publishing.

#### Run Multiple Containers from the Same Image

```bash
# Run first container
docker run -d --name app1 -p 3001:3000 my-app

# Run second container
docker run -d --name app2 -p 3002:3000 my-app

# Run third container
docker run -d --name app3 -p 3003:3000 my-app
```

These run in the background (`-d`) with different names and different host ports, but all from the same image.

Docker images are immutable templates. Every `docker run` creates a new container instance based on that image:

- They share the same code/environment
- But each container has its own filesystem, network, and process space

#### Run Different Versions of python

```bash
# Run Python 3.8
docker run -it --rm python:3.8

# Run Python 3.9
docker run -it --rm python:3.9

# Run Python 3.11
docker run -it --rm python:3.11
```

Use `-it` for interactive shell and `--rm` to auto-remove the container after exit.

#### Run Environment Variables

1. **Option 1: Set using `-e` flag**

   ```bash
   docker run -e NODE_ENV=production -e PORT=8080 my-app
   ```

2. **Option 2: Use `.env` file + `--env-file`**

   ```
   NODE_ENV=production
   PORT=8080
   ```

   Run Container

   ```bash
   docker run --env-file .env my-app
   ```

#### Using Ports in Docker

When you run a Docker container, your app is isolated inside it. To access it from your host machine, you must map a container port to a host port.

**Syntax:**

```bash
docker run -p <host_port>:<container_port> IMAGE_NAME
```

**Example**

Suppose your Node.js app listens on port `3000` inside the container:

```dockerfile
EXPOSE 3000
CMD ["node", "app.js"]
```

You run it with:

```shell
docker run -p 8080:3000 my-app
```

- `8080` is the host port (you access `http://localhost:8080`)
- `3000` is the container port (your app listens on this)

So traffic to `localhost:8080` gets forwarded to `app:3000` inside the container.

### Clean Up Commands

| Command                          | Description                                               |
| -------------------------------- | --------------------------------------------------------- |
| `docker system prune`            | Clean up unused containers, images, volumes, and networks |
| `docker volume prune`            | Remove unused volumes                                     |
| `docker rmi $(docker images -q)` | Remove all images                                         |
| `docker rm $(docker ps -aq)`     | Remove all containers                                     |

### Logs Command

| Command                                    | Description                   |
| ------------------------------------------ | ----------------------------- |
| `docker logs <container_id>`               | Show logs from container      |
| `docker exec -it <container_id> /bin/bash` | Enter a running container     |
| `docker inspect <container_id>`            | Detailed info about container |

## Most Used Flags

Flags allow you to customize, optimize, and adapt the build to different needs.

`docker build` required only one argument, which is the context directory (usually `.`). Docker uses default values for other arguments like default docker file name is `Dockerfile`. But you want to customize it, like you want to set a container name and you run

```bash
docker build container-name .
```

docker will not understand what do you mean by `container-name`, in this you have to specify that you want to set this name as a container name which is done by `-t` flag.

```bash
docker build -f container-name .
```

- Context directory is the current working directory (where you're running this command) as the build context.
- Docker expects all options (like -t) to come before the image/container name.

### General Docker Flags

| Flag     | Long Form   | Description                 |
| -------- | ----------- | --------------------------- |
| `-v`     | `--version` | Show Docker version         |
| `-H`     | `--host`    | Daemon socket to connect to |
| `--help` |             | Show help for any command   |

### `docker build`

| Flag          | Long Form | Description                                              |
| ------------- | --------- | -------------------------------------------------------- |
| `-t`          | `--tag`   | Name and optionally a tag (e.g., `myapp:latest`)         |
| `-f`          | `--file`  | Specify Dockerfile location                              |
| `--no-cache`  |           | Don’t use cache when building                            |
| `--build-arg` |           | Set build-time variables                                 |
| `--platform`  |           | Set target platform (e.g., `linux/amd64`)                |
| `--pull`      |           | Always attempt to pull a newer version of the base image |

### `docker run`

| Flag                       | Long Form   | Description                                     |
| -------------------------- | ----------- | ----------------------------------------------- |
| `-d`                       | `--detach`  | Run container in background                     |
| `-p`                       | `--publish` | Map container ports to host (`host:container`)  |
| `--name`                   |             | Assign a custom name to the container           |
| `-e`                       | `--env`     | Set environment variables                       |
| `--rm`                     |             | Remove container after it exits                 |
| `-v`                       | `--volume`  | Mount a volume or bind mount (`host:container`) |
| `--network`                |             | Connect container to a network                  |
| `--entrypoint`             |             | Override default entrypoint                     |
| `--restart`                |             | Restart policy (e.g., `always`, `on-failure`)   |
| `--cpu-shares`, `--memory` |             | Limit CPU or RAM usage                          |

#### Container Naming

**Syntax:**

```bash
docker run --name <your-container-name> <image-name>
```

**Example:**

```bash
docker run --name my-web-server -p 8080:80 -d nginx
```

#### Containers Interactivity

**`-i` — Interactive Mode:** Keeps STDIN (standard input) open, even if you're not attached to the terminal.

- If you want to send input to the container (like commands or text), you need `-i`.
- This runs the `cat` command in Ubuntu and keeps the input open. You can type text, and `cat` will echo it back.

**`-t` — Allocate a TTY:** Allocates a pseudo-TTY (a terminal emulator) so that Docker formats the output like a real terminal.

Why it matters:

- Enables colored output
- Enables line-editing, command history, etc.
- Makes interactive shells behave normally

**`-it` — Interactive + TTY**

What it does:

- Combines both:
  - Keeps input open
  - Allocates a terminal session

Why it's useful:

- Needed for interactive shells, like:
  - `/bin/bash`
  - `/bin/sh`
  - REPLs (Node.js, Python)
  - Anything that expects user input

### `docker container` / `docker ps`

| Flag       | Long Form | Description                                      |
| ---------- | --------- | ------------------------------------------------ |
| `-a`       | `--all`   | Show all containers (default shows running only) |
| `-q`       | `--quiet` | Only display container IDs                       |
| `--filter` |           | Filter output (e.g., `status=exited`)            |
| `--format` |           | Format output using Go templates                 |

### `docker pull` / `docker push`

| Flag         | Long Form | Description                    |
| ------------ | --------- | ------------------------------ |
| `--platform` |           | Target OS/architecture to pull |
| `--quiet`    |           | Suppress verbose output        |

### `docker system` / `docker image` / `docker volume`

| Flag       | Long Form | Description                       |
| ---------- | --------- | --------------------------------- |
| `-f`       | `--force` | Don’t prompt for confirmation     |
| `--prune`  |           | Remove unused objects             |
| `--filter` |           | Apply filtering to listed results |

## Docker Tag

A tag is an optional label you assign to a Docker image when you build or pull it.

**Format:**

```bash
<repository>:<tag>
```

**Example:**

```bash
node:18-alpine
```

- `node` = image name (repository)
- `18-alpine` = tag (version + OS variant)

### Default Tag

If you omit the tag, Docker uses `:latest` by default:

```bash
docker pull ubuntu
# Equivalent to:
docker pull ubuntu:latest
```

`latest` doesn't always mean the newest version — it means “the default version tagged as `latest`.”

### Why Tags Are Useful

| Purpose                     | Example                          |
| --------------------------- | -------------------------------- |
| Versioning builds           | `myapp:1.0.0`, `myapp:2.1`       |
| Environment-specific builds | `myapp:dev`, `myapp:prod`        |
| OS/Arch variants            | `python:3.9-slim`, `alpine:3.18` |
| Deployment tracking         | `myapp:release-2025-08-01`       |

### How to Use Tags

#### Build with a Tag

```bash
docker build -t myapp:1.0 .
```

- `-t` specifies the image name and tag
- This creates `myapp` image with tag `1.0`

#### Run a Tagged Image

```bash
docker run myapp:1.0
```

#### Tag an Existing Image

You can add a new tag to an image you've already built:

```bash
docker tag myapp:1.0 myapp:latest
```

#### Push Tagged Image to a Registry

```bash
docker tag myapp:1.0 username/myapp:1.0
docker push username/myapp:1.0
```

### Best Practices for Image Tagging & Versioning

1. Avoid Using Only `latest`

   - `latest` is mutable → it may change unexpectedly when someone updates the base image.
   - Bad for production because you don’t know what exact code is running.

   ```Dockerfile
   # Bad: Could break tomorrow
   FROM node:latest

   # Good: Fixed version (reproducible)
   FROM node:18.16.1-alpine
   ```

2. Use Semantic Versioning (SemVer)

Follow MAJOR.MINOR.PATCH format (e.g., 1.2.3):

- MAJOR: breaking changes
- MINOR: new features, backward compatible
- PATCH: bug fixes

```bash
# Image tags for "myapp"
myapp:1.0.0   # specific patch release
myapp:1.0     # latest patch for version 1.0
myapp:1       # latest release for major version 1
myapp:latest  # newest release (not recommended for prod)
```

So if `myapp:1.0.3` is released:

- `myapp:1.0` will point to it
- `myapp:1` will point to it
- `myapp:latest` may also point to it (if it's the newest overall)

3. Multi-Tagging an Image

You can assign multiple tags to the same image.

```bash
docker build -t myapp:1.0.0 -t myapp:1.0 -t myapp:1 -t myapp:latest .
```

- `myapp:1.0.0` → pinned exact version
- `myapp:1.0` → latest patch release in 1.0 series
- `myapp:1` → latest release in version 1
- `myapp:latest` → newest release overall

4. Environment-Specific Tags

Tag images differently for dev, staging, and production.

```bash
docker build -t myapp:1.0.0-dev .
docker build -t myapp:1.0.0-staging .
docker build -t myapp:1.0.0-prod .
```

Each environment has a clearly labeled image, avoiding mistakes (like deploying a dev image to production).

## Ports in Docker
### Port Mapping
- Docker containers have their own internal network namespace.
- Services inside containers (like web servers) listen on container ports, not directly on the host.
- Port mapping allows the host machine to access container services by mapping a host port to a container port.

Key point: Without port mapping, services in a container are not accessible from the host or external network.

```bash
-p <host_port>:<container_port>
```
- `<host_port>` → Port on your host machine (access via `localhost:<host_port>`).
- `<container_port>` → Port inside the container where the service is running.

Optional flags:

- `-P` → Automatically map all exposed ports to random host ports.
#### Multiple Port Mappings
```bash
docker run -d --name my-app -p 3000:3000 -p 5000:5000 my-app-image
```
- Maps host port 3000 → container port 3000
- Maps host port 5000 → container port 5000
- Useful if your application exposes multiple services (e.g., HTTP and admin panel).
#### Random Host Port Mapping (-P)
```bash
docker run -d -P nginx
```
`-P` maps all exposed container ports to random available host ports.


Docker port behavior is one of the most confusing things for beginners. Let's simplify it with a real-world analogy and a clear visual flow.
#### Port Mapping vs Container Communication
| Feature                | Description                                           |
| ---------------------- | ----------------------------------------------------- |
| Port mapping (-p)      | Exposes container port to host machine                |
| Container-to-container | Containers on same network communicate via name or IP |
| Host network           | Container uses host’s network directly                |
| Overlay network        | Containers on different hosts communicate seamlessly  |

### Imagine This Like a House

| Role             | In Real Life                    | In Docker                                                    |
| ---------------- | ------------------------------- | ------------------------------------------------------------ |
| Your app         | A person inside a house         | A web server inside a container                              |
| Container port   | The door inside the house       | Where the app is listening (e.g., `3000`)                    |
| Host port        | The front gate of the house     | What your browser talks to (e.g., `8080`)                    |
| `-p` mapping     | A tunnel from gate to door      | Forwards traffic from host to container                      |
| `.env PORT=3000` | The person says “knock at 3000” | App will only respond on port `3000`                         |
| `EXPOSE`         | A sticky note on the door       | “This door is open,” but doesn’t open it                     |
| `--build-arg`    | Label during house construction | Used to define how the house is built (not who lives inside) |

1. `EXPOSE` is used only for documentation
2. Port Used in `docker build` Command

   - Typically not used in `docker build` directly, unless passed as a build argument (`--build-arg`).
   - If you do pass a port via `--build-arg`, it’s to configure your Dockerfile at build time (e.g., set environment variables, choose configs).
   - The port here is used only at build time — your image is built with that value embedded if needed.
   - It doesn’t open ports or map network traffic.

**What happens:**

- App listens on `3000` (inside container)
- Docker maps host `8080` → container `3000`
- You visit `http://localhost:8080` → request enters container → app responds

### Most Important Thing to Understand

- The container port must match where your app is actually listening.
- The host port is how you (your browser, Postman, etc.) can access it.
- The `-p` flag connects the two.

The app listens inside the container (container port), and `-p` maps that to your outside world (host port). Everything else is optional or supportive.

### Why Do You Need to Map Ports?

#### 1. Containers Have Their Own Network Namespace

- Each Docker container runs in an isolated network environment.
- Inside the container, your app listens on some port (e.g., 3000).
- But this port is internal to the container and not accessible from your host machine by default.

#### 2. Host and Container Are Separate

- Your host machine (your PC) and the container are like two separate machines.
- To access the app inside the container from your host (e.g., your browser), you need to forward traffic between the two.

#### 3. Port Mapping (-p) Exposes Container Ports to Host

- `-p host_port:container_port` creates a bridge.
- It forwards requests arriving on `host_port` to the container’s `container_port`.
- This way, your app inside the container becomes reachable from your host network.

#### 4. Without Port Mapping

- The app inside the container is running and listening on a port.
- But it’s not accessible from your host — you cannot open `localhost:3000` because that port is closed on your machine.
- The container’s ports are isolated by default.

# Docker Images
A Docker image is a read-only template that contains:

- The application code
- Runtime environment (e.g., Python, Node.js, Java)
- Libraries and dependencies
- File system and configuration

Key idea: An image is like a snapshot of a container’s filesystem and environment. It is immutable, meaning it doesn’t change once created.

- Containers are running instances of images.
- Images are layered: Each layer represents a change (e.g., adding files, installing packages). Layers are reusable and help save space.

## How Docker Images Work

1. Layered Structure:

- Docker images are built from layers stacked on top of each other.
- Each layer corresponds to a command in the Dockerfile (e.g., `FROM`, `RUN`, `COPY`).
- Layers are cached and reused to speed up builds.

2. Base Image:
- Most images start from a base image, like `ubuntu`, `alpine`, or `python`.
- You can then add your app and dependencies on top.

3. Immutability:

- Once built, an image cannot be changed.
- If you modify it (e.g., install a new package), a new image layer is created.

4. Storage:
- Images are stored in a Docker Registry (e.g., Docker Hub, private registry).
- They can be pulled to any system with Docker.

## Docker Image vs Container
| Feature    | Docker Image                  | Docker Container                            |
| ---------- | ----------------------------- | ------------------------------------------- |
| Definition | Read-only template            | Running instance of an image                |
| Mutability | Immutable                     | Mutable (runtime changes)                   |
| Storage    | Stored in registry or locally | Exists in memory & filesystem while running |
| Use        | Build and distribute          | Execute applications                        |

## Building a Docker Image

Images are usually created using a Dockerfile.

`app.py`:
```py
print("Hello from Docker Image!")
```

`Dockerfile`:

```Dockerfile
# Use official Python base image
FROM python:3.12-slim

# Set working directory
WORKDIR /app

# Copy app code
COPY app.py .

# Command to run app
CMD ["python", "app.py"]
```


- `FROM python:3.12-slim` → Base image layer (Python runtime).
- `WORKDIR /app` → Creates a new layer for working directory.
- `COPY app.py .` → Copies file, adds a new layer.
- `CMD ["python", "app.py"]` → Defines default command (doesn’t create a new layer, metadata only).

## Running the Image
1. Build the image:
```bash
docker build -t my-python-image .
```

- `-t my-python-image` → Tags the image.

2. Run a container from the image:
```bash
docker run --name python-container my-python-image
```
- Docker reads the image layers and creates a container.
- Container runs independently, but the original image remains unchanged.


# DockerHub

Docker Hub is a cloud-based registry service provided by Docker Inc. It allows you to:

- Store and distribute Docker images.
- Browse and pull images created by others.
- Push your own images to share with the community or your team.
- Automate builds and set up webhooks.
- Manage private and public repositories.

Think of it like GitHub for Docker images.

## Key Features of Docker Hub

| Feature                    | Description                                                           |
| -------------------------- | --------------------------------------------------------------------- |
| **Public & Private Repos** | You can create both public (free) and private repositories.           |
| **Image Pulling**          | You can pull official or community images.                            |
| **Pushing Images**         | Upload your custom images to share or deploy.                         |
| **Official Images**        | Verified, trusted images for OS, databases, tools, etc.               |
| **Docker Hub CLI**         | You interact with it using Docker CLI (`docker push`, `docker pull`). |
| **Web Interface**          | You can explore images and manage repositories via a browser.         |

## Basic Docker Hub Workflow

1. **Login to Docker Hub**

```bash
docker login
```

2. **Pull an Image**

```bash
docker pull mysql
```

This pulls the official MySQL image from Docker Hub.

3. **Tag a Local Image for Docker Hub**

```bash
docker tag myapp masumbillah/myapp:1.0
```

4. **Push to Docker Hub**

```bash
docker push masumbillah/myapp:1.0
```

5. **Run the Pushed Image Anywhere**

```bash
docker run masumbillah/myapp:1.0
```

## Behind the Scenes (Pull Process)

When you run docker `pull nginx:latest`:

1. Docker Client sends a request to Docker Daemon.
2. Daemon checks if the image exists locally.

- If yes → nothing to pull.
- If no → queries Docker Hub registry.

3. Image layers are downloaded an
4. You can now create containers from this image.
## Common Options for `docker pull`
| Option       | Description                                |
| ------------ | ------------------------------------------ |
| `--quiet`    | Suppresses output while pulling            |
| `--platform` | Specify architecture (e.g., `linux/amd64`) |
| `:tag`       | Pull specific version instead of `latest`  |

# Dockerfile
A Dockerfile is a text file that contains a series of instructions to build a Docker image.

- Each instruction creates a layer in the image.
- Images built from Dockerfiles are reproducible and portable.
- Dockerfiles make it easy to automate image creation.
## Common Dockerfile Instructions

| Instruction  | Description                                            |
| ------------ | ------------------------------------------------------ |
| `FROM`       | Base image to use (e.g., Node.js, Python, Alpine)      |
| `WORKDIR`    | Set the working directory inside the container         |
| `COPY`       | Copy files from host machine into the image            |
| `RUN`        | Run commands (e.g., install dependencies) during build |
| `CMD`        | Default command to run when the container starts       |
| `EXPOSE`     | Inform Docker about the port the app listens on        |
| `ENV`        | Set environment variables                              |
| `LABEL`      | Add metadata to the image                              |
| `ENTRYPOINT` | Set default executable (like `CMD` but more strict)    |
|`LABEL`| Useful for documentation, versioning, maintainer info, source repo URLs, licenses, or other descriptive info.|

### `ENTRYPOINT`

- Purpose: Configures a container to run as an executable.
- Unlike `CMD`, `ENTRYPOINT` cannot be easily overridden, making it suitable for defining the main behavior of a container.

```bash
ENTRYPOINT ["python", "app.py"]
```
### Difference between `CMD` and `ENTRYPOINT`
- Container always runs `python app.py`.
- Additional arguments passed at runtime are appended.

| Feature                      | CMD              | ENTRYPOINT                              |
| ---------------------------- | ---------------- | --------------------------------------- |
| Default command              | Yes              | Yes                                     |
| Can be overridden at runtime | Easily           | Not easily, unless using `--entrypoint` |
| Use case                     | Flexible default | Fixed primary process                   |

## Full Dockerfile Example
`app.py`
```py
print("Hello from Dockerfile!")
```
`Dockerfile`
```Dockerfile
# Step 1: Use official Python base image
FROM python:3.12-slim

# Step 2: Set working directory
WORKDIR /app

# Step 3: Copy app code into container
COPY app.py .

# Step 4: Install dependencies
RUN pip install flask

# Step 5: Default command to run
CMD ["python", "app.py"]
```
1. `FROM python:3.12-slim` → Base image with Python installed.
2. `WORKDIR /app` → Creates working directory /app.
3. `COPY app.py .` → Adds your application code.
4. `RUN pip install flask` → Installs Flask inside the image.
5. `CMD ["python", "app.py"]` → Sets the default command when running the container.

# Multi-Stage Builds

Multi-stage builds allow you to use multiple `FROM` statements in a single Dockerfile to create images in stages.

- Purpose: Reduce final image size by only copying necessary artifacts from build stages to the final image.

- Useful when your build process requires large tools or dependencies (like compilers), but you don’t want them in the final runtime image.

Key idea:

- Stage 1 → Build environment (compilation, dependencies)
- Stage 2 → Runtime environment (minimal image with only what’s needed to run the app)


## How Multi-stage Builds Work

1. First stage (Builder stage)

- Use a larger base image with compilers/tools (e.g., golang, node, maven).
- Build your application here.

2. Second stage (Runtime stage)

- Use a lightweight base image (e.g., alpine, slim).
- Copy only the compiled app/binaries/artifacts from stage 1.

## Example of Go Application

### Without Multi-stage (big image)

```Dockerfile
FROM golang:1.20
WORKDIR /app
COPY . .
RUN go build -o main .
CMD ["./main"]
```

- Image includes Go compiler + libraries (unnecessary at runtime).
- Size: ~800 MB

### With Multi-stage (smaller image)

```Dockerfile
# Stage 1: Build
FROM golang:1.20 as builder
WORKDIR /app
COPY . .
RUN go build -o main .

# Stage 2: Runtime
FROM alpine:3.18
WORKDIR /app
COPY --from=builder /app/main .
CMD ["./main"]
```

- Stage 1 (builder): Compiles Go app into `main` binary.
- Stage 2 (runtime): Uses small `alpine` (~5 MB).
- Copies only the binary → final image ~20 MB instead of 800 MB.
# Image Optimization
## 1. Use Minimal Base Images

- Start from a lightweight base image like `alpine` or `slim` variants.
- Avoid full OS images unless necessary.
```Dockerfile
# Bad
FROM ubuntu:22.04

# Good
FROM python:3.12-slim
```
## 2. Minimize the Number of Layers

- Each Dockerfile instruction (`RUN`, `COPY`, `ADD`) creates a layer.
- Combine commands using `&&` to reduce layers.

```Dockerfile
# Bad: creates multiple layers
RUN apt-get update
RUN apt-get install -y curl git
RUN rm -rf /var/lib/apt/lists/*

# Good: combine into one layer
RUN apt-get update && \
    apt-get install -y curl git && \
    rm -rf /var/lib/apt/lists/*
```
## 3. Remove Unnecessary Files

Remove temporary files, caches, or build artifacts after use.
```py
RUN pip install --no-cache-dir -r requirements.txt
```
- `--no-cache-dir` prevents pip from storing cache, reducing image size.

## 4. Use `.dockerignore`

Similar to `.gitignore`, prevents unnecessary files from being copied into the image.

```dockerignore
*.pyc
__pycache__/
.env
.git
```
## 5. Use Multi-Stage Builds

Use multi-stage builds to separate build dependencies from runtime.
## 6. Pin Image Versions

Avoid using latest tag; use specific versions to prevent unnecessary rebuilds and ensure reproducibility.
## 7. Leverage Docker Build Cache

Docker caches layers during build.

Order instructions from least to most frequently changing to maximize cache reuse.
```Dockerfile
# Install dependencies first (rarely changes)
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy app code (changes often)
COPY app/ .
```
If app code changes but dependencies don’t, Docker reuses the cached dependency layer → faster builds.


# `dockerignore`
- `.dockerignore` is a text file that specifies files and directories to exclude from the Docker build context.
- It works similarly to `.gitignore` in Git.
- Purpose: Prevent unnecessary files from being sent to Docker daemon, which:
  - Speeds up builds
  - Reduces image size
  - Improves security by excluding sensitive files

Key point: Anything not excluded by `.dockerignore` will be sent to the Docker daemon during `docker build`.

## Why Use `.dockerignore`?

1. Reduce build context size: Smaller build context → faster upload to Docker daemon → faster builds.

2. Optimize images: Excludes files that don’t need to be copied into the image.

3. Improve security: Avoid accidentally copying secrets, credentials, or .env files into images.

4. Avoid caching issues: Docker uses layer caching. Excluding unnecessary files prevents cache invalidation when irrelevant files change.

## How `.dockerignore` Works

- Place `.dockerignore` in the root of your build context.

- Syntax supports:

- `*` → wildcard
- `**` → recursive wildcard
- `!` → negate pattern (include file even if a parent pattern excludes it)

```dockerignore
# Ignore Python cache
__pycache__/
*.pyc

# Ignore Git repo
.git/
.gitignore

# Ignore environment variables or secrets
.env
secrets/

# Ignore node modules (for Node.js apps)
node_modules/
```
`.dockerignore` prevents `.git`, `.env`, `__pycache__`, and `node_modules` from being sent to the Docker daemon.

## Advanced `.dockerignore` Patterns

1. Negation: Include specific files while excluding a whole directory:
```dockerignore
logs/*
!logs/important.log
```

Excludes all logs except `important.log`.

2. Recursive exclusion
```dockerignore
**/__pycache__/
```
Excludes all `__pycache__` directories recursively.

3. Wildcard for file types
```dockerignore
*.tmp
*.bak
```

Excludes temporary or backup files.

# Docker Image Versioning
Image tagging is a way to assign a human-readable identifier to a Docker image.

A tag is appended to the image name using a colon (`:`) syntax:
```Dockerfile
<repository>:<tag>
```
Example
```Dockerfile
nginx:latest
python:3.12-slim
myapp:v1.0.0
```
Default tag: If no tag is specified, Docker uses `latest`.
Tags help identify versions, environments, or releases of your application.
## Why Use Tagging & Versioning?

1. Version control: Track different versions of your image.

- Example: `myapp:v1.0.0`, `myapp:v1.1.0`

2. Environment differentiation: Tag images for dev, test, or production.

- Example: `myapp:dev`, `myapp:prod`

3. Reproducibility: Ensures everyone pulls the exact same version of an image.

4. Deployment safety: Avoid accidentally deploying `latest` when a specific version is required.
## How to Tag Images
### During Build
```bash
docker build -t myapp:v1.0.0 .
```
- `-t myapp:v1.0.0` → Tags the built image as `v1.0.0`.
- Multiple tags can be assigned during build:
```bash
docker build -t myapp:v1.0.0 -t myapp:latest .
```
`latest` is often used for the most recent stable build.
### Tagging an Existing Image
```bash
docker tag myapp:v1.0.0 myusername/myapp:v1.0.0
```
Tags a local image for pushing to Docker Hub or a private registry.
## Tagging Best Practices

1. Use semantic versioning:
```bash
v1.0.0, v1.1.0, v2.0.0
```

2. Include environment tags for clarity:
```bash
myapp:dev, myapp:staging, myapp:prod
```

3. Avoid relying solely on `latest`

- `latest` can be misleading; always tag versions explicitly.

4. Combine version and environment if needed:
```bash
myapp:1.0.0-prod
myapp:1.1.0-dev
```

5. Push all important tags to registry

- Makes deployment and rollback easier.

# Docker Container
- A container is a running instance of a Docker image.
- It includes:
    - The application code
    - Dependencies and libraries
    - Isolated filesystem and environment
Key point: Containers are ephemeral—they can be created, stopped, removed, and restarted easily.

## Detached Mode (`-d`)

- Detached mode runs a container in the background, without attaching your terminal to it.
- The container runs independently, and you can continue using your terminal.

**Use Cases**

- Running long-lived services like web servers, databases, or background tasks.
- Ideal for production or background processes

```bash
docker run -d [OPTIONS] IMAGE [COMMAND]
```
- Terminal returns the container ID.
- Container continues running in the background.

## Interactive Mode (-it)

Interactive mode attaches your terminal to the container so you can interact with it directly.

Combines:

- `-i` → Keep STDIN open (interactive input).
- `-t` → Allocate a pseudo-TTY (terminal interface).

**Use Cases**

- Debugging containers
- Running shell sessions inside containers
- Testing scripts or commands interactively

```bash
docker run -it ubuntu bash
```
- `-it` → Run Ubuntu container interactively with terminal.
- `bash` → Start a shell inside the container.
- You can now execute commands like `ls`, `apt update`, etc.
Exit container: Type `exit` or press `Ctrl+D`.

## Detached vs Interactive
| Feature           | Detached (`-d`)                  | Interactive (`-it`)                 |
| ----------------- | -------------------------------- | ----------------------------------- |
| Terminal attached | No                               | Yes                                 |
| STDIN             | Not open                         | Open                                |
| Use case          | Background services, web servers | Debugging, testing, shell access    |
| Example           | `docker run -d nginx`            | `docker run -it ubuntu bash`        |
| Logs              | Use `docker logs <container>`    | Output visible directly in terminal |

## Combining Detached and Logs

Even when a container runs in detached mode, you can still see logs:
```bash
docker logs -f my-nginx
```
- `-f` → Follow logs in real-time.
- Useful to monitor background containers.

## Environment Variables
- Environment variables are key-value pairs that you can pass to a container at runtime.
- They allow you to configure applications dynamically without changing the image.
- Useful for:
    - Database credentials
    - API keys
    - Configuration flags

Key point: Environment variables are set at container start, not build time (unless using `ENV` in a Dockerfile).

1. Using `-e` to Set Environment Variables
```bash
docker run -e KEY=VALUE IMAGE
```
Verify inside container:
```bash
docker exec -it container-name env
```
Shows all environment variables set in the container.

2. Using `--env-file` to Load Environment Variables
3. Combining `-e` and `-`-e`nv-file`
- You can combine both methods.
- Variables set via -e override variables from `--env-file`.
4. Environment Variables in Dockerfile (`ENV`)

You can also set environment variables at build time in the Dockerfile:
```Dockerfile
ENV APP_ENV=production
ENV APP_DEBUG=false
```
Variables can then be overridden at runtime using `-e` or `--env-file`.

## Persisting Data
### `tmpfs` Mounts

- Stores data only in memory (not persisted across restarts).
- Useful for temporary, fast-access data.

```bash
docker run -d --name temp-container --tmpfs /app/tmp nginx
```
### Best Practices for Persisting Data

1. Use named volumes instead of anonymous volumes for better manageability:
```bash
-v myvolume:/data
```

2. Use volumes for production data (databases, logs, uploads).

3. Use bind mounts for development to edit files on host in real-time.

4. Back up important volumes regularly:
```bash
docker run --rm -v pgdata:/data -v $(pwd):/backup ubuntu tar cvf /backup/pgdata.tar /data
```
5. Avoid storing sensitive data inside container filesystem.
### Summary of Persistance
| Method        | Storage location | Use case                       | Persistence                |
| ------------- | ---------------- | ------------------------------ | -------------------------- |
| Docker Volume | Docker-managed   | Production data (DBs, logs)    | Survives container removal |
| Bind Mount    | Host directory   | Development, real-time updates | Survives container removal |
| tmpfs         | Memory           | Temporary data, caching        | Lost on container stop     |

# Docker Network
Docker containers are isolated by default. Networking allows containers to:
- Communicate with each other
- Connect to the host machine
- Access the internet
Docker provides different network drivers to manage connectivity based on use case.

## Types of Docker Networks
Docker provides four main network drivers.
### Bridge Network (Default)

- Default network for standalone containers.
- Provides container-to-container communication on the same host.
- Containers get private IP addresses, isolated from host network unless ports are mapped.

```bash
docker run -d --name web1 nginx
docker run -d --name web2 nginx
```
Both containers are on the default `bridge` network.

To communicate, you can use container IPs:
```bash
docker exec -it web1 ping <web2-ip>
```
Custom bridge network (better for DNS resolution):
```bash
docker network create my-bridge
docker run -d --name web1 --network my-bridge nginx
docker run -d --name web2 --network my-bridge nginx
docker exec -it web1 ping web2  # Use container name
```
Key point: Custom bridge networks allow container name resolution.
### Host Network

- Container uses the host machine’s network stack directly.
- No network isolation.
- Useful for high-performance applications, but less secure.

```bash
docker run --network host nginx
```
- Nginx listens on host ports directly.
- No `-p` port mapping needed.

### None Network

- Container has no network interface.
- Fully isolated.
- Use case: Security-sensitive containers, testing, or when network is not required.
```bash
docker run --network none busybox ping 8.8.8.8
# Will fail due to no network
```
### Overlay Network

- Used in Docker Swarm or multi-host setups.
- Connects containers across multiple Docker hosts as if they were on the same network.
- Enables distributed applications and microservices architecture.

```bash
docker network create -d overlay my-overlay
docker service create --name web --network my-overlay nginx
```
Containers/services on `my-overlay` can communicate across hosts.
### Macvlan Network (Advanced)

- Assigns containers MAC addresses and makes them appear as physical devices on the network.
- Useful for legacy apps that require direct LAN access.
```bash
docker network create -d macvlan \
  --subnet=192.168.1.0/24 \
  --gateway=192.168.1.1 \
  -o parent=eth0 my-macvlan
docker run -d --network my-macvlan nginx
```
Container gets its own IP on LAN, like a physical host.

### Example of Multi-Container Network
Scenario: Web app + database on custom bridge network
```bash
# Create custom bridge network
docker network create app-network

# Run database container
docker run -d --name db --network app-network -e POSTGRES_PASSWORD=secret postgres

# Run web app container
docker run -d --name webapp --network app-network -p 8080:80 my-web-app
```
- Both containers are on `app-network`.
- Web app can connect to database using `db` as hostname.
- Host can access web app via `http://localhost:8080`.

### Summary of Docker Networks
| Network Type | Description                                  | Use Case                                |
| ------------ | -------------------------------------------- | --------------------------------------- |
| Bridge       | Default, container-to-container on same host | Standalone containers, isolated network |
| Host         | Uses host network stack                      | High-performance apps, host access      |
| None         | No networking                                | Security, isolated workloads            |
| Overlay      | Multi-host communication                     | Docker Swarm, distributed apps          |
| Macvlan      | Direct LAN IP assignment                     | Legacy apps, LAN exposure               |

- Choose network type based on isolation, performance, and multi-host requirements.
- Custom networks enable container name resolution for easier inter-container communication.

# User Defined Network
- Docker allows you to create custom networks beyond the default bridge network.
- These networks are user-managed and provide:
    - Automatic DNS resolution: Containers can communicate using container names.
    - Isolated communication: Only containers on the same network can talk to each other.
    - Better control: You can configure subnets, gateways, and network drivers.

Key point: User-defined networks are recommended for multi-container applications.

## Why Use Custom Networks?

1. Container name resolution
- On the default bridge network, you must use IP addresses.
- On a user-defined network, containers can reference each other by name.
2. Isolation
- Containers on different networks cannot communicate unless explicitly connected.
3. Better control
- You can define subnets, gateways, and network drivers (bridge, overlay, etc.).
4. Multi-container applications
- Essential for services like web apps + databases + caches.

## Creating Network
```bash
docker network create --driver DRIVER_NAME NETWORK_NAME
```
**Create a bridge network**
```bash
docker network create --driver bridge my-network
```
- `--driver bridge` → Type of network. Other options include `overlay`, `macvlan`.
- `my-network` → Name of the network.

### Why Use Network Names Instead of IPs?

1. Dynamic IPs: Docker assigns IPs dynamically; they may change on restart.
2. Readability: Container names are easier to remember than numeric IPs.
3. Multi-container communication: Services in the same network can resolve each other automatically.

## Connecting/Disconnecting Containers

Connect a running container to a network
```bash
docker network connect my-network container_name
```

Disconnect a container from a network
```bash
docker network disconnect my-network container_name
```
Use case: Add or remove containers from networks without restarting them.

# Data Management

## Volumes vs bind mounts

When running containers, data management is important because containers are ephemeral — once a container is removed, its data is usually lost. Docker provides ways to persist data:

1. Volumes – Managed by Docker, stored in Docker’s storage area.

2. Bind mounts – Map a directory from the host machine directly into the container.

Both methods allow data persistence, sharing, and separation between container and host.

### Volumes

- Definition: Volumes are stored in a part of the host filesystem that’s managed by Docker (`/var/lib/docker/volumes/` on Linux).
- Ownership: Only Docker should manage volumes. You should not manually modify files in volume paths.
- Portability: Volumes can easily be shared among containers.
- Use cases: Best for production workloads where persistence, portability, and backups are needed.
- Backup & Restore: Easy to backup using Docker CLI.
- Performance: Usually better on Linux since Docker optimizes volume drivers.

```bash
# Create a volume
docker volume create mydata

# Run a container and mount the volume to /app/data inside the container
docker run -d \
  --name vol_container \
  -v mydata:/app/data \
  busybox \
  sh -c "echo 'Hello from volume' > /app/data/file.txt && sleep 3600"

# Check the data inside the container
docker exec -it vol_container cat /app/data/file.txt
```

Even if the container is removed, the data in `mydata` volume persists.

```bash
docker rm -f vol_container
docker run --rm -v mydata:/app/data busybox cat /app/data/file.txt
# Output: Hello from volume
```

### Bind Mounts

- Definition: Bind mounts link a file or directory on the host machine to a path inside the container.
- Ownership: You (the host user) manage the data directly — Docker does not manage the files.
- Flexibility: You can mount any path from the host.
- Use cases: Useful in development, where you want real-time updates inside a container (e.g., editing source code locally and seeing changes reflected immediately).
- Security risk: If you mount sensitive host directories, the container gets full access to them.

```bash
# Create a directory on the host
mkdir /tmp/mydata
echo "Hello from host" > /tmp/mydata/hostfile.txt

# Run a container with a bind mount
docker run -d \
  --name bind_container \
  -v /tmp/mydata:/app/data \
  busybox \
  sleep 3600

# Access the file from inside the container
docker exec -it bind_container cat /app/data/hostfile.txt
# Output: Hello from host
```

If you modify `/tmp/mydata/hostfile.txt` on the host, changes appear instantly inside the container (and vice versa).

### Key Differences: Volumes vs Bind Mounts

| Feature            | Volumes (Docker-managed)       | Bind Mounts (Host-managed)            |
| ------------------ | ------------------------------ | ------------------------------------- |
| **Where stored**   | `/var/lib/docker/volumes/`     | Any path on host system               |
| **Managed by**     | Docker                         | Host user/admin                       |
| **Backup/restore** | Easy via `docker volume`       | Manual (OS-level tools)               |
| **Portability**    | Portable across hosts          | Depends on host directory structure   |
| **Use case**       | Production, persistent storage | Development, direct file sharing      |
| **Performance**    | Usually faster on Linux        | Can be slower (depends on filesystem) |
| **Security**       | Safer (isolated from host)     | Risky if wrong directory mounted      |

- Volumes = like renting a locker inside Docker’s warehouse (Docker manages it, safe, portable).
- Bind Mounts = like giving Docker direct access to a folder in your house (you control it, but Docker has full access).

## Named volumes & anonymous volumes

- Volumes are Docker-managed storage, living under `/var/lib/docker/volumes/` on Linux.
- They persist data even if containers are removed (unless explicitly deleted).
- There are two types when you run `-v` or `--mount`:

1. Named Volumes
2. Anonymous Volumes

### Named Volumes

- Definition: A volume that you explicitly name.
- Creation: Either explicitly with `docker volume create myvol` or implicitly when you run a container with `-v myvol:/path/in/container`.
- Reusability: Easy to share between multiple containers (because you know its name).
- Management: You can inspect, backup, and delete by name.

```bash
# Create a named volume explicitly
docker volume create mynamedvol

# Run a container with a named volume
docker run -d \
  --name named_vol_container \
  -v mynamedvol:/app/data \
  busybox \
  sh -c "echo 'Saved in named volume' > /app/data/file.txt && sleep 3600"

# Check from inside the container
docker exec -it named_vol_container cat /app/data/file.txt
```

### Anonymous Volumes

- Definition: A volume created by Docker without a specific name.
- Creation: Happens when you run `-v /path/in/container` without specifying a volume name. Docker generates a random name (like `d3f7b93c4e7e4f43...`).
- Use cases: Useful if you just want ephemeral storage tied to a container lifecycle and don’t need to reuse it.
- Problem: Hard to manage because names are random. If the container is removed, the anonymous volume may remain as an orphan (taking disk space).

```bash
# Run a container with an anonymous volume
docker run -d \
  --name anon_vol_container \
  -v /app/data \
  busybox \
  sh -c "echo 'Hello from anonymous volume' > /app/data/file.txt && sleep 3600"
```

Docker creates a random volume name automatically. Check it:

```bash
docker inspect anon_vol_container --format '{{json .Mounts}}' | jq
```

Output (example):

```json
[
  {
    "Type": "volume",
    "Name": "0fbb7c0d5c6f9e9a1e64cfa17",
    "Source": "/var/lib/docker/volumes/0fbb7c0d5c6f9e9a1e64cfa17/_data",
    "Destination": "/app/data",
    "Driver": "local"
  }
]
```

### Named vs Anonymous Volume

| Feature         | Named Volumes                           | Anonymous Volumes                          |
| --------------- | --------------------------------------- | ------------------------------------------ |
| **Name**        | Explicit (e.g., `mydata`)               | Randomly generated by Docker               |
| **Reusability** | Easy to share between containers        | Hard to reuse, tied to one container       |
| **Management**  | Can manage via `docker volume` commands | Difficult to track/manage                  |
| **Best for**    | Persistent, shareable storage           | Temporary storage for single container     |
| **Cleanup**     | Controlled (`docker volume rm`)         | Risk of orphaned volumes eating disk space |

- Named Volume = Like labeling your storage box (“ProjectData”). Easy to find and reuse.
- Anonymous Volume = Like an unmarked box. Useful once, but later you may forget what’s inside and where it belongs.

## Sharing volumes between containers

Sometimes multiple containers need access to the same data. For example:

- A web server container (like Nginx) needs to serve files created by an application container.
- A database container stores data that a backup container needs to read.

Docker makes this possible by mounting the same volume into multiple containers.

### How It Works

- One container writes, others can read/write from the same shared volume.
- Since the data lives in the Docker-managed volume directory (`/var/lib/docker/volumes/...`), all containers that mount it see the same files.
- You can also set read-only mounts to ensure some containers don’t modify the data.

### Sharing a Named Volume Between Two Containers

Let’s simulate a scenario where:

- Container A (writer) writes data into a volume.
- Container B (reader) reads the same data.

1. Create a named volume

```bash
docker volume create shared_data
```

2. Run a writer container

This container writes a file into /app/data (backed by the shared volume):

```bash
docker run -d \
  --name writer \
  -v shared_data:/app/data \
  busybox \
  sh -c "echo 'Hello from Writer Container' > /app/data/message.txt && sleep 3600"
```

3. Run a reader container

Mount the same volume into another container:

```bash
docker run --rm \
  --name reader \
  -v shared_data:/app/data \
  busybox \
  cat /app/data/message.txt
```

Output:

```bash
Hello from Writer Container
```

Both containers are accessing the same volume. If the writer updates the file, the reader will see the change.

### Sharing Between More Than Two Containers

You can mount the same volume into as many containers as you need. For example, three containers sharing the same volume:

```bash
docker run -d --name writer -v shared_data:/app/data busybox sh -c "while true; do date >> /app/data/log.txt; sleep 5; done"

docker run -d --name reader1 -v shared_data:/app/data busybox sh -c "tail -f /app/data/log.txt"

docker run -d --name reader2 -v shared_data:/app/data busybox sh -c "tail -f /app/data/log.txt"

```

`writer` continuously appends timestamps to `log.txt`. Both `reader1` and `reader2` containers can see the log updates in real-time.

### Sharing with Read-Only Access

Sometimes you want one container to write, but others should only read.

```bash
docker run --rm \
  --name reader_ro \
  -v shared_data:/app/data:ro \
  busybox \
  cat /app/data/message.txt
```

Here `:ro` means read-only. The reader container cannot modify files in the shared volume.

### Benefits of Sharing Volumes

| Benefit            | Explanation                                                              |
| ------------------ | ------------------------------------------------------------------------ |
| **Data sharing**   | Multiple containers access the same files.                               |
| **Decoupling**     | Containers can focus on specific tasks (writer, reader, backup, etc.).   |
| **Persistence**    | Data survives even if all containers stop, as long as the volume exists. |
| **Access control** | You can use `:ro` (read-only) to prevent accidental writes.              |

## Backup & restore volumes

The common way is to use a temporary container that mounts:

1. The source volume you want to back up.
2. A bind mount to a host directory (to store the backup).

Inside that container, you can run `tar` to compress the contents.

### Backup a Volume

Let’s say we have a volume called `mydata`.

1. Create the volume and add some data

```bash
docker volume create mydata

docker run --rm -v mydata:/app/data busybox sh -c "echo 'Hello Volume Backup' > /app/data/backup.txt"
```

2. Backup the volume

```bash
docker run --rm \
  -v mydata:/volume_data \
  -v $(pwd):/backup \
  busybox \
  tar -czf /backup/mydata_backup.tar.gz -C /volume_data .
```

- `-v mydata:/volume_data` → Mount the Docker volume.
- `-v $(pwd):/backup` → Mount the current host directory as `/backup`.
- `tar -czf` → Compress everything inside the volume into a `.tar.gz` file.

Now, in your host’s current directory, you have:

```
mydata_backup.tar.gz
```

### Restore a Volume

To restore data into a volume, you reverse the process:

1. Create a new (or empty) volume.
2. Mount both the volume and the backup file into a container.
3. Extract (`tar -xzf`) the backup into the volume.

### Steps

1. Create a new volume

```bash
docker volume create mydata_restored
```

2. Restore from backup

```bash
docker run --rm \
  -v mydata_restored:/volume_data \
  -v $(pwd):/backup \
  busybox \
  tar -xzf /backup/mydata_backup.tar.gz -C /volume_data
```

3. Verify restored data

```
docker run --rm -v mydata_restored:/app/data busybox cat /app/data/backup.txt
```

### Key Points to Remember

| Step              | Command Example                                                 |
| ----------------- | --------------------------------------------------------------- |
| **Backup**        | `tar -czf /backup/backup.tar.gz -C /volume_data .`              |
| **Restore**       | `tar -xzf /backup/backup.tar.gz -C /volume_data`                |
| **Use case**      | Migration, disaster recovery, cloning environments              |
| **Best practice** | Store backups in external storage (S3, NFS, cloud bucket, etc.) |

- Backup = making a `.zip` copy of the drive contents.
- Restore = unpacking the `.zip` onto a new drive.

# Docker Compose

- Docker Compose is a tool for defining and managing multi-container Docker applications.
- Instead of running long `docker run ...` commands manually for each container, you can describe your setup in a YAML file (`docker-compose.yml`).
- Then, with a single command (`docker-compose up`), all containers and services are started together.

## Why use docker-compose.yml

1. Simplifies Configuration

- Instead of writing long `docker run` commands with lots of `-v`, `-e`, `-p` flags, you define everything in a clean YAML file.
- Easier to read, share, and modify.

2. Multi-Container Applications

- Most real-world apps use multiple containers (e.g., a web app + database + cache).
- Compose makes it easy to define and link them together.

3. Networking Made Easy

- All services defined in a `docker-compose.yml` share the same default network.
- Containers can talk to each other by service name (no need to manually manage IPs).

4. Environment Management

- You can define environment variables directly in the YAML.
- Supports `.env` files for secrets/configs.

5. Reproducibility

- The YAML file acts like documentation + config.
- Anyone can clone your project and run `docker-compose up` to replicate the same environment.

6. Scaling

- You can scale services with a single command:

```bash
docker-compose up --scale web=
```

(Runs 3 replicas of the web service.) 7. Portability

- Works across different environments (development, staging, production).
- Easy to move between machines.

## Syntax & structure

A `docker-compose.yml` file is written in YAML format and typically has the following main sections:

1. `version`: → Compose file format version (e.g., `"3.9"`).
2. `services`: → Defines your containers (applications/services).
3. `volumes`: → Defines persistent storage volumes.
4. `networks`: → Defines custom networks.
5. `configs`: & `secrets:` → Manage sensitive data (optional, advanced).

**General Structure**

```yaml
version: "3.9" # (1) Compose file format version

services: # (2) Define your containers
  service_name: # Name of the service (used as DNS hostname)
    image: # Docker image to use
    build: # (Optional) Build from Dockerfile
    ports: # Port mapping (host:container)
    volumes: # Mount host paths or volumes
    environment: # Environment variables
    networks: # Networks this service connects to
    depends_on: # Specify dependencies
    restart: # Restart policy

volumes: # (3) Define named volumes
  volume_name: {}

networks: # (4) Define networks
  network_name: {}
```

1. services

Defines all containers in the application. Each service is a container.

```bash
services:
  web:
    image: nginx:alpine
    ports:
      - "8080:80"
  db:
    image: mysql:5.7
    environment:
      MYSQL_ROOT_PASSWORD: example
```

- `web` and `db` are two containers.
- `web` uses Nginx, exposing port 8080.
- `db` uses MySQL with environment variables.

3. volumes
   Defines named volumes (persistent storage).

```bash
volumes:
  db_data: {}
```

- `db_data` is a named volume.
- Services can mount it like this:

```bash
volumes:
  - db_data:/var/lib/mysql
```

4. networks

Defines custom networks for container communication.

```bash
networks:
  backend: {}
  frontend: {}
```

Services can join these networks:

```bash
networks:
  - backend
```

If not defined, Docker creates a default network for services.

5. configs & secrets (optional, advanced)

- Configs = store config files.
- Secrets = store sensitive data like passwords.
- Useful in Swarm mode or secure setups.

```bash
secrets:
  db_password:
    file: ./db_password.txt
```

### Full Application Example

```yaml
version: "3.9"

services:
  web:
    image: nginx:alpine
    ports:
      - "8080:80"
    volumes:
      - ./html:/usr/share/nginx/html
    networks:
      - frontend
    depends_on:
      - db

  db:
    image: mysql:5.7
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: example
      MYSQL_DATABASE: testdb
      MYSQL_USER: user
      MYSQL_PASSWORD: password
    volumes:
      - db_data:/var/lib/mysql
    networks:
      - backend

volumes:
  db_data: {}

networks:
  frontend: {}
  backend: {}
```

- `version: "3.9"` → Defines YAML schema for Compose.
- `services`:
  - `web` (Nginx container):
    - Serves static files from `./html`.
    - Exposes port `8080` → `80`.
    - Connected to `frontend` network.
    - Depends on `db` service.
  - `db` (MySQL container):
    - Has environment variables for credentials.
    - Uses a named volume (`db_data`) for persistence.
    - Connected to `backend` network.
- `volumes`: → Defines `db_data` volume to persist MySQL data.
- `networks`: → Separates frontend and backend traffic.

## Running multiple services together

Manually starting each container with docker run is messy.
With Docker Compose, you can define all services in one docker-compose.yml file and run them together with:

```bash
docker-compose up -d
```

### How Docker Compose Handles Multiple Services

1. Single config file (`docker-compose.yml`)
   Defines all services, their dependencies, volumes, and networks.
2. Automatic networking

- All services are placed in a shared network by default.
- They can talk to each other using service names (e.g., `db`, `redis`) instead of IP addresses.

3. Service dependencies
   - `depends_on` lets you declare which service should start before another.
4. Scaling
   - You can scale specific services:
   ```bash
   docker-compose up --scale web=3
   ```

### Benefits of Running Multiple Services with Compose

| Benefit               | Why it matters                                                     |
| --------------------- | ------------------------------------------------------------------ |
| **Single command**    | Start/stop the entire app stack with `docker-compose up` / `down`. |
| **Service isolation** | Each service runs in its own container.                            |
| **Easy networking**   | Services discover each other by **name**.                          |
| **Persistence**       | Data is kept in **volumes**, not lost when containers restart.     |
| **Scalability**       | Scale frontend services without touching the backend.              |

## Environment variables in Compose

1. Inside docker-compose.yml under environment:
2. Using .env file

`docker-compose.yml`

```Dockerfile
services:
  db:
    image: mysql:5.7
    environment:
      MYSQL_ROOT_PASSWORD: ${MYSQL_ROOT_PASSWORD}
      MYSQL_DATABASE: ${MYSQL_DATABASE}
      MYSQL_USER: ${MYSQL_USER}
      MYSQL_PASSWORD: ${MYSQL_PASSWORD}
```

Compose automatically loads `.env` from the same directory as the `docker-compose.yml`. 2. Using `env_file:` directive

`docker-compose.yml`

```Dockerfile
services:
  db:
    image: mysql:5.7
    env_file:
      - db.env
```

## Using `depends_on` for service dependencies

In multi-container applications, some services must start before others.

- A web app (frontend) that requires a database to be running.
- A worker service that depends on a message queue.

By default, Compose starts services in parallel, which may cause errors if one container tries to connect to another before it’s ready.

```yaml
services:
  service_a:
    image: some_image
    depends_on:
      - service_b
      - service_c
```

- This means `service_b` and `service_c` start before `service_a`.
- But `depends_on` does not wait until the dependency is “ready”, it only ensures the container is started.

### Important Limitation of `depends_on`

`depends_on` ensures container startup order, but not application readiness.

- MySQL might take a few seconds to initialize.
- Even though `db` container starts first, the database may not be ready when `web` tries to connect.

### Handling Readiness Properly

To ensure that a service waits until another service is fully ready, you can combine `depends_on` with:

1. Healthchecks

- Use `healthcheck:` in the dependency service.
- Then, `depends_on.condition: service_healthy` (only available in Compose v2).

```yaml
version: "3.9"

services:
  web:
    image: python:3.9-slim
    command: sh -c "pip install flask mysql-connector-python && python app.py"
    volumes:
      - ./app:/app
    working_dir: /app
    ports:
      - "5000:5000"
    depends_on:
      db:
        condition: service_healthy

  db:
    image: mysql:5.7
    environment:
      MYSQL_ROOT_PASSWORD: rootpass
    healthcheck:
      test: ["CMD", "mysqladmin", "ping", "-h", "localhost"]
      interval: 10s
      timeout: 5s
      retries: 5
```

Now `web` will only start after `db` is healthy (MySQL ready to accept connections).

## Scaling containers (docker compose up --scale)

Normally, a service in `docker-compose.ym`l runs as one container.
Scaling means running multiple identical containers of the same service.

You can scale services using:

```bash
docker-compose up --scale <service>=<number>
```

Example:

```bash
docker-compose up --scale web=3
```

This runs 3 replicas of the `web` service simultaneously.

**What Happens?**

- Docker Compose creates 3 containers from the same service definition.
- Containers will have unique names:

```bash
projectname_web_1
projectname_web_2
projectname_web_3
```

- All containers share the same network and service name (`web`).

### Why Use Scaling?

1. Load Balancing: Multiple replicas can handle more requests.(Usually combined with a reverse proxy like Nginx, Traefik, or HAProxy).

2. High Availability: If one container fails, others are still available.

3. Parallel Processing: Workers (e.g., background jobs, consumers) can run in parallel.

4. Testing: Useful for simulating multiple nodes in a distributed system.

### Port Mapping Conflict

- Each `web` container tries to bind `80` inside the container → `8080` on the host.
- But you cannot map the same host port (`8080`) to multiple containers.

Solution:

- Remove the port mapping in `docker-compose.yml`.
- Use a reverse proxy/load balancer as a front-facing service.

### Example with Load Balancer

We’ll add an Nginx load balancer in front of scaled `web` containers.

`docker-compose.yml`

```yaml
version: "3.9"

services:
  loadbalancer:
    image: nginx:alpine
    ports:
      - "8080:80"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
    depends_on:
      - web

  web:
    image: nginx:alpine
    networks:
      - app_net

networks:
  app_net:
```

`nginx.conf`

```nginx
events {}

http {
  upstream backend {
    server web:80;  # DNS-based service discovery
  }

  server {
    listen 80;
    location / {
      proxy_pass http://backend;
    }
  }
}
```

Scale the Web Service

```bash
docker-compose up --scale web=3 -d
```

- The load balancer (`loadbalancer`) listens on `http://localhost:8080`
- It distributes requests across 3 replicas of `web`.
  Service discovery works because all `web` containers are in the same network, accessible by service name `web`.

### Scaling Worker Services

Scaling isn’t just for web servers — it’s often used for worker/consumer containers.

```yaml
services:
  worker:
    image: myapp/worker:latest
```

Run

```bash
docker-compose up --scale worker=5
```

Now you have 5 workers running jobs in parallel.

### Key Notes About Scaling

| Point                 | Explanation                                                                                                                                           |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Default**           | Each service runs as **1 container** unless scaled.                                                                                                   |
| **Port conflicts**    | Only **one container per service** can map to a specific host port.                                                                                   |
| **Networking**        | Scaled services share the same **DNS name** (e.g., `web`) inside the Compose network. Requests are **round-robin load balanced** internally.          |
| **Stateful services** | Scaling works best for **stateless** services (web servers, workers). Databases should generally **not** be scaled this way (use clustering instead). |

