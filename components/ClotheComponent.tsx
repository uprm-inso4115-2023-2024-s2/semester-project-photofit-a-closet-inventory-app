import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {Text, View} from './Themed';
import {Clothe} from "@/classes/clothe";

// Clothe item with hanger bar
export function ClotheComponent(clothe: Clothe) {
    return (
        <View style={styles.getStartedContainer}>
            {/* Hanger bar image */}
            <Image
                style={styles.hangerImg}
                source={{uri: "https://clipart-library.com/image_gallery/21326.png"}}
            />

            {/* Clothe container with clothe image, name and description */}
            <View style={styles.itemContainer}>
                <Image
                    style={styles.itemPicture}
                    source={{uri: clothe.link}}
                />

                <View style={styles.itemBottomText}>
                    <Text style={styles.name}>{clothe.name}</Text>
                    <Text style={styles.description}>{clothe.description}</Text>
                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 50,
    },
    hangerImg: {
        width: 150,
        height: 150,
        marginTop: -25,
    },
    itemContainer: {
        marginTop: -10,
        width: 300,
        height: 400,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "black",
    },
    itemPicture: {
        width: '100%',
        height: '80%',
    },
    itemBottomText: {
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
