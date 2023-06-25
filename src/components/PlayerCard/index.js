import React from "react";
import { Text, Image, StyleSheet, View } from "react-native";

export default function PlayerCard(props) {
  return (
    <View style={styles.card}>
      <View style={styles.container}>
        {props.player.urlImagem.length ? (
          <Image
            source={{
              uri: props.player.urlImagem,
            }}
            style={styles.image}
          />
        ) : (
          <Image
            source={require("../../../assets/padraoJogador.png")}
            style={styles.image}
          />
        )}
      </View>
      <View style={styles.container}>
        <Text style={styles.name}>{props.player.nome}</Text>
        <Text style={styles.team}>{props.player.clube}</Text>
        {props.player.posicao && (
          <Text style={styles.description}>
            Posição: {props.player.posicao}
          </Text>
        )}
        {props.player.numero && (
          <Text style={styles.description}>Camisa: {props.player.numero}</Text>
        )}
        {props.player.idade && (
          <Text style={styles.description}>Idade: {props.player.idade}</Text>
        )}
        {props.player.nascimento && (
          <Text style={styles.description}>
            Data de nascimento: {props.player.nascimento}
          </Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    borderRadius: 20,
    elevation: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 100,
    height: 100,
  },
  name: {
    color: "black",
    fontSize: 20,
    marginBottom: 5,
  },
  team: {
    color: "green",
    fontSize: 14,
    marginBottom: 10,
  },
  description: {
    color: "gray",
    fontSize: 16,
    marginBottom: 5,
  },
});
