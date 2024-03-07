import { Camera, CameraType } from 'expo-camera';
import { useState, useRef } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {useNavigation} from "@react-navigation/native";
import {MaterialCommunityIcons, AntDesign} from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

export default function photoCapture() {
  const cameraRef = useRef<Camera>(null);
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [isCameraReady, setIsCameraReady] = useState(false);
  const navigation = useNavigation();
  const [image, setImage] = useState(String);

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to use the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  //Switches camera to front or back
  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }
 
  /**
   * Takes picture and temporarly stores the photoURI
   * 
   **/
  const takePicture = async () => {
    if (isCameraReady && cameraRef.current) {
      try {
        const photo = await cameraRef.current.takePictureAsync();
        console.log("Success: Picture Taken");
        console.log("Photo URI:", photo.uri);
        navigation.goBack();

      } catch (error) {
        console.log("Error taking picture :(", error)
      }
    }
  }

   /**
   * Selecting a photo from Photo Gallery
   * 
   **/

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [16, 9],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
    
  };

  

  return (
    <View style={styles.container}>
      <Camera ref={cameraRef} style={styles.camera} type={type} onCameraReady={() => setIsCameraReady(true)}>
        <View style={styles.buttonContainer}>

          <TouchableOpacity style={styles.button} onPress={pickImage}>
            <AntDesign name="picture" size={40} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.middleButton]} onPress={takePicture}>
            <MaterialCommunityIcons name="circle" size={80} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
            <MaterialCommunityIcons name="camera-flip" size={40} color="white" />
          </TouchableOpacity>
        
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 0,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    position: 'absolute', // Position absolutely within the parent View
    bottom: 20, // Adjust based on your needs
    width: '100%', // Ensure it spans the entire width
    justifyContent: 'space-between', // This spreads out the child elements
    paddingHorizontal: 20,
  },
  button: {
    alignSelf: 'center',
  },
  middleButton: {
    marginTop: -40,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});
