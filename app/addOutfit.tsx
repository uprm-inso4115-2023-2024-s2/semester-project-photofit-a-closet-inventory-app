import {Button, Pressable, Text, StyleSheet, Alert, TextInput} from 'react-native';
import {View} from '@/components/Themed';
import {useState} from "react";
import {useNavigation} from "@react-navigation/native";
import React from 'react';

export default function EditScreen() {

    const [inputValue, setInputValue] = useState('');
    const navigation = useNavigation();

    const handleCancel = () => {
        // Optionally, you can reset any state or clear any data here
        setInputValue('');
        // Navigate back to the previous screen or any desired screen
        navigation.goBack(); // Assuming you're using a Stack Navigator
    };
    
    // Update the title dynamically
    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Make Your Outfit',
            headerTitleAlign: 'center',

        });
    }, [navigation]);

    return (
        <View style={styles.container}>

        {/* Filter Box */}

        <View style={styles.insideContainer}>
        </View>

        {/* Outfit cards - Preview */}

        <View style={styles.insideContainerOutfits}>
        </View>
        {/* Name of Outfit & Save */}

        <View style={styles.insideContainer}>

            <Text style={{alignItems:'center',backgroundColor: '#FFFFFF',
}}
            >Name of Outfit</Text>

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

        {/* buttonContainer */} </View> 
        {/* insideContainer */} </View>




        </View>
    );
}

const styles = StyleSheet.create({
    container: { //all smaller containers are inside this big container
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        // backgroundColor: 'pink',

    },
    insideContainer:{ //smaller containers
        flex: 1,
        backgroundColor: '#F0F0F0',
        padding: 25, 
        margin: 10, //margin of the square - how big is it
        borderRadius: 20, //rounds edges
        paddingHorizontal:10,
        paddingVertical: 10,
        justifyContent:'flex-end',
        // alignContent:'flex-end',
        flexDirection: 'column',
        // minHeight: '10%', 
        // maxWidth: '80%'
    },

    insideContainerOutfits:{ //container that previews the outfits
        flex: 1,
        backgroundColor: 'white',
        padding: 25, 
        margin: 10, //margin of the square - how big is it
        borderRadius: 20, //rounds edges
        paddingHorizontal:10,
        paddingVertical: 10,
        justifyContent:'flex-end',
        // alignContent:'flex-end',
        // flexDirection: 'column',
        minHeight: '55%', 
        // maxWidth: '80%',
        
    },

    separator: { //added this to separate each button a smidge, is added just before a new button
        marginVertical: 20,
        height: 10,
        width: '3%',
        backgroundColor: '#F0F0F0',
    },

    buttonContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        // flexWrap: 'wrap',
        backgroundColor: '#F0F0F0',
        margin: 10, //margin of the square - how big is it
        // justifyContent: 'space-between'
        // minHeight: '50%', 
        // maxWidth: '50%'
    },

    cancelButton: {
        borderRadius: 10,
        padding: 10,
        // width: '11%',
        maxWidth: '50%', 
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
        // width: '11%',
        maxWidth: '50%', 
        backgroundColor: 'limegreen'
    },
    saveButtonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        
    },
});
