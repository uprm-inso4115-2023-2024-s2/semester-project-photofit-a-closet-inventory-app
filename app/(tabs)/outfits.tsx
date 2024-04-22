import { ScrollView, StyleSheet, Platform } from 'react-native';
import { View } from '@/components/Themed';
import React from 'react';
import {searchPlaceHolder} from '@/components/SearchBarPlaceholder'
import {addOutfitButton} from '@/components/OutfitButton'
import {outfitFilterBoxes} from '@/components/OutfitsFilterBoxes';

/* To Do: 

Main Outfits Page:
- add photos of "outfits" inside the button --> access database and get id of outfits desired

Edit Page:
- fully design edit page
- add functionality in Edit Outfit Page: 

Make Your Outfit Page:
- preview photos of their closet --> connect to database to preview each clothe item

UI Design:
  --see https://www.figma.com/file/ojPtY7fqcm1botgu9QryZf/PhotoFit-UI?type=design&node-id=0-1&mode=design&t=xGQxI8btmzRFtTNz-0

GitHub Issues: 
  -- github Issue #128 for New Outfits UI - https://github.com/uprm-inso4115-2023-2024-s2/semester-project-photofit-a-closet-inventory-app/issues/128
  and Issue #119 for "Make Your Outfit" UI - https://github.com/uprm-inso4115-2023-2024-s2/semester-project-photofit-a-closet-inventory-app/issues/119
  
*/

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
    // backgroundColor: 'black', //ffff
  },

  smallerContainer: { //all buttons are inside this smaller container
    flex: 1,
    // backgroundColor: 'pink',
    padding: 10, 
    margin: 5, //margin of the square - how big is it
    borderRadius: 20, //rounds edges
    top:120,
    marginBottom:140,
    zIndex: 1, // Ensure it appears above other content
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
    // backgroundColor: 'lightblue',

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
    // backgroundColor: 'lightblue',
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