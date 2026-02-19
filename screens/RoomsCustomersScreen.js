import React from 'react';
import {
    View, Text, StyleSheet, ScrollView, TouchableOpacity, Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../constants/theme';

const ROOMS = [
    { id: '101', type: 'Single Room', price: '₹500/night', status: 'Available' },
    { id: '102', type: 'Double Room', price: '₹800/night', status: 'Booked' },
    { id: '103', type: 'Dormitory', price: '₹200/night', status: 'Available' },
    { id: '104', type: 'Suite', price: '₹1200/night', status: 'Available' },
    { id: '105', type: 'Single Room', price: '₹500/night', status: 'Booked' },
];

export default function RoomsCustomersScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.safe}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
                    <Text style={styles.backText}>← Back</Text>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>ROOMS</Text>
            </View>

            <ScrollView contentContainerStyle={styles.content}>
                {ROOMS.map((room) => (
                    <View key={room.id} style={styles.roomCard}>
                        {/* Placeholder for room image */}
                        <View style={styles.roomImagePlaceholder}>
                            <Text style={styles.roomImageText}>🏠  Room {room.id}</Text>
                        </View>

                        <View style={styles.roomInfo}>
                            <Text style={styles.roomType}>{room.type}</Text>
                            <Text style={styles.roomPrice}>{room.price}</Text>
                            <View style={[
                                styles.statusBadge,
                                { backgroundColor: room.status === 'Available' ? COLORS.primary : '#999' }
                            ]}>
                                <Text style={styles.statusText}>{room.status}</Text>
                            </View>
                        </View>

                        {room.status === 'Available' && (
                            <TouchableOpacity style={styles.bookBtn}>
                                <Text style={styles.bookBtnText}>BOOK ROOM</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                ))}
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
    content: { padding: 16, paddingBottom: 30 },
    roomCard: {
        backgroundColor: '#fff',
        borderRadius: 12,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOpacity: 0.07,
        shadowRadius: 4,
        elevation: 3,
        overflow: 'hidden',
    },
    roomImagePlaceholder: {
        backgroundColor: '#F0F0F0',
        height: 130,
        alignItems: 'center',
        justifyContent: 'center',
    },
    roomImageText: { fontSize: 20, color: '#888' },
    roomInfo: {
        padding: 14,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    roomType: { fontSize: 15, fontWeight: 'bold', color: COLORS.text, flex: 1 },
    roomPrice: { fontSize: 14, color: COLORS.darkGray, marginRight: 10 },
    statusBadge: {
        borderRadius: 12,
        paddingVertical: 3,
        paddingHorizontal: 10,
    },
    statusText: { color: '#fff', fontSize: 12, fontWeight: 'bold' },
    bookBtn: {
        backgroundColor: COLORS.primary,
        marginHorizontal: 14,
        marginBottom: 14,
        paddingVertical: 12,
        borderRadius: 25,
        alignItems: 'center',
    },
    bookBtnText: { color: '#fff', fontWeight: 'bold', fontSize: 14, letterSpacing: 0.5 },
});
