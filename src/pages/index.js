import React from 'react';
import { graphql } from 'gatsby';

import Article from '../components/Article'
import Layout from '../components/Layout';

const Index = ({
  data: { site, allMdx },
  pageContext: { pagination },
}) => {
  // const { page } = pagination;

  // const posts = allMdx.map(id =>
  //   allMdx.edges.find(edge => edge.node.id === id),
  // );

  return (
    <Layout site={site}>
      <section className="content">
        <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
          {' '}
          s
          <div className="absolute inset-0">
            <div className="bg-white h-1/3 sm:h-2/3"></div>
          </div>
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                From the drop
              </h2>
              <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                Droppin' Bags is your #1 Source for Reviews, Articles and all
                other Cornhole information. Our goal is to provide you with the
                most accurate and up to date information as possible. Sit back
                relax, and enjoy the content!
              </p>
            </div>
            <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
              {allMdx.edges.map(({node: post}) => (
                <Article key={post.id} article={post} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;

export const pageQuery = graphql`
  query {
    site {
      ...site
    }
    allMdx(sort: {order: DESC, fields: frontmatter___date}) {
      edges {
        node {
          excerpt(pruneLength: 300)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            banner {
              childImageSharp {
                fluid(maxWidth: 720, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            slug
            categories
            keywords
          }
        }
      }
    }
  }
`;
