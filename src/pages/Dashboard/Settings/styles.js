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

export const Title = styled.Text`
  font-size: 16px;
  color: #3B3B3B;
  font-weight: bold;
  padding: 20px;
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
