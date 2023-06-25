import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";

export default function FormPlayer(props) {
  const [player, setPlayer] = useState("");

  return (
    <View style={styles.viewgeral}>
      <View style={styles.form1}>
        <Text style={styles.text1}>Jogador:</Text>
        <TextInput
          placeholder="Digite o nome"
          KeyboardType="text"
          onChangeText={setPlayer}
          style={styles.pesquisa}
        />
      </View>
      <Button title="Buscar" onPress={() => props.seachPlayer(player)} />
    </View>
  );
}

const styles = StyleSheet.create({

  viewgeral: {
    borderBottomWidth: 1,
    paddingBottom: 10,
  },

  form1: {
    display: "flex",
    flexDirection: "row",
    margin: 10,
  },

  pesquisa: {
    fontSize: 15,
    marginLeft: 10,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'beige',
  },

  text1: {
    fontSize: 15,
  }
});
