import {
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from 'react-share';
import React from 'react';

/* eslint-disable-next-line */
export interface SocialMediaShareButtonProps {
  slug: string;
  title: string;
}

export const SocialMediaShareButton: React.FC<SocialMediaShareButtonProps> = (
  props
) => {
  return (
    <section className="flex flex-row gap-3">
      <LinkedinShareButton
        url={`https://druker.net/blog/${props.slug}`}
        title={props.title}
      >
        <LinkedinIcon
          style={{ opacity: '0.85' }}
          size={28}
          className="rounded-lg"
        />
      </LinkedinShareButton>
      <TwitterShareButton
        url={`https://druker.net/blog/${props.slug}`}
        title={props.title}
      >
        <TwitterIcon
          style={{ opacity: '0.85' }}
          size={28}
          className="rounded-lg"
        />
      </TwitterShareButton>
      <WhatsappShareButton
        url={`https://druker.net/blog/${props.slug}`}
        title={props.title}
      >
        <WhatsappIcon
          style={{ opacity: '0.85' }}
          size={28}
          className="rounded-lg"
        />
      </WhatsappShareButton>
    </section>
  );
};
