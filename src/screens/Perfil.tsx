import React, { useEffect } from "react";
import {
  Image,
  ImageBackground,
  Text,
  View,
  StyleSheet,
} from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";

export default function Perfil() {
  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
  }, []);

  return (
    <ImageBackground
      source={require("../assets/images/Background_Green.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        {/* Título */}
        <Text style={styles.header}>Bem-vindo ao perfil</Text>

        {/* Perfil */}
        <View style={styles.perfilContainer}>
          <Image
            source={require("../assets/images/huskySmile.png")}
            style={styles.perfilImagem}
          />
          <Text style={styles.perfilNome}>Rengoku Irelia</Text>
        </View>

        {/* Informações */}
        <View style={styles.infoContainer}>
          {/* Pontos */}
          <View style={styles.infoBox}>
            <Image
              source={require("../assets/images/Star.png")}
              style={styles.icone}
            />
            <View style={styles.textBox}>
              <Text style={styles.texto}>Pontos: 50</Text>
            </View>
          </View>

          {/* Linha inferior com jogos, tarefas e skins */}
          <View style={styles.statsLinha}>
            {/* Jogos */}
            <View style={styles.infoBox}>
              <Image
                source={require("../assets/images/Controle.png")}
                style={styles.icone}
              />
              <View style={styles.textBox}>
                <Text style={styles.texto}>Jogos completos: 2</Text>
              </View>
            </View>

            {/* Tarefas */}
            <View style={styles.infoBox}>
              <Image
                source={require("../assets/images/Task 1.png")}
                style={styles.icone}
              />
              <View style={styles.textBox}>
                <Text style={styles.texto}>Tarefas completas: 10</Text>
              </View>
            </View>

            {/* Skins */}
            <View style={styles.infoBox}>
              <Image
                source={require("../assets/images/Brabuletaas 1.png")}
                style={styles.icone}
              />
              <View style={styles.textBox}>
                <Text style={styles.texto}>Skins adquiridas: 3</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    flexDirection: "row",
    padding: 40,
  },
  header: {
    position: "absolute",
    top: 20,
    left: 20,
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  perfilContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 30,
  },
  perfilImagem: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  perfilNome: {
    marginTop: 10,
    backgroundColor: "#FFF",
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    fontWeight: "bold",
    fontSize: 16,
  },
  infoContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  infoBox: {
    alignItems: "center",
    marginBottom: 30,
  },
  statsLinha: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 40,
  },
  icone: {
    width: 60,
    height: 60,
    marginBottom: 10,
    resizeMode: "contain",
  },
  textBox: {
    backgroundColor: "#FFF",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    minWidth: 150,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  texto: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
});
