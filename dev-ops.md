# Contents

- [Docker](#docker)
  - [Key Concepts](#key-concepts-of-docker)
  - [Real-World Analogy](#real-world-analogy-of-docker)
  - [Example](#example-of-docker)
  - [What happens under the hood](#what-happens-under-the-hood)
  - [Most Used Command](#most-used-command)
  - [Most Used Flags](#most-used-flags)
  - [Docker Tag](#docker-tag)
  - [Ports in Docker](#ports-in-docker)
  - [Docker Image vs Docker Container](#docker-image-vs-docker-container)
  - [Others Concepts of Docker](#others-concepts-of-docker)
    - [Detach Mode](#detach-mode)
    - [Memory Uses](#memory-uses)
- [Dockerfile](#dockerfile)
  - [Common Instructions](#common-dockerfile-instructions)
  - [Step-by-Step Explanation](#step-by-step-explanation)
  - [Dockerfile to Image](#dockerfile-to-image)
  - [Tips for Dockerfile](#tips-for-dockerfile)
  - [`dockerignore`](#dockerignore)
- [Docker Compose](#docker-compose)
  - [Example](#example-of-docker-compose)
    - [How it works](#how-it-works)
  - [Most Used Command](#most-used-command-of-docker-compose)
- [`docker-compose.yml`](#docker-composeyml)
  - [Key Fields](#key-fields-of-docker-composeyml)
  - [Basic Structure](#basic-structure-of-docker-composeyml)
  - [`.env` File Support](#env-file-support)
- [Comparison of Docker and Docker Compose](#comparison-of-docker-and-docker-compose)
  - [Relationship Between Docker and Docker Compose](#relationship-between-docker-and-docker-compose)
  - [Differences Between Docker and Docker Compose](#differences-between-docker-and-docker-compose)
  - [Run app with Docker alone (manually)](#run-app-with-docker-alone-manually)
  - [Run app with Docker Compose](#run-app-with-docker-compose)
  - [Clean Up Docker](#clean-up-docker)
- [Docker Hub](#dockerhub)

  - [Key Features](#key-features-of-docker-hub)
  - [Docker Hub Workflow](#basic-docker-hub-workflow)

- [Docker Volume](#docker-volume)
  - [Types of Docker Storage](#types-of-docker-storage)
  - [Example of Creating and Using a Volume](#example-of-creating-and-using-a-volume)
  - [Docker Compose setup for Docker Volume](#docker-compose-setup-for-docker-volume)
  - [Manage Volumes](#manage-volumes)
- [Docker Network](#docker-network)
  - [Types of Docker Networks](#types-of-docker-networks)
  - [Default Docker Networks](#default-docker-networks)
  - [Custom Bridge Network](#example-using-a-custom-bridge-network)
  - [Docker Compose setup for Docker Network](#docker-compose-setup-for-docker-network)
  - [Benefits of Custom Bridge Networks](#benefits-of-custom-bridge-networks)
  - [Docker Compose and Networking](#docker-compose-and-networking)
- [Run Microservices with docker](#run-microservices-with-docker)
  - [Services](#services)
  - [Architecture](#architecture)
  - [Dockerfile](#dockerfile-1)
  - [`docker-compose.yml`](#docker-composeyml-1)
  - [Running Everything](#running-everything)
- [GitHub Actions](#github-actions)
  - [Key Concepts](#key-concepts-of-github-actions)
  - [Folder Structure](#folder-structure-of-github-actions)
  - [Sample Workflow](#sample-github-actions-workflow)
  - [Events in GitHub Actions](#events-in-github-actions)
  - [Jobs in GitHub Actions](#jobs-in-github-actions)
  - [Types of Job](#types-of-job)
  - [Example of Full Stack Application](#example-of-full-stack-application)

# Docker

Docker is an open-source platform that allows developers to automate the deployment of applications inside lightweight, portable containers.

**Why Use Docker?**

- **Isolation** – Each container runs separately, like its own mini-computer.
- **Portability** – Runs the same across any environment (dev, test, production).
- **Efficiency** – Uses less memory and resources compared to VMs.
- **Consistency** – Works the same everywhere: your machine, a colleague’s machine, or production.

## Key Concepts of Docker

| Concept           | Description                                                                                                                |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------- |
| **Image**         | A **read-only template** with instructions to create a container. Think of it like a snapshot of your app and environment. |
| **Container**     | A **running instance of an image**. It’s isolated, lightweight, and portable.                                              |
| **Dockerfile**    | A **text file** with step-by-step instructions to build a Docker image.                                                    |
| **Docker Hub**    | A **cloud-based registry** where Docker users can share images.                                                            |
| **Docker Engine** | The **runtime** that builds and runs containers.                                                                           |

## Real-World Analogy of Docker

Imagine a shipping company:

- A Docker Image is like the blueprint of a product.
- A Container is like a sealed shipping container holding a product.
- No matter which ship (environment) you put the container on, it works the same way.

## Example of Docker

**Project Structure:**

```
myapp/
├── app.js
├── package.json
└── Dockerfile
```

**Dockerfile:**

```Dockerfile
# Use official Node.js image as base
FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Copy dependency files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy app source
COPY . .

# Expose port 3000
EXPOSE 3000

# Command to run the app
CMD ["npm", "start"]
```

- The difference between `.` and `./` is stylistic, not functional.

- `WORKDIR` directory:

  - exists only inside the container, not on your host machine (i.e., your laptop), unless you explicitly mount a volume.
  - Is virtual — created inside the container’s isolated filesystem (which Docker builds from the base image like `node:18`).
  - It has no direct link to a folder on your laptop unless you create that link with Docker volumes (`-v`).

  **When Does It Connect to Your Laptop?** Only if you bind a volume like:

  ```shell
  docker run -v /host/path:/usr/src/app your-image
  ```

  Then `/usr/src/app` in the container will map to `/host/path` on your real laptop. Without this, it's completely isolated.

### How to Run Docker File

1. **Build the image**

   ```shell
   docker build -t my-node-app .
   ```

2. **Run the container**

   ```shell
   docker run -p 3000:3000 my-node-app
   ```

## What happens under the hood

1. Docker reads the Dockerfile to build a custom image.
2. That image is stored locally.
3. When you run the container:
   - It spins up a lightweight virtual environment.
   - Maps port 3000 on your machine to port 3000 in the container.
   - Executes the app inside the isolated container.

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

Why? Because the port is not published to your host. It’s only listening inside the container.

##### Possible Reasons to work it without port mapping

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

##### Example

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

## Ports in Docker

Docker port behavior is one of the most confusing things for beginners. Let's simplify it with a real-world analogy and a clear visual flow.

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

## Docker Image vs Docker Container

| Feature        | **Docker Image**                                                                               | **Docker Container**                                                                         |
| -------------- | ---------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| **Definition** | A **read-only template** with instructions to create a container (like a snapshot of a system) | A **runtime instance** of a Docker image (like a running virtual machine based on the image) |
| **State**      | Static                                                                                         | Dynamic                                                                                      |
| **Mutability** | Immutable                                                                                      | Mutable                                                                                      |
| **Usage**      | Used to create containers                                                                      | Used to run the application                                                                  |
| **Storage**    | Stored on disk as a layered file system                                                        | Stored in memory and disk during runtime                                                     |
| **Lifecycle**  | Built once; does not change                                                                    | Created, started, stopped, restarted, deleted                                                |
| **Example**    | `node:18`, `ubuntu:22.04`, `nginx:alpine`                                                      | A running instance of `node:18` that serves your Node.js app                                 |
| **Analogy**    | Class (blueprint) in OOP                                                                       | Object (instance) in OOP                                                                     |

### Docker Image

A Docker image is immutable, meaning:

- Once built, it does not change.
- All the layers (created from the Dockerfile commands) are read-only.
- If you want to "change" an image, you must build a new one.

**Read-Only File System:** When Docker creates an image, it consists of layers. Each layer is read-only and stacked on top of each other.

### Docker Container

A Docker container is mutable, meaning:

- While it runs, you can change files, write logs, install packages, etc.
- It has a read-write(I/O) layer on top of the image’s read-only layers.
- These changes only exist inside that container.

**Read-Write Layer:**

- When a container starts from an image, Docker adds a thin writable layer.
- All file changes (create, delete, modify) happen in this top layer.
- Underneath, the image’s layers are still read-only.

## Others Concepts of Docker

### Detach mode

Detach mode (`--detach` or `-d`) in Docker is a way to run containers in the background instead of attaching to their terminal output.

**Detach Mode:**

- Start the container
- Run it in the background (like a background process)
- Print just the container ID
- Not show the container’s logs/output in your terminal
- You cannot provide interactive(`-i`) input (input()) to a container running detached.

**Common Use Cases:**

- Running web servers (e.g., Nginx, Node.js, Django)
- Background services like databases (PostgreSQL, Redis)
- Any long-running processes where you don’t need to interact immediately

#### Compare With Foreground Mode

| Mode                 | Command         | Behavior                                |
| -------------------- | --------------- | --------------------------------------- |
| Foreground (default) | `docker run`    | You see logs and interact via terminal  |
| Detached             | `docker run -d` | No logs in terminal, runs in background |

### Memory Uses

#### Real-Time Stats for All Containers

Run `docker stats`

Output:

```bash
CONTAINER ID   NAME         CPU %     MEM USAGE / LIMIT     MEM %     ...
abc123         my-app       2.34%     150MiB / 1.95GiB       7.69%     ...
```

- MEM USAGE / LIMIT: Current memory used by the container and the total available
- MEM %: How much of its memory limit the container is using
  This is the best command for live monitoring per container.

#### Detailed stats

```bash
docker container inspect <container_id_or_name>
```

This gives a JSON output. For memory limits or usage, look under the `HostConfig` and `MemoryStats` fields (e.g., if you've set memory limits).

# Dockerfile

A Dockerfile is a text file containing a set of instructions used to build a Docker image. It automates the process of packaging your application, its dependencies, environment settings, and configuration.

Think of a Dockerfile as a recipe to create a container image.

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

- `LABEL` is useful for documentation, versioning, maintainer info, source repo URLs, licenses, or other descriptive info.

## Step-by-Step Explanation

| Line                    | Meaning                                                             |
| ----------------------- | ------------------------------------------------------------------- |
| `FROM node:18`          | Uses the official Node.js v18 image from Docker Hub as the base     |
| `WORKDIR /usr/src/app`  | Sets `/usr/src/app` as the working directory in the container       |
| `COPY package*.json ./` | Copies dependency files first (for optimized caching)               |
| `RUN npm install`       | Installs Node.js dependencies                                       |
| `COPY . .`              | Copies all files in current dir (host) into working dir (container) |
| `EXPOSE 3000`           | Declares that the app will use port 3000                            |
| `CMD ["npm", "start"]`  | Default command that starts the Node.js app                         |

## Dockerfile to Image

Here’s what happens when you run:

```bash
docker build -t my-app .
```

1. Docker reads the `Dockerfile` line by line.
2. Each instruction (`FROM`, `COPY`, `RUN`, etc.) becomes a layer.
3. Docker caches each layer — if nothing changes, it reuses the previous build.
4. Docker assembles these layers into a final image.
5. You can now run the image as a container.

**Layered Architecture: Why It Matters**

- Each Dockerfile instruction creates a new image layer.
- Layers are stacked and cached.
- Docker only rebuilds layers that changed — this is key for fast rebuilds.

You can inspect image layers using:

```bash
docker history my-node-app
```

### Docker Layers

Every command in a Dockerfile creates a layer in the final image.

Layers are:

- Read-only snapshots
- Stacked on top of each other
- Reused (cached) if they haven't changed

Docker uses these layers to build images efficiently and speed up rebuilds.

Each layer is content-addressed via its SHA256 hash, so if the content is the same, the hash is the same — no reupload needed.

**Visual Representation:**

```yaml
Docker Image:
┌────────────────────────────┐
│ Layer 7: CMD               │ ← default command
├────────────────────────────┤
│ Layer 6: EXPOSE 3000       │
├────────────────────────────┤
│ Layer 5: COPY . .          │ ← your app code
├────────────────────────────┤
│ Layer 4: RUN npm install   │ ← dependencies
├────────────────────────────┤
│ Layer 3: COPY package*.json│
├────────────────────────────┤
│ Layer 2: WORKDIR /app      │
├────────────────────────────┤
│ Layer 1: FROM node:18      │ ← base image
└────────────────────────────┘
```

Each layer is:

- Immutable (cannot be changed after it’s built)
- Shared across images (saves disk space)
- Cacheable (saves build time)

**How Layering Helps**

Imagine you're baking a cake (your app). Each ingredient is a layer:

- Base (e.g., flour + sugar)
- Add eggs
- Add chocolate
- Bake

If next time you just change the frosting (top layer), you don’t need to redo the earlier steps. Same logic with Docker.

### Why not copy all files first, then install dependencies?

When Docker builds an image from a `Dockerfile`, it processes each instruction (like `COPY`, `RUN`, etc.) as a separate layer.

If a layer hasn't changed, Docker will reuse the cached layer from the last build.
But if anything changes in that layer (or in any previous one), Docker rebuilds all subsequent layers.

That’s key to understanding this technique.

#### Step: 1 `COPY package*.json ./`

You are copying only `package.json` and `package-lock.json` (if it exists) into the Docker image.

These files define your app's dependencies.

Why this first?

- These files don’t change often compared to your source code.
- So Docker can cache the `RUN npm install` step that comes next.
- It avoids reinstalling dependencies every time you change your source code.

#### Step 2: `RUN npm install`

Now that `package*.json` is present, you install dependencies.

Normally this takes time (downloading packages from npm).

But Docker checks:

Has `package.json` changed since last build?

- If no, Docker uses the cached result of npm install.
- If yes, Docker runs `npm install` again.

Result: Much faster builds when you only change app code.

#### Step 3: `COPY . .`

Now that dependencies are installed and cached, you copy the rest of your app — source files, configuration, assets, etc.

This includes:

- Your `src/` folder
- Any `*.js`, `*.ts` files
- README, `.env`, etc.

Even if this part changes, Docker won't redo npm install, because that already happened in a previous cached layer.

#### What Happens If You Don’t Do This?

Suppose you did this instead:

```Dockerfile
COPY . .
RUN npm install
```

Now if any file in your project changes — a `.js` file, a README, a `.env`, etc.:

Docker sees the `COPY . .` step as changed

- It invalidates the cache
- It re-runs `RUN npm install`
- Slow builds every time

Even if you didn't change any dependencies, Docker would reinstall them, which is costly.

### Reduce Docker Layers

- **Use `.dockerignore` Properly:** Reduce the build context size, which reduces time and avoids unnecessary layers.
- **Use Minimal Base Images:** Choose lighter base images like `alpine`, `debian-slim`, or `distroless`.
- **Avoid `ADD` Unless Needed:** `ADD` does more than `COPY` (e.g., extracting archives, downloading URLs), which can add unintended complexity and layers.

#### Combine `RUN` Instructions

Each `RUN` command creates a layer. Combine them with `&&` to create a single layer.

Bad (multiple layers)

```dockerfile
RUN apt update
RUN apt install -y curl
RUN apt install -y git
```

Good (single layer)

```dockerfile
RUN apt update && \
    apt install -y curl git && \
    rm -rf /var/lib/apt/lists/*
```

`rm -rf /var/lib/apt/lists/*` cleans up cache to reduce final image size.

#### Chain `COPY` Instructions

Instead of multiple `COPY`, combine files into one instruction if they are from the same directory.

Bad

```dockerfile
COPY package.json .
COPY package-lock.json .
COPY src/ src/
```

Good

```dockerfile
COPY . .
```

Note: This only works if you're excluding unneeded files via `.dockerignore`.

## Tips for Dockerfile

- Always start with the most stable or slim base image you need (`node:alpine` is smaller).
- Use `COPY package*.json ./` before copying the whole source to leverage caching.
- Use `.dockerignore` to exclude unnecessary files (like `node_modules` or `.git`).
- Combine commands with `&&` in `RUN` to reduce image layers.

## `dockerignore`

Like `.gitignore`, `dockerignore` helps keep your image clean

```
node_modules
.git
*.log
Dockerfile
.dockerignore
```

# Docker Compose

Docker Compose is a tool for defining and running multi-container Docker applications using a simple YAML file (`docker-compose.yml`).

**Benefits:**

- Manage multiple services (e.g., web + database).
- Use one command (`docker-compose up`) to start everything.
- Networking between containers is handled automatically.

## Example of Docker Compose

`docker-compose.yml`

```yaml
version: "3.8"

services:
  web:
    build: .
    ports:
      - "3000:3000"
    depends_on:
      - mongo

  mongo:
    image: mongo:6
    ports:
      - "27017:27017"
    volumes:
      - mongo-data:/data/db

volumes:
  mongo-data:
```

### Run Docker Comppose

**Start All Services:**

```shell
docker-compose up
```

- It builds the Node.js app container.
- Pulls MongoDB image.
- Sets up a network so the `web` container can talk to `mongo`.

### How it works

| Component         | Role                                     |
| ----------------- | ---------------------------------------- |
| **web** service   | Builds and runs your Node.js app.        |
| **mongo** service | Runs MongoDB as a database container.    |
| `depends_on`      | Ensures MongoDB starts before Node.js.   |
| **Volumes**       | Data persists across container restarts. |

## Most Used Command of Docker Compose

| Command                                  | Description                                                        |
| ---------------------------------------- | ------------------------------------------------------------------ |
| `docker-compose up`                      | Start all services defined in `docker-compose.yml`                 |
| `docker-compose up -d --build`           | Starts all services in the background and rebuilds them if needed. |
| `docker-compose up -d`                   | Start all services in **detached** mode                            |
| `docker-compose down`                    | Stop and remove all containers, networks, volumes                  |
| `docker-compose build`                   | Build or rebuild services                                          |
| `docker-compose pull`                    | Pull service images from the registry                              |
| `docker-compose stop`                    | Stop all services                                                  |
| `docker-compose start`                   | Start stopped services                                             |
| `docker-compose restart`                 | Restart services                                                   |
| `docker-compose logs`                    | View logs from all services                                        |
| `docker-compose logs -f`                 | Follow logs (like `tail -f`)                                       |
| `docker-compose ps`                      | List running containers from Compose                               |
| `docker-compose exec <service> bash`     | Open a shell inside a running service                              |
| `docker-compose run <service> <command>` | Run a one-off command in a new container                           |
| `docker-compose config`                  | Validate and view the final merged configuration                   |
| `docker-compose down -v`                 | Remove volumes as well                                             |
| `docker-compose rm`                      | Remove stopped service containers                                  |

# `docker-compose.yml`

`docker-compose.yml` is a configuration file used by Docker Compose, a tool that allows you to define and run multi-container Docker applications.

Instead of running individual `docker build`, `docker run`, or `docker network` commands manually, Compose lets you declare everything in one file and run it.

## Key Fields of docker-compose.yml

| Field         | Description                                               |
| ------------- | --------------------------------------------------------- |
| `version`     | Compose file format version (3.8 is common)               |
| `services`    | Main section containing definitions for each container    |
| `build`       | Tells Docker to build an image using the local Dockerfile |
| `image`       | Use an existing image from Docker Hub or other registry   |
| `ports`       | Maps container ports to host ports                        |
| `volumes`     | Persist or share data between host and container          |
| `depends_on`  | Controls startup order of services                        |
| `environment` | Pass environment variables into the container             |
| `command`     | Override the default container command                    |

## Basic Structure of docker-compose.yml

```yaml
version: "3.8" # Define the Docker Compose file version

services: # Define all the containers (services)
  web: # Name of the first service (container)
    build: . # Build image from Dockerfile in current directory
    ports:
      - "3000:3000" # Map host:container ports
    depends_on:
      - db # Wait for db service to be ready

  db: # Name of second service (MongoDB/PostgreSQL/etc)
    image: mongo # Use an official image from Docker Hub
    ports:
      - "27017:27017" # Expose MongoDB port
```

### Breakdown

| Key           | Purpose                                                                           |
| ------------- | --------------------------------------------------------------------------------- |
| `web`         | Runs your Node.js app, builds image from `Dockerfile`, exposes port 3000          |
| `db`          | Pulls and runs official MongoDB image                                             |
| `depends_on`  | Ensures MongoDB starts before Node.js                                             |
| `volumes`     | - Web: syncs current code into container<br>- DB: saves MongoDB data persistently |
| `environment` | Sets `NODE_ENV=development` in the container                                      |

## `.env` File Support

You can move environment variables into a `.env` file:

```env
NODE_ENV=development
```

Then reference it in `docker-compose.yml`:

```yaml
environment:
  - NODE_ENV=${NODE_ENV}
```

# Comparison of Docker and Docker Compose

## Relationship Between Docker and Docker Compose

| Concept            | Description                                                                                                                |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| **Docker**         | The **core platform** to build, run, and manage **containers**. It works with one container at a time (typically via CLI). |
| **Docker Compose** | A **tool built on top of Docker** to manage **multi-container applications** using a YAML file (`docker-compose.yml`).     |

Docker Compose uses Docker under the hood. It's not a replacement — it automates and simplifies Docker workflows for complex apps.

## Differences Between Docker and Docker Compose

| Feature           | Docker                                          | Docker Compose                               |
| ----------------- | ----------------------------------------------- | -------------------------------------------- |
| **Focus**         | Managing single containers (manually)           | Managing **multiple containers** as one app  |
| **Configuration** | CLI commands (e.g., `docker run`) or Dockerfile | `docker-compose.yml` (declarative YAML)      |
| **Complexity**    | Good for simple apps                            | Better for full stack / multi-service apps   |
| **Networking**    | Must be created manually                        | Automatic private network between services   |
| **Startup**       | One container at a time                         | Starts all services with `docker-compose up` |
| **Use Cases**     | Running a single service or debugging           | Web apps with backend, database, cache, etc. |

## Run app with Docker alone (manually)

It will required multiple command

```shell
# Step 1: Build the app image
docker build -t my-node-app .

# Step 2: Run MongoDB container (manual network setup required)
docker network create myapp-network
docker run -d --name mongo --network myapp-network mongo:6

# Step 3: Run Node.js container and connect it to MongoDB
docker run -d -p 3000:3000 --name web \
  --network myapp-network my-node-app
```

**Downsides:**

- More commands
- You must manage the network, naming, and startup order manually
- No single source of truth for the stack

## Run app with Docker Compose

Just create `docker-compose.yml` and run

```shell
docker-compose up
```

**Benefits:**

- All services start with one command
- Network and service linking is automatic
- Easy to modify/configure
- Cleaner teardown: docker-compose down

## Clean Up Docker

```shell
# Docker Compose
docker-compose down

# Docker manual
docker rm -f web mongo
docker network rm myapp-network
```

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

# Docker Storage

Understanding where Docker containers, images, WORKDIR, and volumes live on your hard drive is crucial for troubleshooting, performance tuning, and disk management.

## Docker Image

### Location

- Linux (default storage driver: `overlay2`):
  `/var/lib/docker/overlay2/`

- Windows (Docker Desktop, WSL2 backend):
  Inside the WSL2 VM (not directly in C: drive)

- macOS (Docker Desktop):
  Inside the Docker VM disk image:
  `~/Library/Containers/com.docker.docker/Data/vms/0/`

### Example:

When you pull an image like:

```bash
docker pull nginx
```

Docker stores image layers in:

```bash
/var/lib/docker/overlay2/<layer_id>/
```

Each layer is a directory with the file system diff, managed by OverlayFS (on Linux). You don’t interact with this directly, but it's how the image's root filesystem is built.

## Docker Container

### Location:

- Linux:
  `/var/lib/docker/containers/<container_id>/`

- Windows/macOS (Docker Desktop):
  Stored in the internal Docker VM's disk image.

### Example:

If you run a container:

```bash
docker run --name test-nginx -d nginx
```

Docker will create a directory like:

```bash
/var/lib/docker/containers/90d3a3bc8.../
```

That directory includes:

- The container's logs
- Metadata (`config.v2.json`)
- Mount points

However, the actual filesystem seen by the container is layered with the image via `overlay2`.

## `WORKDIR`

`WORKDIR` in Dockerfile sets the working directory inside the container filesystem for any `RUN`, `CMD`, or `ENTRYPOINT`.

### Location

Inside the container's own layered file system, not your host OS.

### Example

When you run the container built from the Dockerfile above, /app is created inside the container (not your machine), even if not pre-existing.

```bash
docker exec -it myapp bash
cd /app  # ← you are now inside the container's WORKDIR
```

So you won’t see `/app` on your host OS unless it's mounted via a volume.

## Docker Volume

### Location:

- Linux:
  `/var/lib/docker/volumes/<volume_name>/_data/`

- Windows/macOS (Docker Desktop):
  Stored in Docker's internal virtual disk.

### Example

```bash
docker volume create mydata
docker run -v mydata:/data busybox sh -c "echo hello > /data/hello.txt"
```

You’ll find:

```bash
/var/lib/docker/volumes/mydata/_data/hello.txt
```

This is outside the container, but mounted inside it, so containers can persist and share data.

## Diagram Summary of Wsl

```
Windows Filesystem (Host)
│
├── C:\Users\<YourName>\.docker\
│   └── (Configuration, not actual images/volumes)

├── \\wsl$\docker-desktop-data\
│   └── docker/
│       ├── containers/                ← Container metadata & logs
│       ├── overlay2/                  ← Image & container filesystem layers
│       ├── volumes/                   ← Named volumes
│       │   └── <volume_name>/
│       │       └── _data/
│       └── image/
│           └── overlay2/
│               └── imagedb/
│
├── \\wsl$\docker-desktop/            ← Runtime Linux VM used by Docker
│   └── (Active Linux Docker daemon)
│
└── (Optional) Bind Mount Paths
    └── C:\Users\<YourName>\project\   ← Mount to /app in container
```

It somewhere like `\\wsl.localhost\docker-desktop\mnt\docker-desktop-disk\data`.

## Desktop with WSL2 backend on Windows

### WSL2 Virtual Disk

Located at:

```shell
C:\Users\<YourName>\AppData\Local\Docker\wsl\data\ext4.vhdx
```

- This is the main virtual hard disk where Docker stores all images, containers, and volumes.
- It grows dynamically as you use Docker (but it never shrinks automatically).

### What Consumes the Most Space?

| Component      | What It Stores                         | Consumes Space? | Grows Over Time? |
| -------------- | -------------------------------------- | --------------- | ---------------- |
| **Images**     | Base OS, application binaries          | ✅ Yes          | ✅ Yes           |
| **Containers** | Runtime diffs, logs                    | ✅ Yes          | ✅ Yes           |
| **Volumes**    | Persistent app data (DBs, files)       | ✅ Yes          | ✅ Yes           |
| **ext4.vhdx**  | All the above, packed inside WSL2 disk | ✅ Yes          | ✅ Yes           |

## Move Docker Data to Another Drive

If you’re running low on space on C:, you can:

1. Stop Docker Desktop
2. Move `ext4.vhdx` to another drive (e.g., `D:\DockerData\ext4.vhdx`)
3. Use a symbolic link or change config (**advanced** setup)

# Docker Volume

A Docker Volume is a persistent storage mechanism used by Docker containers. Volumes allow data to exist independently of the container’s lifecycle—meaning the data will persist even if the container is deleted or recreated.

**Why Use Volumes?**

- **Persistence:** Data remains intact even if the container is removed.
- **Sharing:** Volumes can be shared between multiple containers.
- **Isolation from container file system:** Decouples data from the container's image.
- **Backup and Restore:** Easy to back up and restore.
- **Performance:** Optimized for Docker (better than bind mounts in most cases).

## Types of Docker Storage

| Storage Type | Location                                    | Persistent | Use Case                                         |
| ------------ | ------------------------------------------- | ---------- | ------------------------------------------------ |
| Volumes      | Docker-managed (`/var/lib/docker/volumes/`) | ✅ Yes     | Best for production                              |
| Bind Mounts  | User-defined path on host                   | ✅ Yes     | Specific host directory access                   |
| tmpfs Mounts | In-memory only                              | ❌ No      | Temporary data, disappears after container stops |

## Example of Creating and Using a Volume

### Step 1: Create a Docker Volume

```bash
docker volume create my_data_volume
```

This creates a volume named `my_data_volume`.

### Step 2: Use Volume in a Container

```bash
docker run -d \
  --name my_container \
  -v my_data_volume:/app/data \
  busybox \
  sh -c "echo Hello from container > /app/data/hello.txt && sleep 3600"
```
- `my_data_volume` - The name of the volume on your host
- `/app/data` - The mount point inside the container — this is where the volume will appear.


What this does:

- `-v my_data_volume:/app/data`: Mounts the volume into the container at `/app/data`.
- Writes `hello.txt` into the volume.
- Runs for 1 hour (`sleep 3600`) to allow us to inspect.
- To execute command inside the volume, just use `sh`.
- Run command `create` and `run` volume.
### Step 3: Inspect Volume Contents

To access the content, you can use another container:

```bash
docker run --rm -v my_data_volume:/data busybox ls /data
```

- To make the volume read-only use `ro` flag(eg. `-v my_data_volume:/data:ro`)

You’ll see: `hello.txt`

### Step 4: Delete the Original Container

```bash
docker rm -f my_container
```

Now the container is gone, but the volume (and its data) still exists!

### Where are Volumes Stored?

On the host machine, volumes live in:

```bash
/var/lib/docker/volumes/my_data_volume/_data
```

**You shouldn't modify this directly.**

## Docker Compose setup for Docker Volume

```yaml
version: "3.9"

services:
  mysql:
    image: mysql:8
    container_name: mysql_db
    environment:
      MYSQL_ROOT_PASSWORD: root123
      MYSQL_DATABASE: app_db
      MYSQL_USER: app_user
      MYSQL_PASSWORD: app_pass
    volumes:
      - mysql_data:/var/lib/mysql
    ports:
      - "3306:3306"

  node:
    build: ./node
    container_name: node_app
    depends_on:
      - mysql
    environment:
      DB_HOST: mysql
      DB_USER: app_user
      DB_PASSWORD: app_pass
      DB_NAME: app_db
    ports:
      - "3000:3000"
    volumes:
      - ./node:/app

volumes:
  mysql_data:
```

## Manage Volumes

| Command                                | Description           |
| -------------------------------------- | --------------------- |
| `docker volume ls`                     | List volumes          |
| `docker volume inspect my_data_volume` | View volume details   |
| `docker volume rm my_data_volume`      | Delete a volume       |
| `docker volume prune`                  | Delete unused volumes |

# Docker Network

Docker networking enables communication between containers and the host system or the internet. By default, Docker sets up several types of networks when installed. You can also define your own custom networks depending on your requirements.

## Types of Docker Networks

| Network Type        | Description                                                                                   |
| ------------------- | --------------------------------------------------------------------------------------------- |
| **bridge**          | Default network for standalone containers. Allows containers to communicate on the same host. |
| **host**            | Removes the network isolation. Container shares the host’s networking namespace.              |
| **none**            | Container is isolated from all networks. No internet or inter-container access.               |
| **overlay**         | Allows containers running on different Docker hosts (in a swarm) to communicate securely.     |
| **macvlan**         | Assigns a MAC address to a container, making it appear as a physical network device.          |
| **custom networks** | User-defined bridge or overlay networks, more flexible and preferred for microservices.       |

## Default Docker Networks

```bash
docker network ls
```

Example Output:

```bash
NETWORK ID     NAME      DRIVER    SCOPE
b1f7...        bridge    bridge    local
29f7...        host      host      local
9a7a...        none      null      local
```

## Example: Using a Custom Bridge Network

### Step 1: Create a Custom Bridge Network

```bash
docker network create my_custom_network
```

This creates a bridge network named `my_custom_network`. It allows containers to resolve each other by name and communicate internally.

### Step 2: Create Two Containers on That Network

```bash
docker run -dit --name container1 --network my_custom_network alpine sh
docker run -dit --name container2 --network my_custom_network alpine sh
```

These are two Alpine containers running in the same custom network.

### Step 3: Test Communication Between Containers

Now enter into one container and ping the other by container name:

```bash
docker exec -it container1 sh
```

Inside the container:

```bash
ping container2
```

You should see ping replies — meaning the two containers can communicate using DNS resolution (via container names) on the same network.

## Docker Compose setup for Docker Network

```yaml
version: "3"
services:
  app:
    build: .
    depends_on:
      - mongo
  mongo:
    image: mongo
    environment:
      MONGO_INITDB_ROOT_USERNAME: root
      MONGO_INITDB_ROOT_PASSWORD: example
```

## Benefits of Custom Bridge Networks

| Feature                     | Description                                                                   |
| --------------------------- | ----------------------------------------------------------------------------- |
| **DNS-based discovery**     | Containers can refer to each other by name (e.g., `container1`, `db`, `api`). |
| **Isolation**               | Services are isolated from other containers unless explicitly connected.      |
| **Better control**          | You can attach/disconnect containers dynamically from networks.               |
| **Port mapping not needed** | If containers are on the same custom network, you don’t need to expose ports. |

## Docker Compose and Networking

When using Docker Compose, all services in a file are automatically connected to a default network with DNS resolution:

```yaml
version: "3"
services:
  web:
    image: nginx
  app:
    image: node
```

Here, `web` and `app` can communicate using their service names (e.g., `http://web`, `http://app`).

# Run Microservices with docker0

## Services

| Service     | Tech Stack                   |
| ----------- | ---------------------------- |
| Auth API    | **Django** + **MySQL**       |
| User API    | **Node.js** + **MongoDB**    |
| Product API | **Node.js** + **PostgreSQL** |
| Order API   | **Node.js** + **MySQL**      |

## Architecture

```
microservices/
├── auth-service/         (Django + MySQL)
│   ├── Dockerfile
│   ├── requirements.txt
│   └── ...
├── user-service/         (Node.js + MongoDB)
│   ├── Dockerfile
│   ├── package.json
│   └── ...
├── product-service/      (Node.js + PostgreSQL)
│   ├── Dockerfile
│   ├── package.json
│   └── ...
├── order-service/        (Node.js + MySQL)
│   ├── Dockerfile
│   ├── package.json
│   └── ...
└── docker-compose.yml    ← main entry point
```

## Dockerfile

### `auth-service/Dockerfile`(Django)

```Dockerfile
FROM python:3.11
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
```

### `user-service/Dockerfile` (Node.js + MongoDB)

```Dockerfile
FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "start"]
```

## `docker-compose.yml`

```yaml
version: "3.8"

services:
  # ------------------ AUTH SERVICE (Django + MySQL) ------------------
  auth-db:
    image: mysql:8
    environment:
      MYSQL_ROOT_PASSWORD: root
      MYSQL_DATABASE: authdb
      MYSQL_USER: user
      MYSQL_PASSWORD: pass
    ports:
      - "3306:3306"
    volumes:
      - auth-db-data:/var/lib/mysql

  auth-service:
    build: ./auth-service
    command: python manage.py runserver 0.0.0.0:8000
    volumes:
      - ./auth-service:/app
    ports:
      - "8000:8000"
    depends_on:
      - auth-db
    environment:
      - DB_HOST=auth-db
      - DB_NAME=authdb
      - DB_USER=user
      - DB_PASSWORD=pass

  # ------------------ USER SERVICE (Node.js + MongoDB) ------------------
  user-db:
    image: mongo:6
    ports:
      - "27017:27017"
    volumes:
      - user-db-data:/data/db

  user-service:
    build: ./user-service
    volumes:
      - ./user-service:/app
    ports:
      - "8001:8001"
    depends_on:
      - user-db
    environment:
      - MONGO_URL=mongodb://user-db:27017/userdb

  # ------------------ PRODUCT SERVICE (Node.js + PostgreSQL) ------------------
  product-db:
    image: postgres:15
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: pass
      POSTGRES_DB: productdb
    ports:
      - "5432:5432"
    volumes:
      - product-db-data:/var/lib/postgresql/data

  product-service:
    build: ./product-service
    volumes:
      - ./product-service:/app
    ports:
      - "8002:8002"
    depends_on:
      - product-db
    environment:
      - PG_HOST=product-db
      - PG_DB=productdb
      - PG_USER=user
      - PG_PASSWORD=pass

  # ------------------ ORDER SERVICE (Node.js + MySQL) ------------------
  order-db:
    image: mysql:8
    environment:
      MYSQL_ROOT_PASSWORD: root
      MYSQL_DATABASE: orderdb
      MYSQL_USER: user
      MYSQL_PASSWORD: pass
    ports:
      - "3307:3306"
    volumes:
      - order-db-data:/var/lib/mysql

  order-service:
    build: ./order-service
    volumes:
      - ./order-service:/app
    ports:
      - "8003:8003"
    depends_on:
      - order-db
    environment:
      - DB_HOST=order-db
      - DB_NAME=orderdb
      - DB_USER=user
      - DB_PASSWORD=pass

volumes:
  auth-db-data:
  user-db-data:
  product-db-data:
  order-db-data:
```

## Running Everything

From the microservices/ root directory, run:

```bash
docker-compose up --build
```

**Each service will:**

- Be built from its own Dockerfile
- Connect to its respective database via service name (e.g., `auth-db`, `user-db`)
- Expose on different ports (`8000`, `8001`, `8002`, `8003`)

# GitHub Actions

GitHub Actions is a CI/CD (Continuous Integration/Continuous Deployment) tool built into GitHub that allows you to automate workflows like building, testing, and deploying code whenever there is a change in your GitHub repository.

It uses YAML files to define workflows, and these files are stored in `.github/workflows/` directory of your repo.

**Real-World Use Cases**

1. **CI/CD for Web App** – Automatically run tests and deploy if all pass.
2. **Lint & Format Check** – Run ESLint or Prettier on every pull request.
3. **Scheduled Jobs** – Automatically back up data or run cron jobs.
4. **Docker Build & Push** – Build Docker images and push to Docker Hub.
5. **Deploy to AWS, Firebase, Netlify, etc.** – Auto-deploy after merging code.

**Advanced Features (Optional)**

- Matrix builds – Test code in multiple environments (e.g., different Node.js versions).
- Caching – Speed up builds by caching dependencies.
- Secrets – Store sensitive data like API keys.
- Reusable Workflows – Modularize and reuse your CI/CD logic across repos.

## Key Concepts of GitHub Actions

| Term         | Description                                                                                                         |
| ------------ | ------------------------------------------------------------------------------------------------------------------- |
| **Workflow** | Automated process triggered by an event (like push, pull request). Defined in `.yml` file.                          |
| **Event**    | Triggers the workflow (e.g., `push`, `pull_request`, `schedule`).                                                   |
| **Job**      | A set of steps executed on the same runner. Each job runs in its own virtual environment.                           |
| **Step**     | A single task within a job (e.g., run a script or use an action).                                                   |
| **Action**   | A reusable piece of code that performs a specific task. GitHub provides official actions or you can write your own. |
| **Runner**   | A server (GitHub-hosted or self-hosted) that runs your jobs.                                                        |

## Folder Structure of GitHub Actions

```
your-project/
├── .github/
│   └── workflows/
│       └── ci.yml   <-- your GitHub Actions workflow file
├── src/
├── tests/
└── package.json
```

## Sample GitHub Actions Workflow

```yaml
# .github/workflows/nodejs.yml
name: Node.js CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build-and-test:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: "18"

      - name: Install dependencies
        run: npm install

      - name: Run tests
        run: npm test
```

### Explanation of the Workflow

| Line                    | Description                                                                    |
| ----------------------- | ------------------------------------------------------------------------------ |
| `name: Node.js CI`      | Sets a name for the workflow.                                                  |
| `on:`                   | Defines events that trigger the workflow (`push` or `pull_request` to `main`). |
| `jobs:`                 | Defines a job called `build-and-test`.                                         |
| `runs-on:`              | Uses an Ubuntu virtual machine to run the job.                                 |
| `steps:`                | Sequence of tasks to execute.                                                  |
| `actions/checkout@v4`   | Checks out your repo code to the runner.                                       |
| `actions/setup-node@v4` | Sets up a Node.js environment.                                                 |
| `npm install`           | Installs dependencies.                                                         |
| `npm test`              | Runs the tests defined in your project.                                        |

## Events in GitHub Actions

Events are triggers that start your workflow. Here are the most commonly used ones:

### a. `push`

Triggers when code is pushed to the repository.

```yaml
on:
  push:
    branches: [main]
```

**Use case:** Run tests/build/deploy when you push to the main branch.

### b. `pull_request`

Triggers when a pull request is opened, updated, or reopened.

```yaml
on:
  pull_request:
    branches: [main]
```

**Use case:** Run lint/tests before merging PRs into the main branch.

### c. `workflow_dispatch`

Manually trigger the workflow from GitHub’s Actions tab.

```yaml
on:
  workflow_dispatch:
    inputs:
      environment:
        description: "Environment to deploy to"
        required: true
        default: "staging"
```

**Use case:** Manual deploy to staging/production by clicking a button.

### d. `schedule` (cron)

Run a workflow periodically using a cron schedule.

```yaml
on:
  schedule:
    - cron: "0 0 * * *" # Every day at midnight UTC
```

**Use case:** Daily backups, cleanup tasks, or scheduled checks.

### e. `release`

Trigger when a new GitHub release is published.

```yaml
on:
  release:
    types: [published]
```

**Use case:** Automatically publish packages or deploy when a release is made.

### Other Examples

- `issues`, `issue_comment`, `pull_request_review` — for automating GitHub issues.
- `deployment` — tied with GitHub Environments API.
- `push.tags` — trigger on tag push for versioning workflows.

## Jobs in GitHub Actions

A job is a group of steps that run together on the same runner. Jobs can run:

- Sequentially (one after another)
- In parallel (independently)
- Conditionally (based on results or input)

### Job Structure

```yaml
jobs:
  job_name:
    name: Descriptive Job Name
    runs-on: ubuntu-latest
    needs: [another_job] # Optional dependency
    if: <condition> # Optional conditional execution
    strategy: # Optional matrix build
      matrix:
        node: [16, 18]
    steps:
      - name: Step 1
        run: echo "Hello, world!"

      - name: Step 2
        uses: some/action@v1
```

#### Breakdown of Job Fields

| Key        | Description                                                                                  |
| ---------- | -------------------------------------------------------------------------------------------- |
| `job_name` | The internal identifier (used in `needs`).                                                   |
| `name`     | Optional human-readable label shown in GitHub UI.                                            |
| `runs-on`  | Required. Specifies the OS/runner (e.g., `ubuntu-latest`, `windows-latest`, `macos-latest`). |
| `needs`    | Optional. Makes the job **dependent** on another job’s success.                              |
| `if`       | Optional. Runs job **only if** the condition is true.                                        |
| `strategy` | Optional. Used for **matrix builds** (run job multiple times with different inputs).         |
| `steps`    | Required. List of **actions or shell commands** to execute in the job.                       |

### Inside `steps`: Common Syntax

Each job contains a list of steps, and each step can either:

1. Run shell commands using `run`, or
2. Use reusable actions with `uses`, or
3. Set outputs and environment variables.

#### `run`: Execute Shell Commands

```yaml
- name: Print a message
  run: echo "Hello World"
```

Shell commands run in `bash` (Linux/macOS) or `PowerShell` (Windows) depending on runner.

#### `uses`: Use a GitHub Action

```yaml
- name: Checkout code
  uses: actions/checkout@v4
```

Reusable actions from GitHub or your own repo.

#### `with`: Pass Inputs to Actions

```yaml
- name: Setup Node.js
  uses: actions/setup-node@v4
  with:
    node-version: "18"
```

Used when `uses`: is present.

#### `env`: Set Environment Variables for the Step

```yaml
- name: Print ENV var
  run: echo "API key is $API_KEY"
  env:
    API_KEY: ${{ secrets.API_KEY }}
```

#### `working-directory`: Change Working Directory

```yaml
- name: Run in subfolder
  run: npm install
  working-directory: ./frontend
```

#### `continue-on-error`: Prevent Step Failure

```yaml
- name: Try something risky
  run: risky-command
  continue-on-error: true
```

#### `timeout-minutes`: Set Step Timeout

```yaml
- name: Long running job
  run: long-script.sh
  timeout-minutes: 10
```

### Job with All Key Fields

```yaml
jobs:
  test-node:
    name: Test on Node.js versions
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node: [16, 18]
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: ${{ matrix.node }}

      - name: Install dependencies
        run: npm install

      - name: Run tests
        run: npm test
```

### Key Expression Syntax

- ``${{ github.ref }}` → current git ref (branch/tag)
- ``${{ matrix.node }}` → current matrix value
- ``${{ secrets.MY_SECRET }}` → access repo secret
- ``${{ env.MY_VAR }}` → access environment variable
- ``${{ github.actor }}` → the person who triggered the workflow

### Summary of Job Components

| Section           | Purpose                          |
| ----------------- | -------------------------------- |
| `job_id`          | Internal identifier              |
| `runs-on`         | OS runner (required)             |
| `needs`           | Job dependency                   |
| `strategy.matrix` | Run job with multiple variations |
| `steps`           | The tasks that job executes      |
| `uses`            | Reuse GitHub actions             |
| `run`             | Run shell commands               |
| `env`             | Define environment variables     |
| `if`              | Conditional execution            |

## Types of Job

### Single Job

A job with steps that run in a single execution environment.

```yaml
jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Install dependencies
        run: npm install

      - name: Run linter
        run: npm run lint
```

For small projects where you just want to run tests or lint once.

### Parallel Jobs

Multiple jobs defined independently — they run at the same time unless dependencies are set.

```yaml
jobs:
  backend-test:
    runs-on: ubuntu-latest
    steps:
      - run: echo "Running backend tests..."

  frontend-test:
    runs-on: ubuntu-latest
    steps:
      - run: echo "Running frontend tests..."
```

Speed up CI by testing parts of your app (e.g., frontend/backend) in parallel.

### Dependent Jobs

A job that waits for another job to finish before it runs.

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - run: echo "Building the app..."

  test:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - run: echo "Testing the app..."

  deploy:
    needs: [build, test]
    runs-on: ubuntu-latest
    steps:
      - run: echo "Deploying the app..."
```

- Run `test` only after `build` is complete.
- Run `deploy` only if both `build` and `test` succeed.

### Matrix Jobs

Run the same job multiple times with different input values (e.g., Node versions, OS).

```yaml
jobs:
  test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node: [16, 18, 20]
    name: Node.js ${{ matrix.node }}
    steps:
      - uses: actions/setup-node@v4
        with:
          node-version: ${{ matrix.node }}

      - run: npm install
      - run: npm test
```

- Test your app across different versions of Node.js.
- Verify cross-platform compatibility.

### Reusable Jobs

Jobs that come from other workflow files and can be reused across multiple projects or repos.

```yaml
jobs:
  call-workflow:
    uses: my-org/my-repo/.github/workflows/reusable.yml@main
    with:
      environment: production
    secrets:
      token: ${{ secrets.MY_SECRET }}
```

- Create reusable build/test/deploy pipelines.
- DRY principle across mono-repos or teams

### Conditional Jobs

Jobs that run only if certain conditions are met.

```yaml
jobs:
  deploy:
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    steps:
      - run: echo "Deploying only from main branch"
```

- Only deploy on `main` branch.
- Skip jobs for specific commit messages or paths.

### Summary of Jobs

| Job Type              | Description                         | Best Use Case          |
| --------------------- | ----------------------------------- | ---------------------- |
| **Single**            | One job, runs standalone            | Lint, simple test      |
| **Parallel**          | Multiple jobs run independently     | Frontend/backend split |
| **Dependent**         | Uses `needs:` to define order       | Test after build       |
| **Matrix**            | Same job, multiple input values     | Test in Node 16/18/20  |
| **Reusable**          | Use jobs from another workflow      | Shareable pipelines    |
| **Conditional**       | Use `if:` to conditionally run jobs | Deploy only on main    |
| **Manual (Dispatch)** | Triggered manually from GitHub UI   | Manual deployment      |

## Example of Full Stack Application

```yaml
name: Fullstack Next.js CI/CD

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]
  workflow_dispatch:
    inputs:
      environment:
        description: "Environment to deploy to (staging or production)"
        required: true
        default: "staging"

env:
  NODE_ENV: production

jobs:
  lint:
    name: Lint Code
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 18
      - run: npm install
      - run: npm run lint

  test:
    name: Run Tests
    runs-on: ubuntu-latest
    needs: lint
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 18
      - run: npm install
      - run: npm run test

  build-docker:
    name: Docker Build
    runs-on: ubuntu-latest
    needs: test
    steps:
      - uses: actions/checkout@v4
      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v3
      - name: Login to DockerHub
        uses: docker/login-action@v3
        with:
          username: ${{ secrets.DOCKER_USERNAME }}
          password: ${{ secrets.DOCKER_PASSWORD }}
      - name: Build & Push Docker Image
        uses: docker/build-push-action@v5
        with:
          context: .
          file: ./Dockerfile
          push: true
          tags: yourdockerhub/your-nextjs-app:${{ github.sha }}

  deploy:
    name: Deploy to Server
    runs-on: ubuntu-latest
    needs: build-docker
    if: github.event_name == 'workflow_dispatch' || github.ref == 'refs/heads/main'
    steps:
      - name: Deploy via SSH
        uses: appleboy/ssh-action@v1.0.0
        with:
          host: ${{ secrets.SSH_HOST }}
          username: ${{ secrets.SSH_USER }}
          key: ${{ secrets.SSH_KEY }}
          port: 22
          script: |
            docker pull yourdockerhub/your-nextjs-app:${{ github.sha }}
            docker stop nextjs-app || true
            docker rm nextjs-app || true
            docker run -d --name nextjs-app -p 3000:3000 --env-file /home/${{ secrets.SSH_USER }}/.env.production yourdockerhub/your-nextjs-app:${{ github.sha }}
```

### Required Secrets

| Secret Name       | Purpose                                 |
| ----------------- | --------------------------------------- |
| `DOCKER_USERNAME` | Docker Hub username                     |
| `DOCKER_PASSWORD` | Docker Hub access token or password     |
| `SSH_HOST`        | IP/Domain of your VPS/server            |
| `SSH_USER`        | SSH username                            |
| `SSH_KEY`         | Private SSH key (with access to server) |
