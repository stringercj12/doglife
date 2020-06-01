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
  justify-content: space-between;
  background-color: rgba(255,255,255,.8);
`;

export const Avatar = styled.Image`
  width: 46px;
  height: 46px;
  border-radius: 23px;
`;

export const Logo = styled.Image`
  width: 116px;
  max-width: 100%;
  height: 46px;
`;

export const Search = styled.TouchableOpacity`

`;

export const Scroll = styled.ScrollView`

`;

export const Card = styled.View`
  margin-top: 20px;
  background-color: rgba(255,255,255,.6);
`;

export const CardTitle = styled.View`
  justify-content: center;
  height: 76px;
  margin-left: 15px;
`;
export const CardHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 15px;
`;

export const CardAvatar = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Name = styled.Text`
  color: #3b3b3b;
  font-size: 18px;
  font-weight: bold;
`;

export const Data = styled.Text`
  color: #3b3b3b;
  font-size: 12px;
`;

export const Icone = styled.View`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  align-items: center;
  justify-content: center;
`;


export const CardSharedButton = styled(LinearGradient)`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  align-items: center;
  justify-content: center;
  opacity: .8;
`;


export const Label = styled.Text`
    font-size: 12px;
    color: #fff;
`;

export const CardBody = styled.View`
  height: 220px;
`;
export const CardImg = styled.Image`
  width: 100%;
  height: 100%;
`;

export const CardFooter = styled.View`
`;

export const CardActions = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const CardAction = styled.TouchableOpacity`
  flex-direction: row;
  height: 45px;
  width: 50%;
  align-items: center;
  justify-content: center;
  border-bottom-color: #f3f3f3;
  border-bottom-width: 1px;
`;

export const IconImg = styled.Image`
  margin-right: 10px;
  color: #E25E31;
`;

export const CardActionText = styled.Text`
  color: #3B3B3B;
  font-size: 14px;
`;

export const CardInfo = styled.Text`
  padding: 20px 10px;
  height: 105px;
  font-size: 14px;
  color: #3B3B3B;
  overflow: hidden;
  text-align: justify;
`;
