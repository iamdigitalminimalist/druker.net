import { Overlay } from '../overlay/overlay';
import Image from 'next/image';

type JobItemType = {
  id: number;
  name: string;
  title: string;
  employmentType:
    | 'Full-time'
    | 'Part-time'
    | 'Self-employed'
    | 'Freelance'
    | 'Contract'
    | 'Internship';
  imageSrc: string;
  imageAlt: string;
  location: string;
  dates: string;
  industry: string;
  description: string;
  skills: string[];
  highlights: string[];
};

type EducationItemType = {
  id: number;
  name: string;
  school: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  dates: string;
  description: string;
  highlights: string[];
};

/* eslint-disable-next-line */
export interface JobItemProps {
  item: JobItemType | EducationItemType;
  selectedItem: null | number;
  setSelectedItem: (arg: null | number) => void;
}

export const JobItem = (props: JobItemProps) => {
  const handleSelectItem = (id: number) => {
    props.setSelectedItem(id);
  };

  return (
    <div
      key={props.item.id}
      onClick={() => handleSelectItem(props.item.id)}
      className="group relative flex flex-col overflow-hidden rounded-lg border-2 border-gray-800 dark:border-gray-200 bg-gray-100 dark:bg-gray-900  cursor-pointer"
    >
      <div className="relative h-full w-full aspect-square group-hover:opacity-75">
        <Image
          src={props.item.imageSrc}
          alt={props.item.imageAlt}
          layout="fill"
          className="object-cover object-center"
        />
      </div>
      <div className="flex flex-1 flex-col space-y-2 p-4">
        <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">
          <span aria-hidden="true" className="absolute inset-0" />
          {props.item.title}
        </h3>
        <p className="text-sm text-gray-800 dark:text-gray-200">
          {props.item.name}
        </p>
        <div className="flex flex-1 flex-col justify-end">
          <p className="text-base font-medium text-gray-900 dark:text-gray-100">
            {props.item.dates}
          </p>
        </div>
      </div>
      <Overlay
        open={props.selectedItem === props.item.id}
        onClose={() => props.setSelectedItem(null)}
        job={props.item}
      />
    </div>
  );
};
