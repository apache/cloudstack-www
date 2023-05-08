import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import BlogSidebar from "@theme/BlogSidebar";
import Link from '@docusaurus/Link';

import "./style.scss";
export default function BlogLayout(props) {
  const { sidebar, toc, children, pageType, ...layoutProps } = props;
  const hasSidebar = true;
  const isBlogListPage = pageType === "blogList";
  return (
    <Layout {...layoutProps}>
      <div className="container margin-vert--lg blog-container">
        <div className="row">
          <aside className="col col--3">
            <nav
              className={clsx('sidebar', 'thin-scrollbar')}>
              <div className={clsx('sidebarItemTitle', 'margin-bottom--md')}>
                CloudStack Blog
              </div>
              <ul className={clsx('sidebarItemList', 'clean-list')}>
                <li className={'sidebarItem'}>
                  <Link
                    isNavLink exact
                    href="/blog"
                    className={'sidebarItemLink'}
                    activeClassName={'sidebarItemLinkActive'}>
                    All Posts
                  </Link>
                </li>
                <li className={'sidebarItem'}>
                  <Link
                    isNavLink
                    href="/blog/tags/news"
                    className={'sidebarItemLink'}
                    activeClassName={'sidebarItemLinkActive'}>
                    News
                  </Link>
                </li>
                <li className={'sidebarItem'}>
                  <Link
                    isNavLink
                    href="/blog/tags/announcement"
                    className={'sidebarItemLink'}
                    activeClassName={'sidebarItemLinkActive'}>
                    Announcements
                  </Link>
                </li>
                <li className={'sidebarItem'}>
                  <Link
                    isNavLink
                    href="/blog/tags/case-studies"
                    className={'sidebarItemLink'}
                    activeClassName={'sidebarItemLinkActive'}>
                    Case Studies & Integrations
                  </Link>
                </li>
                <li className={'sidebarItem'}>
                  <Link
                    isNavLink
                    href="/blog/tags/community"
                    className={'sidebarItemLink'}
                    activeClassName={'sidebarItemLinkActive'}>
                    Meet the Community
                  </Link>
                </li>
              </ul>
            </nav>
          </aside>
          <main
            className={clsx("col", {
              "col--7": hasSidebar,
              "col--12": !hasSidebar && isBlogListPage,
              "col--9 col--offset-1": !hasSidebar && !isBlogListPage,
            })}
            itemScope
            itemType="http://schema.org/Blog"
          >
            {children}
          </main>
          {toc && <div className="col col--2">{toc}</div>}
        </div>
      </div>
    </Layout>
  );
}
