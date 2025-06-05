import { Image, Text, View } from "react-native";
import { styles } from "../styles/Tomocoins";

export default function LojaMoedas() {
    return (
        <View style={styles.container}>

            <View style={styles.boxImagem}>
                <Image source={require('../assets/images/C_X 2.png')}/>
            </View>

            <Text style={styles.titulo}>Tomocoins</Text>

            <View style={styles.quantidadeMoeda}>
                <Image source={require('../assets/images/Money 1.png')} />
                <Text style={styles.textoQuantidade}>
                    540
                </Text>
            </View>

            <View style={styles.boxPrecos}>

                <View style={styles.preco}>
                    <View style={styles.temocoQuantidade}>
                        <Image source={require('../assets/images/Flower-vase 1.png')} />
                        <Text style={styles.textoQuantidade}>3520</Text>
                    </View>
                    <Text style={styles.textoPrecos}>R$89,99</Text>
                </View>

                <View style={styles.preco}>
                    <View style={styles.temocoQuantidade}>
                        <Image source={require('../assets/images/Coin-9 1.png')} />
                        <Text style={styles.textoQuantidade}>1600</Text>
                    </View>
                    <Text style={styles.textoPrecos}>R$ 39,99</Text>
                </View>

                <View style={styles.preco}>
                    <View style={styles.temocoQuantidade}>
                        <Image source={require('../assets/images/Coin-3 1.png')} />
                        <Text style={styles.textoQuantidade}>960</Text>
                    </View>
                    <Text style={styles.textoPrecos}>R$ 14,99</Text>
                </View>

                <View style={styles.preco}>
                    <View style={styles.temocoQuantidade}>
                        <Image source={require('../assets/images/Coin-1 1.png')} />
                        <Text style={styles.textoQuantidade}>320</Text>
                    </View>
                    <Text style={styles.textoPrecos}>R$ 4,99</Text>
                </View>
            </View>
        </View >
    );
}