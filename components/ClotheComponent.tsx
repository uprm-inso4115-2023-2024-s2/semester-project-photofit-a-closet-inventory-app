import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
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
                    <TouchableOpacity style={styles.editButton} >
                        <Text style={styles.editButtonText}>Edit</Text>
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
        borderRadius: 20,
        
    },
    clothePicture: {
        width: '100%',
        height: '80%',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },
    clotheBottomText: {
        height: '20%',
        backgroundColor: "#D9D9D9",
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-between', // Align items horizontally
        alignItems: 'center', // Center items vertically
    },
    name: {
        padding: 15,
        fontSize: 17,
        marginLeft: 5,
        fontWeight: "bold",
    },
    editButton: {
        backgroundColor: '#C100E0',
        padding: 10,
        borderRadius: 5,
        margin: 15
    },
    editButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    },
});
