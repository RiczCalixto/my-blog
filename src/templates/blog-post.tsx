import React from "react"
import { graphql, PageProps } from "gatsby"
import { Layout } from "../components/Layout"
import { ActionFields, RecommendedPosts } from "../components/RecommendedPosts"
import { Comments } from "../components/Comments"
import Seo from "../components/seo"
import * as S from "../components/Post/styled"
import { PostQuery } from "../../graphql-types"

type BlogPostContextType = {
  nextPost: ActionFields
  previousPost: ActionFields
}

const BlogPost = ({
  data,
  pageContext,
}: PageProps<PostQuery, BlogPostContextType>) => {
  const post = data.markdownRemark
  const next = pageContext.nextPost
  const previous = pageContext.previousPost

  return (
    <Layout>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={post.frontmatter.image}
      />
      <S.PostHeader>
        <S.PostDate>
          {post.frontmatter.date} • {post.timeToRead} min de leitura
        </S.PostDate>
        <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
        <S.PostDescription>{post.frontmatter.description}</S.PostDescription>
      </S.PostHeader>
      <S.MainContent>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </S.MainContent>
      <RecommendedPosts next={next} previous={previous} />
      <Comments url={post.fields.slug} title={post.frontmatter.title} />
    </Layout>
  )
}

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        description
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
        image
      }
      html
      timeToRead
    }
  }
`

export default BlogPost
