import { GestureHandlerRootView, PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler';
import React, { useState, useRef } from 'react';
import { Image, Text, View, TouchableOpacity, Animated, Easing, } from "react-native";
import { styles } from '../styles/Assinaturas';
const planos = [
    {
        titulo: "Plano mensal",
        descricao: [
            "Para quem quer mais controle e conteúdo!",
            "Cadastro de até 3 crianças",
            "Acesso ilimitado a todos os jogos",
            "Avatares ilimitados",
            "Relatórios detalhados"
        ],
        preco: "R$24,90/mês"
    },
    {
        titulo: "Plano anual",
        descricao: [
            "Mais benefícios com economia!",
            "Cadastro de crianças ilimitadas",
            "Acesso ilimitado a todos os jogos",
            "Avatares ilimitados",
            "relatórios detalhados",
            "Envio automático de relatórios para o profissional responsável pela criança"
        ],
        preco: "R$199,00/ano"
    }
];

export default function Assinaturas() {
    const [planoAtual, setPlanoAtual] = useState<number>(0);
    const fadeAnim = useRef(new Animated.Value(1)).current;
    const slideAnim = useRef(new Animated.Value(0)).current;

    const onSwipe = (event: PanGestureHandlerGestureEvent) => {
        const { translationX } = event.nativeEvent;
        if (translationX < -50) {
            animateTransition(1);
        } else if (translationX > 50) {
            animateTransition(0);
        }
    };

    const animateTransition = (newPlano: number) => {  // Adicione a tipagem :number
        // Animação de fade out e slide
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 200,
                useNativeDriver: true,
            }),
            Animated.timing(slideAnim, {
                toValue: newPlano === 1 ? -50 : 50,
                duration: 200,
                useNativeDriver: true,
            })
        ]).start(() => {
            setPlanoAtual(newPlano);
            // Animação de fade in
            Animated.parallel([
                Animated.timing(fadeAnim, {
                    toValue: 1,
                    duration: 300,
                    easing: Easing.out(Easing.cubic),
                    useNativeDriver: true,
                }),
                Animated.timing(slideAnim, {
                    toValue: 0,
                    duration: 300,
                    easing: Easing.out(Easing.cubic),
                    useNativeDriver: true,
                })
            ]).start();
        });
    };

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.boxImagem}>
                    <Image source={require('../assets/images/C_X 2.png')} />
                </View>

                <Text style={styles.titulo}>Assinaturas</Text>

                <Text style={styles.texto1}>
                    Vá para o premium{'\n'}
                    Pode ser cancelado a qualquer momento
                </Text>

                <PanGestureHandler onGestureEvent={onSwipe}>
                    <Animated.View
                        style={[
                            styles.central,
                            {
                                opacity: fadeAnim,
                                transform: [{ translateX: slideAnim }]
                            }
                        ]}
                    >
                        <Text style={styles.tituloPlano}>{planos[planoAtual].titulo}</Text>

                        <View style={styles.descricaoContainer}>
                            {planos[planoAtual].descricao.map((item, index) => (
                                <View key={index} style={styles.itemDescricao}>
                                    <View style={styles.bolinha} />
                                    <Text style={styles.textoJustificado}>{item}</Text>
                                </View>
                            ))}
                        </View>

                        <View style={styles.line}></View>

                        <Text style={styles.preco}>{planos[planoAtual].preco}</Text>
                    </Animated.View>
                </PanGestureHandler>

                {/* Indicador de planos */}
                <View style={styles.indicadorContainer}>
                    {planos.map((_, index) => (
                        <View
                            key={index}
                            style={[
                                styles.indicador,
                                index === planoAtual ? styles.indicadorAtivo : styles.indicadorInativo
                            ]}
                        />
                    ))}
                </View>

                <TouchableOpacity style={styles.botao}>
                    <Text style={styles.textoBotao}>Iniciar plano</Text>
                </TouchableOpacity>
            </View>
        </GestureHandlerRootView>
    );
}