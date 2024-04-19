import {Button, Pressable, Text, StyleSheet, Alert, TextInput, ScrollView} from 'react-native';
import {View} from '@/components/Themed';
import {useNavigation} from "@react-navigation/native";
import { MaterialIcons } from '@expo/vector-icons'; // Import icons from Expo vector icons

import {useState} from "react";
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import Draggable from '@react-navigation/native';
// import { PanResponder } from 'react-native';
// import SortableList from '@react-navigation/native';

import { Clothe } from '@/classes/clothe';
import {Picker} from '@react-native-picker/picker';
import {SafeAreaView} from 'react-native';




/*
    Edit Page 
    **same page but edittable actions
    - Eliminate Outfit Buttons - remove outfits
    - Move Outfit Buttons - arrange outfits
    
    UI implemented, falta las acciones de mover y delete
    - mover esta in progress
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
        <View style={{flex: 1,
            flexDirection: 'row', 
            alignItems:'center', 
            justifyContent:'space-between',
            backgroundColor: '#F0F0F0' //'#F194FF'
            
            }}>

                {/* drag icon */}
                <Icon
                    name="drag"
                    size={30}
                    color="#C100E0"
                    onPress={() => console.log('pressed')
                }
                />
                {/* two lines drag icon */}
                {/* <MaterialIcons 
                    name="drag-handle" 
                    size={24} 
                    color="white" 
                    style={styles.icon} 
                    onPress={() => console.log('pressed')}
                /> */}

                <Text style={styles.textStyle}>Outfit</Text>

                {/* trashcan icon */}
                <Icon
                    name="delete"
                    size={24}
                    color="#C100E0"
                    onPress={() => console.log('pressed')}
                />

            </View>                

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
  
export default function EditOutfits() {

    const [inputValue, setInputValue] = useState('');
    const navigation = useNavigation();
    const deleteOutfitButton = () => {

    }
    const arrangeOutfitButton = () => {
        
    }

    const handleCancel = () => {
        setInputValue('');
        // Navigate back to the previous screen or any desired screen
        navigation.goBack(); // Assuming you're using a Stack Navigator
    };
    const handlePress = () => {
        // Handle press event
      };


    // Update the title dynamically
    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Edit',
            headerTitleAlign: 'center',

        });
    }, [navigation]);





    const [selectedType, setSelectedType] = useState(Clothe.Type.Unknown);
    const [selectedColor, setSelectedColor] = useState(Clothe.Color.Unknown); // Default value
    const [selectedSize, setSelectedSize] = useState(Clothe.SleeveSize.Unknown); // Default value
    
    const typeKeys = Object.keys(Clothe.Type).filter(key => isNaN(Number(key)));
    const colorKeys = Object.keys(Clothe.Color).filter(key => isNaN(Number(key)));
    const sleeveSizeKeys = Object.keys(Clothe.SleeveSize).filter(key => isNaN(Number(key)));
  

    return (

        <View style={styles.bigcontainer}> {/* bigger container */}


            <View style={styles.smallercontainer}> {/* smaller container with both filter box + outfits buttons and save button */}


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






                        

        <View style={styles.outfitsButtonContainer}> {/* container with outfits buttons & save button */}
        <ScrollView>


        {/* First Button without separator */}
            <View style={{paddingBottom:5}}>

        {/* Outfit Buttons */}
        
        {/* First Button */}
            <View style={styles.OutfitButton}>
          <Pressable  
            // onPress={() => setModalVisible(true)}
            >
        <View style={{flex: 1, 
            flexDirection: 'row', 
            alignItems: 'center', //'flex-start', 
            justifyContent:'space-between',
            backgroundColor: '#F0F0F0', 
            // marginHorizontal:10
            // '#F194FF'
            }}>

                {/* drag icon */}
                <Icon
                    name="drag"
                    size={30}
                    color="#C100E0"
                    onPress={() => console.log('pressed')}
                />
                {/* two lines drag icon */}
                {/* <MaterialIcons 
                    name="drag-handle" 
                    size={24} 
                    color="white" 
                    style={styles.icon} 
                    onPress={() => console.log('pressed')}
                /> */}

                <Text style={styles.textStyle}>Outfit</Text>

                {/* trashcan icon */}
                <Icon
                    name="delete"
                    size={24}
                    color="#C100E0"
                    onPress={() => console.log('pressed')}
                />

            </View>                

          </Pressable>
          </View>                


        </View>


        {/* Button */}
        {addOutfitButton()}
        
        {/* Button */}
        {addOutfitButton()}

        {/* Button */}
        {addOutfitButton()}

        {/* Button */}
        {addOutfitButton()}

        {/* Button
        {addOutfitButton()}        */}
 




        {/* Save & Cancel Button */}
        <View style={styles.buttonContainer}>


            {/* cancel Button */}
                {/* <View style={styles.cancelButton}> 
                    <Pressable onPress={handleCancel} >
                        <Text style={styles.cancelButtonText}>Cancel</Text>
                    </Pressable>
                </View> */}


            {/* Separator */}
            <View style={styles.separator2} lightColor="#ffff" darkColor="rgba(255,255,255,0.1)" />


            {/* save Button */}
                <View style={styles.saveButton}> 
                    <Pressable onPress={handleCancel} >
                        <Text style={styles.saveButtonText}>Save</Text>
                    </Pressable>
                </View>


        </View> {/* Save Button Container */}        
        
        </ScrollView>

        </View> {/* smaller container with Outfits Buttons & Save Button*/}
        
        

        </View> {/* smaller container with Filter Box + Outfit Buttons and Save Button*/}



        </View> //{/* bigger container */}
        
        
    );
}

const styles = StyleSheet.create({    
    bigcontainer: { //all components are in this parent container
        flex: 1,
        backgroundColor: 'black', //ffff

        // alignItems: 'center',
        // justifyContent: 'center',
        // flexDirection: 'column',
        // flexWrap: 'wrap',
        // width: '100%',
        // marginVertical: 20,
        },
        
    smallercontainer: { //all components are inside this smaller container
        flex: 1,
        backgroundColor: 'pink',
        padding: 10, 
        margin: 5, //margin of the square - how big is it
        borderRadius: 20, //rounds edges
        // marginHorizontal: 10

        // alignItems: 'center', //shortens length of button to center
        // justifyContent: 'center', //centers buttons in the container (horizontally)
        // marginTop: 10,
        // flexDirection: 'column',
        // flexWrap: 'wrap',
        // width: '100%',
        // height:'20%',
        // marginVertical: 10,
        },



    // Search components styles

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













    draggableContainer: {
        width: '80%',
        height: 200,
        backgroundColor: '#ccc',
      },
      draggable: {
        width: 50,
        height: 50,
        backgroundColor: 'blue',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
      },
      draggableInner: {
        width: 40,
        height: 40,
        backgroundColor: 'white',
        borderRadius: 20,
      },



    // Outfit Buttons component styles
    outfitsButtonContainer:{ // all outfits buttons AND save button are inside this container
        flex: 1,
        backgroundColor: 'lightblue',
        padding: 10, 
        margin: 5, //margin of the square - how big is it
        borderRadius: 20, //rounds edges
    },
    buttonContainer:{
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        flexDirection: 'row',
        // flexWrap: 'wrap',
        // backgroundColor: 'black',
        margin: 10, //margin of the square - how big is it
        justifyContent:'flex-end',
        marginHorizontal:10,
    
    },

    separator: { //added this to separate each button a smidge, is added just before a new button
        marginVertical: 10,
        height: .5,
        width: '80%',
      },
    separator2: { //added this to create a space between cancel and save buttons
        marginVertical: 20,
        height: 10,
        width: '3%',
    },

    OutfitButton: {
        borderRadius: 15,
        padding: 17,
        elevation: 2,
        backgroundColor: 'red', //'#F0F0F0', //'#F194FF', //'#f8f4f4'
        shadowColor: '#000',
        shadowOffset: {
          width: 0.9,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,   
        // maxHeight:60, 
      },

      textStyle: {
        color: '#C100E0', //'white', //'#c404f0' //'#F194FF'
        fontWeight: 'bold',
        textAlign: 'center',
        // justifyContent: 'center',
      },


    cancelButton: {
        borderRadius: 10,
        padding: 10,
        height:'40%',
        backgroundColor: 'red',
        justifyContent: 'center'

    },
    cancelButtonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold'
    },

    saveButton: {
        borderRadius: 10,
        padding: 10,
        // height:'40%',
        maxHeight:35,
        backgroundColor: 'limegreen',
        justifyContent: 'center'
    },
    saveButtonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        
    },

});
