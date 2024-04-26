import React, {useState} from 'react';

import {TextInput, SafeAreaView, StyleSheet} from 'react-native';

export function nameOfOutfitPlaceholder(){
    const [value, onSetValue] = useState('');
  
    return(
      <SafeAreaView>
        <TextInput
        style={styles.nameOfOutfitText}
          onChangeText={onSetValue}
          value={value}
          placeholder="Name of Outfit"
          keyboardType="web-search"
          placeholderTextColor="black"
        />
      </SafeAreaView>
    );
  }

const styles = StyleSheet.create({
    nameOfOutfitText:{
        alignItems:'center',
        backgroundColor: 'white',
        padding: 5, 
        margin: 10, 
        borderRadius: 10,
        marginVertical: 1,
        fontWeight: 'bold',
    },

})