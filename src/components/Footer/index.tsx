import React from "react";

import styled from "@emotion/styled";
import { Button as Btn, Heading } from "@chakra-ui/core";

const Button = styled.button`
  color: turquoise;
`;

const Footer: React.FC = () => (
  <>
    <Heading as="h1">Footer</Heading>
    <Button>GO</Button>
    <Btn>TEST</Btn>
  </>
);

export default Footer;
