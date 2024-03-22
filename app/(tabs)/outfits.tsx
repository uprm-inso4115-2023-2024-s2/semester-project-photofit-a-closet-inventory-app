import { Button, ScrollView, StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

import React, {useState} from 'react';
import {Alert, Modal, Pressable} from 'react-native';


/* To Do: 
- add the "Add Outfit" *plus* symbol on upper right corner || or on the bottom of the screen whichever is better
- add photos of "outfits" inside the button on the left side (--> *photo* <-- Outfits)
- add an "Edit" feature
  --see https://www.figma.com/file/ojPtY7fqcm1botgu9QryZf/PhotoFit-UI?type=design&node-id=0-1&mode=design&t=xGQxI8btmzRFtTNz-0

  -"Make your Outfit" title, upper middle part
  - add a filters search bar: includes three dropdown: Color, Type, Sleeve Size (???)
  - has photos of their closet / database
  - just at the bottom, a text field to name the outfit, "Name for Outfit"
  - just under that, a cancel buttong and a save button

  **you can make this page be a modal type of deal

  Just finished: - adding "Outfits" buttons 

*/



export default function TabTwoScreen() {

  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>

      <View style={styles.container2}>


        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>
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
        </Pressable>
      {/* </View> */}




        {/* Modal 2*/}
        {/* <View style={styles.container2}> */}
        <View style={styles.background}> <Text> {"\n"} </Text> </View>

          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Hello World!</Text>
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
          </Pressable>
          {/* </View>   */}



        {/* Modal 3*/}
        <View style={styles.background}> <Text> {"\n"} </Text> </View>
          <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
              }}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>Photo of Outfit *here*</Text>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={styles.textStyle}>Go Back</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>
            <Pressable
              style={[styles.button, styles.buttonOpen]}
              onPress={() => setModalVisible(true)}>
              <Text style={styles.textStyle}>Outfits</Text>
            </Pressable>



        
        </View>  {/* container 2*/}

    {/* container */}</View> 

    
  );
};



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


const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    marginTop: 22,
  },
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: 'white', //ffff
    // marginTop: 22,


    // flexDirection: 'column',
    // flexWrap: 'wrap',
    // width: '100%',
    // marginVertical: 20,
  },
  container2: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center', //centers buttons in the container (horizontally)
    backgroundColor: 'white',
    // marginTop: 10,
    padding: 25, 
    margin: 10, //margin of the square - how big is it
    borderRadius: 20, //rounds edges



    flexDirection: 'column',
    flexWrap: 'wrap',
    // width: '100%',
    // height:'20%',
    // marginVertical: 10,
  },
  background:{
    backgroundColor: 'white',

  },


  modalView: {
    margin: 20,
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
  button: {
    borderRadius: 10,
    padding: 20,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF', //#F194FF
  },
  buttonClose: {
    backgroundColor: '#2196F3', //#f2f3f4
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
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
