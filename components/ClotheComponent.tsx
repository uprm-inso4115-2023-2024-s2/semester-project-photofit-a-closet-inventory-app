import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Text, View} from './Themed';
import {Clothe} from "@/classes/clothe";
import {useNavigation} from "@react-navigation/native";

/**
 * Displays a Clothe object, and navigation to edit page.
 * @param id The database ID of the Clothe object, used to edit the clothe object.
 * @param clothe The Clothe object to display.
 * @constructor
 */
export default function ClotheComponent({id, clothe}: { id: number, clothe: Clothe }) {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {/* Clothe container with clothe image, name and description */}
            <View style={styles.itemContainer}>
                <Image
                    style={styles.clothePicture}
                    source={{uri: clothe.link}}
                />

                <View style={styles.bottomText}>
                    <View style={styles.clotheBottomText}>
                        <Text style={styles.name}>{clothe.name}</Text>
                    </View>

                    <TouchableOpacity style={styles.editContainer}
                                      onPress={() =>
                                          navigation.navigate("addClothe", {id: id, clothe: clothe.serialize()})}>
                        <Text style={styles.buttonText}>Edit</Text>
                    </TouchableOpacity>
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
    bottomText: {
        height: '20%',
        flexDirection: "row",
    },
    clotheBottomText: {
        justifyContent: 'center',
        flex: 0.8,
    },
    name: {
        fontSize: 20,
        marginLeft: 5,
    },
    editContainer: {
        justifyContent: 'center',
        padding: 10,
        marginHorizontal: 10,
        backgroundColor: 'lightblue',
        borderRadius: 5,
        flex: 0.2,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "bold",
    },
});
