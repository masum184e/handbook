import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Structured Learning Notes",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        A well-organized personal handbook where I document everything I learn —
        from <strong>DSA</strong> to <strong>React</strong> and{" "}
        <strong>AWS</strong>, with clear explanations and real-world context.
      </>
    ),
  },
  {
    title: "Practice-Oriented Approach",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Concepts are backed by <strong>examples</strong>,{" "}
        <strong>code snippets</strong>, and{" "}
        <strong>problem-solving notes</strong> to reinforce understanding
        instead of just theory.
      </>
    ),
  },
  {
    title: "Built with Modern Stack",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Powered by <strong>Docusaurus</strong>, <strong>React</strong>, and
        <strong> Markdown</strong>, with fast search, clean UI, and easy
        scalability as my learning journey grows.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
