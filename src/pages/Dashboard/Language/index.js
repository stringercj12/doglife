import React, { useState } from 'react';
import { View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Back, Container, Header, HeaderText, Scroll, List, ListImg, ListItem, ListItemText, ListButtonRadios, ButtonGradient, ButtonText } from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const countrys = [
    { id: 1, name: 'English', img: 'https://images.unsplash.com/photo-1608854735881-530a3197efa2?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5N3x8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { id: 2, name: 'Spanish', img: 'https://images.unsplash.com/photo-1608854735881-530a3197efa2?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5N3x8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { id: 3, name: 'Chinese', img: 'https://images.unsplash.com/photo-1608854735881-530a3197efa2?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5N3x8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { id: 4, name: 'Hindi', img: 'https://images.unsplash.com/photo-1608854735881-530a3197efa2?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5N3x8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { id: 5, name: 'Arabic', img: 'https://images.unsplash.com/photo-1608854735881-530a3197efa2?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5N3x8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { id: 6, name: 'Portuguese', img: 'https://images.unsplash.com/photo-1608854735881-530a3197efa2?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5N3x8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { id: 7, name: 'Russian', img: 'https://images.unsplash.com/photo-1608854735881-530a3197efa2?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5N3x8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
];

const Language = () => {
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
                <HeaderText>Language</HeaderText>
                <View />
            </Header>
            <Scroll>
                <List>
                    {countrys.map((item) => (
                        <ListItem key={item?.id}>
                            <ListImg source={{ uri: item?.img }} />
                            <ListItemText>{item?.name}</ListItemText>
                            <ListButtonRadios />
                        </ListItem>
                    ))}
                </List>
            </Scroll>

            <TouchableOpacity onPress={updated ? () => { } : handleUpdate} style={{ backgroundColor: '#fff', paddingBottom: 30 }}>
                <ButtonGradient colors={['#F92B7F', '#F58524']} start={[0.8, 1]} >
                    <ButtonText>
                        {updated ? 'Carregando...' : 'Update'}
                    </ButtonText>
                </ButtonGradient>
            </TouchableOpacity>
        </Container>
    );
}

export default Language;