import {
    View,
    Text,
    Image,
    ImageBackground,
    TouchableOpacity,
    Button,
} from "react-native";
import { styles } from "../styles/Personagens";

export default function Personagens() {
    return (
        <View style={styles.container}>

            <Text style={styles.titulo1}>Personagens</Text>

            <View style={styles.central}>

                <View style={styles.titulo2}>
                    <Text>Personagem liberados</Text>
                </View>

                <View style={styles.lista1}>
                    <View>
                        <Image source={require("../assets/images/Group.png")} />
                    </View>
                    <View>
                        <Image source={require("../assets/images/Group.png")} />
                    </View>
                    <View>
                        <Image source={require("../assets/images/Group.png")} />
                    </View>
                </View>

                <View style={styles.lista1}>
                    <View>
                        <Image source={require("../assets/images/Group.png")} />
                    </View>
                    <View>
                        <Image source={require("../assets/images/Group.png")} />
                    </View>
                    <View>
                        <Image source={require("../assets/images/Group.png")} />
                    </View>
                </View>

                <View style={styles.titulo2}>
                    <Text>Personagem desbloqueados</Text>
                </View>

                <View style={styles.lista1}>
                    <View>
                        <Image source={require("../assets/images/Group.png")} />
                    </View>
                    <View>
                        <Image source={require("../assets/images/Group.png")} />
                    </View>
                    <View>
                        <Image source={require("../assets/images/Group.png")} />
                    </View>
                </View>

            </View>

            <View style={styles.central2}>
                <Image source={require("../assets/images/HuskySide-removebg-preview-removebg-preview 1.png")} />
                <Image source={require("../assets/images/Square-2 1.png")} />
                <View>
                    <Text>Selecionar</Text>
                </View>
            </View>

        </View>
    );
}
