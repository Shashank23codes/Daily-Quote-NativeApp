import React, { useState } from 'react';
import { StyleSheet, Text, View, Switch, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../context/ThemeContext';

export default function SettingsScreen() {
    const { theme, isDarkMode, toggleTheme } = useTheme();
    const [notificationsEnabled, setNotificationsEnabled] = useState(true);

    const SettingItem = ({ icon, title, value, onToggle, type = 'switch' }) => (
        <View style={[styles.settingItem, { borderBottomColor: theme.border }]}>
            <View style={styles.leftContent}>
                <View style={[styles.iconContainer, { backgroundColor: theme.card }]}>
                    <Ionicons name={icon} size={20} color={theme.text} />
                </View>
                <Text style={[styles.settingText, { color: theme.text }]}>{title}</Text>
            </View>
            {type === 'switch' ? (
                <Switch
                    trackColor={{ false: theme.border, true: "#2EAADC" }}
                    thumbColor={value ? "#fff" : "#f4f3f4"}
                    ios_backgroundColor={theme.border}
                    onValueChange={onToggle}
                    value={value}
                />
            ) : (
                <Ionicons name="chevron-forward" size={18} color={theme.textSecondary} />
            )}
        </View>
    );

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
            <View style={styles.header}>
                <Text style={[styles.headerIcon, { color: theme.text }]}>⚙️</Text>
                <Text style={[styles.headerTitle, { color: theme.text }]}>Settings</Text>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.section}>
                    <Text style={[styles.sectionHeader, { color: theme.textSecondary }]}>PREFERENCES</Text>
                    <SettingItem
                        icon={isDarkMode ? "moon" : "sunny"}
                        title={isDarkMode ? "Dark Mode" : "Light Mode"}
                        value={isDarkMode}
                        onToggle={toggleTheme}
                    />
                    <SettingItem
                        icon="notifications-outline"
                        title="Daily Notifications"
                        value={notificationsEnabled}
                        onToggle={() => setNotificationsEnabled(prev => !prev)}
                    />
                </View>

                <View style={styles.section}>
                    <Text style={[styles.sectionHeader, { color: theme.textSecondary }]}>ABOUT</Text>
                    <TouchableOpacity>
                        <SettingItem icon="star-outline" title="Rate App" type="link" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <SettingItem icon="mail-outline" title="Contact Support" type="link" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <SettingItem icon="information-circle-outline" title="Terms of Service" type="link" />
                    </TouchableOpacity>
                </View>

                <Text style={[styles.versionText, { color: theme.textSecondary }]}>Version 1.0.0</Text>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 20,
        marginBottom: 10,
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
    scrollContent: {
        paddingHorizontal: 20,
        paddingBottom: 30,
    },
    section: {
        marginTop: 24,
    },
    sectionHeader: {
        fontSize: 12,
        fontWeight: '600',
        marginBottom: 8,
        marginLeft: 4,
        letterSpacing: 0.5,
        textTransform: 'uppercase',
    },
    settingItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 4,
        borderBottomWidth: 1,
    },
    leftContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconContainer: {
        width: 32,
        height: 32,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12,
    },
    settingText: {
        fontSize: 15,
        fontWeight: '500',
    },
    versionText: {
        textAlign: 'center',
        marginTop: 30,
        fontSize: 12,
    },
});
