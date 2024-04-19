import { Button, ScrollView, StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';

import React, {useState} from 'react';
import {Alert, Modal, Pressable, FlatList, TouchableOpacity } from 'react-native';
import {SafeAreaView, TextInput} from 'react-native';

import { Clothe } from '@/classes/clothe';
import {useNavigation} from "@react-navigation/native";
import {Picker} from '@react-native-picker/picker';

import EditOutfits from '@/app/edit'

/* To Do: 
- add photos of "outfits" inside the button

- add a widget or function to add buttons automatically on page (after creating outfit in "Make Your Outfit" page)
- fully design edit page: (in figma and for implementation)
    -> include delete icon/feature
    -> include move icon/feature
    -> maybe include a feature to be able to change clothing article in same
- add functionality in Edit Outfit Page: 
    -> eliminate outfits - delete feature
    -> move outfit button - arrange outfits feature
- continue implementing AddOutfit / Make your Outfit feature:
  - add a filters search bar: includes three dropdown: Color, Type, Sleeve Size, etc
  - has photos of their closet / database

  --see https://www.figma.com/file/ojPtY7fqcm1botgu9QryZf/PhotoFit-UI?type=design&node-id=0-1&mode=design&t=xGQxI8btmzRFtTNz-0
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

  
*/


// Add Outfit Button
function addOutfitButton(){

  return(
    <View style={{paddingBottom:5}}>
    {/* Separator */}
      <View style={styles.separator} lightColor="#ffff" darkColor="rgba(255,255,255,0.1)" />

    {/* Button */}
      <View style={styles.OutfitButton}> 
        <Pressable  
          // onPress={() => setModalVisible(true)}
          >
            <Text style={styles.textStyle}>Outfit</Text>
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

  // FlatList Components
  // const outfits = [
  // { id: 1, name: 'Outfit 1' },
  // { id: 2, name: 'Outfit 2' },
  // { id: 3, name: 'Outfit 3' },
  // // Add more outfits as needed
  // ];
  // interface Outfit {
  //   id: number;
  //   name: string;
  // }
  
  // const renderItem = ({item }: { item: Outfit }) => (
  //     <TouchableOpacity style={styles.buttonFlatList}>
  //       <Text>{item.name}</Text>
  //     </TouchableOpacity>
  // );

  const [modalVisible, setModalVisible] = useState(false);
  const [isEditScreen, setIsEditScreen] = useState(false);



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






  return (



    <View style={styles.bigContainer}>{/* Bigger Container */}
      {isEditScreen ? (
        <EditOutfits />
      ) : (


    <View style={styles.smallerContainer}> {/* All components are inside this smaller container */}

      <View style={styles.fixedContainer}> 
      {/* Search & Filter container is inside this Fixed container */}

        {/* Search & Filter box*/}
        <View style={styles.searchAndFilter}>

        {/* // Search Bar */}
        <View style={styles.searchContainer}>
          {/* <Text style={styles.searchText}>Search</Text> */}
          {searchPlaceHolder()}

        </View>

        {/* Filter boxes */}
        <View style={styles.pickerBox}>

            <View style={styles.filterContainer}>  
              <Text style={styles.filterText}>Type</Text>
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
            </View>



            <View style={styles.filterContainer}>  
                <Text style={styles.filterText}>Color</Text>
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
            </View>



            <View style={styles.filterContainer}>  
                <Text style={styles.filterText}>Sleeve Size</Text>
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
              </View>

            </View> {/* filterbox end*/}
        
        </View> {/* searchAndFilter end*/}



      </View> {/* Fixed Container view */}



    {/* FlatList */}
      {/* <View style={styles.container2}>
      <FlatList
        data={outfits}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        numColumns={2} // Adjust the number of columns as needed
      />
      </View> */}

    <ScrollView>

      {/* Outfit Buttons */}
      <View style={styles.outfitsButtonContainer}> 
      {/* All Outfit Button are inside this container */}


      {/* First Button without separator */}
      <View style={{paddingBottom:5}}>

        {/* Button */}
        <View style={styles.OutfitButton}> 
            <Pressable  // onPress={() => setModalVisible(true)}
            >
                <Text style={styles.textStyle}>Outfit</Text>
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


      </View>
    </ScrollView>




   
    </View> //{/* smaller container */}

    )} {/* if isEditScreen true finishing ")}" */}
    </View>    //{/* bigger container */}
    

  );
};



// Styles
const styles = StyleSheet.create({
  bigContainer: { //all components are in this parent container
    flex: 1,
    backgroundColor: 'black', //ffff

    // alignItems: 'center',
    // justifyContent: 'center',
    // flexDirection: 'column',
    // flexWrap: 'wrap',
    // width: '100%',
    // marginVertical: 20,
  },
    
  smallerContainer: { //all buttons are inside this smaller container
    flex: 1,
    backgroundColor: 'pink',
    padding: 10, 
    margin: 5, //margin of the square - how big is it
    borderRadius: 20, //rounds edges

    // alignItems: 'center', //shortens length of button to center
    // justifyContent: 'center', //centers buttons in the container (horizontally)
    // marginTop: 10,
    // flexDirection: 'column',
    // flexWrap: 'wrap',
    // width: '100%',
    // height:'20%',
    // marginVertical: 10,
  },

  fixedContainer: {
    position: 'relative',
    top: 0,
    left: 0,
    right: 0,
    bottom:10,
    backgroundColor: 'lightblue',
    zIndex: 1, // Ensure it appears above other content
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
    marginTop:1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0.9,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4, 
    // ...Platform.select({
    //     ios: {
    //         height: "20%",
    //         width: "77%",
    //     },
    //     android: {
    //         height: "15%",
    //         width: "90%",
    //     },
    // }),
},

filterContainer:{  //filterbox and text label are inside this container
  alignItems: 'center',
  flexDirection: 'column',
  backgroundColor: '#F0F0F0'
  
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
    height: "45%",
    backgroundColor: 'rgba(52, 52, 52, 0)',     
},
picker: { // picker outside design
    borderColor: 'black',
    borderRadius: 10,
    // ...Platform.select({
    //     ios: {
    //         width: "33%",
    //         bottom: 55,
    //     },
    //     android: {
    //         width: "35%",
    //         height: "25%",
    //         bottom: 0,
    //     },
    // }),
},
pick: { // picker design once an item is picked??? Honestly no idea
    fontSize: 15,
    // ...Platform.select({
    //     ios: {fontSize: 15},
    //     android: {fontSize: 0,},
    // }),
    
},













  // Outfit Buttons component styles
  outfitsButtonContainer:{ // all outfits buttons are inside this container
    flex: 1,
    backgroundColor: 'lightblue',
    padding: 10, 
    margin: 5, //margin of the square - how big is it
    borderRadius: 20, //rounds edges
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
    // elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0.9,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,    
    backgroundColor: 'red' ,//'#F0F0F0' //'#F194FF' // '#C100E0' //'#f8f4f4'
  },
  textStyle: {
    color: '#C100E0',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  
});
