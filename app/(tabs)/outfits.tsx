import { Button, ScrollView, StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

import React, {useState} from 'react';
import {Alert, Modal, Pressable, FlatList, TouchableOpacity } from 'react-native';
import {Link, Tabs} from 'expo-router';


/* To Do: 
- add the "Add Outfit" *plus* symbol on upper right corner || or on the bottom of the screen whichever is better
- add photos of "outfits" inside the button on the left side (--> *photo* <-- Outfits)
- add an "Edit" feature
  --see https://www.figma.com/file/ojPtY7fqcm1botgu9QryZf/PhotoFit-UI?type=design&node-id=0-1&mode=design&t=xGQxI8btmzRFtTNz-0

  -"Make your Outfit" title, upper middle part
  - add a filters search bar: includes three dropdown: Color, Type, Sleeve Size (???)
  - has photos of their closet / database
  - just at the bottom, a text field to name the outfit, "Name for Outfit"
  - just under that, a cancel button and a save button

  **you can make this page be a modal type of deal

  Just finished: - adding "Outfits" buttons 
  Working right now: - add "Edit" button-modal page
  What i did:
  - added an edit button for the OutfitsEdit page on top left corner, as well as
    -> gotta change that "edit" Title (Link)
    -> save does the same as cancel
  - changed buttons to modals but figure it be better to leave as buttons, as modals are for emergency mostly
  - tinkered with a flatlist to project buttons and outfits but left it halfway, needed access to database
  - added an addOutfit button on the top right corner
    -> gotta change that "addOutfit" Title (Link)
    -> save does the same as cancel
*/


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
  return (
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
      {/* Verifying how buttons and modals look inside one singular container */}


        {/* Button */}

        <View style={styles.OutfitButton}> 
            <Pressable>
                <Text style={styles.textStyle}>Outfit</Text>
            </Pressable>
        </View>

        {/* First Button */}
        {/* <Button
          title="Outfit"
          // onPress={() => setModalVisible(true)}
          color="#F194FF"
        /> */}

        {/* Close button and blue background inside Button component */}
        {/* <Modal visible={modalVisible}>
          <View style={{flex:1, backgroundColor: "lightblue", padding:60}}>
            <Button title="close" color="red"/>
          </View>
        </Modal> */}

        {/* Separator */}
        <View style={styles.separator} lightColor="#ffff" darkColor="rgba(255,255,255,0.1)" />


        {/* Modal */}
        {/* <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.backgroundModal}>
            <View style={styles.modalBox}>
              <Text style={styles.modalText}>Outfit Button 1</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.textStyle}>Outfits</Text>
        </Pressable> */}
      </View>


      {/* inside container 2 */}
      <View style={styles.container2}>
        {/* Seeing how two modals work together in same container */}

        {/* Modal 2*/}
        {/* <View style={styles.container2}> */}
        {/* <View style={styles.background}> <Text> {"\n"} </Text> </View> */}
        {/* <View style={styles.separator} lightColor="#ffff" darkColor="rgba(255,255,255,0.1)" /> */}

          {/* <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.backgroundModal}>
              <View style={styles.modalBox}>
                <Text style={styles.modalText}>Outfit Button 2</Text>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.textStyle}>Hide Modal</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible(true)}>
            <Text style={styles.textStyle}>Outfits</Text>
          </Pressable> */}
          {/* </View>   */}



        {/* Modal 3*/}
        {/* <View style={styles.background}> <Text> {"\n"} </Text> </View> */}
        <View style={styles.separator} lightColor="#ffff" darkColor="rgba(255,255,255,0.1)" />

          <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
              }}>
              {/* <View style={styles.backgroundModal}> */}

                <View style={styles.modalBox}>
                  <Text style={styles.modalText}>Photo of Outfit *here*</Text>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={styles.textStyle}>Go Back</Text>
                  </Pressable>
                </View>

              {/* </View> */}
            </Modal>

            <Pressable
              style={[styles.button, styles.buttonOpen]}
              onPress={() => setModalVisible(true)}>
              <Text style={styles.textStyle}>Outfits</Text>
            </Pressable>


        {/* Edit Modal*/}
        {/* <View style={styles.background}> <Text> {"\n"} </Text> </View> */}
        <View style={styles.separator} lightColor="#ffff" darkColor="rgba(255,255,255,0.1)" />

        
        


        
        </View>  {/* container 2*/}

    {/* container */}</View> 

    
  );
};


  // Button Information
  // return (
  //   <View style={styles.container}>
  //       <View style={styles.container2}>

  //       <Button
  //             title="Outfit"
  //             color='orange'
  //           />

  //       </View>




  //   {/* <View style={styles.contentView}>
  //       <Text style={styles.subHeader}>One Container Buttons</Text>
  //         <View style={styles.buttonsContainer}>
  //           <Button
  //             title={'React Native Elements'}
  //             containerStyle={{
  //               width: 200,
  //               marginHorizontal: 50,
  //               marginVertical: 10,
  //             }}
  //           />
  //           <Button
  //             title="Basic Button"
  //             buttonStyle={{
  //               backgroundColor: 'rgba(78, 116, 289, 1)',
  //               borderRadius: 3,
  //             }}
  //             containerStyle={{
  //               width: 200,
  //               marginHorizontal: 50,
  //               marginVertical: 10,
  //             }}
  //           />

  //           <Button
  //             title="Log in"
  //             loading={false}
  //             loadingProps={{ size: 'small', color: 'white' }}
  //             buttonStyle={{
  //               backgroundColor:"#8a2be2"
  //               ,
  //               borderRadius: 5,
  //             }}
  //             titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
  //             containerStyle={{
  //               marginHorizontal: 50,
  //               height: 50,
  //               width: 200,
  //               marginVertical: 10,
  //             }}
  //             onPress={() => console.log('aye')}
  //           />
  //         </View>

  //         <Text style={styles.subHeader}>Rounded Buttons</Text>
  //         <View style={styles.buttonsContainer}>
  //           <Button
  //             title="LOG IN"
  //             buttonStyle={{
  //               backgroundColor: 'black',
  //               borderWidth: 2,
  //               borderColor: 'white',
  //               borderRadius: 30,
  //             }}
  //             containerStyle={{
  //               width: 200,
  //               marginHorizontal: 50,
  //               marginVertical: 10,
  //             }}
  //             titleStyle={{ fontWeight: 'bold' }}
  //           />
  //           <Button
  //             title="HOME"
  //             icon={{
  //               name: 'home',
  //               type: 'font-awesome',
  //               size: 15,
  //               color: 'white',
  //             }}
  //             iconContainerStyle={{ marginRight: 10 }}
  //             titleStyle={{ fontWeight: '700' }}
  //             buttonStyle={{
  //               backgroundColor: 'rgba(90, 154, 230, 1)',
  //               borderColor: 'transparent',
  //               borderWidth: 0,
  //               borderRadius: 30,
  //             }}
  //             containerStyle={{
  //               width: 200,
  //               marginHorizontal: 50,
  //               marginVertical: 10,
  //             }}
  //           />
  //           <Button
  //             title="PROFILE"
  //             icon={{
  //               name: 'user',
  //               type: 'font-awesome',
  //               size: 15,
  //               color: 'white',
  //             }}
  //             iconRight
  //             iconContainerStyle={{ marginLeft: 10 }}
  //             titleStyle={{ fontWeight: '700' }}
  //             buttonStyle={{
  //               backgroundColor: 'rgba(199, 43, 98, 1)',
  //               borderColor: 'transparent',
  //               borderWidth: 0,
  //               borderRadius: 30,
  //             }}
  //             containerStyle={{
  //               width: 200,
  //               marginHorizontal: 50,
  //               marginVertical: 10,
  //             }}
  //           />
  //           <Button
  //             title={<CustomTitle />}
  //             titleStyle={{ fontWeight: 'bold', fontSize: 18 }}
  //             linearGradientProps={{
  //               colors: ['#FF9800', '#F44336'],
  //               start: [1, 0],
  //               end: [0.2, 0],
  //             }}
  //             buttonStyle={{
  //               borderWidth: 0,
  //               borderColor: 'transparent',
  //               borderRadius: 20,
  //             }}
  //             containerStyle={{
  //               width: 200,
  //               marginHorizontal: 50,
  //               marginVertical: 10,
  //             }}
  //             icon={{
  //               name: 'arrow-right',
  //               type: 'font-awesome',
  //               size: 15,
  //               color: 'white',
  //             }}
  //             iconRight
  //             iconContainerStyle={{ marginLeft: 10, marginRight: -10 }}
  //           />
  //         </View>

  //         <Text style={styles.subHeader}>Light Buttons</Text>
  //         <View style={styles.buttonsContainer}>

  //         </View>
  //         <Text style={styles.subHeader}>Loading Buttons</Text>
  //         <View style={styles.buttonsContainer}>
  //           <Button
  //             title="HOME"
  //             loading
  //             titleStyle={{ fontWeight: '700' }}
  //             buttonStyle={{
  //               backgroundColor: 'rgba(111, 202, 186, 1)',
  //               borderColor: 'transparent',
  //               borderWidth: 0,
  //               borderRadius: 5,
  //               paddingVertical: 5,
  //             }}
  //             containerStyle={{
  //               width: 200,
  //               height: 40,
  //               marginHorizontal: 50,
  //               marginVertical: 10,
  //             }}
  //           />
  //           <Button
  //             title="SIGN UP"
  //             loading={true}
  //             loadingProps={{
  //               size: 'small',
  //               color: 'rgba(111, 202, 186, 1)',
  //             }}
  //             titleStyle={{ fontWeight: '700' }}
  //             buttonStyle={{
  //               backgroundColor: 'rgba(92, 99,216, 1)',
  //               borderColor: 'transparent',
  //               borderWidth: 0,
  //               borderRadius: 5,
  //               paddingVertical: 10,
  //             }}
  //             containerStyle={{
  //               width: 200,
  //               marginHorizontal: 50,
  //               marginVertical: 10,
  //             }}
  //           />
  //         </View>
  //     </View> */}
  






  //   {/* div component ^^ */}
  //   <View style={styles.container2}>
  //     <Button
  //     // onPress={onPressLearnMore}
  //     title="Outfit"
  //     // color="#f2f3f4" //whiteish grey
  //     color="#8a2be2"
  //     accessibilityLabel="Learn more about this purple button"
  //   />
  //   </View>


  //   <View style={styles.container2}>
  //     <Button
  //     // onPress={onPressLearnMore}
  //     title="Outfit"
  //     // color="#f2f3f4" //whiteish grey
  //     color="orange"
  //     accessibilityLabel="Learn more about this purple button"
  //   />
  //   </View>

  //   <View style={styles.container2}>
  //     <Button
  //     // onPress={onPressLearnMore}
  //     title="Outfit"
  //     // color="#f2f3f4" //whiteish grey
  //     color="teal"
  //     accessibilityLabel="Learn more about this purple button"
  //   />
  //   </View>

  //   <View style={styles.container2}> 
  //     <Button title="Outfit"/>                                 
  //     {/* <Text>Outfits</Text> */}
  //   </View>



  //   </View>
  // );
// }

// Styles
const styles = StyleSheet.create({
  container: { //all components are in this parent container
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: 'black', //ffff
    // marginTop: 22,


    // flexDirection: 'column',
    // flexWrap: 'wrap',
    // width: '100%',
    // marginVertical: 20,
  },
    
  container2: { //all buttons are inside this smaller container
    flex: 1,
    // alignItems: 'center', //shortens length of button to center
    // justifyContent: 'center', //centers buttons in the container (horizontally)
    backgroundColor: 'white',
    // marginTop: 10,
    padding: 25, 
    margin: 10, //margin of the square - how big is it
    borderRadius: 20, //rounds edges
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
  textStyle: {
    color: 'white', //'#F194FF'
    fontWeight: 'bold',
    textAlign: 'center',
  },
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
    backgroundColor: '#F194FF'
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
