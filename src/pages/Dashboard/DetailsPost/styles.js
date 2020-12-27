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

export const FilterAction = styled.TouchableOpacity`
`;

export const ScrollImg = styled.ScrollView`
  height: 100%;
`;

export const Img = styled.Image`
  height: 246px;
`;

export const Scroll = styled.ScrollView`
  margin-top: -50px;
  /* background-color: rgba(255,255,255,.6); */
`;

export const Post = styled.View`
  margin-top: 10px;
`;

export const PostTitle = styled.Text`
  color: #3b3b3b;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 15px;
  padding: 0px 15px;
`;

export const PostInfo = styled.Text`
  color: #3B3B3B;
  opacity: .6;
  font-size: 15px;
  margin-bottom: 15px;
  padding: 0px 15px;
`;

export const PostActions = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background-color: rgba(59,59,59,.1);
  height: 75px;
`;

export const PostAction = styled.TouchableOpacity`
  align-items: center;
  justify-content: space-between;
  width: 65px;
  height: 65px;
  overflow: hidden;
  z-index: 31;
`;

export const Gradient = styled(LinearGradient)`
  width: 65px;
  height: 65px;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
`;