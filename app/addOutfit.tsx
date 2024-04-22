import React, {useLayoutEffect} from 'react';
import { StyleSheet, ScrollView, Platform} from 'react-native';
import {Text, View} from '@/components/Themed';
import {useNavigation} from "@react-navigation/native";

import {nameOfOutfitPlaceholder} from '@/components/NameOfOutfitPlaceholder'
import {CancelButton} from '@/components/CancelButton'
import {SaveButton} from '@/components/SaveButton';
import {outfitFilterBoxes} from '@/components/OutfitsFilterBoxes';


export default function EditScreen() {

    const navigation = useNavigation();

    // Update the title dynamically to "Make Your Outfit"
    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Make Your Outfit',
            headerTitleAlign: 'center',

        });
    }, [navigation]);


    return (

        <View style={styles.bigContainer}>

            <View style={styles.smallerContainer}>

                {/* Filter Box */}
                <View style={styles.fixedContainer}>
                    
                    {/* add "Filters" title */}
                    <View style={styles.filterTitle}>  
                        <Text style={styles.filterTitleText}>Filters</Text>
                    </View>

                    {/* Filter Titles and Boxes */}
                    {outfitFilterBoxes()}

                </View> 
                {/* Outside Filter Container ends */}




                {/* Outfit cards - Preview */}
                <View style={styles.outfitsContainer}>
                    <ScrollView>

                        <Text>HIIIIII</Text>
                        <Text>HIIIIII</Text>
                        <Text>HIIIIII</Text>
                        <Text>HIIIIII</Text>
                        <Text>HIIIIII</Text>
                        <Text>HIIIIII</Text>
                        <Text>HIIIIII</Text>
                        <Text>HIIIIII</Text>
                        <Text>HIIIIII</Text>
                        <Text>HIIIIII</Text>
                        <Text>HIIIIII</Text>
                        <Text>HIIIIII</Text>
                        <Text>HIIIIII</Text>
                        <Text>HIIIIII</Text>
                        <Text>HIIIIII</Text>
                        <Text>HIIIIII</Text>
                        <Text>HIIIIII</Text>
                        <Text>HIIIIII</Text>
                        <Text>HIIIIII</Text>
                        <Text>HIIIIII</Text>
                        <Text>HIIIIII</Text>
                        <Text>HIIIIII</Text>
                        <Text>HIIIIII</Text>
                        <Text>HIIIIII</Text>
                        <Text>Last HIIIIII</Text>

                    </ScrollView>
                </View> 
                {/* preview outfits container end */}   



                {/* Name of Outfit & Save */}
                <View style={styles.nameOfOutfitContainer}>
                    
                    {nameOfOutfitPlaceholder()}

                    <View style={styles.saveAndCancelButtonContainer}>
                        {CancelButton()}
                        <Text style={{color: '#F0F0F0'}}>--</Text>
                        {SaveButton()}
                    </View> 
                
                </View> 
                {/* smaller container with Name of Outfit, Save and Cancel Buttons*/}



            </View> 
            {/* smaller container with Filter Box + Outfit Clothe Preview + Save & Cancel Button */}

        </View> 
        // bigger container

        
    );
}

const styles = StyleSheet.create({
    bigContainer: { //all smaller containers are inside this big container
        flex: 1,
        // backgroundColor: 'black',
    },
    smallerContainer:{ //smaller containers
        flex: 1,
        // backgroundColor: 'pink',
        padding: 10, 
        margin: 5,
        borderRadius: 20,
        marginBottom:1
    },

    fixedContainer: { //Filter Title and filters are inside this fixed container
        backgroundColor: "#F0F0F0",
        alignContent: 'space-between',
        justifyContent: 'space-evenly',
        borderRadius: 20, 
        margin:10,
        padding: 10,
        marginTop:1,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1, // Ensure it appears above other content

        shadowColor: '#000',
        shadowOffset: {
        width: 0.9,
        height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4, 
        elevation:2, 
    },
    
    outfitsContainer:{ //container that previews the outfits
        flex: 1,
        // backgroundColor: 'pink',
        margin: 10,
        paddingHorizontal:10,
        paddingVertical: 5,
        
        maxHeight: 350,
        marginTop: 75,
        marginBottom: 120,

        ...Platform.select({
            // ios: {
            //     height: "20%",
            //     width: "95%",
            // },
            android: {
                // height: "120%",
                width: "94%",
                top:'7%'
            },
        }),
        
    },


    // Filter Boxes
    filterTitle:{
        alignItems: 'center',
        backgroundColor: '#F0F0F0' ,//'#D9D9D9'
    },
    filterTitleText:{
        fontWeight:'bold'
    },

    // Name of Outfit and Save&CancelButton Container
    nameOfOutfitContainer:{
        position: 'absolute',
        // top: 0,
        bottom:20,
        left: 0,
        right: 0,
        borderRadius: 20, //rounds edges
        paddingTop:10,
        backgroundColor: '#F0F0F0',
        zIndex: 1, // Ensure it appears above other content
        
        shadowColor: '#000',
        shadowOffset: {
        width: 0.9,
        height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4, 
        elevation:2,

        ...Platform.select({
            ios: {
                height: "20%",
                width: "100%",
                left:10
            },
            android: {
                height: "20%",
                width: "100%",
                left:10
            },
        }),
    },
    nameOfOutfitText:{
        alignItems:'center',
        backgroundColor: 'white',
        padding: 5, 
        margin: 10,
        borderRadius: 10,
        marginVertical: 1,
        fontWeight: 'bold',
    },

    //Save and Cancel Container
    saveAndCancelButtonContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#F0F0F0',
        margin: 10,
        marginVertical: 1,
        borderRadius: 20, 

    },
});
