import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, FontAwesome, AntDesign, Ionicons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

import Home from "./Home";
import News from "./News";
import AddPost from "./AddPost";
import DetailsPost from "./DetailsPost";
import Notification from "./Notification";
import Settings from "./Settings";
import PlusButton from './../../components/PlusButton';

const icons = {
    Home: {
        lib: MaterialCommunityIcons,
        name: 'dog'
    },
    News: {
        lib: FontAwesome,
        name: 'newspaper-o'
    },
    Notification: {
        lib: Ionicons,
        name: 'ios-notifications-outline'
    },
    Settings: {
        lib: AntDesign,
        name: "setting"
    }
};


export default function DashboardRoutes() {
    return (
        <>
            <Tab.Navigator
                screenOptions={({ route, navigation }) => ({
                    tabBarIcon: ({ color, size, focused }) => {
                        if (route.name === 'AddPost') {
                            return (
                                <PlusButton
                                    focused={focused}
                                    onPress={() => navigation.navigate('AddPost')}
                                />
                            );
                        }
                        const { lib: Icon, name } = icons[route.name];
                        return (<Icon name={name} size={size} color={color} />);
                    }
                })}
                tabBarOptions={{
                    styles: {
                        backgroundColor: '#fff',
                        borderTopColor: 'rbga(255,255,255,0.2'
                    },
                    activeTintColor: 'rgba(245,133,36,0.8)',
                    inactiveTintColor: 'rgba(59,59,59,0.3)',
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={Home}
                />
                <Tab.Screen
                    name="News"
                    component={News}
                />
                <Tab.Screen name="AddPost"
                    component={AddPost} options={{
                        title: ''
                    }} />
                <Tab.Screen
                    name="Notification"
                    component={Notification}
                />
                <Tab.Screen
                    name="Settings"
                    component={Settings}
                />
            </Tab.Navigator>

        </>
    );
}
