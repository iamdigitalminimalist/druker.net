/* eslint-disable-next-line */
import {GetStaticPaths, InferGetStaticPropsType} from "next";
import {ParsedUrlQuery} from "querystring";
import {join} from "path"
import {readdirSync} from "fs";
import {getParsedFileContentBySlug, renderMarkdown} from "@ordev/markdown"
import {MDXRemote} from "next-mdx-remote";
import {CustomLink, Youtube} from "@ordev/shared/mdx-elements";
import dynamic from "next/dynamic";

export interface ArticleProps extends ParsedUrlQuery {
  slug: string
}

// TODO: Improve dynamic import to exclude excessive components
const mdxElements = {
  Youtube: dynamic(async () => {
    const components = await import('@ordev/shared/mdx-elements')
    return components.Youtube
    }
  ),
  // a: CustomLink,
};

const POSTS_PATH = join(process.cwd(), process.env.ARTICLE_MARKDOWN_PATH)

export function Article({frontMatter, html}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="m-6">
      <article className="prose prose-sm md:prose-md md:prose-lg">
        <h1>{frontMatter.title}</h1>
        <div>By {frontMatter.author}</div>
        <hr/>
        <MDXRemote {...html} components={mdxElements}/>
      </article>
    </div>
  );
}

export const getStaticProps = async ({params}: { params: ArticleProps }) => {
  // 1. parse the content of the markdown and separate it into front-matter and content
  const articleMarkdownContent = getParsedFileContentBySlug(
    params.slug,
    POSTS_PATH
  )

  // 2. convert markdown content => HTML
  const renderHtml = await renderMarkdown(articleMarkdownContent.content)

  return {
    props: {
      frontMatter: articleMarkdownContent.frontMatter,
      html: renderHtml
    }
  }
}

export const getStaticPaths: GetStaticPaths<ArticleProps> = async () => {
  const paths = readdirSync(POSTS_PATH)
    .map(path => path.replace(/\.mdx?$/, ''))
    .map(slug => ({params: {slug}}))
  return {
    paths,
    fallback: false
  }
}

export default Article;

