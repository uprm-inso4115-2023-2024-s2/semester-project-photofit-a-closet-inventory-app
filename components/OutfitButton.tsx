import React, {useState} from 'react';
import { Pressable, StyleSheet, Platform,} from 'react-native';

import { Text, View } from '@/components/Themed';



export function addOutfitButton(){

    return(
      <View style={{paddingBottom:5}}>

      {/* Separator */}
        <View style={styles.separator} />
  
      {/* Button */}
        <View style={styles.OutfitButton}> 
          <Pressable>
              <Text style={styles.OutfitTButtonTextStyle}>Outfit</Text>
          </Pressable>
        </View>
  
  
      </View>
  
    );
  }


// Styles
const styles = StyleSheet.create({
    
    outfitsButtonContainer:{ // all outfits buttons are inside this container
        flex: 1,
        // backgroundColor: 'lightblue',
        padding: 10, 
        margin: 5,
        borderRadius: 20, 
        
        ...Platform.select({
        ios: {
            height: "50%",
            width: "95%",
        },
        android: {
            height: "70%",
            width: "95%",
            
        },
    }),
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
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: {
        width: 0.9,
        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,    
        backgroundColor: '#F0F0F0',
    },

    OutfitTButtonTextStyle: {
        color: '#C100E0',
        fontWeight: 'bold',
    },

})