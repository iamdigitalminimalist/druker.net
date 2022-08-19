// import { Story, Meta} from '@storybook/react'
// import { TopicButton, TopicButtonProps} from "./topic-button"
//
// export default {
//   components: TopicButton,
//   title: 'TopicButton'
// } as Meta
//
// const Template: Story<TopicButtonProps> = (args) => <TopicButton {...args} />
//
// export const Primary = Template.bind({})
// Primary.args = {}
//


import { Story, Meta } from '@storybook/react';
import { useState } from 'react';
import { TopicButton, TopicButtonProps } from './topic-button';

export default {
  component: TopicButton,
  title: 'TopicButton',
  argTypes: {
    onClick: { action: 'onClick executed' },
  },
} as Meta;

const Template: Story<TopicButtonProps> = (args) => {
  const [clickedTopic, setClickedTopic] = useState<string | null>(null);
  return (
    <div className="bg-gray-300 p-20">
      <TopicButton
        {...args}
        // onClick={(topicName: any) => setClickedTopic(topicName)}
      />
      {clickedTopic && (
        <div data-testid="click-result">
          Button has been clicked: {clickedTopic}
        </div>
      )}
    </div>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  topicName: 'Next.js',
};
