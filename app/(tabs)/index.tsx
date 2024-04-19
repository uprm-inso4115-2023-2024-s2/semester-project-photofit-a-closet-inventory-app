import { TouchableOpacity, StyleSheet } from 'react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Outfit for the day!</Text>

      <View style={styles.imageContainer}>
        {/* First image */}
        <View style={styles.image}></View>

        {/* Second image */}
        <View style={styles.image}></View>

        {/* Third image */}
        <View style={styles.image}></View>
      </View>

      <View style={styles.buttonBox}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Save Outfit</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Generate Outfit</Text>
        </TouchableOpacity>


      </View>
      
      </View>
  );
}

const styles = StyleSheet.create({

  buttonBox: {
    flexDirection: "row",
    height: "7%",
    justifyContent: "space-between",
    width: "80%",
    
  },
  button: {
    backgroundColor: '#C100E0',
    width: "45%",
    height: "100%",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",  
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 15,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '80%',
    aspectRatio: 16/9, // Ensure the image maintains aspect ratio
    backgroundColor: 'gray', // Placeholder color for images
    marginBottom: 10, 
    borderRadius: 20,
  },
});
