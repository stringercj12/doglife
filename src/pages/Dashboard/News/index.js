import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
    Container,
    Header,
    HeaderText,
    Scroll,
    Card,
    CardTitle,
    CardBody,
    CardDetails,
    CardInfo,
    CardImg,
} from './styles';


const post = [
    { img: 'https://images.unsplash.com/photo-1590986482090-b4b48b90fd07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
    { img: 'https://images.unsplash.com/photo-1584824388173-26f82e9a7deb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { img: 'https://images.unsplash.com/photo-1587169544795-974aeedce949?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { img: 'https://images.unsplash.com/photo-1559440167-38d7f72c1022?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { img: 'https://images.unsplash.com/photo-1584824388176-fee79746a11b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
];


export default function News() {
    const navigation = useNavigation();


    function navigateToPost() {
        navigation.navigate('DetailsPost');
    }

    return (
        <Container>
            <Header>
                <HeaderText>News</HeaderText>
            </Header>

            <Scroll>
                {post.map((item, i) => (
                    <Card onPress={navigateToPost}>
                        <CardBody>
                            <CardImg source={{ uri: item.img }} />
                        </CardBody>
                        <CardDetails>
                            <CardTitle numberOfLines={1}>
                                Dogs Are Even More Like Us Than We Thought
                            </CardTitle>
                            <CardInfo numberOfLines={5}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum beatae cupiditate autem qui illo. Obcaecati a voluptates corporis incidunt officiis omnis deserunt vitae, consequatur dolor officia natus voluptate inventore exercitationem.
                            </CardInfo>
                        </CardDetails>
                    </Card>
                ))}
            </Scroll>
        </Container >
    );
}
