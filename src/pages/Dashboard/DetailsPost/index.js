import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
    Container,
    Header,
    HeaderText,
    Img,
    Back,
    FilterAction,
    Scroll,
    ScrollImg,
    Post,
    PostTitle,
    PostInfo,
    PostActions,
    PostAction,
    GradientLeft,
    GradientRight,
} from './styles';


const post = [
    { img: 'https://images.unsplash.com/photo-1590986482090-b4b48b90fd07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
    { img: 'https://images.unsplash.com/photo-1584824388173-26f82e9a7deb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { img: 'https://images.unsplash.com/photo-1587169544795-974aeedce949?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { img: 'https://images.unsplash.com/photo-1559440167-38d7f72c1022?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { img: 'https://images.unsplash.com/photo-1584824388176-fee79746a11b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
];


export default function DetailsPost() {
    const navigation = useNavigation();


    function navigateToBack() {
        navigation.goBack();
    }

    return (
        <Container>
            <Header>
                <Back onPress={navigateToBack}>
                    <Feather name="arrow-left" size={30} color="#3B3B3B" />
                </Back>
                <HeaderText>Details</HeaderText>
                <FilterAction>
                    <Feather name="flag" size={24} color="#3B3B3B" />
                </FilterAction>
            </Header>

            <ScrollImg>
                <Img source={{ uri: 'https://images.unsplash.com/photo-1590986482090-b4b48b90fd07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' }} />
            </ScrollImg>
            <Scroll>
                <Post>
                    <PostTitle>
                        Dogs Are Even More Like Us Than We Thought
                    </PostTitle>
                    <PostInfo>
                        Lorem ipsum dolor sit amet, consectetur rem adipiscing elit, sed do eiusmod tempor quiae incididunt utell labore etoneme dolore magna aliquaman. Ut enim adam minim veniam, quis nostrud exercitation ullamco laboris nisite ute aliquip ex eai commodo consequat. Duis aute irure dolor am reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Ute excepteur sint occaecat cupidatat non profite proident, suntino in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur rem adipiscing elit, sed do eiusmod tempor quiae incididunt utell labore etoneme dolore magna aliquaman. Ut enim adam minim veniam, quis nostrud exercitation ullamco laboris nisite ute aliquip ex eai commodo consequat. Duis aute irure dolor am reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Ute excepteur sint occaecat cupidatat non profite proident, suntino in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur rem adipiscing elit, sed do eiusmod tempor quiae incididunt utell labore etoneme dolore magna aliquaman. Ut enim adam minim veniam, quis nostrud exercitation ullamco laboris nisite ute aliquip ex eai commodo consequat. Duis aute irure dolor am reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Ute excepteur sint occaecat cupidatat non profite proident, suntino in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur rem adipiscing elit, sed do eiusmod tempor quiae incididunt utell labore etoneme dolore magna aliquaman. Ut enim adam minim veniam, quis nostrud exercitation ullamco laboris nisite ute aliquip ex eai commodo consequat. Duis aute irure dolor am reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Ute excepteur sint occaecat cupidatat non profite proident, suntino in culpa qui officia deserunt mollit anim id est laborum.
                    </PostInfo>
                </Post>
            </Scroll>
            <PostActions>
                <PostAction>
                    <GradientLeft colors={['#F92B7F', '#F58524']} start={[0.8, 1]}>
                        <Feather name="x" size={34} color="#fff" />
                    </GradientLeft>
                </PostAction>

                <PostAction>
                    <GradientRight colors={['#F92B7F', '#F58524']} start={[0.8, 1]}>
                        <Feather name="chevron-right" size={34} color="#fff" />
                    </GradientRight>
                </PostAction>
            </PostActions>
        </Container >
    );
}
