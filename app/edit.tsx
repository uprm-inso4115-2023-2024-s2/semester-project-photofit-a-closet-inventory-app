import {Button, Pressable, Text, StyleSheet, Alert, TextInput} from 'react-native';
import {View} from '@/components/Themed';
import {useState} from "react";
import {insertClothe} from "@/utils/DatabaseUtils"
import {useNavigation} from "@react-navigation/native";

export default function EditScreen() {
    // const [clotheName, setClotheName] = useState('');
    // const [clotheDescription, setClotheDescription] = useState('');
    // const [clotheImageLink, setClotheImageLink] = useState('');
    // const navigation = useNavigation();


    const [inputValue, setInputValue] = useState('');
    const navigation = useNavigation();

    const handleCancel = () => {
        // Optionally, you can reset any state or clear any data here
        setInputValue('');
        // Navigate back to the previous screen or any desired screen
        navigation.goBack(); // Assuming you're using a Stack Navigator
    };

    return (
        <View style={styles.container}>


        <View style={styles.buttonContainer}>

            {/* cancel Button */}
                <View style={styles.cancelButton}> 
                    <Pressable onPress={handleCancel} >
                        <Text style={styles.cancelButtonText}>Cancel</Text>
                    </Pressable>
                </View>

            <View style={styles.separator} lightColor="#ffff" darkColor="rgba(255,255,255,0.1)" />

            {/* save Button */}
                <View style={styles.saveButton}> 
                    <Pressable onPress={handleCancel} >
                        <Text style={styles.saveButtonText}>Save</Text>
                    </Pressable>
                </View>


        </View>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'pink',

    },
    input: {
        height: 30,
        width: '50%',
    },
    separator: {
        marginVertical: 20,
        height: 10,
        width: '3%',
    },


    buttonContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        // flexWrap: 'wrap',
        // backgroundColor: 'black',
        margin: 10, //margin of the square - how big is it

    },

    cancelButton: {
        borderRadius: 10,
        padding: 10,
        width: '10%',
        backgroundColor: 'red'
    },
    cancelButtonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold'
    },

    saveButton: {
        borderRadius: 10,
        padding: 10,
        width: '10%',
        backgroundColor: 'limegreen'
    },
    saveButtonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        
    },
});
