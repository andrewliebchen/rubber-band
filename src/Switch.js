import React from "react";
import { Text } from "rebass";

const Switch = props => <Text {...props}>{props.value ? "On" : "Off"}</Text>;

export default Switch;
