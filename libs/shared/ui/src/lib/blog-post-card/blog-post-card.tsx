import Link from 'next/link';

export interface BlogPostCardProps {
  title: string;
  slug: string;
  gradient: string;
}

export function classNames(...classes: (false | null | undefined | string)[]) {
  return classes.filter(Boolean).join(' ');
}

export const BlogPostCard = ({ title, slug, gradient }: BlogPostCardProps) => {
  return (
    <Link href={`/blog/${slug}`}>
      <a
        className={classNames(
          'transform hover:scale-[1.01] transition-all',
          'rounded-xl w-full md:w-1/3 bg-gradient-to-r p-1',
          gradient
        )}
      >
        <div className="flex flex-col justify-between h-full bg-white dark:bg-gray-900 rounded-lg p-4">
          <div className="flex flex-col md:flex-row justify-between">
            <h4 className="text-lg md:text-lg font-medium mb-6 sm:mb-10 w-full text-gray-900 dark:text-gray-100 tracking-tight">
              {title}
            </h4>
          </div>
        </div>
      </a>
    </Link>
  );
};
