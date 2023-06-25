import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import PlayerCard from "../PlayerCard";

export default function PlayerList(props) {
  return (
    <ScrollView style={styles.container}>
      {props.players.map((player) => {
        if (player.nome) {
          return <PlayerCard player={player} />;
        } else {
          return (
            <Text>Pesquise para continuar...</Text>
          )
        }
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    padding: 10,
  },
});
