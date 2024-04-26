import { ScrollView, StyleSheet, Platform } from 'react-native';
import { View } from '@/components/Themed';
import React from 'react';
import {searchPlaceHolder} from '@/components/SearchBarPlaceholder'
import {addOutfitButton} from '@/components/OutfitButton'
import {outfitFilterBoxes} from '@/components/OutfitsFilterBoxes';


export default function TabTwoScreen() {

  return (

    <View style={styles.bigContainer}>

      {/* Search Bar and Filter Boxes */}
      <View style={styles.fixedContainer}> 
          <View style={styles.searchAndFilter}>

          {/* Search Bar */}
          <View style={styles.searchContainer}>
          {searchPlaceHolder()}
          </View>

          {/* Filter Titles and Boxes */}
          {outfitFilterBoxes()}

          </View> 
      </View> 


      {/* All buttons components are inside this smaller container */}
      {/* Makes it so scrollable content is UNDER fixed container (Filter/SearchBox) */}
      <View style={styles.smallerContainer}> 

        <ScrollView>
        {/* Outfit Buttons */}      
        <View style={styles.outfitsButtonContainer}> 
          {addOutfitButton()}
          {addOutfitButton()}
          {addOutfitButton()}
          {addOutfitButton()}
          {addOutfitButton()}
          {addOutfitButton()}
          {addOutfitButton()}
        </View>
        </ScrollView>

      </View> 
    </View> 

  );
}

// Styles
const styles = StyleSheet.create({
  bigContainer: { //all components are in this parent container
    flex: 1,
  },

  smallerContainer: { //all buttons are inside this smaller container
    flex: 1,
    padding: 10, 
    margin: 5, 
    borderRadius: 20, 
    top:120,
    marginBottom:140,
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

  fixedContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,

    ...Platform.select({
        ios: {
            height: "33%",
            width: "95%",
        },
        android: {
            height: "33%",
            width: "100%",
        },
      }),
  },

  searchAndFilter:{  //search and filters are inside this container
    backgroundColor: "#F0F0F0",
    alignContent: 'space-between',
    justifyContent: 'space-evenly',
    borderRadius: 20,
    margin:10,
    padding: 10,
    marginTop:10,
    elevation:2,

    shadowColor: '#000',
    shadowOffset: {
      width: 0.9,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4, 
    ...Platform.select({
        ios: {
            height: "20%",
            width: "77%",
        },
        android: {
            height: "70%",
            width: "95%",
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

  // Outfit Buttons container
  outfitsButtonContainer:{ // all outfits buttons are inside this container
    flex: 1,
    padding: 10, 
    margin: 5, 
    borderRadius: 20, 
    marginTop: -20,
    
    ...Platform.select({
      ios: {
          height: "50%",
          width: "95%",
      },
      android: {
          height: "80%",
          width: "99%",
          
      },
  }),
  },
});