import { Button, ScrollView, StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

import React, {useState} from 'react';
import {Alert, Modal, Pressable, FlatList, TouchableOpacity } from 'react-native';

import EditOutfits from '@/app/edit'

/* To Do: 
- add photos of "outfits" inside the button on the left side (--> *photo* <-- Outfits)
- add an "Edit" feature functional: 
    -> eliminate outfits
    -> move outfit button (arrange outfits)

- add "AddOutfit" feature:
  -"Make your Outfit" title, upper middle part
  - add a filters search bar: includes three dropdown: Color, Type, Sleeve Size (???)
  - has photos of their closet / database
  - just at the bottom, a text field to name the outfit, "Name for Outfit"
  - just under that, a cancel button and a save button

  --see https://www.figma.com/file/ojPtY7fqcm1botgu9QryZf/PhotoFit-UI?type=design&node-id=0-1&mode=design&t=xGQxI8btmzRFtTNz-0


  Finished: 
  - adding "Outfits" buttons 
  - added the "Add Outfit" *plus* symbol on upper right corner
      -> added the cancel button and a save button

  Working right now: 
  - redo "Edit" page

  What i did: 
  Mar 1 - 11
  - added an edit button for the OutfitsEdit page on top left corner, as well as
    -> gotta change that "edit" Title (Link)
    -> save does the same as cancel
  - changed buttons to modals but figure it be better to leave as buttons, as modals are for emergency mostly
  - tinkered with a flatlist to project buttons and outfits but left it halfway, needed access to database
  - added an addOutfit button on the top right corner
    -> gotta change that "addOutfit" Title (Link)
    -> save does the same as cancel

    Mar 12, 
    -> deleted modals
    -> added button to add new buttons (already done->addOutfit top right corner)
    -> changed title "/addOutfit" to "Make Your Outfit", centered it as well
    -> changed title "/edit" to "Edit", centered it as well

    
    - add new buttons (function?)
    - checking how to "preview" an image -> backend / database

    Mar 13,
    -> make edit page be the same page as outfits 
      - but with options to remove or arrange outfit buttons
      - remove the back "<-" button from the top left corner, 
        1) either ask them it they actually want to go back
        2) or maybe just remove it completely, just add the cancel button

    -> added function to add outfit buttons whenever necessary (manually)

    Mar 14-21,
    - added UI components for Edit feature: 
    -> added icon to eliminate outfits
    -> added drag icon move outfit (arrange outfits)
    -> added save button to save progress (right now it only goes back to main Outfit page)
    - started implementation of Make Your Outfit page
    -> added save and cancel button (right now both go back to main Outfit page)
    -> separated each major part: started on the name of outfit section
*/


// Add Outfit Button
function addOutfitButton(){

  return(
    <View>
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

      {/* inside container 1 */}
      <View style={styles.container2}> 

        {/* Button */}

        <View style={styles.OutfitButton}> 
            <Pressable  // onPress={() => setModalVisible(true)}
            >
                <Text style={styles.textStyle}>Outfit</Text>
            </Pressable>
            
        </View>


        {/* Separator */}
        <View style={styles.separator} lightColor="#ffff" darkColor="rgba(255,255,255,0.1)" />
        <View style={styles.OutfitButton}> 
            <Pressable  // onPress={() => setModalVisible(true)}
            >
                <Text style={styles.textStyle}>Outfit</Text>
            </Pressable>
            
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
    height: 1,
    width: '80%',
  },

  // background:{
  //   backgroundColor: 'white',
  // },

  buttonFlatList: {
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'pink',
    borderRadius: 10,
    padding: 10,
    margin: 5,
    flex: 1,
  },



// Modals - View Outfits
  backgroundModal: { //background behind modal
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    marginTop: 22,
    marginBottom: 55,
    marginHorizontal: 30,
    borderRadius: 20,
    backgroundColor: "white",

  },
  modalBox: { //modal's box per se. not the background
    margin: 20,
    backgroundColor: 'pink',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 20,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF', //#F194FF (pink) #f4f0ec lightish grey
  },
  buttonClose: {
    backgroundColor: '#2196F3', //#f2f3f4
  },
  // textStyle: {
  //   color: 'white', //'#F194FF'
  //   fontWeight: 'bold',
  //   textAlign: 'center',
  // },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },




  titleEdit: {
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
  },
  modalEditView: {
    margin: 80,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonEdit:{
    backgroundColor: 'lightblue',
  },
  outsideBox:{
    flex: 1,
    // backgroundColor: 'lightgrey',
    // padding: 25, 
    // margin: 10, //margin of the square - how big is it
    // borderRadius: 20, //rounds edges
    marginTop: 22,

  },
  containerEdit:{
    flex: 1,
    backgroundColor: 'lightgrey',
    // flexDirection: 'row',

    // padding: 25, 
    // margin: 10, //margin of the square - how big is it
    // borderRadius: 20, //rounds edges
  },
  buttonOpenEdit: {
    backgroundColor: 'lightblue',
  },
  buttonCloseEdit: {
    backgroundColor: '#2196F3', //#f2f3f4
  },
  textStyleEdit: {
    color: 'white', //'#F194FF'
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalTextEdit: {
    marginBottom: 15,
    textAlign: 'center',
  },




  OutfitButton: {
    borderRadius: 10,
    padding: 20,
    elevation: 2,
    backgroundColor: '#F194FF' // '#C100E0' //'#f8f4f4'
  },
  textStyle: {
    color: 'white', //'#c404f0' //'#F194FF'
    fontWeight: 'bold',
    textAlign: 'center',
  },

  
});











// const CustomTitle = () => {
// return (
//   <View style={{ flexDirection: 'column' }}>
//     <Text style={{ fontWeight: 'bold', fontSize: 18 }}>John Doe</Text>
//     <Text style={{ fontStyle: 'italic', fontSize: 12 }}>
//       Minister of Magic
//     </Text>
//   </View>
// );
// };


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'ffff',

//     flexDirection: 'column',
//     flexWrap: 'wrap',
//     width: '100%',
//     // marginVertical: 20,
//   },
//   title: {
//     marginTop: 16,
//     paddingVertical: 8,
//     borderWidth: 4,
//     borderColor: '#20232a',
//     borderRadius: 6,
//     backgroundColor: '#61dafb',
//     color: '#20232a',
//     textAlign: 'center',
//     fontSize: 30,
//     fontWeight: 'bold',
//   }, 
//   container2: {
//     flex: 1,
//     alignItems: 'center',
//     // justifyContent: 'center', //centers buttons in the container (horizontally)
//     backgroundColor: 'white',

//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     width: '100%',
//     marginVertical: 10,
//   },
//   container3:{
//     flexDirection: 'row',
//     height: 100,
//     padding: 20,
//     backgroundColor: 'red',
//     flex: 0.5
//   },



//   contentView: {
//     flex: 1,
//   },
//   buttonsContainer: {
//     flexDirection: 'column',
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: '100%',
//     marginVertical: 20,
//   },
//   subHeader: {
//     backgroundColor : "#2089dc",
//     color : "white",
//     textAlign : "center",
//     paddingVertical : 5,
//     marginBottom : 10
//   }



// });







// History
// First Button
        // {/* First Button */}
        // {/* <Button
        //   title="Outfit"
        //   // onPress={() => setModalVisible(true)}
        //   color="#F194FF"
        // /> */}

        // {/* Close button and blue background inside Button component */}
        // {/* <Modal visible={modalVisible}>
        //   <View style={{flex:1, backgroundColor: "lightblue", padding:60}}>
        //     <Button title="close" color="red"/>
        //   </View>
        // </Modal> */}

// Container 2
      // {/* inside container 2 */}
      // <View style={styles.container2}>

      //   {/* Modal 3*/}
      //   {/* <View style={styles.background}> <Text> {"\n"} </Text> </View> */}
      //   <View style={styles.separator} lightColor="#ffff" darkColor="rgba(255,255,255,0.1)" />

      //     <Modal
      //         animationType="slide"
      //         transparent={true}
      //         visible={modalVisible}
      //         onRequestClose={() => {
      //           Alert.alert('Modal has been closed.');
      //           setModalVisible(!modalVisible);
      //         }}>
      //         <View style={styles.backgroundModal}>

      //           <View style={styles.modalBox}>
      //             <Text style={styles.modalText}>Photo of Outfit *here*</Text>
      //             <Pressable
      //               style={[styles.button, styles.buttonClose]}
      //               onPress={() => setModalVisible(!modalVisible)}>
      //               <Text style={styles.textStyle}>Go Back</Text>
      //             </Pressable>
      //           </View>

      //         </View>
      //       </Modal>

      //       <Pressable
      //         style={[styles.button, styles.buttonOpen]}
      //         onPress={() => setModalVisible(true)}>
      //         <Text style={styles.textStyle}>Outfits</Text>
      //       </Pressable>


      //   {/* <View style={styles.background}> <Text> {"\n"} </Text> </View> */}
      //   <View style={styles.separator} lightColor="#ffff" darkColor="rgba(255,255,255,0.1)" />
        
      //   </View>  {/* container 2*/}