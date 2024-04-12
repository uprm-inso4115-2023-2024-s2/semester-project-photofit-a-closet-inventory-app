import {Button, Pressable, Text, StyleSheet, Alert, TextInput} from 'react-native';
import {View} from '@/components/Themed';
import {useNavigation} from "@react-navigation/native";
import { MaterialIcons } from '@expo/vector-icons'; // Import icons from Expo vector icons

import {useState} from "react";
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import Draggable from '@react-navigation/native';
// import { PanResponder } from 'react-native';
// import SortableList from '@react-navigation/native';


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


    return (
        <View style={styles.container}>

            <View style={styles.container2}>

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
            backgroundColor: '#F0F0F0' 
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


        </View> {/* Button Container */}
        </View> {/* container 2*/}

        </View> // container
    );
}

const styles = StyleSheet.create({

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







    container: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        // backgroundColor: 'black', //ffff
    },
    container2: { //all buttons are inside this smaller container
        flex: 1,
        backgroundColor: 'white',
        padding: 25, 
        margin: 10, //margin of the square - how big is it
        borderRadius: 20, //rounds edges

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
    buttonContainer:{
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        flexDirection: 'row',
        // flexWrap: 'wrap',
        // backgroundColor: 'black',
        margin: 10, //margin of the square - how big is it
        justifyContent:'flex-end'
    
    },

    OutfitButton: {
        borderRadius: 15,
        padding: 20,
        elevation: 2,
        backgroundColor: '#F0F0F0', //'#F194FF', //'#f8f4f4'
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
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
        justifyContent: 'center',
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
