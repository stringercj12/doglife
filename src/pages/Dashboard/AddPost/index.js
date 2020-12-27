import React, { useCallback, useEffect, useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Platform } from 'react-native';
import { Feather, FontAwesome, AntDesign, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Container, Header, HeaderText, Upload, UploadLogo, UploadText, Form, Input, ButtonPublishDisabled, ButtonPublishDisabledIcone, ButtonPublishDisabledText, ButtonPublishIcone, ButtonPublishText, Content, PreviewClose, PreviewImage, ModalUpload, ModalCard, CameraButton, GaleriaButton, ModalCardClosed, ButtonPublishGradient, ButtonPublishIconeView, } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';


import logo from './../../../assets/dog.png';
import DogWhite from './../../../assets/dog-white.png';
import uploadLogo from './../../../assets/dog-plus.png';
import uploadPreviewImage from './../../../assets/1.png';
import PostCamera from "../../../components/PostCamera";
import { useNavigation } from "@react-navigation/native";

export default function AddPost() {
    const [imageUpload, setImageUpload] = useState(false);
    const [modalUpload, setModalUpload] = useState(false);
    const [hasPermission, setHasPermission] = useState(null);
    const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
    const navigation = useNavigation();
    const [imagem, setImagem] = useState(null);
    const [description, setDescription] = useState('');
    const [isValid, setIsValid] = useState('');

    function handleUpload() {
        setImageUpload(!imageUpload);
    }

    function handleCloseModalUpload() {
        setModalUpload(!modalUpload);
        if (modalUpload) {
            setImageUpload(!imageUpload);
            setIsValid(true);
        }
    }

    const uploadImagem = async (uri) => {
        const response = await fetch(uri);
        const blob = await response.blob();
        const filename = new Date().getTime();

        var ref = firebase.storage().ref().child('upload/' + filename);

        // ref.put(blob).then(function (snapshot) {

        //     snapshot.ref.getDownloadURL().then(function (downloadURL) {
        //         setImagem(downloadURL)
        //     })

        // })
        setImagem(blob)
        console.log(blob)
    }

    const escolherImagem = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
            if (!result.cancelled) {
                // setImagem(result.uri)
                uploadImagem(result.uri);

            }

            console.log(result);
        } catch (E) {
            console.log(E);
        }
    };

    return (
        <>
            <Container>
                <Header>
                    <HeaderText>News</HeaderText>
                </Header>
                <Content>
                    {imageUpload ? (
                        <PreviewImage source={imagem ? { uri: imagem } : uploadPreviewImage}>
                            <PreviewClose onPress={handleUpload}>
                                <Feather name="x" size={18} color="#f58" />
                            </PreviewClose>
                        </PreviewImage>
                    ) : (
                            <Upload onPress={handleCloseModalUpload}>
                                <UploadText>Upload photo or Video</UploadText>
                                <UploadLogo source={uploadLogo} />
                            </Upload>
                        )}

                    <Form>
                        <Input placeholder="Snap something here..." multiple onChangeText={text => setDescription(text)} />
                    </Form>
                    <TouchableOpacity onPress={handleUpload}>
                        <ButtonPublishGradient colors={['#F92B7F', '#F58524']} start={[0.8, 1]} >
                            <ButtonPublishText>
                                Publish
                                </ButtonPublishText>
                            <ButtonPublishIconeView>
                                <ButtonPublishIcone source={DogWhite} />
                            </ButtonPublishIconeView>
                        </ButtonPublishGradient>
                    </TouchableOpacity>
                </Content>
            </Container>
            {modalUpload && (
                <ModalUpload>
                    <ModalCard>
                        <ModalCardClosed onPress={handleCloseModalUpload}>
                            <LinearGradient colors={['#F92B7F', '#F58524']} start={[0.8, 1]} style={{ borderRadius: 10 }}>
                                <Feather name="x" size={24} color="#ffffff" />
                            </LinearGradient>
                        </ModalCardClosed>
                        <CameraButton onPress={() => { }}>
                            <Ionicons name="ios-camera" size={44} color="#f92b7f" />
                        </CameraButton>
                        <GaleriaButton onPress={escolherImagem}>
                            <AntDesign name="picture" size={44} color="#a2a2a2" />
                        </GaleriaButton>
                    </ModalCard>
                </ModalUpload>
            )}
        </>
    );
}
