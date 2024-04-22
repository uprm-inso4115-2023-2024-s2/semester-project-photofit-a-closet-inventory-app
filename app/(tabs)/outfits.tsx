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
- fully design edit page: (in figma and for implementation)
    -> include delete icon/feature
    -> include move icon/feature
    -> maybe include a feature to be able to change clothing article in same
- add functionality in Edit Outfit Page: 
    -> eliminate outfits - delete feature
    -> move outfit button - arrange outfits feature

Make Your Outfit Page:
- continue implementing AddOutfit feature:
  - preview photos of their closet --> connect to database to preview each clothe item

UI Design:
  --see https://www.figma.com/file/ojPtY7fqcm1botgu9QryZf/PhotoFit-UI?type=design&node-id=0-1&mode=design&t=xGQxI8btmzRFtTNz-0

GitHub Issues: 
  -- github Issue #128 for New Outfits UI - https://github.com/uprm-inso4115-2023-2024-s2/semester-project-photofit-a-closet-inventory-app/issues/128
  and Issue #119 for "Make Your Outfit" UI - https://github.com/uprm-inso4115-2023-2024-s2/semester-project-photofit-a-closet-inventory-app/issues/119


  Done: - add filter box on top of page
    Added filter boxes and search (if needed) in all of outfit pages
    - Spaced "Type", "Color", and "Sleeve Size" evenly with their respective pickerboxes
    - Picker boxes are rounded
    - added containers for each major component of each Outfits page, EditOutfitPage page, and Make Your Outfit page
    - added in place editor for search bar

  Done: - Dynamically Fix the position of the filters&search box
    - Fixed it in Main Outfits page, with content scrollable under it
    - Fixed it in Edit page, with content scrollable under it
    - Fixed it in Make Your Outfit page, with content scrollable under it (can't be seen tho, so photos won't be visible under 'Name of Outfit' like figma just yet)

  - Changed colors back to PhotoFit palette
  - Added an in place editor for "Name of Outfit" save box
  
  Done: Figure out why it didn't render in android expo. It was because of the comments 
  i made just after a <View> component, react took them like text and wanted them to be 
  commented (Honestly I don't know). The fix was to put the comments under or over the 
  <View> component, like this:

  <View> //some code here </View>
  {* some comment here *} <-- like this
  
  ** Fixed it for Main Outfits page, Edit Page, and Make Your Outfit page **
  

  Done: Fix styling of Outfits pages in Android devices
  - Fixed Main Outfits Page
  - Fixed Edit page
  - Fixed Make Your Outfit page
  Question: Instead on "Unknown" variable in the enum of clothe.ts, can it be the title of filter it 
  belongs to? Ej. Type would be [Type] instead of 
                                                      Type
                                                    [Unknown]

  Done: Refactoring of all outfits pages
  
*/

export default function TabTwoScreen() {

  return (

    <View style={styles.bigContainer}>
    {/* Bigger Container */}

    <View style={styles.fixedContainer}> 
      {/* Search & Filter container is inside this Fixed container */}

        {/* Search & Filter box*/}
        <View style={styles.searchAndFilter}>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          {searchPlaceHolder()}
          
        </View>

        {/* Filter Titles and Boxes */}
        {outfitFilterBoxes()}

        </View> 
        {/* searchAndFilter end*/}

      </View> 
      {/* Fixed Container view */}


    {/* All buttons components are inside this smaller container */}
    {/* Makes it so scrollable content is UNDER fixed container (Filter/SearchBox) */}
    <View style={styles.smallerContainer}> 

      <ScrollView>
      {/* Outfit Buttons */}      
      {/* All Outfit Button are inside this container */}
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
    {/* smaller container */}

    </View> 
    //{/* bigger container */}

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
      // ios: {
      //     width: "95%",
      //     top:150
      // },
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
    // bottom:10, //Nope, covers the whole page
    // backgroundColor: 'lightblue',

    ...Platform.select({
        // ios: {
        //     height: "33%",
        //     width: "95%",
        // },
        android: {
            height: "33%",
            width: "100%",
        },
      }),
  },

  searchAndFilter:{  //search and filters are inside this container
    backgroundColor: "#F0F0F0",
    // alignItems: 'center',
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
    margin: 10, //margin of the square - how big is it
    borderRadius: 10, //rounds edges
    marginVertical: 1,
  },

  // Outfit Buttons container
  outfitsButtonContainer:{ // all outfits buttons are inside this container
    flex: 1,
    // backgroundColor: 'lightblue',
    padding: 10, 
    margin: 5, //margin of the square - how big is it
    borderRadius: 20, //rounds edges
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