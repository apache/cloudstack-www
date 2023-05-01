import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/logo.svg').default,
    description: (
      <>
        CloudStack was designed from the ground up to be easily installed and
        used to get your IaaS cloud infrastructure up and running. It has a
        great UI, CLI, API/SDKs and tooling.
      </>
    ),
  },
  {
    title: 'Turnkey and Robust',
    Svg: require('@site/static/img/logo.svg').default,
    description: (
      <>
        CloudStack is turnkey, robust, durable and battle tested. It comes with tons of
        features that just work out of the box. It's easy to install, manage,
        operate and upgrade CloudStack environments of any size.
      </>
    ),
  },
  {
    title: 'Highly Available and Scalable',
    Svg: require('@site/static/img/logo.svg').default,
    description: (
      <>
        CloudStack is highly available and massively scalable. Some of the
        world's largest organisations use it and have built very large scale
        IaaS cloud environments using it.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
