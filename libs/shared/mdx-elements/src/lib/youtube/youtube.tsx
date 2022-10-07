import styles from './youtube.module.css';

/* eslint-disable-next-line */
export interface YoutubeProps {
  title: string;
  uid: string;
  clip?: boolean;
}

export function Youtube(props: YoutubeProps) {
  return (
    <div>
      <iframe
        id="player"
        src={`https://www.youtube.com/embed/${props.uid}`}
        width="100%"
        height="500px"
        title={props.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
    </div>
  );
}

export default Youtube;
