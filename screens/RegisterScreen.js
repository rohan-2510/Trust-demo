import React, { useState } from 'react';
import {
    View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../constants/theme';

export default function RegisterScreen({ navigation }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');

    return (
        <SafeAreaView style={styles.safe}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={styles.flex}>
                <ScrollView contentContainerStyle={styles.container}>
                    <View style={styles.card}>
                        <Text style={styles.title}>Register</Text>
                        <Text style={styles.subtitle}>Create your account</Text>

                        <Text style={styles.label}>Full Name</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your full name"
                            placeholderTextColor="#aaa"
                            value={name}
                            onChangeText={setName}
                        />

                        <Text style={styles.label}>Email</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your email"
                            placeholderTextColor="#aaa"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            value={email}
                            onChangeText={setEmail}
                        />

                        <Text style={styles.label}>Password</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your password"
                            placeholderTextColor="#aaa"
                            secureTextEntry
                            value={password}
                            onChangeText={setPassword}
                        />

                        <Text style={styles.label}>Confirm Password</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Confirm your password"
                            placeholderTextColor="#aaa"
                            secureTextEntry
                            value={confirm}
                            onChangeText={setConfirm}
                        />

                        <TouchableOpacity style={styles.registerBtn}>
                            <Text style={styles.registerBtnText}>Create Account</Text>
                        </TouchableOpacity>

                        <View style={styles.loginRow}>
                            <Text style={styles.loginText}>Already have an account? </Text>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Text style={styles.loginLink}>Sign In</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safe: { flex: 1, backgroundColor: '#f0f8f0' },
    flex: { flex: 1 },
    container: { flex: 1, justifyContent: 'center', padding: 20 },
    card: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 28,
        borderWidth: 2,
        borderColor: '#5AC8FA',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: COLORS.text,
        textAlign: 'center',
        marginBottom: 4,
    },
    subtitle: {
        fontSize: 14,
        color: COLORS.darkGray,
        textAlign: 'center',
        marginBottom: 24,
    },
    label: { fontSize: 14, fontWeight: '600', color: COLORS.text, marginBottom: 6 },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        paddingHorizontal: 14,
        paddingVertical: 12,
        fontSize: 14,
        color: COLORS.text,
        marginBottom: 16,
        backgroundColor: '#fafafa',
    },
    registerBtn: {
        backgroundColor: COLORS.primary,
        borderRadius: 25,
        paddingVertical: 14,
        alignItems: 'center',
        marginTop: 8,
        marginBottom: 20,
    },
    registerBtnText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
    loginRow: { flexDirection: 'row', justifyContent: 'center' },
    loginText: { fontSize: 14, color: COLORS.darkGray },
    loginLink: {
        fontSize: 14,
        color: COLORS.primary,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
});
