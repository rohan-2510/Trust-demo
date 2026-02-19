import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Screens
import DashboardScreen from './screens/DashboardScreen';
import GaushalaScreen from './screens/GaushalaScreen';
import GaushalaExpensesScreen from './screens/GaushalaExpensesScreen';
import GaushalaStaffScreen from './screens/GaushalaStaffScreen';
import GaushalaIncomeScreen from './screens/GaushalaIncomeScreen';
import GaushalaStocksScreen from './screens/GaushalaStocksScreen';
import KitchenScreen from './screens/KitchenScreen';
import RoomsScreen from './screens/RoomsScreen';
import RoomsCustomersScreen from './screens/RoomsCustomersScreen';
import DonationScreen from './screens/DonationScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const PRIMARY = '#2ECC40';

function GaushalaStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="GaushalaMain" component={GaushalaScreen} />
      <Stack.Screen name="GaushalaExpenses" component={GaushalaExpensesScreen} />
      <Stack.Screen name="GaushalaStaff" component={GaushalaStaffScreen} />
      <Stack.Screen name="GaushalaIncome" component={GaushalaIncomeScreen} />
      <Stack.Screen name="GaushalaStocks" component={GaushalaStocksScreen} />
    </Stack.Navigator>
  );
}

function RoomsStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="RoomsMain" component={RoomsScreen} />
      <Stack.Screen name="RoomsCustomers" component={RoomsCustomersScreen} />
    </Stack.Navigator>
  );
}

function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="light" backgroundColor={PRIMARY} />
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarActiveTintColor: PRIMARY,
            tabBarInactiveTintColor: '#888',
            tabBarStyle: {
              backgroundColor: '#fff',
              borderTopColor: '#ddd',
              height: 60,
              paddingBottom: 8,
              paddingTop: 4,
            },
            tabBarLabelStyle: { fontSize: 11, fontWeight: '600' },
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Dashboard') iconName = focused ? 'grid' : 'grid-outline';
              else if (route.name === 'Gaushala') iconName = focused ? 'leaf' : 'leaf-outline';
              else if (route.name === 'Kitchen') iconName = focused ? 'restaurant' : 'restaurant-outline';
              else if (route.name === 'Rooms') iconName = focused ? 'bed' : 'bed-outline';
              else if (route.name === 'Donation') iconName = focused ? 'heart' : 'heart-outline';
              else if (route.name === 'Account') iconName = focused ? 'person' : 'person-outline';
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
        >
          <Tab.Screen name="Dashboard" component={DashboardScreen} />
          <Tab.Screen name="Gaushala" component={GaushalaStack} />
          <Tab.Screen name="Kitchen" component={KitchenScreen} />
          <Tab.Screen name="Rooms" component={RoomsStack} />
          <Tab.Screen name="Donation" component={DonationScreen} />
          <Tab.Screen name="Account" component={AuthStack} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
