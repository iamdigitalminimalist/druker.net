import { JobItem } from '../job-item/job-item';

export interface ItemListProps {
  title: string;
  workExperience: any;
  open: boolean;
  setOpen: (arg: boolean) => void;
  selectedItem: null | number;
  setSelectedItem: (arg: null | number) => void;
}

export const ItemList = (props: ItemListProps) => {
  return (
    <div>
      <div className="mx-auto max-w-2xl">
        <h2 className="text-xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-8">
          {props.title}
        </h2>

        <div className="grid grid-cols-1 max-w-xs sm:mx-auto sm:max-w-2xl gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
          {props.workExperience.map((job: any) => (
            <JobItem
              key={job.id}
              item={job}
              selectedItem={props.selectedItem}
              setSelectedItem={props.setSelectedItem}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
