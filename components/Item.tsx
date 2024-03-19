import React from 'react';
import { StyleSheet, Image, backgroundImage } from 'react-native';

import { ExternalLink } from './ExternalLink';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';

import Colors from '@/constants/Colors';

export default function Item({ path }: { path: string }) {
  return (
    <View style={styles.getStartedContainer}>

      {/* hanger bar and image */}
      <View style={styles.hangerBar}/>
      <Image
      style = {styles.hangerImg}
      source = "https://clipart-library.com/image_gallery/21326.png"
      />

        <View style = {styles.itemContainer}>

          <Image 
          style = {styles.itemPicture} 
          source = "https://content.instructables.com/FNN/H072/IDUQWTXF/FNNH072IDUQWTXF.jpg?auto=webp&frame=1&width=907&height=1024&fit=bounds&md=ca68a21d8b66a10d4f65d275a1393035"
          />
          <View style = {styles.itemBottomText}>
    
          
          </View>
        </View>
      </View>



  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  hangerImg: {
    width: '150px',
    height: "150px",
    marginTop: -25,
  },
  itemContainer: {
    marginTop: -10,
    width: '300px',
    height: '400px',
    border: '1px solid black',

  },
  itemPicture: {
    width: '100%',
    height: '80%',
  },
  itemBottomText: {
    height: '20%',
    justifyContent: 'center',
  },
  name: {
    fontSize: 20,
    marginLeft: 5,
  },
  description: {
    fontSize: 15,
    marginLeft: 10,
  }
});
