import React from 'react';
import {
    View, Text, StyleSheet, ScrollView, TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import StatCard from '../components/StatCard';
import { COLORS } from '../constants/theme';

export default function KitchenScreen() {
    return (
        <SafeAreaView style={styles.safe}>
            <View style={styles.header}>
                <Text style={styles.title}>KITCHEN</Text>
                <TouchableOpacity style={styles.adminBadge}>
                    <Text style={styles.adminText}>ADMIN</Text>
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={styles.content}>
                <View style={styles.row}>
                    <StatCard label="Total Income" value="12000.00 RS" />
                    <StatCard label="Today's Income" value="100" />
                </View>
                <View style={styles.row}>
                    <StatCard label="Total Expense" value="12000.00 RS" />
                    <StatCard label="Today's Expense" value="100" />
                </View>
                <View style={styles.row}>
                    <StatCard label="Monthly Income" value="100" />
                    <StatCard label="Monthly Expense" value="100" />
                </View>

                <View style={styles.infoBox}>
                    <Text style={styles.infoTitle}>Kitchen Details</Text>
                    <View style={styles.infoRow}>
                        <Text style={styles.infoLabel}>Meals Served Today</Text>
                        <Text style={styles.infoValue}>350</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={styles.infoLabel}>Total Staff</Text>
                        <Text style={styles.infoValue}>12</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={styles.infoLabel}>Food Stock (kg)</Text>
                        <Text style={styles.infoValue}>240</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={styles.infoLabel}>Gas Cylinders</Text>
                        <Text style={styles.infoValue}>8</Text>
                    </View>
                </View>

                <View style={styles.buttonRow}>
                    <TouchableOpacity style={styles.greenBtn}>
                        <Text style={styles.greenBtnText}>View Detailed</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.greenBtn}>
                        <Text style={styles.greenBtnText}>Reports</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safe: { flex: 1, backgroundColor: '#fff' },
    header: {
        backgroundColor: COLORS.primary,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 16,
        paddingHorizontal: 16,
    },
    title: { fontSize: 20, fontWeight: 'bold', color: '#fff', flex: 1, textAlign: 'center' },
    adminBadge: {
        position: 'absolute',
        right: 16,
        backgroundColor: '#fff',
        borderRadius: 20,
        paddingVertical: 4,
        paddingHorizontal: 14,
    },
    adminText: { color: COLORS.primary, fontWeight: 'bold', fontSize: 12 },
    content: { padding: 10, paddingBottom: 30 },
    row: { flexDirection: 'row', marginBottom: 2 },
    infoBox: {
        backgroundColor: '#F8F8F8',
        borderRadius: 10,
        padding: 16,
        marginTop: 16,
        borderWidth: 1,
        borderColor: '#eee',
    },
    infoTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: COLORS.darkGray,
        marginBottom: 12,
        textTransform: 'uppercase',
        letterSpacing: 0.5,
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderColor: '#eee',
    },
    infoLabel: { fontSize: 15, color: COLORS.text },
    infoValue: { fontSize: 15, fontWeight: 'bold', color: COLORS.primary },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 24,
    },
    greenBtn: {
        backgroundColor: COLORS.primary,
        borderRadius: 25,
        paddingVertical: 12,
        paddingHorizontal: 28,
    },
    greenBtnText: { color: '#fff', fontWeight: 'bold', fontSize: 14 },
});
