import React, { useState } from "react";

const Description = ({ description }) => {
  const [showDes, setShowDes] = useState(false);
  const maxLength = 100;

  const toggleShowDes = () => {
    setShowDes(!showDes);
  };

  const displayedDes = showDes
    ? description
    : `${description.slice(0, maxLength)}`;

  const buttonText = showDes ? "Hide" : "Show More";

  return (
    <>
      <p>
        {displayedDes}
        {description.length > maxLength && (
          <button
            onClick={toggleShowDes}
            className="text-xs font-bold px-2 text-blue-800"
          >
            {buttonText}
          </button>
        )}
      </p>
    </>
  );
};

export default Description;
