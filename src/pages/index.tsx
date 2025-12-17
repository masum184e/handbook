import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";
import LearningModules from "../components/LearningModules";
import { backend, databases, fundamentals, languages } from "../data/data";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/">
            Start Learning 🚀
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} | ${siteConfig.tagline}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <div
          style={{
            padding: "2rem 0",
            backgroundColor: "var(--ifm-background-surface-color)",
          }}
        >
          <LearningModules
            title="Fundamentals of Computer Science"
            modules={fundamentals}
          />
          <LearningModules title="Databases" modules={databases} />
          <LearningModules title="Backend Technologies" modules={backend} />
          <LearningModules title="Programming Languages" modules={languages} />
        </div>
      </main>
    </Layout>
  );
}
