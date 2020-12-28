import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

import Login from './pages/Login';
import DetailsPost from './pages/Dashboard/DetailsPost';
import EditPost from './pages/Dashboard/EditPost';
import EditProfile from './pages/Dashboard/EditProfile';
import DetailsProfile from './pages/Dashboard/DetailsProfile';
import ChangePassword from './pages/Dashboard/ChangePassword';
import Language from './pages/Dashboard/Language';
import DashboardRoutes from './pages/Dashboard/dashboard.routes';
import PostCamera from './components/PostCamera';

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
            <Stack.Screen name="Camera" component={PostCamera} options={{ headerShown: false }} />
            <Stack.Screen name="DetailsPost" component={DetailsPost} options={{ headerShown: false }} />
            <Stack.Screen name="EditPost" component={EditPost} options={{ headerShown: false }} />
            <Stack.Screen name="EditProfile" component={EditProfile} options={{ headerShown: false }} />
            <Stack.Screen name="DetailsProfile" component={DetailsProfile} options={{ headerShown: false }} />
            <Stack.Screen name="ChangePassword" component={ChangePassword} options={{ headerShown: false }} />
            <Stack.Screen name="Language" component={Language} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}