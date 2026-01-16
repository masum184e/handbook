const fundamentals = [
    {
        title: "Data Structures & Algorithms",
        description:
            "Problem-solving techniques, core data structures, algorithms, and interview-focused practice.",
        link: "/docs/dsa",
        Svg: require("@site/static/icons/dsa.svg").default,
    }, {
        title: "Object-Oriented Programming (OOP)",
        description:
            "Core OOP principles like encapsulation, inheritance, polymorphism, abstraction, and real-world examples.",
        link: "/docs/oop",
        Svg: require("@site/static/icons/oop.svg").default,
    },
    {
        title: "Design Patterns",
        description:
            "Creational, structural, and behavioral design patterns with practical use cases and examples.",
        link: "/docs/design-patterns",
        Svg: require("@site/static/icons/design-patterns.svg").default,
    },
]

const databases = [
    {
        title: "Database Design",
        description:
            "Core concepts of database modeling, normalization, and schema design.",
        link: "/docs/database-design",
        Svg: require("@site/static/icons/database.svg").default,
    },
    {
        title: "MySQL",
        description:
            "Relational database design, SQL queries, indexing, transactions, and performance tuning.",
        link: "/docs/mysql",
        Svg: require("@site/static/icons/mysql.svg").default,
    },
    // {
    //     title: "PostgreSQL",
    //     description:
    //         "Advanced SQL, indexing, performance tuning, JSONB, full-text search, and enterprise-grade features.",
    //     link: "/docs/postgresql",
    //     Svg: require("@site/static/icons/postgresql.svg").default,
    // },
    {
        title: "MongoDB",
        description:
            "NoSQL data modeling, aggregation pipelines, indexing, and performance optimization.",
        link: "/docs/mongodb",
        Svg: require("@site/static/icons/mongodb.svg").default,
    },
    {
        title: "Redis",
        description:
            "In-memory data structures, caching strategies, pub/sub, persistence, and performance optimization.",
        link: "/docs/redis",
        Svg: require("@site/static/icons/redis.svg").default,
    },
    // {
    //     title: "Mongoose",
    //     description:
    //         "MongoDB object modeling for Node.js, schema design, validation, middleware, and relationships.",
    //     link: "/docs/mongoose",
    //     Svg: require("@site/static/icons/mongoose.svg").default,
    // },
    // {
    //     title: "Prisma",
    //     description:
    //         "Modern ORM for Node.js and TypeScript with type-safe database access, migrations, and schema management.",
    //     link: "/docs/prisma",
    //     Svg: require("@site/static/icons/prisma.svg").default,
    // },
    // {
    //     title: "Supabase",
    //     description:
    //         "Open-source Firebase alternative built on PostgreSQL with real-time APIs, auth, storage, and edge functions.",
    //     link: "/docs/supabase",
    //     Svg: require("@site/static/icons/supabase.svg").default,
    // },
];


const backend = [
    {
        title: "System Design",
        description:
            "Scalability, load balancing, caching, CAP theorem, databases, and designing large-scale systems.",
        link: "/docs/system-design",
        Svg: require("@site/static/icons/system-design.svg").default,
    },
    {
        title: "Amazon Web Services (AWS)",
        description:
            "Cloud fundamentals, IAM, EC2, S3, VPC, deployment strategies, and scalable infrastructure design.",
        link: "/docs/aws",
        Svg: require("@site/static/icons/aws.svg").default,
    },
    {
        title: "Docker",
        description:
            "Containerization basics, Dockerfiles, images, containers, networking, and production-ready workflows.",
        link: "/docs/docker",
        Svg: require("@site/static/icons/docker.svg").default,
    },
    {
        title: "NGINX",
        description:
            "High-performance web server, reverse proxy, load balancing, caching, and SSL termination.",
        link: "/docs/nginx",
        Svg: require("@site/static/icons/nginx.svg").default,
    },
    {
        title: "REST API Design",
        description:
            "REST principles, resource modeling, HTTP methods, status codes, versioning, and API best practices.",
        link: "/docs/rest-api-design",
        Svg: require("@site/static/icons/rest-api-design.svg").default,
    },
    {
        title: "RabbitMQ",
        description:
            "Message queues, exchanges, routing, pub/sub patterns, reliability, and distributed messaging.",
        link: "/docs/rabbitmq",
        Svg: require("@site/static/icons/rabbitmq.svg").default,
    }, {
        title: "Git",
        description:
            "Version control fundamentals, branching, merging, rebasing, and collaborative workflow management.",
        link: "/docs/git",
        Svg: require("@site/static/icons/git.svg").default,
    },
];
const languages = [
    {
        title: "Golang",
        description:
            "Go fundamentals, concurrency with goroutines, channels, and building high-performance backend services.",
        link: "/docs/golang",
        Svg: require("@site/static/icons/go.svg").default,
    },
    {
        title: "TypeScript",
        description:
            "Type-safe JavaScript, advanced typing, interfaces, generics, and scalable application architecture.",
        link: "/docs/typescript",
        Svg: require("@site/static/icons/typescript.svg").default,
    },
    {
        title: "JavaScript",
        description:
            "Core JavaScript concepts, async programming, closures, event loop, and browser & Node.js fundamentals.",
        link: "/docs/javascript",
        Svg: require("@site/static/icons/javascript.svg").default,
    },
];

export { fundamentals, backend, languages, databases }
