import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../context/ThemeContext';

const quotes = [
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
    { text: "In the end, it's not the years in your life that count. It's the life in your years.", author: "Abraham Lincoln" },
    { text: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
    { text: "Get busy living or get busy dying.", author: "Stephen King" },
    { text: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
    { text: "Many of life's failures are people who did not realize how close they were to success when they gave up.", author: "Thomas A. Edison" },
    { text: "If you want to live a happy life, tie it to a goal, not to people or things.", author: "Albert Einstein" }
];

export default function HomeScreen() {
    const [quote, setQuote] = useState(quotes[0]);
    const { theme } = useTheme();

    const generateQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[randomIndex]);
    };

    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            <SafeAreaView style={styles.contentContainer}>
                <View style={styles.header}>
                    <Text style={[styles.headerIcon, { color: theme.text }]}>💡</Text>
                    <Text style={[styles.headerTitle, { color: theme.text }]}>Daily Inspiration</Text>
                </View>

                <View style={styles.mainContent}>
                    <View style={[styles.quoteContainer, {
                        backgroundColor: theme.card,
                        borderColor: theme.border
                    }]}>
                        <Ionicons name="options-outline" size={24} color={theme.textSecondary} style={{ marginBottom: 15 }} />
                        <Text style={[styles.quoteText, { color: theme.text }]}>{quote.text}</Text>
                        <View style={[styles.divider, { backgroundColor: theme.border }]} />
                        <Text style={[styles.authorText, { color: theme.textSecondary }]}>{quote.author}</Text>
                    </View>
                </View>

                <TouchableOpacity
                    style={[styles.button, { backgroundColor: theme.text }]}
                    onPress={generateQuote}
                    activeOpacity={0.8}
                >
                    <Text style={[styles.buttonText, { color: theme.background }]}>New Quote</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
        justifyContent: 'space-between',
        paddingBottom: 30, // Add padding for bottom tab bar
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
    mainContent: {
        flex: 1,
        justifyContent: 'center',
    },
    quoteContainer: {
        width: '100%',
        borderRadius: 6, // Slightly rounded corners like Notion blocks
        padding: 20,
        borderWidth: 1,
    },
    quoteText: {
        fontSize: 20,
        fontWeight: '400', // Normal weight for clean look
        lineHeight: 30,
        marginBottom: 20,
        fontFamily: 'System', // Use system font (San Francisco on iOS)
    },
    divider: {
        height: 1,
        width: '100%',
        marginBottom: 15,
    },
    authorText: {
        fontSize: 15,
        fontWeight: '400',
        fontStyle: 'italic',
    },
    button: {
        width: '100%',
        paddingVertical: 14,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '600',
    },
});
