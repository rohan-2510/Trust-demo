import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../constants/theme';

export default function StatCard({ label, value, small }) {
    return (
        <View style={[styles.card, small && styles.smallCard]}>
            <Text style={styles.label}>{label}</Text>
            <Text style={[styles.value, small && styles.smallValue]}>{value}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        backgroundColor: COLORS.lightGray,
        borderRadius: 8,
        padding: 14,
        margin: 6,
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 90,
        shadowColor: '#000',
        shadowOpacity: 0.08,
        shadowRadius: 4,
        elevation: 2,
    },
    smallCard: {
        minHeight: 75,
    },
    label: {
        fontSize: 11,
        color: COLORS.darkGray,
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 6,
        textTransform: 'uppercase',
        letterSpacing: 0.4,
    },
    value: {
        fontSize: 22,
        fontWeight: 'bold',
        color: COLORS.text,
    },
    smallValue: {
        fontSize: 18,
    },
});
