import React from "react"
import Seo from "../components/seo"
import { graphql, PageProps } from "gatsby"
import { PostItem } from "../components/PostItem"
import { Layout } from "../components/Layout"
import { Pagination } from "../components/Pagination"
import { PostListTemplateQuery } from "../../graphql-types"
import * as S from "../components/ListWrapper/styled"

type BlogListPageContextType = {
  currentPage: number
  numPages: number
}

const BlogList = (
  props: PageProps<PostListTemplateQuery, BlogListPageContextType>
) => {
  const postList = props.data.allMarkdownRemark.edges
  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/" : `/page/${currentPage - 1}`
  const nextPage = `/page/${currentPage + 1}`

  return (
    <Layout>
      <Seo title="Home" />
      <S.ListWrapper>
        {postList.map(
          ({
            node: {
              frontmatter: { background, category, date, description, title },
              timeToRead,
              fields: { slug },
            },
          }) => (
            <PostItem
              slug={slug}
              background={background}
              category={category}
              date={date}
              timeToRead={timeToRead}
              title={title}
              description={description}
            />
          )
        )}
      </S.ListWrapper>
      {numPages > 1 && (
        <Pagination
          currentPage={currentPage}
          isFirst={isFirst}
          isLast={isLast}
          numPages={numPages}
          prevPage={prevPage}
          nextPage={nextPage}
        />
      )}
    </Layout>
  )
}

export const query = graphql`
  query PostListTemplate($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            background
            category
            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            description
            title
          }
          timeToRead
        }
      }
    }
  }
`

export default BlogList
