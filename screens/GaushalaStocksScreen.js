import React from 'react';
import {
    View, Text, StyleSheet, ScrollView, TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../constants/theme';

export default function GaushalaStocksScreen({ navigation }) {
    const stocks = [
        { label: 'Total Cows', value: '120' },
        { label: 'Calves', value: '35' },
        { label: 'Bulls', value: '18' },
        { label: 'Sick Animals', value: '4' },
        { label: 'Fodder Stock (kg)', value: '500' },
    ];

    return (
        <SafeAreaView style={styles.safe}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
                    <Text style={styles.backText}>← Back</Text>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Gaushala Stocks</Text>
            </View>

            <ScrollView contentContainerStyle={styles.content}>
                <View style={styles.card}>
                    {stocks.map((item, idx) => (
                        <View key={idx} style={styles.row}>
                            <Text style={styles.label}>{item.label}</Text>
                            <Text style={styles.value}>{item.value}</Text>
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
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 14,
        borderBottomWidth: 1,
        borderColor: '#f0f0f0',
    },
    label: { fontSize: 16, color: COLORS.text, fontWeight: '600' },
    value: { fontSize: 16, color: COLORS.primary, fontWeight: 'bold' },
});
