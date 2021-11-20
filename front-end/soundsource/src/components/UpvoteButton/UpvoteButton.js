import React from "react";
import "./UpvoteButton.css";

export const UpvoteButton = ({ onClick }) => {
  return (
    <button>
      <img
        src="/images/upvote.png"
        type="button"
        width="20"
        className="btn"
      ></img>
    </button>
    // <button
    //   //   className="btns ${checkButtonStyle} ${checkButtonSize}"
    //   onClick={onClick}
    //   type={type}
    // >
    //   {children}
    // </button>
  );
};
