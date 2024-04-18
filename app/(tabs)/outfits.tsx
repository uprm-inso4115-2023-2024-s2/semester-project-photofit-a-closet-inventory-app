import { Button, ScrollView, StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';

import React, {useState} from 'react';
import {Alert, Modal, Pressable, FlatList, TouchableOpacity } from 'react-native';

import EditOutfits from '@/app/edit'

/* To Do: 
- add photos of "outfits" inside the button
- add filter box on top of page

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

  return (

    <ScrollView>


    <View style={styles.container}>
      {isEditScreen ? (
        <EditOutfits />
      ) : (

    <View style={styles.container}>

    {/* FlatList */}
      {/* <View style={styles.container2}>
      <FlatList
        data={outfits}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        numColumns={2} // Adjust the number of columns as needed
      />
      </View> */}

      {/* inside container of buttons */}
      <View style={styles.container2}> 

      <View style={{paddingBottom:5}}>

        {/* Button */}
        <View style={styles.OutfitButton}> 
            <Pressable  // onPress={() => setModalVisible(true)}
            >
                <Text style={styles.textStyle}>Outfit</Text>
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


      </View>




    {/* container */}</View> 

    )}
    </View>    
    
    
    </ScrollView>

  );
};



// Styles
const styles = StyleSheet.create({
  container: { //all components are in this parent container
    flex: 1,
    // backgroundColor: 'black', //ffff

    // alignItems: 'center',
    // justifyContent: 'center',
    // flexDirection: 'column',
    // flexWrap: 'wrap',
    // width: '100%',
    // marginVertical: 20,
  },
    
  container2: { //all buttons are inside this smaller container
    flex: 1,
    backgroundColor: 'white',
    padding: 25, 
    margin: 10, //margin of the square - how big is it
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
    backgroundColor: '#F0F0F0' //'#F194FF' // '#C100E0' //'#f8f4f4'
  },
  textStyle: {
    color: '#C100E0',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  
});
