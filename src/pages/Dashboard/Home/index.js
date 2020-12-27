import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather, Ionicons } from "@expo/vector-icons";

import {
    Container,
    Header,
    Avatar,
    Logo,
    Search,
    Scroll,
    Card,
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
    CardImg,
} from './styles';

import avatar from './../../../assets/justin-aikin-627026-unsplash.png';
import imgTeste from './../../../assets/justin-aikin-627026-unsplash.png';
import logo from './../../../assets/doglife.png';
import ossoOrange from './../../../assets/osso-orange.png';
import patas from './../../../assets/patas.png';

const post = [
    { avatar: avatar, img: 'https://images.unsplash.com/photo-1590986482090-b4b48b90fd07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
    { avatar: avatar, img: 'https://images.unsplash.com/photo-1584824388173-26f82e9a7deb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { avatar: avatar, img: 'https://images.unsplash.com/photo-1587169544795-974aeedce949?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { avatar: avatar, img: 'https://images.unsplash.com/photo-1559440167-38d7f72c1022?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { avatar: avatar, img: 'https://images.unsplash.com/photo-1584824388176-fee79746a11b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
];



export default function Home() {
    return (
        <Container>
            <Header>
                <Avatar source={avatar} />
                <Logo source={logo} />
                <Search>
                    <Feather name="search" size={24} color="#c4c4c4" />
                </Search>
            </Header>

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
                                        <Ionicons name="ios-share-alt" size={24} color="#232323" />
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
        </Container >
    );
}
