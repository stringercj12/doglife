import React, { useState } from 'react';
import { View } from 'react-native';

import { Container, Header, HeaderText, ContainerForm, Input, Back, ButtonGradient, ButtonText } from "./styles";
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Profile = () => {
    const [updated, setUpdated] = useState(false);
    const navigation = useNavigation();


    function navigateToBack() {
        navigation.goBack();
    }

    function handleUpdate() {
        setUpdated(true);

        setTimeout(() => {
            setUpdated(false)
        }, 2000)
    }

    return (
        <Container>
            <Header>
                <Back onPress={navigateToBack}>
                    <Feather name="arrow-left" size={30} color="#3B3B3B" />
                </Back>
                <HeaderText>Edit Profile</HeaderText>
            </Header>


            <ContainerForm>
                <Input placeholder="Name" />
                <Input placeholder="Email" />
                <Input placeholder="Phone Number" />
                <Input placeholder="Senha" />
            </ContainerForm>

            <TouchableOpacity onPress={updated ? () => { } : handleUpdate}>
                <ButtonGradient colors={['#F92B7F', '#F58524']} start={[0.8, 1]} >
                    <ButtonText>
                        {updated ? 'Carregando...' : 'Update'}
                    </ButtonText>
                </ButtonGradient>
            </TouchableOpacity>
        </Container>
    );
}

export default Profile;