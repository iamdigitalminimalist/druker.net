import {TopicButton} from "@ordev/shared/ui";

export interface TopicsProps {}

export function Topics(props: TopicsProps) {
  return (
    <div className="md:container md:mx-auto p-20 bg-neutral-100">
      <TopicButton topicName="Next.js" />
    </div>
  );
}

export default Topics;
