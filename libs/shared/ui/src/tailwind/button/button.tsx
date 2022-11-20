import Link from 'next/link';
import clsx from 'clsx';

/* eslint-disable-next-line */
export interface ButtonProps {
  variant: 'primary' | 'secondary';
  className: string;
  href?: string;
  children?: React.ReactNode;
}

export interface variantStylesOptions {
  primary: string;
  secondary: string;
}

const variantStyles: variantStylesOptions = {
  primary:
    'bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70',
  secondary:
    'bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70',
};

export const Button = (props: ButtonProps) => {
  const classNameWithVariant = clsx(
    'inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none',
    variantStyles[props.variant],
    props.className
  );

  return props.href ? (
    <Link href={props.href} className={classNameWithVariant} />
  ) : (
    <button className={classNameWithVariant} />
  );
};
