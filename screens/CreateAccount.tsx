import React from "react";
import { View, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import styled from "styled-components/native";
import AuthButton from "../components/auth/AuthButton";
import AuthLayout from "../components/auth/AuthLayout";

const Container = styled.View`
  flex: 1;
  background-color: black;
`;

export default function CreateAccount() {
  return (
    <AuthLayout>
      <TextInput
        placeholder="First Name"
        placeholderTextColor="gray"
        returnKeyType="next"
        style={{ backgroundColor: "white", width: "100%" }}
      />

      <TextInput
        placeholder="Last Name"
        placeholderTextColor="gray"
        returnKeyType="next"
        style={{ backgroundColor: "white", width: "100%" }}
      />

      <TextInput
        placeholder="Username"
        placeholderTextColor="gray"
        returnKeyType="next"
        style={{ backgroundColor: "white", width: "100%" }}
      />

      <TextInput
        placeholder="Email"
        placeholderTextColor="gray"
        keyboardType="email-address"
        returnKeyType="next"
        style={{ backgroundColor: "white", width: "100%" }}
      />

      <TextInput
        placeholder="Password"
        placeholderTextColor="gray"
        secureTextEntry
        returnKeyType="done"
        style={{ backgroundColor: "white", width: "100%" }}
      />
      <AuthButton text="Create Account" disabled={true} onPress={() => null} />
    </AuthLayout>
  );
}
