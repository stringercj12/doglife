import React, { useState } from 'react';
import { Image, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Back, BoxImage, Container, Header, HeaderText, ProfileImage, Scroll, User, Useremail, Username,Avatar, Card,
    CardHeader,
    CardAvatar,
    CardTitle,
    Name,
    Data,
    Icone,
    CardSharedButton,
    CardBody,
    CardFooter,
    CardActions,
    CardAction,
    IconImg,
    CardActionText,
    CardInfo,
    CardImg,} from './styles';
    import avatar from './../../../assets/justin-aikin-627026-unsplash.png';
    import sharedIcon from './../../../assets/shared-icon.png';
    import editIcon from './../../../assets/edit-icon.png';
    import trashIcon from './../../../assets/trash-icon.png';
    import ossoOrange from './../../../assets/osso-orange.png';
    import patas from './../../../assets/patas.png';

const post = [
    { avatar: avatar, img: 'https://images.unsplash.com/photo-1590986482090-b4b48b90fd07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
    { avatar: avatar, img: 'https://images.unsplash.com/photo-1584824388173-26f82e9a7deb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { avatar: avatar, img: 'https://images.unsplash.com/photo-1587169544795-974aeedce949?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { avatar: avatar, img: 'https://images.unsplash.com/photo-1559440167-38d7f72c1022?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { avatar: avatar, img: 'https://images.unsplash.com/photo-1584824388176-fee79746a11b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
];


const DetailsProfile = () => {
    const [updated, setUpdated] = useState(false);
    const navigation = useNavigation();



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
                <HeaderText>My Profile</HeaderText>
                <View />
            </Header>

            <BoxImage>
                <ProfileImage source={{ uri: 'https://images.unsplash.com/photo-1609103566358-ccab56549f8d?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1OHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' }} />
                <User>
                    <Username>Tommy Jackson</Username>
                    <Useremail>tommyjackson@gmail.com</Useremail>
                </User>
            </BoxImage>
            <Scroll>
            {post.map((item, i) => (
                    <Card key={i}>
                        <CardHeader>
                            <CardAvatar>
                                <Avatar source={item.avatar} />
                                <CardTitle>
                                    <Name>
                                        Baxter Johnson
                                    </Name>
                                    <Data>
                                        5:30PM
                                    </Data>
                                </CardTitle>
                            </CardAvatar>
                            <Icone>
                                <TouchableOpacity onPress={() => { }}>
                                    <CardSharedButton>
                                        <Image source={sharedIcon} />
                                    </CardSharedButton>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.navigate('EditPost')}>
                                    <CardSharedButton>
                                        <Image source={editIcon} />
                                    </CardSharedButton>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { }}>
                                    <CardSharedButton>
                                        <Image source={trashIcon} />
                                    </CardSharedButton>
                                </TouchableOpacity>
                            </Icone>
                        </CardHeader>

                        <CardBody>
                            <CardImg source={{ uri: item.img }} />
                        </CardBody>
                        <CardFooter>
                            <CardActions>
                                <CardAction>
                                    <IconImg source={ossoOrange} />
                                    <CardActionText>
                                        42 Bones
                                    </CardActionText>
                                </CardAction>
                                <CardAction>
                                    <IconImg source={patas} />
                                    <CardActionText>
                                        20 Snaps
                            </CardActionText>
                                </CardAction>
                            </CardActions>
                            <CardInfo numberOfLines={3}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum beatae cupiditate autem qui illo. Obcaecati a voluptates corporis incidunt officiis omnis deserunt vitae, consequatur dolor officia natus voluptate inventore exercitationem.
                            </CardInfo>
                        </CardFooter>
                    </Card>
                ))}
            </Scroll>
        </Container>
    );
}

export default DetailsProfile;