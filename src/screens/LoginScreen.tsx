import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  TouchableOpacity,
  Alert,
  Switch,
} from "react-native";

import { colors } from "../constants";
import { StackNavigatorParamList } from "../navigation";

interface Props
  extends NativeStackScreenProps<StackNavigatorParamList, "Login"> {}

export const LoginScreen = ({ navigation }: Props) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    if (success && email && password) {
      Alert.alert("Success", "Correct access");
      setEmail("");
      setPassword("");
      setSuccess(false);
      setRememberMe(false);
      navigation.navigate("Home", { email });
    }
  }, [success]);

  const login = () => {
    if (email && password) {
      setSuccess(true);
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ height: 16 }} />
      <View style={{ padding: 16, flexDirection: "row" }}>
        <TouchableOpacity>
          <Image
            style={styles.logo}
            source={require("../../assets/facebook.png")}
          />
        </TouchableOpacity>
        <View style={{ width: 12 }} />
        <TouchableOpacity>
          <Image
            style={styles.logo}
            source={require("../../assets/twitter.png")}
          />
        </TouchableOpacity>
        <View style={{ width: 12 }} />
        <TouchableOpacity>
          <Image
            style={styles.logo}
            source={require("../../assets/google.png")}
          />
        </TouchableOpacity>
      </View>
      <Text style={{ color: "grey" }}>or use your email account</Text>
      <View style={{ height: 20 }} />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setEmail(text)}
        value={email}
        placeholder="Email"
        keyboardType="email-address"
      />
      {email ? null : (
        <View style={{ padding: 4 }}>
          <Text style={styles.errorText}>Email required</Text>
        </View>
      )}
      <View style={{ height: 16 }} />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setPassword(text)}
        value={password}
        placeholder="Password"
        secureTextEntry
      />
      {password ? null : (
        <View style={{ padding: 4 }}>
          <Text style={styles.errorText}>Password required</Text>
        </View>
      )}
      <View
        style={{ flexDirection: "row", alignItems: "center", width: "70%" }}
      >
        <Switch
          trackColor={{ false: "#767577", true: colors.primaryColor }}
          thumbColor={rememberMe ? colors.primaryColor : "#f4f3f4"}
          onValueChange={() => setRememberMe((prev) => !prev)}
          value={rememberMe}
        />
        <Text style={{ flex: 1 }}>Remember me</Text>
        <TouchableOpacity style={{}}>
          <Text style={{ color: colors.primaryColor }}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <View style={{ height: 20 }} />
      <Pressable
        onPress={login}
        style={styles.button}
        android_ripple={{
          borderless: false,
          color: "white",
        }}
      >
        <Text style={styles.buttonText}>LOGIN</Text>
      </Pressable>
      <View style={{ height: 20 }} />
      <View style={{ flexDirection: "row" }}>
        <Text style={{ color: "grey" }}>Don't have an account?</Text>
        <View style={{ width: 4 }} />
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={{ color: colors.primaryColor }}>Register here</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  logo: {
    height: 45,
    width: 45,
    borderWidth: 1,
    borderColor: "gainsboro",
    borderRadius: 100,
  },
  input: {
    height: 50,
    width: "70%",
    borderWidth: 1,
    borderColor: "gainsboro",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  button: {
    backgroundColor: colors.primaryColor,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 24,
    width: "70%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  errorText: {
    color: "red",
  },
});
