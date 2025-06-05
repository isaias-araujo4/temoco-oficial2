import React from 'react';
import { Image, View, Text, TextInput, TouchableOpacity} from 'react-native';
import { styles } from '../styles/MuralProfissional';


export default function MuralProfissional() {
    const [titulo, setTitulo] = React.useState('');
    const [conteudo, setConteudo] = React.useState('');

    const handleEnviar = () => {
        if (!titulo.trim() || !conteudo.trim()) {
            alert('Por favor, preencha todos os campos!');
            return;
        }
        console.log('Postagem enviada:', { titulo, conteudo });
        alert('Postagem enviada com sucesso!');
        setTitulo('');
        setConteudo('');
    };

    return (
        <View style={styles.container}>
            {/* Cabeçalho com logo */}
            <View style={styles.header}>
                <Image 
                    source={require('../assets/images/C_X 2.png')} 
                    style={styles.boxImagem}
                    resizeMode="contain"
                />
                <Text style={styles.titulo}>Criar postagem</Text>
            </View>

            {/* Área de formulário */}
            <View style={styles.formContainer}>
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Título da Postagem</Text>
                    <TextInput
                        style={styles.input}
                        value={titulo}
                        onChangeText={setTitulo}
                        placeholder="Digite um título criativo..."
                        placeholderTextColor="#999"
                    />
                </View>

                <View style={styles.separator} />

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Conteúdo</Text>
                    <TextInput
                        style={[styles.input, styles.contentInput]}
                        value={conteudo}
                        onChangeText={setConteudo}
                        placeholder="Compartilhe seus conhecimentos..."
                        placeholderTextColor="#999"
                        multiline
                        textAlignVertical="top"
                    />
                </View>

                <TouchableOpacity 
                    style={styles.button} 
                    onPress={handleEnviar}
                    activeOpacity={0.8}
                >
                    <Text style={styles.buttonText}>Publicar no Mural</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}