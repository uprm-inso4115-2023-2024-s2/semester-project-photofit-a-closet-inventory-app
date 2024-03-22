import { Button, ScrollView, StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';



export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
        <View style={styles.container2}>

        <Button
              title="Outfit"
              // titleStyle={{ fontWeight: '700' }}
              color='orange'
              
              // buttonStyle={{
              //   backgroundColor: 'black',
              //   borderColor: 'transparent',
              //   borderWidth: 0,
              //   borderRadius: 5,
              //   paddingVertical: 5,
              // }}
              // containerStyle={{
              //   width: 200,
              //   height: 40,
              //   marginHorizontal: 50,
              //   marginVertical: 10,
              // }}
            />

        </View>




    {/* <View style={styles.contentView}>
        <Text style={styles.subHeader}>One Container Buttons</Text>
          <View style={styles.buttonsContainer}>
            <Button
              title={'React Native Elements'}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
            />
            <Button
              title="Basic Button"
              buttonStyle={{
                backgroundColor: 'rgba(78, 116, 289, 1)',
                borderRadius: 3,
              }}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
            />

            <Button
              title="Log in"
              loading={false}
              loadingProps={{ size: 'small', color: 'white' }}
              buttonStyle={{
                backgroundColor:"#8a2be2"
                ,
                borderRadius: 5,
              }}
              titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
              containerStyle={{
                marginHorizontal: 50,
                height: 50,
                width: 200,
                marginVertical: 10,
              }}
              onPress={() => console.log('aye')}
            />
          </View>

          <Text style={styles.subHeader}>Rounded Buttons</Text>
          <View style={styles.buttonsContainer}>
            <Button
              title="LOG IN"
              buttonStyle={{
                backgroundColor: 'black',
                borderWidth: 2,
                borderColor: 'white',
                borderRadius: 30,
              }}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
              titleStyle={{ fontWeight: 'bold' }}
            />
            <Button
              title="HOME"
              icon={{
                name: 'home',
                type: 'font-awesome',
                size: 15,
                color: 'white',
              }}
              iconContainerStyle={{ marginRight: 10 }}
              titleStyle={{ fontWeight: '700' }}
              buttonStyle={{
                backgroundColor: 'rgba(90, 154, 230, 1)',
                borderColor: 'transparent',
                borderWidth: 0,
                borderRadius: 30,
              }}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
            />
            <Button
              title="PROFILE"
              icon={{
                name: 'user',
                type: 'font-awesome',
                size: 15,
                color: 'white',
              }}
              iconRight
              iconContainerStyle={{ marginLeft: 10 }}
              titleStyle={{ fontWeight: '700' }}
              buttonStyle={{
                backgroundColor: 'rgba(199, 43, 98, 1)',
                borderColor: 'transparent',
                borderWidth: 0,
                borderRadius: 30,
              }}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
            />
            <Button
              title={<CustomTitle />}
              titleStyle={{ fontWeight: 'bold', fontSize: 18 }}
              linearGradientProps={{
                colors: ['#FF9800', '#F44336'],
                start: [1, 0],
                end: [0.2, 0],
              }}
              buttonStyle={{
                borderWidth: 0,
                borderColor: 'transparent',
                borderRadius: 20,
              }}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
              icon={{
                name: 'arrow-right',
                type: 'font-awesome',
                size: 15,
                color: 'white',
              }}
              iconRight
              iconContainerStyle={{ marginLeft: 10, marginRight: -10 }}
            />
          </View>

          <Text style={styles.subHeader}>Light Buttons</Text>
          <View style={styles.buttonsContainer}>

          </View>
          <Text style={styles.subHeader}>Loading Buttons</Text>
          <View style={styles.buttonsContainer}>
            <Button
              title="HOME"
              loading
              titleStyle={{ fontWeight: '700' }}
              buttonStyle={{
                backgroundColor: 'rgba(111, 202, 186, 1)',
                borderColor: 'transparent',
                borderWidth: 0,
                borderRadius: 5,
                paddingVertical: 5,
              }}
              containerStyle={{
                width: 200,
                height: 40,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
            />
            <Button
              title="SIGN UP"
              loading={true}
              loadingProps={{
                size: 'small',
                color: 'rgba(111, 202, 186, 1)',
              }}
              titleStyle={{ fontWeight: '700' }}
              buttonStyle={{
                backgroundColor: 'rgba(92, 99,216, 1)',
                borderColor: 'transparent',
                borderWidth: 0,
                borderRadius: 5,
                paddingVertical: 10,
              }}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
            />
          </View>
      </View> */}
  






    {/* div component ^^ */}
    <View style={styles.container2}>
      <Button
      // onPress={onPressLearnMore}
      title="Outfit"
      // color="#f2f3f4" //whiteish grey
      color="#8a2be2"
      accessibilityLabel="Learn more about this purple button"
    />
    </View>


    <View style={styles.container2}>
      <Button
      // onPress={onPressLearnMore}
      title="Outfit"
      // color="#f2f3f4" //whiteish grey
      color="orange"
      accessibilityLabel="Learn more about this purple button"
    />
    </View>

    <View style={styles.container2}>
      <Button
      // onPress={onPressLearnMore}
      title="Outfit"
      // color="#f2f3f4" //whiteish grey
      color="teal"
      accessibilityLabel="Learn more about this purple button"
    />
    </View>

    <View style={styles.container2}>
      <Text>Outfits</Text>
    </View>



    </View>
  );
}
const CustomTitle = () => {
return (
  <View style={{ flexDirection: 'column' }}>
    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>John Doe</Text>
    <Text style={{ fontStyle: 'italic', fontSize: 12 }}>
      Minister of Magic
    </Text>
  </View>
);
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'ffff',

    flexDirection: 'column',
    flexWrap: 'wrap',
    width: '100%',
    // marginVertical: 20,
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  }, 
  container2: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center', //centers buttons in the container (horizontally)
    backgroundColor: 'white',

    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    marginVertical: 10,
  },
  container3:{
    flexDirection: 'row',
    height: 100,
    padding: 20,
    backgroundColor: 'red',
    flex: 0.5
  },



  contentView: {
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginVertical: 20,
  },
  subHeader: {
    backgroundColor : "#2089dc",
    color : "white",
    textAlign : "center",
    paddingVertical : 5,
    marginBottom : 10
  }



});
