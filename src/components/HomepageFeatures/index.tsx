import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: React.ReactNode;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'OneSource Registration',
    Svg: require('@site/static/Gs1.svg').default,
    description: <>Onesource Registration allows our prospective members to onboard.</>,
    link: '/docs/registration-guide',
  },
  {
    title: 'OneSource Membership',
    Svg: require('@site/static/Gs1.svg').default,
    description: <>OneSource Membership was created so members could list their products.</>,
    link: '/docs/onesource-membership',
  },
  {
    title: 'OneSource Admin',
    Svg: require('@site/static/Gs1.svg').default,
    description: <>OneSource Admin was created for internal use within the organization.</>,
    link: '/docs/onesource-admin',
  },
];

function Feature({ title, Svg, description, link }: FeatureItem) {
  return (
    <Link to={link} className={styles.featureLink}>
      <div className={clsx(styles.featureCard)}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
}

export default function HomepageFeatures(): React.JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={clsx('row', styles.featuresRow)}>
          {FeatureList.map((props, idx) => (
            <div key={idx} className="col col--4">
              <Feature {...props} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}