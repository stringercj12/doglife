import React from 'react';
import { Feather } from "@expo/vector-icons";
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
    PostAction,
    Gradient,
} from './styles';

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

            <PostAction orientation="left" style={{ borderTopRightRadius: 45, position: 'absolute', bottom: 0, left: 0 }}>
                <Gradient colors={['#F92B7F', '#F58524']} start={[0.8, 1]}>
                    <Feather name="x" size={34} color="#fff" />
                </Gradient>
            </PostAction>

            <PostAction orientation="right" style={{ borderTopLeftRadius: 45, position: 'absolute', bottom: 0, right: 0 }}>
                <Gradient colors={['#F92B7F', '#F58524']} start={[0.8, 1]}>
                    <Feather name="chevron-right" size={34} color="#fff" />
                </Gradient>
            </PostAction>
        </Container >
    );
}
