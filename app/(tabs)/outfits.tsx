import { Button, ScrollView, StyleSheet, Platform, Dimensions} from 'react-native';
import { Text, View } from '@/components/Themed';

import React, {useState} from 'react';
import {Alert, Modal, Pressable, FlatList, TouchableOpacity } from 'react-native';
import {SafeAreaView, TextInput} from 'react-native';

import { Clothe } from '@/classes/clothe';
import {useNavigation} from "@react-navigation/native";
import {Picker} from '@react-native-picker/picker';

import EditOutfits from '@/app/edit'
import { BottomSheet } from 'react-native-elements';

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
  
*/


// Add Outfit Button
function addOutfitButton(){

  return(
    <View style={{paddingBottom:5}}>
    {/* Separator */}
      <View style={styles.separator} lightColor="#ffff" darkColor="rgba(255,255,255,0.1)" />

    {/* Button */}
      <View style={styles.OutfitButton}> 
        <Pressable>
            <Text style={styles.OutfitTButtonTextStyle}>Outfit</Text>
        </Pressable>
      </View>


    </View>

  );
}

function searchPlaceHolder(){
  const [number, onChangeNumber] = React.useState('');

  return(
    <SafeAreaView>
      <TextInput
      style={{
        paddingHorizontal: 5,
        color:"black", 
        // fontWeight:'bold'
      }}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Search"
        // keyboardType="numeric"
        placeholderTextColor="#9f9f9f"
      />
    </SafeAreaView>
  );
}


export default function TabTwoScreen() {

  const [selectedType, setSelectedType] = useState(Clothe.Type.Unknown);
  const [selectedColor, setSelectedColor] = useState(Clothe.Color.Unknown); // Default value
  const [selectedSize, setSelectedSize] = useState(Clothe.SleeveSize.Unknown); // Default value
  
  const typeKeys = Object.keys(Clothe.Type).filter(key => isNaN(Number(key)));
  const colorKeys = Object.keys(Clothe.Color).filter(key => isNaN(Number(key)));
  const sleeveSizeKeys = Object.keys(Clothe.SleeveSize).filter(key => isNaN(Number(key)));


  const navigation = useNavigation();

  const handleCancel = () => {
    // Navigate back to the previous screen or any desired screen
    navigation.goBack();
  };

  const screenWidth = Dimensions.get('window').width;
  const pickerWidth = screenWidth / 3; // Assuming you have 3 Pickers

  return (

    <View style={styles.bigContainer}>
    {/* Bigger Container */}


    <View style={styles.fixedContainer}> 
      {/* Search & Filter container is inside this Fixed container */}

        {/* Search & Filter box*/}
        <View style={styles.searchAndFilter}>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          {/* <Text style={styles.searchText}>Search</Text> */}
          {searchPlaceHolder()}

        </View>
            <View style={styles.filterTextContainer}>              
              <Text style={styles.filterText}>Type</Text>
              <Text style={styles.filterText}>Color</Text>
              <Text style={styles.filterText}>Sleeve Size</Text>

            </View>
        {/* Filter boxes */}
        <View style={styles.pickerBox}>

            {/* <View style={styles.filterContainer}>   */}

                  <Picker style={styles.picker} itemStyle={styles.pick}
                      selectedValue={selectedType} 
                      onValueChange={(itemValue: Clothe.Type) => 
                          setSelectedType(itemValue) // Update the selectedType state 
                  }>
                  {typeKeys.map((typeKey) => (
                      <Picker.Item
                          key={typeKey}
                          label={typeKey}
                          value={Clothe.Type[typeKey as keyof typeof Clothe.Type]}
                      />
                      ))}
                  </Picker>
            {/* </View> */}



            {/* <View style={styles.filterContainer}>   */}
                {/* <Text style={styles.filterText}>Color</Text> */}
                    <Picker style={styles.picker} itemStyle={styles.pick}
                        selectedValue={selectedColor} 
                        onValueChange={(itemValue) => 
                            setSelectedColor(itemValue)
                        }>
                        {colorKeys.map((colorKey) => (
                            <Picker.Item
                                key={colorKey}
                                label={colorKey}
                                value={Clothe.Color[colorKey as keyof typeof Clothe.Color]}
                            />
                        ))}
                    </Picker>
            {/* </View> */}



            {/* <View style={styles.filterContainer}>   */}
                {/* <Text style={styles.filterText}>Sleeve Size</Text> */}
                    <Picker style={styles.picker} itemStyle={styles.pick}
                        selectedValue={selectedSize}
                        onValueChange={(itemValue, itemIndex) => 
                            setSelectedSize(itemValue)
                        }>
                        {sleeveSizeKeys.map((sleeveSizeKey) => (
                            <Picker.Item
                                key={sleeveSizeKey}
                                label={sleeveSizeKey}
                                value={Clothe.SleeveSize[sleeveSizeKey as keyof typeof Clothe.SleeveSize]}
                            />
                        ))}
                    </Picker>
              {/* </View> */}

            </View> 
            {/* filterbox end*/}
        
        </View> 
        {/* searchAndFilter end*/}



      </View> 
      {/* Fixed Container view */}





    <View style={styles.smallerContainer}> 
    {/* All components are inside this smaller container */}





      <ScrollView>

      {/* Outfit Buttons */}
      <View style={styles.outfitsButtonContainer}> 
      {/* All Outfit Button are inside this container */}


      {/* First Button without separator */}
      <View style={{paddingBottom:5}}>

        {/* Button */}
        <View style={styles.OutfitButton}> 
            <Pressable  
            // onPress={() => setModalVisible(true)}
            >
                <Text style={styles.OutfitTButtonTextStyle}>OutfitButton1</Text>
            </Pressable>
            
        </View>
        </View>


        {/* All other buttons */}

        {/* Button */}
        {addOutfitButton()}

        {/* Button */}
        {addOutfitButton()}

        {/* Button */}
        {addOutfitButton()}

        {/* Button */}
        {addOutfitButton()}

        {/* Button */}
        {addOutfitButton()}

        {/* Button */}
        {addOutfitButton()}

        {/* Button */}
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
    top:100,
    marginBottom:100,
    zIndex: 1, // Ensure it appears above other content
    ...Platform.select({
      ios: {
          width: "95%",
          top:120
      },
      android: {
          width: "95%",
          top:120,
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
    // zIndex: 1, // Ensure it appears above other content
    ...Platform.select({
      ios: {
          height: "20%",
          width: "95%",
      },
      android: {
          height: "25%",
          width: "100%",
          // top:5
      },
  }),
  },

  searchContainer:{  //search bar is inside this container
    // flex: 1,
    backgroundColor: '#D9D9D9',
    padding: 5, 
    margin: 10, //margin of the square - how big is it
    borderRadius: 10, //rounds edges
    // marginTop: 1,
    marginVertical: 1,
  },

  searchText:{  //styling for "Search" text
  fontWeight:'bold', color:'#9f9f9f', backgroundColor:'#D9D9D9'
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

filterContainer:{  //filterbox and text label are inside this container
  // alignItems: 'center',
  flexDirection: 'row',
  backgroundColor: '#F0F0F0',
  flex:1,
  // paddingHorizontal:12
  
},

filterTextContainer:{
  flexDirection:'row', 
  justifyContent:'space-evenly', 
  backgroundColor: "#F0F0F0", 
  left:5,
  ...Platform.select({
    ios: {
        width: "33%",
        bottom: 55,
    },
    android: {
        width: "100%",
        height: "25%",
        top: 7,
        left: 0,
    },
  }),

},

filterText: { //styling for *text* on top of filter dropdowns
  // paddingTop: 10,
  paddingHorizontal: 10,
  color:"black", 
  fontWeight:'bold'
},

pickerBox: { //container where pickers are located
    flexDirection: "row",
    justifyContent: 'space-evenly',
    // flex:1,
    height: "45%",
    backgroundColor:  'rgba(52, 52, 52, 0)', //'lightblue',
    ...Platform.select({
      ios: {
          width: "33%",
          bottom: 55,
      },
      android: {
          width: "100%",
          height: "55%",
          bottom: 0,
      },
  }), 
    



},
picker: { // picker outside design
    borderColor: 'black',
    borderRadius: 10,
    // width: pickerWidth, 

    ...Platform.select({
        ios: {
            width: "33%",
            bottom: 55,
        },
        android: {
            width: "40%",
            height: "55%",
            bottom: 0,
        },
    }),
},
pick: { 
    fontSize: 15,
    ...Platform.select({
        ios: {fontSize: 15},
        android: {fontSize: 0,},
    }),
    
},













  // Outfit Buttons component styles
  outfitsButtonContainer:{ // all outfits buttons are inside this container
    flex: 1,
    // backgroundColor: 'lightblue',
    padding: 10, 
    margin: 5, //margin of the square - how big is it
    borderRadius: 20, //rounds edges
    // marginBottom:120,
    // top:100,
    // zIndex: 1, // Ensure it appears above other content
    // maxHeight:480,
    // paddingBottom: 100,
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

  separator: { //added this to separate each button a smidge, is added just before a new button
    marginVertical: 10,
    height: .5,
    width: '80%',
    backgroundColor: 'white'
  },

  OutfitButton: {
    borderRadius: 15,
    padding: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0.9,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,    
    backgroundColor: '#F0F0F0' //'#F194FF' // '#C100E0' //'#f8f4f4'
  },
  OutfitTButtonTextStyle: {
    color: '#C100E0',
    fontWeight: 'bold',
    // textAlign: 'center',
  },

  
});
