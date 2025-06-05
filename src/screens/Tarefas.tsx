import { useState, useEffect } from "react";
import {
    Image,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
    ImageBackground
} from "react-native";
import * as ScreenOrientation from 'expo-screen-orientation';

type Task = {
    id: number;
    title: string;
    description: string;
    game: string;
    completed: boolean;
};

const TASKS: Task[] = [
    {
        id: 1,
        title: "O Labirinto de Letras",
        description: "Você se encontra preso em um labirinto misterioso onde cada parede e corredor são formados por letras. Para encontrar a saída, precisa formar palavras e resolver quebra-cabeças que revelam o caminho correto.",
        game: "Mundo das Palavras",
        completed: true,
    },
    {
        id: 2,
        title: "A Jornada Culinária",
        description: "Embarque em uma aventura gastronômica onde cada ingrediente descoberto revela um novo segredo da culinária mundial.",
        game: "A Jornada dos Chefs",
        completed: false,
    },
    {
        id: 3,
        title: "Os Segredos dos Elementos",
        description: "Desvende os mistérios dos quatro elementos naturais em um templo antigo cheio de desafios científicos.",
        game: "Templo dos Elementos",
        completed: false,
    },
];

const GAMES = ["Todos os Jogos", "Mundo das Palavras", "A Jornada dos Chefs", "Templo dos Elementos"];

export default function Tarefas() {
    const [activeTab, setActiveTab] = useState<"completed" | "pending">("completed");
    const [selectedGame, setSelectedGame] = useState<string>("Todos os Jogos");

    // Força landscape ao entrar na tela
    useEffect(() => {
        async function lockLandscape() {
            await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
        }
        lockLandscape();

        // Restaura para portrait ao sair da tela
        return () => {
            ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
        };
    }, []);

    const filteredTasks = TASKS.filter(task => {
        const statusMatch = activeTab === "completed" ? task.completed : !task.completed;
        const gameMatch = selectedGame === "Todos os Jogos" || task.game === selectedGame;
        return statusMatch && gameMatch;
    });

    return (
        <ImageBackground
            source={require('../assets/images/Background_Green.png')}
            style={styles.container}
            resizeMode="cover"
        >
            <View style={styles.content}>
                <Text style={styles.headerTitle}>Menu de Tarefas</Text>

                <View style={styles.tabsContainer}>
                    <TouchableOpacity
                        style={[styles.tabButton, activeTab === "completed" && styles.activeTab]}
                        onPress={() => setActiveTab("completed")}
                    >
                        <Text style={[styles.tabText, activeTab === "completed" && styles.activeTabText]}>
                            Tarefas Completadas
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.tabButton, activeTab === "pending" && styles.activeTab]}
                        onPress={() => setActiveTab("pending")}
                    >
                        <Text style={[styles.tabText, activeTab === "pending" && styles.activeTabText]}>
                            Tarefas a Concluir
                        </Text>
                    </TouchableOpacity>
                </View>

                <ScrollView style={styles.tasksContainer}>
                    {filteredTasks.map(task => (
                        <View key={task.id} style={styles.taskCard}>
                            <Text style={styles.taskTitle}>{task.title}</Text>
                            <Text style={styles.taskDescription}>{task.description}</Text>
                            <View style={styles.taskFooter}>
                                <Text style={styles.gameTag}>{task.game}</Text>
                                <Image
                                    source={
                                        task.completed
                                            ? require("../assets/images/Star.png")
                                            : require("../assets/images/Empty-star.png")
                                    }
                                    style={styles.starIcon}
                                />
                            </View>
                        </View>
                    ))}
                </ScrollView>
            </View>

            <View style={styles.gamesSidebar}>
                <Image source={require("../assets/images/Controle.png")} style={styles.controllerIcon} />
                <Text style={styles.sidebarTitle}>Jogos das Tarefas</Text>

                <ScrollView style={styles.gamesList}>
                    {GAMES.map(game => (
                        <TouchableOpacity
                            key={game}
                            style={[styles.gameButton, selectedGame === game && styles.selectedGame]}
                            onPress={() => setSelectedGame(game)}
                        >
                            <Text style={[styles.gameText, selectedGame === game && styles.selectedGameText]}>
                                {game}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row", // Layout horizontal
        padding: 10,
    },
    content: {
        flex: 1, // 2/3 da tela para o conteúdo principal
        paddingRight: 10,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: "bold",
        color: "black",
        marginBottom: 20,
        textAlign: "center",
    },
    tabsContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 20,
    },
    tabButton: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        backgroundColor: "#E8F5E9",
    },
    activeTab: {
        backgroundColor: "#2E7D32",
    },
    tabText: {
        fontSize: 16,
        color: "#92EC8F",
        fontWeight: "600",
    },
    activeTabText: {
        color: "#FFFFFF",
    },
    tasksContainer: {
        flex: 1,
        marginBottom: 20,
    },
    taskCard: {
        backgroundColor: "#FFFFFF",
        borderRadius: 12,
        padding: 16,
        marginBottom: 15,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    taskTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "black",
        marginBottom: 8,
    },
    taskDescription: {
        fontSize: 14,
        color: "black",
        marginBottom: 12,
        lineHeight: 20,
    },
    taskFooter: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    gameTag: {
        fontSize: 12,
        color: "#757575",
        backgroundColor: "#E8F5E9",
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 10,
    },
    starIcon: {
        width: 24,
        height: 24,
    },
    gamesSidebar: {
        flex: 0.4, // 1/3 da tela para a sidebar
        backgroundColor: "#92EC8F",
        borderRadius: 16,
        padding: 16,
    },
    controllerIcon: {
        width: 50,
        height: 50,
        alignSelf: "center",
        marginBottom: 10,
    },
    sidebarTitle: {
        fontSize: 16,
        fontWeight: "bold",
        color: "black",
        textAlign: "center",
        marginBottom: 15,
    },
    gamesList: {
        maxHeight: "100%",
    },
    gameButton: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginBottom: 8,
        borderRadius: 8,
        backgroundColor: "#FFFFFF",
    },
    selectedGame: {
        backgroundColor: "#2E7D32",
    },
    gameText: {
        fontSize: 14,
        color: "black",
    },
    selectedGameText: {
        color: "#FFFFFF",
    },
});