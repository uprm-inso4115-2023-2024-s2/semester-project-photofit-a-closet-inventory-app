import React, {useState} from 'react';
import {useNavigation} from "@react-navigation/native";

import {Text, View} from '@/components/Themed';
import { Pressable, StyleSheet, Platform} from 'react-native';



export function CancelButton(){

    const navigation = useNavigation();

    const handleCancel = () => {
        navigation.goBack(); 
    };

    return(

        <View style={styles.buttonContainer}>
        
            {/* Cancel Button */}
                <View style={styles.cancelButton}> 
                    <Pressable onPress={handleCancel} >
                        <Text style={styles.cancelButtonText}>Cancel</Text>
                    </Pressable>
                </View>


        </View> 

    );

}

const styles = StyleSheet.create({  
    // Cancel Button
    buttonContainer:{
        flexDirection: 'row', 
        backgroundColor: '#F0F0F0',
    
    },
    cancelButton: {
        borderRadius: 10,
        padding: 10,
        maxHeight:35,
        backgroundColor: 'red',
        justifyContent: 'center'

    },
    cancelButtonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold'
    },

});