import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { join } from 'path';
import { readdirSync } from 'fs';
import { getParsedFileContentBySlug, renderMarkdown } from '@ordev/markdown';
import { MDXRemote } from 'next-mdx-remote';
import dynamic from 'next/dynamic';
import { Container, SocialMediaShareButton } from '@ordev/shared/ui';
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
  slug,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container>
      <article className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
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
              {`By ${frontMatter.author.name} /
                  ${format(new Date(frontMatter.date), 'LLL dd, Y')}`}
            </h5>
          </div>
        </div>
        <hr />
        <div className="w-full mt-4 prose dark:prose-dark max-w-none">
          <MDXRemote {...html} components={mdxElements} />
        </div>
        <div className="w-full my-4">
          <hr />
          <div className="flex flex-col items-center justify-center my-4">
            <h4 className="mb-4 text-sm font-bold tracking-tight text-black sm:text-lg md:text-2xl dark:text-white">
              Found it valuable? Feel free to share it
            </h4>
            <SocialMediaShareButton slug={slug} title={frontMatter.title} />
          </div>
          <hr />
        </div>
      </article>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async ({
  params,
}: {
  params: ArticleProps;
}) => {
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
      slug: params.slug,
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
