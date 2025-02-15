import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <p className="text-3xl">Dashboard</p>
      <div>{children}</div>
    </>
  );
};

export default layout;
