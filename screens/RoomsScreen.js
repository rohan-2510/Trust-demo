import React from 'react';
import {
    View, Text, StyleSheet, ScrollView, TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../constants/theme';

export default function RoomsScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.safe}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>ROOMS</Text>
            </View>

            <ScrollView contentContainerStyle={styles.content}>
                {/* Stats Card */}
                <View style={styles.statsCard}>
                    <View style={styles.statRow}>
                        <Text style={styles.statLabel}>TOTAL INCOME</Text>
                        <Text style={styles.statValue}>XXXX</Text>
                    </View>
                    <View style={styles.divider} />
                    <View style={styles.statRow}>
                        <Text style={styles.statLabel}>TOTAL EXPENSE</Text>
                        <Text style={styles.statValue}>XXXX</Text>
                    </View>
                    <View style={styles.divider} />
                    <View style={styles.statRow}>
                        <Text style={styles.statLabel}>ROOMS BOOKED</Text>
                        <Text style={[styles.statValue, { color: COLORS.primary }]}>8</Text>
                    </View>
                    <View style={styles.divider} />
                    <View style={styles.statRow}>
                        <Text style={styles.statLabel}>ROOMS AVAILABLE</Text>
                        <Text style={[styles.statValue, { color: COLORS.primary }]}>12</Text>
                    </View>
                    <View style={styles.divider} />
                    <View style={styles.statRow}>
                        <Text style={styles.statLabel}>STAFF</Text>
                        <Text style={[styles.statValue, { color: COLORS.primary }]}>5</Text>
                    </View>
                </View>

                <TouchableOpacity
                    style={styles.customersBtn}
                    onPress={() => navigation.navigate('RoomsCustomers')}
                >
                    <Text style={styles.customersBtnText}>VIEW ROOMS / BOOK ROOM</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safe: { flex: 1, backgroundColor: '#fff' },
    header: {
        backgroundColor: COLORS.primary,
        paddingVertical: 18,
        alignItems: 'center',
    },
    headerTitle: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
        letterSpacing: 2,
    },
    content: { padding: 20 },
    statsCard: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        borderWidth: 1,
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOpacity: 0.06,
        shadowRadius: 4,
        elevation: 2,
        marginBottom: 24,
    },
    statRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
    },
    statLabel: { fontSize: 15, color: COLORS.text, fontWeight: '600' },
    statValue: { fontSize: 15, color: COLORS.darkGray, fontWeight: '600' },
    divider: { height: 1, backgroundColor: '#f0f0f0' },
    customersBtn: {
        backgroundColor: COLORS.primary,
        borderRadius: 10,
        paddingVertical: 14,
        alignItems: 'center',
    },
    customersBtnText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15,
        letterSpacing: 0.5,
    },
});
