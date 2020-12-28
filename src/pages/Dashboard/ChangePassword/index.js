import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { Back, ButtonGradient, ButtonText, Container, ContainerForm, Header, HeaderText, Input } from './styles';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ChangePassword = () => {
    const navigation = useNavigation();
    const [updated, setUpdated] = useState(false);

    
    function handleUpdate() {
        setUpdated(true);

        setTimeout(() => {
            setUpdated(false)
        }, 2000)
    }

    return (
        <Container>
            <Header>
                <Back onPress={() => navigation.goBack()}>
                    <Feather name="arrow-left" size={30} color="#3B3B3B" />
                </Back>
                <HeaderText>Edit Profile</HeaderText>
                <View />
            </Header>

            <ContainerForm>
                <Input placeholder="Current Password" />
                <Input placeholder="New Password" />
                <Input placeholder="Re-Enter Password" />
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

export default ChangePassword;