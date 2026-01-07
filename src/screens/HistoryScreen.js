
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../context/ThemeContext';

const historyData = [
    { id: '1', text: "The only way to do great work is to love what you do.", author: "Steve Jobs", date: "Today, 9:41 AM" },
    { id: '2', text: "Life is what happens when you're busy making other plans.", author: "John Lennon", date: "Yesterday" },
    { id: '3', text: "Get busy living or get busy dying.", author: "Stephen King", date: "Mon, Jan 5" },
];

export default function HistoryScreen() {
    const { theme } = useTheme();

    const renderItem = ({ item }) => (
        <View style={[styles.historyItem, { borderBottomColor: theme.border }]}>
            <View style={[styles.iconContainer, { backgroundColor: theme.card }]}>
                <Ionicons name="document-text-outline" size={20} color={theme.text} />
            </View>
            <View style={styles.textContainer}>
                <Text style={[styles.quoteText, { color: theme.text }]} numberOfLines={2}>{item.text}</Text>
                <Text style={[styles.authorText, { color: theme.textSecondary }]}>{item.author} • {item.date}</Text>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
            <View style={styles.header}>
                <Text style={[styles.headerIcon, { color: theme.text }]}>🕰️</Text>
                <Text style={[styles.headerTitle, { color: theme.text }]}>History</Text>
            </View>
            <FlatList
                data={historyData}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.listContainer}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    headerIcon: {
        fontSize: 24,
        marginRight: 10,
    },
    headerTitle: {
        fontSize: 22,
        fontWeight: '600',
        letterSpacing: -0.5,
    },
    listContainer: {
        paddingBottom: 20,
    },
    historyItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
    },
    iconContainer: {
        width: 32,
        height: 32,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12,
    },
    textContainer: {
        flex: 1,
        marginRight: 10,
    },
    quoteText: {
        fontSize: 15,
        fontWeight: '500',
        marginBottom: 4,
        lineHeight: 20,
    },
    authorText: {
        fontSize: 13,
    },
});

