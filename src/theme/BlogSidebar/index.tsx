/* eslint-disable react/prop-types */

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { FC } from 'react';
import React from 'react';
import Layout from '@theme/Layout';
import useWindowType from './useWindowSize';
import type { Props } from '@theme/BlogSidebar';
import Link from '@docusaurus/Link';
import Sticky from 'react-stickynode';
import clsx from 'clsx';
import style from './style.module.scss';

const tags = [
  {
    label: 'All Categories',
    url: '/blog/tags',
  },
  {
    label: 'Case Studies',
    url: '/blog/tags/case-studies/',
  },
  {
    label: 'Release',
    url: '/blog/tags/release/',
  },
  {
    label: 'Community',
    url: '/blog/tags/community/',
  }
];

const BlogSidebar: FC<Props> = (props) => {
  const windowType = useWindowType();
  return (
    <Sticky innerZ={199} className={style.placeholder} enabled={windowType !== 'mobile'}>
      {(s) => (
        <div className={clsx(style.tagsHeader, s.status === Sticky.STATUS_FIXED && style.expand)}>
          {tags.map((tag) => (
            <Link key={tag.url} to={tag.url} target="_parent">
              {tag.label}
            </Link>
          ))}
        </div>
      )}
    </Sticky>
  );
};

export default BlogSidebar;
