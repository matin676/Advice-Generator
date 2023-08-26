import React from "react";

export default function Separator() {
  return (
    <>
      <img
        src="images/pattern-divider-desktop.svg"
        alt="divider"
        className="divider hide"
      />
      <img
        src="images/pattern-divider-mobile.svg"
        alt="divider"
        className="divider display"
      />
    </>
  );
}
