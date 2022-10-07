/* eslint-disable-next-line */
import { GetStaticPaths, InferGetStaticPropsType } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { join } from 'path';
import { readdirSync } from 'fs';
import { getParsedFileContentBySlug, renderMarkdown } from '@ordev/markdown';
import { MDXRemote } from 'next-mdx-remote';
// import { CustomLink, Youtube } from '@ordev/shared/mdx-elements';
import dynamic from 'next/dynamic';
import { Container } from '@ordev/shared/ui';
import Image from 'next/image';
import { format } from 'date-fns';

export interface ArticleProps extends ParsedUrlQuery {
  slug: string;
}

// TODO: Improve dynamic import to exclude excessive components
const mdxElements = {
  Youtube: dynamic(async () => {
    return await import('@ordev/shared/mdx-elements/youtube/youtube');
  }),
  a: dynamic(async () => {
    return await import('@ordev/shared/mdx-elements/custom-link/custom-link');
  }),
};

const POSTS_PATH = join(process.cwd(), process.env.ARTICLE_MARKDOWN_PATH);

export function Article({
  frontMatter,
  html,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container>
      <div className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <article className="prose prose-sm dark:prose-dark md:prose-md xl:prose-lg">
            <h1 className="tracking-tight text-black dark:text-white">
              {frontMatter.title}
            </h1>
            <h2>{frontMatter.excerpt}</h2>
            <div className="flex flex-col items-start justify-between w-full mt-2 md:flex-row md:items-center">
              <div className="flex items-center">
                <div className="relative h-10 w-10">
                  <Image
                    alt="Or Druker"
                    height={24}
                    width={24}
                    sizes="20vw"
                    src="/avatar.jpg"
                    className="rounded-full"
                  />
                </div>
                <h5 className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                  By {frontMatter.author} /{' '}
                  {format(new Date(frontMatter.date), 'LLL dd, Y')}
                </h5>
              </div>
            </div>
            <hr />
            <div className="text-gray-700 dark:text-gray-300">
              <MDXRemote {...html} components={mdxElements} />
            </div>
            <hr />
          </article>
        </div>
      </div>
    </Container>
  );
}

export const getStaticProps = async ({ params }: { params: ArticleProps }) => {
  // 1. parse the content of the markdown and separate it into front-matter and content
  const articleMarkdownContent = getParsedFileContentBySlug(
    params.slug,
    POSTS_PATH
  );

  // 2. convert markdown content => HTML
  const renderHtml = await renderMarkdown(articleMarkdownContent.content);

  return {
    props: {
      frontMatter: articleMarkdownContent.frontMatter,
      html: renderHtml,
    },
  };
};

export const getStaticPaths: GetStaticPaths<ArticleProps> = async () => {
  const paths = readdirSync(POSTS_PATH)
    .map((path) => path.replace(/\.mdx?$/, ''))
    .map((slug) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
};

export default Article;
