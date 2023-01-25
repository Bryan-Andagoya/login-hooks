import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Pressable,
  Text,
  Alert,
  Modal,
  Image,
  TouchableOpacity,
} from "react-native";

import { colors } from "../constants";
import { StackNavigatorParamList } from "../navigation";

interface Props
  extends NativeStackScreenProps<StackNavigatorParamList, "Register"> {}

export const RegisterScreen = ({ navigation }: Props) => {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const register = () => {
    if (name && email && password) {
      setModalVisible(true);
    }
  };

  return (
    <View style={[styles.container, { opacity: modalVisible ? 0.2 : 1 }]}>
      <View style={{ height: 24 }} />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setName(text)}
        value={name}
        placeholder="Name"
      />
      {name ? null : (
        <View style={{ padding: 4 }}>
          <Text style={styles.errorText}>Name required</Text>
        </View>
      )}
      <View style={{ height: 12 }} />
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
      <View style={{ height: 12 }} />
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

      <View style={{ height: 20 }} />
      <Pressable
        onPress={register}
        style={styles.button}
        android_ripple={{
          borderless: false,
          color: "white",
        }}
      >
        <Text style={styles.buttonText}>REGISTER</Text>
      </Pressable>
      <View style={{ height: 20 }} />
      <View style={{ flexDirection: "row" }}>
        <Text style={{ color: "grey" }}>Already have an account?</Text>
        <View style={{ width: 4 }} />
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={{ color: colors.primaryColor }}>Login here</Text>
        </TouchableOpacity>
      </View>
      {modalVisible && (
        <Modal
          animationType="slide"
          transparent
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Image
                style={{ width: 75, height: 75 }}
                source={require("../../assets/email.png")}
              />
              <View style={{ height: 16 }} />
              <Text
                style={{ fontSize: 16, color: "white", fontWeight: "bold" }}
              >
                Thank you for your registration!
              </Text>
              <View style={{ height: 16 }} />
              <Text
                style={{ fontSize: 14, color: "white", textAlign: "center" }}
              >
                We're glad you're here! Before you start exploring, we just sent
                you the email confirmation.
              </Text>
              <View style={{ height: 16 }} />
              <Pressable
                style={[
                  styles.button,
                  { backgroundColor: "black", width: "100%" },
                ]}
                onPress={() => navigation.pop()}
              >
                <Text style={[styles.buttonText, { fontSize: 14 }]}>
                  Resend email confirmation
                </Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    paddingHorizontal: "10%",
  },
  modalView: {
    backgroundColor: "#2aba7d",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
