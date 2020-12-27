import React from "react";
import { View, Text } from "react-native";
import { Card, CardBody, CardDetails, CardImg, CardInfo, CardTitle, CardTitleDataText, CardTitleText, Container, Header, HeaderText, Scroll } from "./styles";

const post = [
    { id: 1, name: 'Apollo Phelps', text: 'Shared your post.', hours: '5:30 PM', img: 'https://images.unsplash.com/photo-1590986482090-b4b48b90fd07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
    { id: 2, name: 'Bailey Stein', text: 'Give bone on your post.', hours: '4:42 PM', img: 'https://images.unsplash.com/photo-1584824388173-26f82e9a7deb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { id: 3, name: 'Leo Reilly', text: 'Snapped on your post.', hours: 'Yesterday', img: 'https://images.unsplash.com/photo-1587169544795-974aeedce949?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { id: 4, name: 'Coco Gordon', text: 'Shared your post.', hours: 'Yesterday', img: 'https://images.unsplash.com/photo-1559440167-38d7f72c1022?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { id: 5, name: 'Hank Lozano', text: 'Snapped on your post.', hours: '14/12/18', img: 'https://images.unsplash.com/photo-1609002985904-74215653047f?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3OXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { id: 6, name: 'Rocky Ellison', text: 'Give bone your post.', hours: '13/12/18', img: 'https://images.unsplash.com/photo-1608865674254-105ce4667b80?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMjB8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { id: 7, name: 'Dexter Byrd', text: 'You made a new post.', hours: '12/11/18', img: 'https://images.unsplash.com/photo-1608835875169-d0308b58ad80?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMjV8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
];

export default function Notification() {
    return (
        <Container>
            <Header>
                <HeaderText>Notification</HeaderText>
            </Header>

            <Scroll>
                {post.map((item) => (
                    <Card key={item.id} onPress={() => { }}>
                        <CardImg source={{ uri: item.img }} />
                        <CardDetails>
                            <CardTitle>
                                <CardTitleText>
                                    {item.name}
                                </CardTitleText>
                                <CardTitleDataText>
                                    {item.hours}
                                </CardTitleDataText>
                            </CardTitle>
                            <CardInfo numberOfLines={5}>
                                {item.text}
                            </CardInfo>
                        </CardDetails>
                    </Card>
                ))}
            </Scroll>
        </Container >
    );
}
