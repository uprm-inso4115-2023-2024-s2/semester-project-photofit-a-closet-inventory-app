import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {Text, View} from './Themed';

// Clothe item with hanger bar
export default function Item() {
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
                    source={{uri: "https://content.instructables.com/FNN/H072/IDUQWTXF/FNNH072IDUQWTXF.jpg?auto=webp&frame=1&width=907&height=1024&fit=bounds&md=ca68a21d8b66a10d4f65d275a1393035"}}
                />

                <View style={styles.itemBottomText}>
                    <Text style={styles.name}>Item Name</Text>
                    <Text style={styles.description}>Item Description</Text>
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
