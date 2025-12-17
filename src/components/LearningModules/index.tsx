import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";

export default function LearningModules({ modules, title }) {
  return (
    <section>
      <div className={styles.section}>
        <div className="container">
          <Heading as="h2" style={{paddingBottom: "0.5rem"}} className={styles.title}>
            {title}
          </Heading>
          <div className={styles.grid}>
            {modules.map(({ title, link, Svg, description }) => (
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
      </div>
    </section>
  );
}
