import { TextInput, SafeAreaView, StyleSheet} from "react-native";
import React, {useState} from 'react';


export function searchPlaceHolder(){
    const [value, onSetValue] = useState('');
  
    return(
      <SafeAreaView>
        <TextInput
            style={styles.textStyle}
            onChangeText={onSetValue}
            value={value}
            placeholder="Search"
            keyboardType="web-search"
            placeholderTextColor="#9f9f9f"
        />
      </SafeAreaView>
    );
}


// Styles
const styles = StyleSheet.create({
    textStyle:{
        paddingHorizontal: 5,
        color:"black", 
        // fontWeight:'bold'
    },
})
