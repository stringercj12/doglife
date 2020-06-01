import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

import Login from './pages/Login';
import DetailsPost from './pages/Dashboard/DetailsPost';
import DashboardRoutes from './pages/Dashboard/dashboard.routes';

function StackScreen() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
        </Tab.Navigator>
    );
}


export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Dashboard" component={DashboardRoutes} options={{ headerShown: false }} />
            <Stack.Screen name="DetailsPost" component={DetailsPost} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}