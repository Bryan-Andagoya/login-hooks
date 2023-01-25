import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen, LoginScreen, RegisterScreen } from "../screens";

export type StackNavigatorParamList = {
  Login: undefined;
  Register: undefined;
  Home: {
    email: string;
  };
};

const Stack = createNativeStackNavigator<StackNavigatorParamList>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ title: "Login to your account" }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ title: "Create an account" }}
      />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};
