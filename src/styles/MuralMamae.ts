import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#F2F0F8'
    },
    postagem: {
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        padding: 16,
        marginBottom: 12,
        elevation: 2
    },
    titulo: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#1E293B'
    },
    conteudo: {
        fontSize: 14,
        color: '#475569',
        marginBottom: 8
    },
    data: {
        fontSize: 12,
        color: '#64748B'
    },
    boxImagem: {
        alignSelf: 'flex-end',
        marginBottom: 10,
    },
});
