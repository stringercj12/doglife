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
  justify-content: center;
  background-color: rgba(255,255,255,.8);
`;

export const HeaderText = styled.Text`
    color: #3b3b3b;
    font-size: 22px;
    font-weight: bold;
`;

export const Scroll = styled.ScrollView`
`;

export const Card = styled.TouchableOpacity`
  background-color: rgba(255,255,255,.6);
  flex-direction: row;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 2px;
`;

export const CardBody = styled.View`
`;

export const CardImg = styled.Image`
  width: 53px;
  height: 53px;
  border-radius: 26.50px;
`;

export const CardDetails = styled.View`
  padding-left: 10px;
  width: 88%;
`;

export const CardTitle = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const CardTitleText = styled.Text`
  font-size: 14px;
  color: #3B3B3B;
  font-weight: bold;
`;

export const CardTitleDataText = styled.Text`
  font-size: 10px;
  color: #3B3B3B;
  opacity: .5;
`;

export const CardInfo = styled.Text`
  font-size: 12px;
  color: #3B3B3B;
  margin-top: 10px;
`;
