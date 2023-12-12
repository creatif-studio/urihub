import React from 'react';

export default function Headline(props) {
  const { className, heading, content } = props;

  const headingStyle = [];
  const contentStyle = [];

  if (className === "isPrimary") {
    headingStyle.push("text-lime-400");
    contentStyle.push("text-lime-400");
  } else if (className === "isSecondary") {
    headingStyle.push("text-fuchsia-950");
    contentStyle.push("text-fuchsia-950");
  } else if (className === "isTertiary") {
    headingStyle.push("text-red-400");
    contentStyle.push("text-red-400");
  }

  const headingSizeClass = className === "isPrimary"
    ? "text-6xl font-bold"
    : className === "isSecondary"
    ? "text-4xl font-bold" 
    : "text-4xl font-bold";

  const contentSizeClass = "text-lg font-medium"; 
  return (
    <>
      <div>
        <p className={headingStyle.join(" ") + " " + headingSizeClass}>{heading}</p>
        <p className={contentStyle.join(" ") + " " + contentSizeClass}>{content}</p>
      </div>
    </>
  );
}
