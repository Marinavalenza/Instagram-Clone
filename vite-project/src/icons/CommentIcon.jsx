import * as React from "react";
const Comment = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#262626"
      fillRule="evenodd"
      d="M22 11.5c0-6.075-4.925-11-11-11S0 5.425 0 11.5s4.925 11 11 11c1.326 0 3.148-.484 5.465-1.451l3.746 1.461.111.037a1 1 0 0 0 1.224-1.204l-1.044-4.297.17-.41C21.559 14.482 22 12.77 22 11.5Zm-2.729 4.6-.345.817.936 3.847-3.417-1.333-.933.387C13.544 20.612 12.024 21 11 21a9.5 9.5 0 1 1 9.5-9.5c0 1.046-.403 2.595-1.229 4.6Z"
      clipRule="evenodd"
    />
  </svg>
);
export default Comment;
