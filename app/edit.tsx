import React, {useLayoutEffect} from 'react';
import {StyleSheet, ScrollView, Platform} from 'react-native';
import {View} from '@/components/Themed';
import {useNavigation} from "@react-navigation/native";

import {searchPlaceHolder} from '@/components/SearchBarPlaceholder'
import {addEditOutfitButton} from '@/components/EditOutfitButton'
import {CancelButton} from '@/components/CancelButton'
import {SaveButton} from '@/components/SaveButton'
import {outfitFilterBoxes} from '@/components/OutfitsFilterBoxes';
import { BottomSheet } from 'react-native-elements';


export default function EditOutfits() {

    const navigation = useNavigation();
    const deleteOutfitButton = () => {

    }
    const arrangeOutfitButton = () => {
        
    }
    // Update the title dynamically to "Edit"
    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Edit',
            headerTitleAlign: 'center',

        });
    }, [navigation]);
  
    return (

        <View style={styles.bigcontainer}> 
        
            <View style={styles.fixedContainer}> 

                {/* Search & Filter box*/}
                <View style={styles.searchAndFilter}>

                    {/* Search Bar */}
                    <View style={styles.searchContainer}>
                        {searchPlaceHolder()}
                    </View>

                    {/* Filter Titles and Boxes */}
                    {outfitFilterBoxes()}
                
                </View> 

            </View> 


            {/* Outfits Buttons and Save Button Container */}
            <View style={styles.smallercontainer}> 
                <ScrollView>
                    <View style={styles.outfitsButtonContainer}> 

                        {/* Outfit Buttons */}
                        {addEditOutfitButton()}
                        {addEditOutfitButton()}
                        {addEditOutfitButton()}
                        {addEditOutfitButton()}
                        {addEditOutfitButton()}       
                        {addEditOutfitButton()}
                        {addEditOutfitButton()}  

                    </View> 
                    {/* Container with Outfits Buttons*/}
                    
                    
                    {/* Save & Cancel Button Container */}
                    <View style={styles.buttonContainer}>
                        {CancelButton()}
                        {SaveButton()}
                    </View>                 
                
                </ScrollView>




            </View> 

        </View> 
    );
}

const styles = StyleSheet.create({    
    bigcontainer: { //all components are in this parent container
        flex: 1,
        },
        
    smallercontainer: { //all components are inside this smaller container
        flex: 1,
        padding: 10, 
        margin: 5,
        borderRadius: 20,
        top:110,
        marginBottom:110,
        zIndex: 1, 
        ...Platform.select({
          ios: {
              width: "95%",
              top:150
          },
          android: {
              width: "95%",
              top:150,
          },
      }),
    },

    // Search components styles
    fixedContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,

        ...Platform.select({
          ios: {
              height: "35%",
              width: "95%",
          },
          android: {
              height: "35%",
              width: "100%",
              // top:5
          },
      }),
    },

    searchContainer:{  //search bar is inside this container
        backgroundColor: '#D9D9D9',
        padding: 5, 
        margin: 10,
        borderRadius: 10,
        marginVertical: 1,
    },

    searchText:{  //styling for "Search" text
    fontWeight:'bold', color:'#9f9f9f', backgroundColor:'#D9D9D9'
    },

    searchAndFilter:{  //search and filters are inside this container
        backgroundColor: "#F0F0F0",
        alignContent: 'space-between',
        justifyContent: 'space-evenly',
        borderRadius: 20,
        margin:10,
        padding: 10,

        shadowColor: '#000',
        shadowOffset: {
          width: 0.9,
          height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4, 
        elevation: 2, 

        ...Platform.select({
            ios: {
                height: "20%",
                width: "77%",
            },
            android: {
                height: "60%",
                width: "95%",
                // top:5
            },
        }),
    },
    // Outfit Buttons Container
    outfitsButtonContainer:{ // outfits buttons AND save button are inside this container
        flex: 1,
        padding: 10, 
        margin: 5, 
        borderRadius: 20, 
        marginTop:-20,

        ...Platform.select({
          ios: {
              height: "50%",
              width: "95%",
          },
          android: {
              height: "70%",
              width: "95%",
              
          },
      }),
    },
    // Cancel & Save Buttons
    buttonContainer:{
        justifyContent: 'space-between',
        flexDirection: 'row',
        margin: 10, 

        ...Platform.select({
            ios: {
                height: "70%",
                width: "95%",
                bottom:20,
            },
            android: {
                height: "70%",
                width: "95%",
                bottom:20,
                
            },
        }),
    },
});