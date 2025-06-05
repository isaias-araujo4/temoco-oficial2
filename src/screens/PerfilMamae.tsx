import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from '../styles/PerfilMamae';

// Tipo para as crianças
type Crianca = {
    id: string;
    nome: string;
    idade: string;
    avatar?: any;
};

// Dados mockados - para testar SEM crianças, deixe o array vazio []
const criancasCadastradas: Crianca[] = [
    // Exemplo com crianças:


];

export default function PerfilMamae() {
    return (
        <View style={styles.container}>
            {/* Cabeçalho com logo */}
            <View style={styles.header}>
                <Image
                    source={require('../assets/images/C_X 2.png')}
                    style={styles.boxImagem}
                    resizeMode="contain"
                />
            </View>

            {/* Título da página */}
            <Text style={styles.titulo}>Meu Perfil</Text>

            {criancasCadastradas.length > 0 ? (
                /* SE TIVER CRIANÇAS CADASTRADAS - Mostra apenas os perfis e o botão de adicionar */
                <View style={styles.perfisContainer}>
                    <Text style={styles.subtitulo}>Perfis das Crianças</Text>

                    <View style={styles.listaPerfis}>
                        {criancasCadastradas.map(crianca => (
                            <TouchableOpacity key={crianca.id} style={styles.perfilItem}>
                                {crianca.avatar && <Image source={crianca.avatar} style={styles.avatar} />}
                                <Text style={styles.nomeCrianca}>{crianca.nome}</Text>
                                <Text style={styles.idadeCrianca}>{crianca.idade}</Text>
                            </TouchableOpacity>
                        ))}

                        <TouchableOpacity style={styles.novoPerfil}>
                            <Text style={styles.maisIcon}>+</Text>
                            <Text style={styles.novoPerfilTexto}>Adicionar outra</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ) : (
                /* SE NÃO TIVER CRIANÇAS - Mostra apenas a mensagem completa */
                <View style={styles.mensagemContainer}>
                    <Text style={styles.textoMensagem}>
                        Para adicionar uma nova criança, é necessário realizar o cadastro.
                    </Text>
                    <Text style={styles.textoMensagem}>
                        Deseja cadastrar agora?
                    </Text>

                    <TouchableOpacity style={styles.botao}>
                        <Text style={styles.textoBotao}>Sim, quero cadastrar</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
}
