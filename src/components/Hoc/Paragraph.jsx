  import React, { useState } from "react";
import WithHover from "./WithHover";
const Paragraph = () => {
  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In recusandae
        aperiam voluptatum perspiciatis mollitia nesciunt, impedit, molestiae
        fugiat sint corporis animi. Officiis atque ut architecto.Lorem ipsum
        dolor sit amet consectetur adipisicing elit. In recusandae aperiam
        voluptatum perspiciatis mollitia nesciunt, impedit, molestiae fugiat
        sint corporis animi. Officiis atque ut architecto.
      </p>
    </div>
  );
};

export default Paragraph;

export const ParagraphWithHover = WithHover(Paragraph);