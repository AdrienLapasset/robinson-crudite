import * as React from "react";
import styled from "styled-components";

const SectionHeading = styled.h2`
  font-weight: 700;
  font-size: 96px;
  line-height: 89px;
  &:before {
    content: "";
    width: 50%;
    height: 10px;
    background-color: black;
    margin-bottom: 30px;
    display: block;
  }
`;

const Heading = ({ section, children, className }) => {
  if (section)
    return <SectionHeading className={className}>{children}</SectionHeading>;
  return <SectionHeading className={className}>{children}</SectionHeading>;
};

export default Heading;
