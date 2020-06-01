import styled from 'styled-components/native';
import { LinearGradient } from "expo-linear-gradient";
import Constants from 'expo-constants';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding-top: ${Constants.statusBarHeight};
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
    padding: 0px 15px;
`;

export const Card = styled.TouchableOpacity`
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: rgba(255,255,255,.6);
  flex-direction: row;
  border-radius: 5px;
  padding: 10px;
`;

export const CardBody = styled.View`
`;

export const CardImg = styled.Image`
  width: 106px;
  height: 106px;
  border-radius: 5px;
`;

export const CardDetails = styled.View`
  margin-left: 10px;
  width: 200px;
`;

export const CardTitle = styled.Text`
  font-size: 14px;
  color: #3B3B3B;
  font-weight: bold;
`;

export const CardInfo = styled.Text`
  font-size: 12px;
  color: #3B3B3B;
  margin-top: 10px;
`;
