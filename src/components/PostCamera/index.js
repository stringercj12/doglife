import React, { useRef, useState } from 'react';
import { Feather, FontAwesome, AntDesign, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';

import { Action, Actions, Container } from './styles';
import { Image, Modal, Text, View } from 'react-native';
// import EventEmitter from 'events';


const PostCamera = ({ children }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const [open, setOpen] = useState(false);
  const [photoSelected, setPhotoSelected] = useState('');
  const cameraRef = useRef(null);
  // const newEvent = new EventEmitter();

  const handleCameraType = () => {

    setCameraType(
      cameraType === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    )
  }

  const takePicture = async () => {
    if (cameraRef) {
      let data = await cameraRef.current?.takePictureAsync();
      setPhotoSelected(data.uri);
      setOpen(true);
      console.log(data);
    }
  }

  const newPhoto = async () => {
    setPhotoSelected(null);
    setOpen(false);
  }

  return (
    <Container>
      <Camera ref={cameraRef} style={{ flex: 1, zIndex: 2 }} type={cameraType}>

        <Actions>

          {children}

          <Action
            onPress={takePicture}>
            <MaterialCommunityIcons name="camera-iris" size={40} color="#ffffff" />
          </Action>
          <Action
            onPress={handleCameraType}>
            <Ionicons name="md-reverse-camera" size={32} color="#ffffff" />
          </Action>
        </Actions>
      </Camera>
      <Modal
        animationType="slide"
        // transparent={true}
        visible={open}
      >

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', margin: 20 }}>

          <Image source={{ uri: photoSelected }} style={{ width: '100%', height: 400, borderRadius: 5, marginBottom: 20 }} />

          <Actions style={{ flex: 0 }}>
            <Action
              onPress={newPhoto}>
              <MaterialCommunityIcons name="camera-plus" size={40} color="#f58524" />
              <Text>Tirar nova foto</Text>
            </Action>
            <Action
              onPress={() => { }}>
              <Feather name="save" size={40} color="#f58524" />
              <Text>Usar essa foto</Text>
            </Action>
          </Actions>
        </View>

      </Modal>
    </Container>
  );
};

export default PostCamera;
