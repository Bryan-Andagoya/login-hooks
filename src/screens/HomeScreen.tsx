import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { StackNavigatorParamList } from "../navigation";

interface Props
  extends NativeStackScreenProps<StackNavigatorParamList, "Home"> {}

export const HomeScreen = ({ route }: Props) => {
  const { email } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello {email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  text: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
  },
});
