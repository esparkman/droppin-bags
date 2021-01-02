import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer';

import Layout from '../components/Layout';
import Link from '../components/Link';

export default function Post({
  data: { site, mdx },
}) {
  return (
    <Layout site={site} frontmatter={mdx.frontmatter}>
      <div className="relative py-16 bg-white overflow-hidden">
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto">
            <div className="flex-shrink-0">
              <Img
                className="h-48 w-full object-cover rounded-t-xl shadow-lg"
                fluid={mdx.frontmatter.banner.childImageSharp.fluid}
                alt=""
              />
            </div>
            <h1 className="mb-4">
              <span className="block text-2xl text-left text-gray-600 font-semibold tracking-wide uppercase">
                {mdx.frontmatter.title}
              </span>
              <span>
                <small>{mdx.frontmatter.date}</small>
              </span>
            </h1>
            <div className="prose">
              <MDXRenderer>{mdx.body}</MDXRenderer>
            </div>
            <div className="mt-10 text-gray-600 font-semibold mx-auto">
              <h2>
                <Link to="/">
                  <p>Back to home</p>
                </Link>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($id: String!) {
    site {
      ...site
    }
    mdx(fields: { id: { eq: $id } }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        banner {
          childImageSharp {
            fluid(maxWidth: 900, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        slug
        categories
        keywords
      }
      body
    }
  }
`;
