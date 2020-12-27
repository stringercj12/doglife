import styled from 'styled-components/native';
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled.KeyboardAvoidingView.attrs(() => {
    behavior: "padding";
    enabled: true;
})`
  flex: 1;
  justify-content: space-around;
  background-color: #f3f3f3;
`;

export const ContainerImage = styled.View`
    align-items: center;
    justify-content: center;
`;

export const Logo = styled.Image`
    width: 100px;
    height: 100px;
    align-self: center;
    margin-top: 40px;
`;

export const MiniLogo = styled.Image`
    width: 150px;
    max-width: 100%;
    height: 45px;
    align-self: center;
    margin-top: -70px;
`;

export const ContainerForm = styled.View`
    padding: 20px;
`;

export const Input = styled.TextInput`
    width: 100%;
    height: 45px;
    border-radius: 5px;
    padding-left: 10px;
    margin-top: 15px;
    border: 1px solid #e3e3e3;
`;

export const Actions = styled.View`
`;

export const Action = styled(LinearGradient)`
    width: 100%;
    height: 45px;
    padding: 10px;
    border-radius: 5px;
    margin-top: 20px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const ActionFacebook = styled.TouchableOpacity.attrs(() => { })`
    width: 100%;
    height: 45px;
    padding: 10px;
    border-radius: 5px;
    margin-top: 20px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: #3C5A99;
`;

export const ActionLabel = styled.Text`
    color: #fff;
    font-size: 18px;
    font-weight: 500;
`;


export const ActionIcon = styled.Image`
`;

export const Footer = styled.TouchableOpacity`
    align-items: center;
    bottom: -20px;
`;

export const FooterText = styled.Text`
    color: #757575;
`;

export const BoldOrange = styled.Text`
    color: #E25E31;
    font-weight: bold;
    font-size: 15px;
`;

