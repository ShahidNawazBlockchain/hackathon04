import React from "react";

function footer({ text1, text2, text3, text4, text5, text6 }) {
  return (
    <ul className="flex flex-col gap-3">
      <li className="font-medium text-xl">{text1}</li>
      <li className="font-light">{text2}</li>
      <li className="font-light">{text3}</li>
      <li className="font-light">{text4}</li>
      <li className="font-light">{text5}</li>
      <li className="font-light">{text6}</li>
    </ul>
  );
}

export default footer;
