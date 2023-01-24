import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen, LoginScreen, RegisterScreen } from "../screens";

const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ title: "Login to your account" }}
      />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};
