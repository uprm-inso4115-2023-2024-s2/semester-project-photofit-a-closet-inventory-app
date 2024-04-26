import React from 'react';
import {useNavigation} from "@react-navigation/native";

import {Text, View} from '@/components/Themed';
import { Pressable, StyleSheet} from 'react-native';



export function SaveButton(){

    const navigation = useNavigation();

    const handleCancel = () => {
        navigation.goBack(); 
    };

    return(

        <View style={styles.buttonContainer}>

            {/* Save Button */}
                <View style={styles.saveButton}> 
                    <Pressable onPress={handleCancel} >
                        <Text style={styles.saveButtonText}>Save</Text>
                    </Pressable>
                </View>


        </View> 


    );

}

const styles = StyleSheet.create({  
    // Save Button
    buttonContainer:{
        flexDirection: 'row', 
        backgroundColor: '#F0F0F0', 
    
    },

    saveButton: {
        borderRadius: 10,
        padding: 10,
        maxHeight:35,
        backgroundColor: 'limegreen',
        justifyContent: 'center'
    },
    saveButtonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        
    },
    
});