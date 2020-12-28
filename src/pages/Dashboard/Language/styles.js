import styled from 'styled-components/native';
import { LinearGradient } from "expo-linear-gradient";
import Constants from 'expo-constants';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding-top: ${Constants.statusBarHeight}px;
`;

export const Header = styled.View`
  height: 66px;
  padding: 0 15px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(255,255,255,.8);
`;

export const HeaderText = styled.Text`
  color: #3b3b3b;
  font-size: 22px;
  font-weight: bold;
`;

export const Back = styled.TouchableOpacity`
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
    border-bottom-width: 1px;
    border-style:  solid;
    border-color: #e3e3e3;
`;

export const ButtonGradient = styled(LinearGradient)`
    margin: 0 auto;
    height: 50px;
    width: 80%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    /* background-color: rgba(207,207,207,0.21); */
    border-radius: 5px;
    margin-top: 20px;
    padding-left: 15px;
`;

export const ButtonText = styled.Text`
    color: #ffffff;
    font-size: 16px;
    font-weight: bold;
`;

export const Scroll = styled.ScrollView`
`;

export const List = styled.TouchableOpacity`
  border-radius: 5px;
`;

export const ListItem = styled.TouchableOpacity`
  background-color: rgba(255,255,255,.6);
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 20px;
  margin-bottom: 1.5px;
`;

export const ListItemText = styled.Text`
  font-size: 14px;
  color: #3B3B3B;
  ${props => props?.bold ? 'font-weight: bold;' : ''}
`;


export const ListButtonRadios = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border: 1px solid #ccc;
`;