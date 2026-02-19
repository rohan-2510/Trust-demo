import React from 'react';
import {
    View, Text, StyleSheet, ScrollView, TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import StatCard from '../components/StatCard';
import { COLORS } from '../constants/theme';

export default function DashboardScreen() {
    return (
        <SafeAreaView style={styles.safe}>
            <View style={styles.header}>
                <Text style={styles.title}>DASHBOARD</Text>
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

                {/* Sub-dashboards */}
                <Text style={styles.sectionTitle}>SECTION DASHBOARDS</Text>

                <View style={styles.subCard}>
                    <Text style={styles.subCardTitle}>DASHBOARD GAUSHALA</Text>
                    <View style={styles.row}>
                        <StatCard label="Total Income" value="12000.00 RS" small />
                        <StatCard label="Today's Income" value="100" small />
                    </View>
                    <View style={styles.row}>
                        <StatCard label="Total Expense" value="12000.00 RS" small />
                        <StatCard label="Today's Expense" value="100" small />
                    </View>
                    <View style={styles.row}>
                        <StatCard label="Monthly Income" value="100" small />
                        <StatCard label="Monthly Expense" value="100" small />
                    </View>
                    <View style={styles.buttonRow}>
                        <TouchableOpacity style={styles.greenBtn}>
                            <Text style={styles.greenBtnText}>View Detailed</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.greenBtn}>
                            <Text style={styles.greenBtnText}>Reports</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.subCard}>
                    <Text style={styles.subCardTitle}>DASHBOARD KITCHEN</Text>
                    <View style={styles.row}>
                        <StatCard label="Total Income" value="12000.00 RS" small />
                        <StatCard label="Today's Income" value="100" small />
                    </View>
                    <View style={styles.row}>
                        <StatCard label="Total Expense" value="12000.00 RS" small />
                        <StatCard label="Today's Expense" value="100" small />
                    </View>
                    <View style={styles.row}>
                        <StatCard label="Monthly Income" value="100" small />
                        <StatCard label="Monthly Expense" value="100" small />
                    </View>
                    <View style={styles.buttonRow}>
                        <TouchableOpacity style={styles.greenBtn}>
                            <Text style={styles.greenBtnText}>View Detailed</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.greenBtn}>
                            <Text style={styles.greenBtnText}>Reports</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.subCard}>
                    <Text style={styles.subCardTitle}>DASHBOARD ROOMS</Text>
                    <View style={styles.row}>
                        <StatCard label="Total Income" value="12000.00 RS" small />
                        <StatCard label="Today's Income" value="100" small />
                    </View>
                    <View style={styles.row}>
                        <StatCard label="Total Expense" value="12000.00 RS" small />
                        <StatCard label="Today's Expense" value="100" small />
                    </View>
                    <View style={styles.row}>
                        <StatCard label="Monthly Income" value="100" small />
                        <StatCard label="Monthly Expense" value="100" small />
                    </View>
                    <View style={styles.buttonRow}>
                        <TouchableOpacity style={styles.greenBtn}>
                            <Text style={styles.greenBtnText}>View Detailed</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.greenBtn}>
                            <Text style={styles.greenBtnText}>Reports</Text>
                        </TouchableOpacity>
                    </View>
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
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
        flex: 1,
        textAlign: 'center',
    },
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
    sectionTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: COLORS.darkGray,
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 8,
        letterSpacing: 1,
    },
    subCard: {
        backgroundColor: '#F8F8F8',
        borderRadius: 12,
        padding: 10,
        marginVertical: 8,
        borderWidth: 1,
        borderColor: '#eee',
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
    },
    subCardTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        color: COLORS.text,
        marginBottom: 8,
        letterSpacing: 0.5,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
        paddingBottom: 4,
    },
    greenBtn: {
        backgroundColor: COLORS.primary,
        borderRadius: 25,
        paddingVertical: 10,
        paddingHorizontal: 24,
    },
    greenBtnText: { color: '#fff', fontWeight: 'bold', fontSize: 14 },
});
