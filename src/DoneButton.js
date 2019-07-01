import React from "react";
import { Flex } from "rebass";
import styled from "styled-components";
import { Check } from "react-feather";

const size = "4em";

const Root = styled(Flex)`
  cursor: pointer;
  height: ${size};
  width: ${size};
  border-radius: ${size};
`;

const DoneButton = props => (
  <Root
    {...props}
    bg="black"
    alignItems="center"
    justifyContent="center"
    width={1}
  >
    <Check color="white" />
  </Root>
);

export default DoneButton;
