import {Button, Pressable, Text, StyleSheet, Alert, TextInput, ScrollView} from 'react-native';
import {View} from '@/components/Themed';
import {useState} from "react";
import {useNavigation} from "@react-navigation/native";
import React from 'react';

import { Clothe } from '@/classes/clothe';
import {Picker} from '@react-native-picker/picker';


export default function EditScreen() {

    const [inputValue, setInputValue] = useState('');
    const navigation = useNavigation();

    const [selectedType, setSelectedType] = useState(Clothe.Type.Unknown);
    const [selectedColor, setSelectedColor] = useState(Clothe.Color.Unknown); // Default value
    const [selectedSize, setSelectedSize] = useState(Clothe.SleeveSize.Unknown); // Default value
    
    const typeKeys = Object.keys(Clothe.Type).filter(key => isNaN(Number(key)));
    const colorKeys = Object.keys(Clothe.Color).filter(key => isNaN(Number(key)));
    const sleeveSizeKeys = Object.keys(Clothe.SleeveSize).filter(key => isNaN(Number(key)));
  
  
    const handleCancel = () => {
        // Optionally, you can reset any state or clear any data here
        setInputValue('');
        // Navigate back to the previous screen or any desired screen
        navigation.goBack();
    };
    
    // Update the title dynamically
    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Make Your Outfit',
            headerTitleAlign: 'center',

        });
    }, [navigation]);

    return (
        <View style={styles.bigContainer}>

    <View style={styles.smallerContainer}>


        {/* Filter Box */}
        <View style={styles.filtersOutsideContainer}>
            
            {/* add "Filters" title */}
            <View style={styles.filterTitle}>  
                <Text style={styles.filterTitleText}>Filters</Text>
            </View>

            {/* add filter dropdowns */}
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

                </View> {/* filterbox with dropdowns end*/}

        </View> {/* Outside Filter Container ends */}




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

            </ScrollView>
        
        {/* Name of Outfit & Save */}


        <View style={styles.nameOfOutfitAndButtonsOutsideContainer}>

            <Text style={styles.nameOfOutfitText}>Name of Outfit</Text>

        <View style={styles.saveAndCancelButtonContainer}>

            {/* cancel Button */}
                <View style={styles.cancelButton}> 
                    <Pressable onPress={handleCancel} >
                        <Text style={styles.cancelButtonText}>Cancel</Text>
                    </Pressable>
                </View>

            <View style={styles.separator} lightColor="#ffff" darkColor="rgba(255,255,255,0.1)" />

            {/* save Button */}
                <View style={styles.saveButton}> 
                    <Pressable onPress={handleCancel} >
                        <Text style={styles.saveButtonText}>Save</Text>
                    </Pressable>
                </View>

         </View> {/* Save & Cancel Button container end */}
         </View> {/* smaller container with Name of Outfit, Save and Cancel Buttons*/}

        </View> {/* preview outfits container end */}

        </View> {/* smaller container with Filter Box + Outfit Clothe Preview + Save & Cancel Button */}




        </View> // bigger container

        
    );
}

const styles = StyleSheet.create({
    bigContainer: { //all smaller containers are inside this big container
        flex: 1,
        backgroundColor: 'black',
        
        // alignItems: 'center',
        // justifyContent: 'center',

    },
    smallerContainer:{ //smaller containers

        flex: 1,
        backgroundColor: 'pink',
        padding: 10, 
        margin: 5, //margin of the square - how big is it
        borderRadius: 20, //rounds edges
        marginBottom:1
    },

    filtersOutsideContainer: { //Filter Title and filters are inside this container
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
    },
    
    outfitsContainer:{ //container that previews the outfits
        flex: 1,
        backgroundColor: 'white',
        padding: 25, 
        margin: 10, //margin of the square - how big is it
        borderRadius: 20, //rounds edges
        paddingHorizontal:10,
        paddingVertical: 10,
        // justifyContent:'flex-end',
        // alignContent:'flex-end',
        // flexDirection: 'column',
        // minHeight: '55%', 
        // maxWidth: '80%',
        top:-10,
        marginBottom:-10
        
    },


    // Filter Boxes
    filterContainer:{  //filterbox and text label are inside this container
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#F0F0F0',
        
      },
      filterTitle:{
        alignItems: 'center',
        backgroundColor: '#F0F0F0' ,//'#D9D9D9'
      },
      filterTitleText:{
        fontWeight:'bold'
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

















    // Name of Outfit & Save/Cancel component styles

    separator: { //added this to separate each button a smidge, is added just before a new button
        marginVertical: 20,
        height: 10,
        width: '3%',
        backgroundColor: '#F0F0F0',
    },

    nameOfOutfitAndButtonsOutsideContainer:{
        // flex: 1,
        // padding: 25, 
        // margin: 10, //margin of the square - how big is it
        borderRadius: 20, //rounds edges
        // paddingHorizontal:10,
        // paddingVertical: 10,
        // justifyContent:'flex-end',
        // alignContent:'flex-end',
        // flexDirection: 'column',
        // minHeight: '10%', 
        // maxWidth: '80%'


        position: 'relative',
        top: 0,
        left: 0,
        right: 0,
        // bottom:10,
        marginHorizontal:-19,
        paddingTop:10,
        backgroundColor: '#F0F0F0',
        zIndex: 1, // Ensure it appears above other content
        
    },
    nameOfOutfitText:{
        alignItems:'center',
        // flex: 1,
        backgroundColor: 'white',
        padding: 5, 
        margin: 10, //margin of the square - how big is it
        borderRadius: 10, //rounds edges
        // marginTop: 1,
        marginVertical: 1,
        fontWeight: 'bold',
    },

    saveAndCancelButtonContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        // flexWrap: 'wrap',
        backgroundColor: '#F0F0F0',
        margin: 10, //margin of the square - how big is it
        // justifyContent: 'space-between'
        // minHeight: '50%', 
        // maxWidth: '50%'
        marginVertical: 1,

    },

    cancelButton: {
        borderRadius: 10,
        padding: 10,
        // width: '11%',
        maxWidth: '50%', 
        backgroundColor: 'red'
    },
    cancelButtonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold'
    },

    saveButton: {
        borderRadius: 10,
        padding: 10,
        // width: '11%',
        maxWidth: '50%', 
        backgroundColor: 'limegreen'
    },
    saveButtonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        
    },
});
