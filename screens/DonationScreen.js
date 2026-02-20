import React, { useState } from 'react';
import {
    View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Linking,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../constants/theme';

const TABS = ['Regular', 'Seva', 'Hundi'];

const REGULAR_OPTIONS = ['Swipe', 'Online', 'QR'];
const SEVA_OPTIONS = [
    'Sampoorana Daasoha',
    'Daasoha Sewa Paayasa',
    'Sewa Ghee Sewa',
];

export default function DonationScreen() {
    const [activeTab, setActiveTab] = useState('Hundi');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    return (
        <SafeAreaView style={styles.safe}>

            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.pageTitle}>Donation</Text>

                {/* Tabs */}
                <View style={styles.tabRow}>
                    {TABS.map((tab) => (
                        <TouchableOpacity
                            key={tab}
                            style={[styles.tab, activeTab === tab && styles.activeTab]}
                            onPress={() => setActiveTab(tab)}
                        >
                            <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
                                {tab}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* Tab Content */}
                <View style={styles.tabContent}>
                    {activeTab === 'Regular' && (
                        <View>
                            {REGULAR_OPTIONS.map((opt) => (
                                <TouchableOpacity key={opt} style={styles.optionRow}>
                                    <Text style={styles.optionText}>{opt}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    )}
                    {activeTab === 'Seva' && (
                        <View>
                            {SEVA_OPTIONS.map((opt) => (
                                <TouchableOpacity key={opt} style={styles.optionRow}>
                                    <Text style={styles.optionText}>{opt}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    )}
                    {activeTab === 'Hundi' && (
                        <View style={styles.hundiBox}>
                            <Text style={styles.hundiText}>🪙 Hundi (Drop Donation)</Text>
                            <Text style={styles.hundiSubText}>
                                Please visit the temple hundi box to make a drop donation. All donations are used
                                for the welfare of the trust.
                            </Text>
                        </View>
                    )}
                </View>

                {/* Get In Touch */}
                <View style={styles.touchSection}>
                    <Text style={styles.touchTitle}>Get In Touch</Text>
                    <Text style={styles.touchSubtitle}>
                        Please fill out the form below to send us an email and we will get back to you as soon
                        as possible.
                    </Text>

                    <View style={styles.formContact}>
                        {/* Contact Form */}
                        <View style={styles.formLeft}>
                            <TextInput
                                style={styles.input}
                                placeholder="Your Email"
                                placeholderTextColor="#aaa"
                                value={email}
                                onChangeText={setEmail}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Your Password"
                                placeholderTextColor="#aaa"
                                secureTextEntry
                                value={password}
                                onChangeText={setPassword}
                            />
                            <TextInput
                                style={[styles.input, styles.textarea]}
                                placeholder="Your Message"
                                placeholderTextColor="#aaa"
                                multiline
                                numberOfLines={4}
                                value={message}
                                onChangeText={setMessage}
                            />
                            <TouchableOpacity style={styles.sendBtn}>
                                <Text style={styles.sendBtnText}>Send Message</Text>
                            </TouchableOpacity>
                        </View>

                        {/* Contact Info */}
                        <View style={styles.contactInfo}>
                            <Text style={styles.contactInfoTitle}>Contact Info</Text>
                            <Text style={styles.contactLabel}>Address</Text>
                            <Text style={styles.contactText}>
                                Sri Revanasiddeshwara Swamy{'\n'}
                                Kshethra Abhivrudhi Seva Trust (R){'\n'}
                                Awerahalli Post, Kailancha Hobli.{'\n'}
                                Ramanagara Taluk, Dist : 571 511.{'\n'}
                                Karnataka, India
                            </Text>
                            <Text style={styles.contactLabel}>Phone</Text>
                            <TouchableOpacity onPress={() => Linking.openURL('tel:+919900147897')}>
                                <Text style={[styles.contactText, styles.link]}>+91 9900147897</Text>
                            </TouchableOpacity>
                            <Text style={styles.contactLabel}>Email</Text>
                            <TouchableOpacity onPress={() => Linking.openURL('mailto:revanasiddeshwaratrust@gmail.com')}>
                                <Text style={[styles.contactText, styles.link]}>
                                    revanasiddeshwaratrust@gmail.com
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safe: { flex: 1, backgroundColor: '#fff' },
    navBar: {
        backgroundColor: '#F5F5F5',
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingVertical: 10,
        paddingHorizontal: 6,
        borderBottomWidth: 1,
        borderColor: '#ddd',
        gap: 6,
    },
    navItem: { fontSize: 11, color: COLORS.text, paddingHorizontal: 6, fontWeight: '500' },
    content: { paddingBottom: 40 },
    pageTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
        color: COLORS.text,
    },
    tabRow: {
        flexDirection: 'row',
        marginHorizontal: 16,
        marginBottom: 16,
        borderRadius: 8,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#ccc',
    },
    tab: {
        flex: 1,
        paddingVertical: 12,
        alignItems: 'center',
        backgroundColor: '#F0F0F0',
    },
    activeTab: { backgroundColor: COLORS.primary },
    tabText: { fontSize: 15, fontWeight: '600', color: COLORS.text },
    activeTabText: { color: '#fff' },
    tabContent: {
        marginHorizontal: 16,
        backgroundColor: '#F8F8F8',
        borderRadius: 8,
        padding: 14,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#eee',
    },
    optionRow: {
        paddingVertical: 14,
        borderBottomWidth: 1,
        borderColor: '#e0e0e0',
    },
    optionText: { fontSize: 15, color: COLORS.text },
    hundiBox: { alignItems: 'center', paddingVertical: 16 },
    hundiText: { fontSize: 18, fontWeight: 'bold', color: COLORS.text, marginBottom: 10 },
    hundiSubText: { fontSize: 14, color: COLORS.darkGray, textAlign: 'center', lineHeight: 22 },
    touchSection: {
        backgroundColor: COLORS.primary,
        paddingHorizontal: 16,
        paddingVertical: 24,
    },
    touchTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginBottom: 8,
    },
    touchSubtitle: {
        fontSize: 13,
        color: '#e8ffe8',
        textAlign: 'center',
        marginBottom: 20,
        lineHeight: 20,
    },
    formContact: { flexDirection: 'column' },
    formLeft: { marginBottom: 20 },
    input: {
        backgroundColor: '#fff',
        borderRadius: 6,
        paddingHorizontal: 12,
        paddingVertical: 10,
        marginBottom: 12,
        fontSize: 14,
        color: COLORS.text,
    },
    textarea: { height: 90, textAlignVertical: 'top' },
    sendBtn: {
        backgroundColor: '#fff',
        borderRadius: 6,
        paddingVertical: 12,
        alignItems: 'center',
    },
    sendBtnText: { color: COLORS.primary, fontWeight: 'bold', fontSize: 14 },
    contactInfo: { backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: 8, padding: 14 },
    contactInfoTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 10,
    },
    contactLabel: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#c8ffc8',
        marginTop: 10,
        marginBottom: 2,
    },
    contactText: { fontSize: 13, color: '#fff', lineHeight: 20 },
    link: { textDecorationLine: 'underline', color: '#e8ffe8' },
});
