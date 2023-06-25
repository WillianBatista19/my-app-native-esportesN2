import React, { useState } from "react";
import { View } from "react-native";
import axios from "axios";
import { StyleSheet } from "react-native";
import FormPlayer from "../../components/forms/FormPlayer";
import PlayerList from "../../components/PlayerList";
import FormTeam from "../../components/forms/FormTeam";

export default function Main() {
  const [resultados, setResultados] = useState([{}]);

  const apiKey =
    "1550aa32bb5e41877cc98e39c8e9a59134299c6555cbec7fedf2bd9a39820b26";
  const axiosInstance = axios.create({
    baseURL: `https://apiv3.apifootball.com`,
  });

  const seachPlayer = (name) => {
    axiosInstance
      .get(`?APIkey=${apiKey}&action=get_players&player_name=${name}`)
      .then((response) => {
        if (response.data.length > 0) {
          const resultado = [];
          response.data.forEach((jogador) => {
            const resposta = {
              nome: jogador.player_name,
              clube: jogador.team_name,
              numero: jogador.player_number,
              posicao: jogador.player_type,
              urlImagem: jogador.player_image,
              idade: jogador.player_age,
              nascimento: jogador.player_birthdate,
            };
            if (resposta.clube === "") {
              resposta.clube = "Sem dados";
            }
            if (resposta.numero === "") {
              resposta.numero = "Sem dados";
            }
            if (resposta.posicao === "") {
              resposta.posicao = "Sem dados";
            }
            if (resposta.idade === "") {
              resposta.idade = "Sem dados";
            }
            if (resposta.nascimento === "") {
              resposta.nascimento = "Sem dados";
            }
            resultado.push(resposta);
          });
          setResultados(resultado);
        } else {
          console.log(
            `Nenhum jogador correspondente encontrado para "${jogador}".`
          );
          return `Nenhum jogador correspondente encontrado para "${jogador}".`;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <FormPlayer seachPlayer={seachPlayer} />
      {resultados && <PlayerList players={resultados} />}
      <FormTeam/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
