import React from 'react';
import { Pressable, StyleSheet, Platform} from 'react-native';

import { Text, View } from '@/components/Themed';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



export function addEditOutfitButton(){

    return(
      <View style={{paddingBottom:5}}>

      {/* Separator */}
        <View style={styles.separator}/>
  
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

                <Text style={styles.OutfitButtonTextStyle}>Outfit</Text>

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

// Styles
const styles = StyleSheet.create({

    separator: { //added this to separate each button a smidge, is added just before a new button
        marginVertical: 10,
        height: .5,
        width: '80%',
    },

    OutfitButton: {
        borderRadius: 15,
        padding: 17,
        elevation: 2,
        backgroundColor: '#F0F0F0',
        shadowColor: '#000',
        shadowOffset: {
            width: 0.9,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,   
        },

    OutfitButtonTextStyle: {
        color: '#C100E0', 
        fontWeight: 'bold',
        textAlign: 'center',
        },

})