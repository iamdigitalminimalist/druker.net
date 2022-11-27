import { Disclosure } from '@headlessui/react';
import { FaCaretRight } from 'react-icons/fa';
import clsx from 'clsx';

export type AnswerType = {
  id: number;
  text: string;
  category: string;
};

export type FaqType = {
  id: number;
  question: string;
  answer: AnswerType[];
  bullets?: AnswerType[];
};

export interface QuestionsAndAnswersProps {
  faq: FaqType;
  category: string;
}

export function CheckIcon(props: any) {
  return (
    <svg aria-hidden="true" viewBox="0 0 32 32" {...props}>
      <path d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z" />
    </svg>
  );
}

export const QuestionsAndAnswers = (props: QuestionsAndAnswersProps) => {
  return (
    <Disclosure as="div" key={props.faq.question} className="pt-6">
      {({ open }) => (
        <>
          <dt className="text-lg">
            <Disclosure.Button className="flex w-full items-start justify-between text-left text-slate-800 dark:text-slate-300">
              <div className="flex flex-row items-center">
                <FaCaretRight
                  className={clsx(open ? 'rotate-90' : 'rotate-0', 'h-5 w-5')}
                />
                <span className="text-base sm:text-md font-medium ml-1">
                  {props.faq.question}
                </span>
              </div>
            </Disclosure.Button>
          </dt>
          <Disclosure.Panel as="dd" className="mt-2">
            {props.faq.answer
              .filter(
                (answer) =>
                  answer.category === props.category ||
                  answer.category === 'general'
              )
              .map((answer) => (
                <p key={answer.id} className="ml-6 text-base mt-3 max-w-xl">
                  {answer.text}
                </p>
              ))}
            {props.faq.bullets?.map((bullet: AnswerType) => (
              <li key={bullet.id} className="ml-6 flex mt-4 max-w-xl">
                <CheckIcon className="h-8 w-8 flex-none fill-blue-500" />
                <span className="ml-4">{bullet.text}</span>
              </li>
            ))}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
