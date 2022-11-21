import Link from 'next/link';
import clsx from 'clsx';
import React from 'react';

type CardProps = {
  as: keyof JSX.IntrinsicElements;
  className?: string;
  children: React.ReactNode;
};

type CardTitleProps = {
  as: keyof JSX.IntrinsicElements;
  href: string;
  children: React.ReactNode;
};

type ChevronRightIconProps = {
  className: string;
};

type CardChildrenProps = {
  className?: string;
  children: React.ReactNode;
};

type CardEyebrowProps = {
  as: keyof JSX.IntrinsicElements;
  decorate: boolean;
  className: string;
  children: React.ReactNode;
};

type CardLinkProps = {
  href: string;
  target?: string;
  children: React.ReactNode;
};

function ChevronRightIcon(props: ChevronRightIconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6.75 5.75 9.25 8l-2.5 2.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export const Card = ({
  as: Component = 'div',
  className,
  children,
}: CardProps) => {
  return (
    <Component
      className={clsx(
        className,
        'group relative flex flex-col items-start py-3'
      )}
    >
      {children}
    </Component>
  );
};

Card.Link = function CardLink(props: CardLinkProps) {
  return (
    <>
      <div className="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl" />
      <Link
        href={props.href}
        className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl"
      >
        <div className="relative z-10">{props.children}</div>
      </Link>
    </>
  );
};

Card.Title = function CardTitle({
  as: Component = 'h2',
  ...props
}: CardTitleProps) {
  return (
    <Component className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
      {props.href ? (
        <Card.Link href={props.href}>{props.children}</Card.Link>
      ) : (
        props.children
      )}
    </Component>
  );
};

Card.Description = function CardDescription(props: CardChildrenProps) {
  return (
    <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
      {props.children}
    </p>
  );
};

Card.Cta = function CardCta(props: CardChildrenProps) {
  return (
    <div
      aria-hidden="true"
      className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
    >
      {props.children}
      <ChevronRightIcon className="ml-1 h-4 w-4 stroke-current" />
    </div>
  );
};

Card.Eyebrow = function CardEyebrow({
  as: Component = 'p',
  decorate = false,
  className,
  children,
  ...props
}: CardEyebrowProps) {
  return (
    <Component
      className={clsx(
        className,
        'relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500',
        decorate && 'pl-3.5'
      )}
      {...props}
    >
      {decorate && (
        <span
          className="absolute inset-y-0 left-0 flex items-center"
          aria-hidden="true"
        >
          <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
        </span>
      )}
      {children}
    </Component>
  );
};
