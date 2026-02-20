import React from 'react';
import {
    View, Text, StyleSheet, ScrollView, TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../constants/theme';

const staffList = [
    'Ramesh Kumar',
    'Suresh Naik',
    'Mahesh Patil',
    'Ganesh Reddy',
    'Sunil Sharma',
];

export default function GaushalaStaffScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.safe}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
                    <Text style={styles.backText}>← Back</Text>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Gaushala Staff</Text>
            </View>

            <ScrollView contentContainerStyle={styles.content}>
                <View style={styles.card}>
                    <Text style={styles.sectionLabel}>NAMES</Text>
                    {staffList.map((name, idx) => (
                        <View key={idx} style={styles.staffRow}>
                            <View style={styles.avatar}>
                                <Text style={styles.avatarText}>{name[0]}</Text>
                            </View>
                            <Text style={styles.staffName}>{name}</Text>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safe: { flex: 1, backgroundColor: '#fff' },
    header: {
        backgroundColor: COLORS.primary,
        paddingVertical: 18,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
    },
    backBtn: { marginRight: 10 },
    backText: { color: '#fff', fontSize: 16, fontWeight: '600' },
    headerTitle: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        flex: 1,
        textAlign: 'center',
        marginRight: 40,
        letterSpacing: 1,
    },
    content: { padding: 20 },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        borderWidth: 1,
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOpacity: 0.06,
        shadowRadius: 4,
        elevation: 2,
    },
    sectionLabel: {
        fontSize: 13,
        fontWeight: 'bold',
        color: COLORS.darkGray,
        textTransform: 'uppercase',
        letterSpacing: 1,
        marginBottom: 16,
    },
    staffRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderColor: '#f0f0f0',
    },
    avatar: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: COLORS.primary,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 14,
    },
    avatarText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
    staffName: { fontSize: 16, color: COLORS.text, fontWeight: '500' },
});
