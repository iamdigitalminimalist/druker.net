import Image from 'next/image';
import { faqs, workExperience } from '../data/resumeData';
import { ItemList, QuestionsAndAnswers } from '@ordev/shared/ui';
import Link from 'next/link';
import { useState } from 'react';

export interface ResumeTemplateProps {
  jobTitle: string;
  category: string;
}

export const ResumeTemplate = (props: ResumeTemplateProps) => {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-8">
      <div className="flex flex-col items-start">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-slate-900 dark:text-slate-100">
          Resume
        </h1>
        <div className="border-[3px] border-gray-400 dark:border-gray-100 rounded-2xl aspect-square relative my-8 mr-auto">
          <Image
            alt="Or Druker"
            src="/profile.jpg"
            width={250}
            height={250}
            quality={100}
            sizes="30vw"
            priority
            className="rounded-xl"
          />
        </div>
        <div className="w-full py-3">
          <div>
            <h2 className="text-md md:text-lg font-bold tracking-tight text-slate-900 dark:text-slate-100">
              <span className="block mb-2">Dear reader,</span>
              My name is Or Druker. I am an Israeli-Canadian {props.jobTitle}.
            </h2>
            <dl>
              {faqs.map((faq) => (
                <QuestionsAndAnswers
                  key={faq.id}
                  faq={faq}
                  category={props.category}
                />
              ))}
            </dl>
          </div>
        </div>
        <div>
          <p className="mt-4 inline-block">
            I would be glad to meet you and share my passion in more depth.
          </p>
          <div className="mt-4">
            Please send me an email to{' '}
            <a
              href="mailto:or@druker.net"
              className="font-medium text-blue-500 dark:text-blue-400 hover:text-blue-700 hover:dark:text-blue-600 hover:underline"
            >
              or@druker.net
            </a>{' '}
            or submit a form through the{' '}
            <Link
              href="/contact"
              className="font-medium text-blue-500 dark:text-blue-400 hover:text-blue-700 hover:dark:text-blue-600 hover:underline"
            >
              contact page
            </Link>
          </div>
        </div>
        <div className="mt-8 flex flex-col space-y-2 sm:flex-row sm:space-x-10 sm:space-y-0">
          <a
            href="/resume/or-druker-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-blue-500 dark:text-blue-400 hover:text-blue-700 hover:dark:text-blue-600"
          >
            Download my Formal Resume <span aria-hidden="true">&rarr;</span>
          </a>
          <a
            href="https://www.linkedin.com/in/or-druker"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-blue-500 dark:text-blue-400 hover:text-blue-700 hover:dark:text-blue-600"
          >
            Visit my LinkedIn Profile <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
        <div>
          <hr className="my-8" />
          <ItemList
            title="Work Experience"
            workExperience={workExperience}
            open={open}
            setOpen={setOpen}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
          />
        </div>
      </div>
    </div>
  );
};
