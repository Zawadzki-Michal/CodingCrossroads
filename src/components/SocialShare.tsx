// Use client-side rendering
"use client";
// Import React and necessary components from react-share
import React from "react";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
} from "react-share";

// Define the props for the SocialShare component
interface SocialShareProps {
  shareUrl: string;
  title: string;
}

// SocialShare component definition
const SocialShare: React.FC<SocialShareProps> = ({ shareUrl, title }) => {
  // Array of social platforms, each with a name, share button component, icon, and any extra props
  const socialPlatforms = [
    { name: "Facebook", Component: FacebookShareButton, Icon: FacebookIcon },
    {
      name: "Twitter",
      Component: TwitterShareButton,
      Icon: TwitterIcon,
      extraProps: { title }, // Extra props for Twitter (title for the shared content)
    },
    { name: "LinkedIn", Component: LinkedinShareButton, Icon: LinkedinIcon },
    { name: "Whatsapp", Component: WhatsappShareButton, Icon: WhatsappIcon },
  ];

  // Render the component
  return (
    <div className="display flex flex-col justify-center align-bottom items-center gap-2 text-gray-700 font-bold text-xl">
      <p>{`Don't forget to share this post!`}</p>
      <div className="social-share-buttons flex gap-5">
        {/* Map through each social platform to render its share button and icon */}
        {socialPlatforms.map(({ name, Component, Icon, extraProps }) => (
          <div
            key={name}
            className="flex flex-col justify-items-center text-sm font-semibold text-gray-600"
          >
            {/* Render the share button component with its respective icon */}
            <Component url={shareUrl} {...extraProps}>
              <Icon size={40} round className="mx-auto py-1" />
            </Component>
            {name} {/* Display the name of the social platform */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialShare;
