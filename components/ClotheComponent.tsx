import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {Text, View} from './Themed';
import {Clothe} from "@/classes/clothe";

// Clothe item with hanger bar
export default function ClotheComponent({clothe}: { clothe: Clothe }) {
    return (
        <View style={styles.container}>
            {/* Clothe container with clothe image, name and description */}
            <View style={styles.itemContainer}>
                <Image
                    style={styles.clothePicture}
                    source={{uri: clothe.link}}
                />

                <View style={styles.clotheBottomText}>
                    <Text style={styles.name}>{clothe.name}</Text>
                    <Text style={styles.description}>{clothe.description}</Text>
                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginHorizontal: 50,
    },
    itemContainer: {
        marginTop: -10,
        width: 300,
        height: 400,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "black",
    },
    clothePicture: {
        width: '100%',
        height: '80%',
    },
    clotheBottomText: {
        height: '20%',
        justifyContent: 'center',
    },
    name: {
        fontSize: 20,
        marginLeft: 5,
    },
    description: {
        fontSize: 15,
        marginLeft: 10,
    }
});
