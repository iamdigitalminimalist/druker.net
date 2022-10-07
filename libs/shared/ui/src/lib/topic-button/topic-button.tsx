import {useEffect, useState} from "react";

export interface TopicButtonProps {
  topicName: string
  onClick?: (topicName: string) => void
}

const buttonStyle = "inline-flex items-center px-6 py-3 border border-transparent text-lg font-bold rounded-md shadow-sm text-neutral-900 bg-neutral-200 hover:bg-neutral-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500"

export function TopicButton(props: TopicButtonProps) {
  const [icon, setIcon] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const cleanedSvgName = props.topicName
        .replace(/[^a-zA-Z0-9]/g, '')
        .toLocaleLowerCase();
      const topicSvgIcon = await import(`./${cleanedSvgName}.svg`);
      setIcon(topicSvgIcon.default);
    };
    fetchData();
  }, [props.topicName]);

  const handleClick = () => {
    if (props.onClick) {
      props.onClick(props.topicName)
    } else {
      console.warn(`no click handler defined on topic button with topic ${props.topicName}`)
    }
  }

  return (

    <button
      type="button"
      onClick={handleClick}
      className={buttonStyle}>
      <img src={icon} alt="" className="w-12"/>
      <p className="pl-2">
        {props.topicName}
      </p>
    </button>
  );
}

export default TopicButton;
