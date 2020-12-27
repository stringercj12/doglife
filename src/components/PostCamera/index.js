import React, { useRef, useState } from 'react';
import { Feather, FontAwesome, AntDesign, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';

import { Container } from './styles';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const PostCamera = ({ children }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const cameraRef = useRef(null);

  const handleCameraType = () => {

    setCameraType(
      cameraType === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    )
  }

  const takePicture = async () => {
    if (cameraRef) {
      let resposta = await cameraRef.current?.takePictureAsync();
      console.log(resposta);
    }
  }

  return (
    <Container>
      <Camera ref={cameraRef} style={{ flex: 1, position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, zIndex: 99999 }} type={cameraType}>
        <TouchableOpacity
          style={{
            alignSelf: 'flex-end',
            alignItems: 'center',
            backgroundColor: 'transparent',

          }}
          onPress={e => setHasPermission(false)}
        >
          <Feather
            name="x"
            style={{ color: "#fff", fontSize: 40, marginTop: 20 }}
          />
        </TouchableOpacity>
        <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", alignItems: 'flex-end', margin: 20 }}>
          <TouchableOpacity
            style={{
              alignSelf: 'flex-end',
              alignItems: 'center',
              backgroundColor: 'transparent',
            }}>
            <Ionicons
              name="ios-photos"
              style={{ color: "#fff", fontSize: 40 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignSelf: 'flex-end',
              alignItems: 'center',
              backgroundColor: 'transparent',
            }}
            onPress={takePicture}>
            <FontAwesome
              name="camera"
              style={{ color: "#fff", fontSize: 40 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignSelf: 'flex-end',
              alignItems: 'center',
              backgroundColor: 'transparent',
            }}
            onPress={handleCameraType}>
            <MaterialCommunityIcons
              name="camera-switch"
              style={{ color: "#fff", fontSize: 40 }}
            />
          </TouchableOpacity>
        </View>
      </Camera>
    </Container>
  );
};

export default PostCamera;
