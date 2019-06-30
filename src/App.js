import React from "react";
import useLocalstorage from "@rooks/use-localstorage";
import DoneButton from "./DoneButton";
import { Flex, Text, Box } from "rebass";
import styled from "styled-components";
import Input from "./Input";

const Root = styled(Flex)`
  height: 100vh;
`;

function App() {
  const { value, set, remove } = useLocalstorage(
    "reminder-value",
    "bring home the milk"
  );
  return (
    <Root
      justifyContent="space-between"
      alignItems="center"
      flexDirection="column"
    >
      <Flex
        flex="auto"
        alignSelf="stretch"
        justifyContent="center"
        flexDirection="column"
      >
        <Text fontWeight="bold" mb={2} textAlign="center">
          Don't forget to
        </Text>
        <Input
          type="text"
          placeholder="bring home the milk"
          value={value || ""}
          onChange={event => set(event.target.value)}
        />
      </Flex>
      <DoneButton onClick={remove} />
    </Root>
  );
}

export default App;
