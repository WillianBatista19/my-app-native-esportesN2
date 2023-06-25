import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function FormTeam() {
  return (
    <View>
      <View style={styles.form2}>
        <Text style={styles.textTime}>Time:</Text>
        <TextInput placeholder="Digite o Time" KeyboardType="text" style={styles.pesquisa}></TextInput>
      </View>
      <Button title="Buscar"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  form2: {
    display: "flex",
    flexDirection: "row",
    margin: 10,
  },

  pesquisa: {
    fontSize: 15,
    borderWidth: 1,
    marginLeft: 10,
    borderRadius: 5,
    backgroundColor: 'beige',
  },

  textTime: {
    fontSize: 15,
  }
});
