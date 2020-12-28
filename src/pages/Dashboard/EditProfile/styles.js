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

export const BoxImage = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

export const ProfileImage = styled.Image`
  width: 148px;
  height: 148px;
  border-radius: 74px;
`;

export const ProfileButtonEdit = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  border: 2px solid #ffffff;
  position: absolute;
  bottom: -20px;
  overflow: hidden;
  align-items: center;
  justify-content: center;
`;

export const ProfileGradientEdit = styled(LinearGradient)`
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
`;


