import React from "react";

const Loading = ({ className, isLoading, children, Icon }) => {
  // Check if it has custom classname
  const loadingProps = {
    className: "loading",
  };
  if (className) {
    loadingProps.className += ` ${className}`;
  }

  if (!isLoading) {
    return <></>;
  }

  return (
    <div {...loadingProps}>
      {Icon && <Icon />}
      {children}
    </div>
  );
};

export default Loading;
