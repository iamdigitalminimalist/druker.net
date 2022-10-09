import React, { useRef, useState } from 'react';
import { LoadingSpinner } from '../lodaing-spinner/lodaing-spinner';
import useSWR from 'swr';
import { ErrorMessage } from '../error-message/error-message';
import { SuccessMessage } from '../success-message/success-message';

/* eslint-disable-next-line */
export interface SubscribeNewsletterProps {}

export enum Form {
  Initial,
  Loading,
  Success,
  Error,
}

export type FormState = {
  state: Form;
  message?: string;
};

export type Subscribers = {
  count: number;
};

export async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, init);
  return res.json();
}

export function SubscribeNewsletter(props: SubscribeNewsletterProps) {
  const [form, setForm] = useState<FormState>({ state: Form.Initial });
  const inputRef = useRef<HTMLInputElement>(null);
  const { data } = useSWR<Subscribers>('/api/subscribers', fetcher);
  const subscriberCount = Number(data?.count);

  const subscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setForm({ state: Form.Loading });

    const email = inputRef.current?.value;
    const res = await fetch(`/api/subscribe?email=${email}`, {
      body: JSON.stringify({
        email,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const { error } = await res.json();

    if (error) {
      setForm({
        state: Form.Error,
        message: error,
      });
      return;
    }

    if (inputRef.current) {
      inputRef.current.value = '';
    }

    setForm({
      state: Form.Success,
      message: `Yay! You're now on the list.`,
    });
  };

  return (
    <div className="border-[3px] border-blue-400 rounded-lg p-6 my-4 w-full bg-blue-50 dark:bg-blue-opaque">
      <p className="text-lg md:text-xl font-bold text-gray-900">
        Subscribe to the newsletter
      </p>
      <p className="my-1 text-gray-800">
        Get emails from me about web development, tech, and early access to new
        articles.
      </p>
      <form className="relative my-4" onSubmit={subscribe}>
        <input
          ref={inputRef}
          aria-label="Email for newsletter"
          placeholder="your email address"
          type="email"
          autoComplete="email"
          required
          className="px-4 py-2 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full border-gray-300 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 pr-32"
        />
        <button
          className="flex items-center justify-center absolute right-1 top-1 px-4 font-medium h-8 bg-gray-100 dark:bg-gray-600 text-gray-900 dark:text-gray-100 rounded w-28"
          type="submit"
        >
          {form.state === Form.Loading ? <LoadingSpinner /> : 'Subscribe'}
        </button>
      </form>
      {form.state === Form.Error ? (
        <ErrorMessage>{form.message}</ErrorMessage>
      ) : form.state === Form.Success ? (
        <SuccessMessage>{form.message}</SuccessMessage>
      ) : (
        <p className="text-sm text-gray-800">
          {`${
            subscriberCount > 0 ? subscriberCount.toLocaleString() : '-'
          } subscribers – `}
          <a
            href="https://www.getrevue.co/profile/ordruker"
            target="_blank"
            rel="noopener noreferrer"
          >
            View all issues
          </a>
        </p>
      )}
    </div>
  );
}
