import React, { useState } from 'react';
import {
    View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../constants/theme';

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <SafeAreaView style={styles.safe}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={styles.flex}>
                <ScrollView contentContainerStyle={styles.container}>
                    <View style={styles.card}>
                        <Text style={styles.title}>User Login</Text>
                        <Text style={styles.welcome}>Welcome</Text>
                        <Text style={styles.subtitle}>Sign in your account</Text>

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

                        <TouchableOpacity style={styles.signInBtn}>
                            <Text style={styles.signInText}>Sign In</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.forgotBtn}>
                            <Text style={styles.forgotText}>Forgot Password?</Text>
                        </TouchableOpacity>

                        <View style={styles.registerRow}>
                            <Text style={styles.noAccountText}>{"Don't have an account?? "}</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                                <Text style={styles.registerLink}>Register</Text>
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
    welcome: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: COLORS.text,
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
    signInBtn: {
        backgroundColor: COLORS.primary,
        borderRadius: 25,
        paddingVertical: 14,
        alignItems: 'center',
        marginTop: 8,
        marginBottom: 20,
    },
    signInText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
    forgotBtn: { alignItems: 'center', marginBottom: 12 },
    forgotText: { color: COLORS.darkGray, fontSize: 14, textDecorationLine: 'underline' },
    registerRow: { flexDirection: 'row', justifyContent: 'center' },
    noAccountText: { fontSize: 14, color: '#5AC8FA' },
    registerLink: {
        fontSize: 14,
        color: '#5AC8FA',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
});
