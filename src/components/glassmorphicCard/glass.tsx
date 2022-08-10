import React from "react";

const Glass = (props: { className?: string; children: any }) => {
  const { className, children } = props;

  return <div className={className}>{children}</div>;
};

export default Glass;
