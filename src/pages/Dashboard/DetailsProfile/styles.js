import styled from 'styled-components/native';
import { LinearGradient } from "expo-linear-gradient";
import Constants from 'expo-constants';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding-top: ${Constants.statusBarHeight}px;
  background-color: #ffffff;
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
    border-color: #707070;
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
  border-bottom-width: 0.5px;
  border-color: #ccc;
  border-style: solid;
`;

export const ProfileImage = styled.Image`
  width: 148px;
  height: 148px;
  border-radius: 74px;
`;

export const User  = styled.View`
  padding: 20px 0px;
  align-items: center;
  justify-content: center;
`;

export const Username  = styled.Text`
  font-size: 18px;
  color: #3B3B3B;
  font-weight: bold;
`;

export const Useremail  = styled.Text`
  font-size: 14px;
  color: #3B3B3B;
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

export const Avatar = styled.Image`
  width: 46px;
  height: 46px;
  border-radius: 23px;
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
  padding: 0px 10px;
  width: 100%;
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
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
`;


export const CardSharedButton = styled.View`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  align-items: center;
  justify-content: center;
  background-color: rgba(247,83,86,.2);
  margin-left: 15px;
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
