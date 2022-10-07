import styles from './social-media-share-button.module.css';

/* eslint-disable-next-line */
export interface SocialMediaShareButtonProps {}

export function SocialMediaShareButton(props: SocialMediaShareButtonProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SocialMediaShareButton!</h1>
    </div>
  );
}

export default SocialMediaShareButton;
