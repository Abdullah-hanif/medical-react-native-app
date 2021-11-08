import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

function TextInputt  ({placeholder}) {
  return (
    <SafeAreaView>
      <TextInput style={styles.input} placeholder={placeholder} />
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default TextInputt;