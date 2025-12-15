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
      "Hands-on IoT projects, sensors, microcontrollers, and real-time system design.",
    link: "/docs/dsa",
    Svg: require("@site/static/icons/dsa.svg").default,
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
  },

  {
    title: "React",
    description:
      "Modern React, hooks, component design, and best practices for scalable UIs.",
    link: "/docs/react",
    Svg: require("@site/static/icons/react.svg").default,
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
