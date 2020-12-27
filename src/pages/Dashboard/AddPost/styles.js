import styled from 'styled-components/native';
import { LinearGradient } from "expo-linear-gradient";
import Constants from 'expo-constants';

export const Container = styled.ScrollView`
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


export const Content = styled.View`
    /* flex: 1; */
    justify-content: space-around;
`;

export const Upload = styled.TouchableOpacity`
    height: 230px;
    background-color: rgba(247,83,86,0.1);
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;

export const UploadText = styled.Text`
    font-size: 18px;
    font-weight: 400;
    color: #E25E31;
`;

export const UploadLogo = styled.Image``;

export const PreviewImage = styled.ImageBackground`
    height: 250px;
`;

export const PreviewClose = styled.TouchableOpacity`
    width: 26px;
    height: 26px;
    border-radius: 16px;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: #FFFFFF;
`;

export const Form = styled.View`
    margin-top: 10px;
    padding: 0px 15px;
    flex: 1;
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: 'rgba(59, 59, 59, 0.5)'
})`
    color: rgba(59,59,59,0.5);
    font-size: 14px;
    height: 120px;
    ${{
        textAlignVertical: 'top'
    }}
    padding: 5px;
`;

export const ButtonPublishDisabled = styled.TouchableOpacity`
    margin: 0 auto;
    height: 60px;
    width: 80%;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    background-color: rgba(207,207,207,0.21);
    border-radius: 10px;
    margin-bottom: 90px;
`;

export const ButtonPublishDisabledText = styled.Text`
    color: rgba(59,59,59,0.5);
    font-size: 16px;
    font-weight: bold;
`;

export const ButtonPublishDisabledIcone = styled.Image`
    width: 27px;
    height: 27px;
`;
export const ButtonPublishGradient = styled(LinearGradient)`
    margin: 0 auto;
    height: 50px;
    width: 80%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    /* background-color: rgba(207,207,207,0.21); */
    border-radius: 5px;
    margin-top: 20px;
    padding-left: 15px;
`;

export const ButtonPublishText = styled.Text`
    color: #ffffff;
    font-size: 16px;
    font-weight: bold;
`;

export const ButtonPublishIconeView = styled.View`
    width: 50px;
    height: 100%;
    background-color: #FA508D;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    align-items: center;
    justify-content: center;
`;

export const ButtonPublishIcone = styled.Image`
    width: 27px;
    height: 27px;
`;

export const ModalUpload = styled.View`
    background-color: rgba(0, 0, 0,0.6);
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
`;

export const ModalCard = styled.View`
    width: 100%;
    height: 200px;
    background-color: #FFFFFF;
    border-radius: 20px;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
`;

export const ModalCardClosed = styled.TouchableOpacity`
    width: 30px;
    height: 30px;
    border-radius: 16px;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 10px;
    right: 10px;
`;

export const CameraButton = styled.TouchableOpacity`
    border: 1px solid #F92B7F;
    width: 106px;
    height: 106px;
    border-radius: 53px;
    align-items: center;
    justify-content: center;
`;

export const GaleriaButton = styled.TouchableOpacity`
    border: 1px solid #a2a2a2;
    width: 106px;
    height: 106px;
    border-radius: 53px;
    align-items: center;
    justify-content: center;
`;
