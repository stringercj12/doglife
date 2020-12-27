import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    z-index: 8;
`;


export const Actions = styled.View`
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-end;
    flex: 1;
    width: 100%;
    margin-bottom: 20px;
`;

export const Action = styled.TouchableOpacity`
    /* align-self: flex-end; */
    align-items: center;
    background-color: transparent;
`;