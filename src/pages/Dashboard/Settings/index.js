import React from "react";
import { View, Text } from "react-native";
import { Feather } from '@expo/vector-icons';
import { Container, Header, HeaderText, List, ListItem, ListItemText, Title } from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function Settings() {
    const navigation = useNavigation();
    return (
        <Container>
            <Header>
                <HeaderText>Settings</HeaderText>
            </Header>

            <Title>
                Account
            </Title>

            <List>
                <ListItem onPress={() => navigation.navigate('EditProfile')}>
                    <ListItemText>Edit Profile</ListItemText>
                    <Feather name="chevron-right" size={22} color="#3B3B3B" />
                </ListItem>
                <ListItem onPress={() => navigation.navigate('ChangePassword')}>
                    <ListItemText>Change Password</ListItemText>
                    <Feather name="chevron-right" size={22} color="#3B3B3B" />
                </ListItem>
                <ListItem onPress={() => navigation.navigate('Language')}>
                    <ListItemText>Language</ListItemText>
                    <Feather name="chevron-right" size={22} color="#3B3B3B" />
                </ListItem>
            </List>

            <Title>
                Account
            </Title>

            <List>
                <ListItem>
                    <ListItemText>Privacy policy</ListItemText>
                    <Feather name="chevron-right" size={22} color="#3B3B3B" />
                </ListItem>
                <ListItem>
                    <ListItemText>Contact Us</ListItemText>
                    <Feather name="chevron-right" size={22} color="#3B3B3B" />
                </ListItem>
                <ListItem>
                    <ListItemText>About App</ListItemText>
                    <Feather name="chevron-right" size={22} color="#3B3B3B" />
                </ListItem>
                <ListItem>
                    <ListItemText bold>Login</ListItemText>
                    <Feather name="chevron-right" size={22} color="#3B3B3B" />
                </ListItem>
            </List>

        </Container>
    );
}
