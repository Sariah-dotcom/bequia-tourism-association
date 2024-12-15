import React, { useState } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Accordion(props) {
  const [getContent, setContent] = useState(false);

  function toggleContent() {
    setContent(!getContent);
  }

  return (
    <div className="border-b border-gray-300 py-2">
      {/* Accordion Header */}
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleContent}
      >
        <h3 className="text-xl font-dm">{props.accordionTitle}</h3>
        <MdKeyboardArrowDown
          className={`text-green text-4xl transform transition-transform ${
            getContent ? "rotate-180" : ""
          }`}
        />
      </div>

      {/* Accordion Content */}
      {getContent && (
        <p className="mt-5">
          {props.content}
        </p>
      )}
    </div>
  );
}
