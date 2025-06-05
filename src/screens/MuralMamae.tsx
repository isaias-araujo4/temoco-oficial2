import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, Image } from 'react-native';
import { styles } from '../styles/MuralMamae';

// Definindo o tipo para as postagens
type Postagem = {
  id: string;
  titulo: string;
  conteudo: string;
  data: string;
};

export default function MuralMamae() {
  const [postagens, setPostagens] = useState<Postagem[]>([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    // Simulando carregamento de dados
    setTimeout(() => {
      setPostagens([
        {
          id: '1',
          titulo: 'Minha experiência com amamentação',
          conteudo: 'Compartilhando o que aprendi nos primeiros meses...',
          data: '15/05/2023'
        },
        {
          id: '2',
          titulo: 'Dicas para noites tranquilas',
          conteudo: 'O que funcionou para estabelecer a rotina do sono...',
          data: '12/05/2023'
        },
      ]);
      setCarregando(false);
    }, 1500);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.boxImagem}>
        <Image source={require('../assets/images/C_X 2.png')} />
      </View>

      {carregando ? (
        <ActivityIndicator size="large" color="#4F46E5" />
      ) : (
        <FlatList
          data={postagens}
          renderItem={({ item }) => (
            <View style={styles.postagem}>
              <Text style={styles.titulo}>{item.titulo}</Text>
              <Text style={styles.conteudo}>{item.conteudo}</Text>
              <Text style={styles.data}>{item.data}</Text>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      )}
    </View>
  );
}