import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Image} from 'react-native';
import {Outfit} from '@/classes/outfit';

const OutfitComponent = ({outfit}: { outfit: Outfit }) => {
    // Function to handle edit button click
    const handleEdit = () => {
        // Implement edit functionality here
        console.log('Edit button clicked');
    };

    return (
        <View style={styles.container}>

            <View style={styles.topArea}>
                <Text style={styles.containerText}>Outfit</Text>
                <TouchableOpacity style={styles.editButton} onPress={handleEdit}>
                    <Text style={styles.editButtonText}>Edit</Text>
                </TouchableOpacity>

            </View>

            <View style={styles.imageContainer}>
                {/* First image of Outfit class */}
                <View style={styles.image}>
                    <Image
                        style={styles.outfitPicture}
                        source={{uri: outfit._shirt._link}}
                    />
                </View>

                {/* Second image of Outfit class */}
                <View style={styles.image}>
                    <Image
                        style={styles.outfitPicture}
                        source={{uri: outfit._pant._link}}
                    />
                </View>

                {/* Third image of Outfit class */}
                <View style={styles.image}>
                    <Image
                        style={styles.outfitPicture}
                        source={{uri: outfit._shoe._link}}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F0F0F0',
        padding: 10,
        marginBottom: 20,
        borderRadius: 10,
        width: '100%',
        aspectRatio: 386 / 180,
    },
    containerText: {
        color: "#C100E0",
        padding: 10,
        fontSize: 20,
        fontWeight: 'bold',
    },
    topArea: {
        flexDirection: 'row',
        justifyContent: 'space-between', // Align items horizontally
        alignItems: 'center', // Center items vertically
    },
    editButton: {
        backgroundColor: '#C100E0',
        padding: 10,
        borderRadius: 5,
    },
    editButtonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    imageContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 10,
    },
    image: {
        width: '27%',
        aspectRatio: 1, // Ensure the image maintains aspect ratio
        backgroundColor: 'gray', // Placeholder color for images
        marginBottom: 10,
        borderRadius: 10,
        margin: 10,
    },
    outfitPicture: {
        width: '100%',
        height: '100%',
    },
});

export default OutfitComponent;
