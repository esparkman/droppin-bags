import React from 'react'
import Link from '../components/Link'
import Img from 'gatsby-image';
import Gravatar from 'react-gravatar';

export default function Article({ article }) {
  return (
    <Link to={`${article.frontmatter.slug}`} key={article.frontmatter.id}>
      <div
        id="article"
        className="flex flex-col rounded-lg shadow-lg overflow-hidden"
        key={article.frontmatter.id}
      >
        <div className="flex-shrink-0">
          <Img
            className="cursor-pointer h-48 w-full object-cover"
            fluid={article.frontmatter.banner.childImageSharp.fluid}
            alt=""
          />
        </div>
        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-indigo-600">
              {article.frontmatter.categories.map(category => (
                <span key={category}>
                  {category.toUpperCase()}
                </span>
              ))}
            </p>
            <div className="block mt-2">
              <p className="text-xl font-semibold text-gray-900">
                {article.frontmatter.title}
              </p>
              <p className="mt-3 text-base text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Architecto accusantium praesentium eius, ut
                atque fuga culpa, similique sequi cum eos quis
                dolorum.
              </p>
            </div>
          </div>
          <div className="mt-6 flex items-center">
            <div className="flex-shrink-0">
              <p>
                <span className="sr-only">{article.frontmatter.author}</span>
                <Gravatar
                  email="sparkman.evan@gmail.com"
                  size={100}
                  className="h-10 w-10 rounded-full"
                />
              </p>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">
                <span>
                  {article.frontmatter.author}
                </span>
              </p>
              <div className="flex space-x-1 text-sm text-gray-500">
                <small>{article.frontmatter.date}</small>
                <span aria-hidden="true">&middot;</span>
                <span>{article.timeToRead} min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
