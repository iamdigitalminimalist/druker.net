import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { join } from 'path';
import { readdirSync } from 'fs';
import { getParsedFileContentBySlug, renderMarkdown } from '@ordev/markdown';
import { MDXRemote } from 'next-mdx-remote';
import dynamic from 'next/dynamic';
import {
  Container,
  SocialMediaShareButton,
  SubscribeNewsletter,
} from '@ordev/shared/ui';
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

const metaBlogPost = {
  image: '/or-banner.png',
  type: 'website',
};

export function Article({
  frontMatter,
  html,
  slug,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container
      title={`Blog - Or Druker - ${frontMatter.title}`}
      description={frontMatter.excerpt}
      image={metaBlogPost.image}
      type={metaBlogPost.type}
    >
      <article className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-8">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          {frontMatter.title}
        </h1>

        <h2 className="text-gray-700 dark:text-gray-200 text-md sm:text-lg md:text-2xl mb-2">
          {frontMatter.excerpt}
        </h2>
        <div className="flex flex-col items-start justify-between w-full my-3 md:flex-row md:items-center">
          <div className="flex items-center">
            <div className="aspect-square h-12 border border-[2px] border-neutral-400 dark:border-neutral-600 rounded-full">
              <Image
                alt="Or Druker"
                width={50}
                height={50}
                src="/profile.jpg"
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
        <div className="w-full my-8">
          <hr />
          <div className="flex flex-col items-center justify-center my-4">
            <h4 className="mb-4 text-lg font-bold text-center tracking-tight text-black sm:text-xl md:text-2xl dark:text-white">
              Thank you for reading 🤗 <br />
              Found it valuable? Feel free to share it
            </h4>
            <SocialMediaShareButton slug={slug} title={frontMatter.title} />
          </div>
          <hr />
        </div>
        <SubscribeNewsletter />
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
