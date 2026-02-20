import React from 'react';
import {
    View, Text, StyleSheet, ScrollView, TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../constants/theme';

export default function GaushalaScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.safe}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>GAUSHALA</Text>
            </View>

            <ScrollView contentContainerStyle={styles.content}>
                <View style={styles.statsBox}>
                    <Text style={styles.statLine}>TOTAL INCOME = 100000</Text>
                    <View style={styles.divider} />
                    <Text style={styles.statLine}>TOTAL EXPENCE = 70000</Text>
                </View>

                <View style={styles.actionGrid}>
                    <TouchableOpacity
                        style={styles.actionBtn}
                        onPress={() => navigation.navigate('GaushalaStocks')}
                    >
                        <Text style={styles.actionBtnText}>STOCKS</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.actionBtn}
                        onPress={() => navigation.navigate('GaushalaExpenses')}
                    >
                        <Text style={styles.actionBtnText}>EXPENSES</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.actionBtn}
                        onPress={() => navigation.navigate('GaushalaStaff')}
                    >
                        <Text style={styles.actionBtnText}>STAFF</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.actionBtn}
                        onPress={() => navigation.navigate('GaushalaIncome')}
                    >
                        <Text style={styles.actionBtnText}>INCOME</Text>
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
    statsBox: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        marginBottom: 24,
        borderWidth: 1,
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOpacity: 0.06,
        shadowRadius: 4,
        elevation: 2,
    },
    statLine: {
        fontSize: 16,
        color: COLORS.text,
        fontWeight: '600',
        paddingVertical: 8,
    },
    divider: { height: 1, backgroundColor: '#eee', marginVertical: 4 },
    actionGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        gap: 12,
    },
    actionBtn: {
        backgroundColor: COLORS.primary,
        borderRadius: 25,
        paddingVertical: 12,
        paddingHorizontal: 24,
        marginBottom: 4,
    },
    actionBtnText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 14,
        letterSpacing: 0.5,
    },
});
