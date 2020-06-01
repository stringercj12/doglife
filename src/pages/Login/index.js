import React from 'react';
import { TouchableOpacity } from 'react-native';

import {
    Container,
    ContainerForm,
    Input,
    Actions,
    Logo,
    MiniLogo,
    Action,
    ActionFacebook,
    ActionLabel,
    ActionIcon,
    Footer,
    FooterText,
    BoldOrange,
} from './styles';

import logo from './../../assets/logo.png';
import ImgOsso from './../../assets/osso.png';
import logoDoglife from './../../assets/doglife.png';
import ImgFacebook from './../../assets/facebook.png';

import { useNavigation } from '@react-navigation/native';;

export default function Login() {
    const navigation = useNavigation();

    function navigateToLogin() {
        navigation.navigate("Dashboard");
    }


    return (
        <Container>
            <Logo source={logo} />
            <MiniLogo source={logoDoglife} />

            <ContainerForm>
                <Input placeholder="Username" />
                <Input placeholder="Senha" />

                <Actions>

                    <TouchableOpacity onPress={navigateToLogin}>
                        <Action colors={['#F92B7F', '#F58524']} start={[0.8, 1]}>
                            <ActionLabel>
                                Login
                        </ActionLabel>
                            <ActionIcon source={ImgOsso} />
                        </Action>
                    </TouchableOpacity>

                    <ActionFacebook>
                        <ActionLabel>
                            Login with Facebook
                        </ActionLabel>
                        <ActionIcon source={ImgFacebook} />
                    </ActionFacebook>

                </Actions>
            </ContainerForm>

            <Footer>
                <FooterText>You don't have any account? <BoldOrange>Register</BoldOrange></FooterText>
            </Footer>
        </Container>
    );
}

