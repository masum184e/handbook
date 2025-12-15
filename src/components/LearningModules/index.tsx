import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";

type ModuleItem = {
  title: string;
  description: string;
  link: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
};

const modules: ModuleItem[] = [
  {
    title: "Data Structures & Algorithms",
    description:
      "Problem-solving techniques, core data structures, algorithms, and interview-focused practice.",
    link: "/docs/dsa",
    Svg: require("@site/static/icons/dsa.svg").default,
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
  },{
    title: "Redis",
    description:
      "In-memory data structures, caching strategies, pub/sub, persistence, and performance optimization.",
    link: "/docs/redis",
    Svg: require("@site/static/icons/redis.svg").default,
  },
  {
    title: "Internet of Things (IoT)",
    description:
      "Hands-on IoT projects, sensors, microcontrollers, communication protocols, and real-time systems.",
    link: "/docs/iot",
    Svg: require("@site/static/icons/iot.svg").default,
  },
  {
    title: "MySQL",
    description:
      "Relational database design, SQL queries, indexing, transactions, and performance tuning.",
    link: "/docs/mysql",
    Svg: require("@site/static/icons/mysql.svg").default,
  },
];

export default function LearningModules() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          {modules.map(({ title, link, Svg, description }: ModuleItem) => (
            <Link key={title} to={link} className={clsx("card", styles.card)}>
              <div className="card__body">
                <Svg className={styles.featureSvg} role="img" />

                <Heading as="h3" className={styles.title}>
                  {title}
                </Heading>
                <p className={styles.description}>{description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
