import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/features/easy.svg').default,
    description: (
      <>
        CloudStack was designed from the ground up to be easily installed and
        used to get your infrastructure-as-a-service (IaaS) cloud environment
        up and running. It has a modern and rich UI, CLI, API/SDKs and several
        tooling options and integrations.
      </>
    ),
  },
  {
    title: 'Turnkey and Robust',
    Svg: require('@site/static/img/features/robust.svg').default,
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
    Svg: require('@site/static/img/features/available.svg').default,
    description: (
      <>
        CloudStack is highly available and massively scalable. Some of the
        world's largest organisations use it and have built very large scale
        IaaS cloud environments using it.
      </>
    ),
  },
  {
    title: 'End-to-End Encryption and Privacy',
    Svg: require('@site/static/img/features/security.svg').default,
    description: (
      <>
        CloudStack offers out of the box end-to-end encryption and privacy
        features with security features enabled for both data at rest and in
        motion as well as access thanks to its in-built certificate
        authority and multi-factor authentication frameworks.
      </>
    ),
  },
  {
    title: 'Hypervisor and Storage Agnostic',
    Svg: require('@site/static/img/features/infra.svg').default,
    description: (
      <>
        CloudStack is hypervisor and storage agnostic, having support for
        several hypervisors such as KVM, VMware, Citrix XenServer/Hypervisor,
        XCP-ng, Hyper-V and OVM3, as well as supporting several advanced storage
        options such as Local storage, NFS, Ceph/RBD, Dell/EMC Powerflex,
        Storpool, Linstor, Solidfire, Datera etc.
      </>
    ),
  },
  {
    title: 'Community and Ecosystem',
    Svg: require('@site/static/img/features/community.svg').default,
    description: (
      <>
        CloudStack has a welcoming and healthy opensource community and a
        trusted ecosystem of users, companies, organisations and institutions
        that ensure the project remains thriving and community-driven.
        CloudStack has a track record and history of being used by over a
        decade.
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
