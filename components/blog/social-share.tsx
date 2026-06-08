"use client";
import { useState } from "react";
import {
  FacebookShareButton,
  RedditShareButton,
  XShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  EmailShareButton,
  FacebookIcon,
  RedditIcon, 
  XIcon ,
  LinkedinIcon,
  WhatsappIcon,
  EmailIcon,
} from "react-share";

export default function SocialShare({ title }: { title: string }) {
  const [postUrl] = useState(() =>
    typeof window !== "undefined" ? window.location.href : ""
  );
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipBoard = async () => {
    try {
      await navigator.clipboard.writeText(postUrl);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); //resetting  after 2 seconds
    } catch (err) {
      console.error("failed to copy", err);
    }
  };

  const shareButtons = [
    { Component: FacebookShareButton, Icon: FacebookIcon, name: "Facebook" },
    { Component: RedditShareButton, Icon: RedditIcon, name: "Reddit" },
    { Component: XShareButton, Icon: XIcon, name: "Twitter" },
    { Component: LinkedinShareButton, Icon: LinkedinIcon, name: "LinkedIn" },
    { Component: WhatsappShareButton, Icon: WhatsappIcon, name: "WhatsApp" },
    { Component: EmailShareButton, Icon: EmailIcon, name: "Email" },
  ];

  return (
    <div>
      <h3 className="title font-semibold mb-2">Share this post:</h3>
      <div className="flex flex-col space-y-5  ">
        {shareButtons.map(({ Component, Icon, name }) => (
          <Component key={name} url={postUrl} title={title}>
            <Icon size={32} round />
          </Component>
        ))}
        {/* Copy Link */}
        <button
          className="cursor-pointer text-[0.98rem] font-semibold"
          type="button"
          aria-label="copy post link"
          onClick={copyToClipBoard}
        >
          {isCopied ? "Copied!" : "Copy Link"}
        </button>
      </div>
    </div>
  );
}