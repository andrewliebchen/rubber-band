import React from "react";
import useLocalstorage from "@rooks/use-localstorage";
import DoneButton from "./DoneButton";
import { Flex, Text, Box } from "rebass";
import styled from "styled-components";
import Input from "./Input";
import Switch from "./Switch";

const Root = styled(Flex)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
`;

function App() {
  const { value, set, remove } = useLocalstorage(
    "reminder-value",
    "bring home the milk"
  );
  return (
    <Root flexDirection="column" alignItems="center">
      <Switch value={value} mb={2} />
      <Text fontWeight="bold" mb={2} textAlign="center">
        Don't forget to
      </Text>
      <Input
        type="text"
        placeholder="bring home the milk"
        value={value || ""}
        onChange={event => set(event.target.value)}
      />
      <DoneButton onClick={remove} />
    </Root>
  );
}

export default App;
