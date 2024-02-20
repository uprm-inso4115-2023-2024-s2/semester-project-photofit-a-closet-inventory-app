import { StyleSheet, ImageBackground, Image } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import Item from '@/components/Item'


export default function TabThreeScreen() {
  return (
    <View style={styles.container}>


      <View style={styles.hangerBar}/>

      <Item/>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  hangerBar: {
    backgroundColor: 'black', 
    height: 15,
    width: '100vw', 
    marginTop: 10,
  },
  hangerImg: {
    width: '150px',
    height: "150px",
    marginTop: -25,
  },
 


});
