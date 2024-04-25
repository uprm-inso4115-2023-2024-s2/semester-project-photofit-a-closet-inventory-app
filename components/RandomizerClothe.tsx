import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {View} from './Themed';
import {Clothe} from "@/classes/clothe";

export default function RandomizerClothe({clothe}: { clothe: Clothe }) {
    return (
        <View style={styles.image}>
            <Image
                style={styles.clothePicture}
                source={{uri: clothe.link}}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: '80%',
        aspectRatio: 16/9,
        backgroundColor: 'gray',
        marginBottom: 10, 
        borderRadius: 20,
      },
    clothePicture: {
        width: '100%',
        height: '100%',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
    },
});


