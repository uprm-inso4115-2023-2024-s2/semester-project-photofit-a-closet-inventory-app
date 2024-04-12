import {Button, StyleSheet, TextInput} from 'react-native';
import {View} from '@/components/Themed';
import {useState} from "react";
import {useNavigation} from "@react-navigation/native";
import DefaultClothe from "@/classes/clothe";
import {DatabaseController} from "@/classes/DatabaseController";
import PhotoCapture from "@/app/photoCapture"

export default function AddClotheScreen() {
    const [showCamera, setShowCamera] = useState(false);
    const [clothe] = useState(DefaultClothe());
    const navigation = useNavigation();


    // Adds clothe to DB and changes screen back to the previous one
    async function addClothe() {
        const success = await DatabaseController.addClothe(clothe);

        if (success) {
            console.log("Successfully added clothe!")
        } else {
            console.log("Failed to add clothe!")
        }

        navigation.goBack();
    }

    // Gets URI's from PhotoCapture prop
    function handlePhoto(uri : string) {
        clothe.link = uri;
    }
 
    

    return (
        <View style={showCamera ? styles.cameraContainer : styles.container}>
            {showCamera ? (
                <PhotoCapture setShowCamera={setShowCamera} onPhotoTaken={handlePhoto} onGalleryPhotoSelected={handlePhoto} />
            ) : (
                <>
                    <TextInput 
                        style={styles.input} 
                        placeholder="Clothe name"
                        onChangeText={(text) => clothe.name = text}
                    />
                    <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>
    
                    <TextInput 
                        style={styles.input} 
                        placeholder="Clothe description"
                        onChangeText={(text) => clothe.description = text}
                    />
                    <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>
    
                    <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>

                    <Button title="Take Picture/Upload Photo" onPress={() => setShowCamera(true)} />
                    <Button title="Add Clothe" onPress={addClothe}/>
                    
                </>
            )}
        </View>
    );
    
        
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 30,
        width: '50%',
    },
    separator: {
        marginVertical: 20,
        height: 0,
        width: '50%',
    },
    cameraContainer: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
});
