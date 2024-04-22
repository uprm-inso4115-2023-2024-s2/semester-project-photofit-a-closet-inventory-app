import { StyleSheet, Platform, Dimensions} from 'react-native';
import { Text, View } from '@/components/Themed';

import React, {useState} from 'react';

import { Clothe } from '@/classes/clothe';
import {Picker} from '@react-native-picker/picker';



export function outfitFilterBoxes() {

  const [selectedType, setSelectedType] = useState(Clothe.Type.Unknown);
  const [selectedColor, setSelectedColor] = useState(Clothe.Color.Unknown); // Default value
  const [selectedSize, setSelectedSize] = useState(Clothe.SleeveSize.Unknown); // Default value
  
  const typeKeys = Object.keys(Clothe.Type).filter(key => isNaN(Number(key)));
  const colorKeys = Object.keys(Clothe.Color).filter(key => isNaN(Number(key)));
  const sleeveSizeKeys = Object.keys(Clothe.SleeveSize).filter(key => isNaN(Number(key)));

  return (
    
    <View style={styles.buttonContainer}>

        {/* Search & Filter box*/}

        {/* Filter Titles */}
            <View style={styles.filterTextContainer}>              
              <Text style={styles.filterText}>Type</Text>
              <Text style={styles.filterText}>Color</Text>
              <Text style={styles.filterText}>Sleeve Size</Text>

            </View>

        {/* Filter boxes */}
        <View style={styles.pickerBox}>
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

      </View>
  );
}

// Styles
const styles = StyleSheet.create({
  buttonContainer: { //all components are in this parent container
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'column',
    backgroundColor: "#F0F0F0", 
    margin: 10, 
    marginBottom:0
    // backgroundColor: 'black', //ffff
  },
    
  smallerContainer: { //all buttons are inside this smaller container
    flex: 1,
    // backgroundColor: 'pink',
    padding: 10, 
    margin: 5,
    borderRadius: 20,
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
    // backgroundColor: 'lightblue',
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
  paddingHorizontal: 10,
  color:"black", 
  fontWeight:'bold'
},

pickerBox: { //container where pickers are located
    flexDirection: "row",
    justifyContent: 'space-evenly',
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
});