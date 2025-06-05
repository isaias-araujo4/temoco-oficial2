import React, { useEffect } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";
import { styles } from "../styles/Personagens";

export default function Personagens() {
  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);
  }, []);

  const personagensLiberados = [1, 2, 3, 4];
  const personagensBloqueados = [1, 2, 3];

  return (
    <ImageBackground
      source={require("../assets/images/Background_pink 1.png")}
      style={styles.background}
    >
      <View style={styles.container}>

        {/* COLUNA DA ESQUERDA COM SCROLL */}
        <ScrollView
          style={styles.painelPersonagens}
          contentContainerStyle={styles.painelPersonagensContent}
        >
          <Text style={styles.titulo}>Personagens</Text>

          <Text style={styles.subtitulo}>Personagens liberados</Text>
          <View style={styles.grid}>
            {personagensLiberados.map((_, i) => (
              <View style={styles.iconeContainer} key={`liberado-${i}`}>
                <Image
                  source={require("../assets/images/mingcute_dog-line.png")}
                  style={styles.icone}
                />
              </View>
            ))}
          </View>

          <Text style={styles.subtitulo}>Personagens Bloqueados</Text>
          <View style={styles.grid}>
            {personagensBloqueados.map((_, i) => (
              <View style={styles.iconeContainer} key={`bloqueado-${i}`}>
                <Image
                  source={require("../assets/images/Group.png")}
                  style={[styles.icone, { opacity: 0.3 }]}
                />
                <Image
                  source={require("../assets/images/jam_padlock-alt-f.png")}
                  style={styles.iconePequeno}
                />
              </View>
            ))}
          </View>
        </ScrollView>

        {/* COLUNA DA DIREITA */}
        <View style={styles.painelSelecionado}>
          <Image
            source={require("../assets/images/HuskySide-removebg-preview-removebg-preview 1.png")}
            style={styles.husky}
          />
          <View style={styles.cardDescricao}>
            <Text style={styles.nomePersonagem}>Lykos, o Husky</Text>
            <Text style={styles.descricao}>
              Lykos é um husky aventureiro que ama explorar e se divertir! Ele
              sabe que, para vencer qualquer desafio, aprender é a maior
              aventura de todas.
            </Text>
          </View>
          <TouchableOpacity style={styles.botao}>
            <Text style={styles.textoBotao}>Selecionar</Text>
          </TouchableOpacity>
        </View>

      </View>
    </ImageBackground>
  );
}
