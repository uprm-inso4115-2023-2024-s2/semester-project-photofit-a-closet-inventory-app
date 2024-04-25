import React, { useState, useEffect } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import { DatabaseController } from '@/classes/DatabaseController';
import { Clothe } from '@/classes/clothe';
import RandomizerClothe from '@/components/RandomizerClothe'; // Import the RandomizerClothe component

export default function TabOneScreen() {
  const [randomShirt, setRandomShirt] = useState<Clothe | null>(null);
  const [randomPants, setRandomPants] = useState<Clothe | null>(null);
  const [randomShoes, setRandomShoes] = useState<Clothe | null>(null);

  useEffect(() => {
    generateRandomOutfit(); // Fetch initial random outfit
  }, []);

  const generateRandomOutfit = async () => {
    try {
      const fetchRandomClothe = async (type: Clothe.Type): Promise<Clothe | null> => {
        // Fetch all clothe items of the specified type from the database
        const clothesMap = await DatabaseController.getClothes();
        const clothesArray = Array.from(clothesMap.values());
        const filteredClothes = clothesArray.filter(clothe => clothe.type === type);
        
        // Select a random clothe item from the filtered list
        if (filteredClothes.length > 0) {
          const randomIndex = Math.floor(Math.random() * filteredClothes.length);
          return filteredClothes[randomIndex];
        } else {
          return null;
        }
      };
  
      // Fetch a random shirt
      const randomShirt = await fetchRandomClothe(Clothe.Type.Shirt);
      if (randomShirt) {
        setRandomShirt(randomShirt);
      }
  
      // Fetch a random pants
      const randomPants = await fetchRandomClothe(Clothe.Type.Pants);
      if (randomPants) {
        setRandomPants(randomPants);
      }
  
      // Fetch a random shoes
      const randomShoes = await fetchRandomClothe(Clothe.Type.Shoes);
      if (randomShoes) {
        setRandomShoes(randomShoes);
      }
    } catch (error) {
      console.error('Error generating random outfit:', error);
    }
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Outfit for the day!</Text>

      <View style={styles.imageContainer}>
        {/* Display the random clothe items if available */}
        {randomShirt && <RandomizerClothe clothe={randomShirt} />}
        {randomPants && <RandomizerClothe clothe={randomPants} />}
        {randomShoes && <RandomizerClothe clothe={randomShoes} />}
      </View>

      <View style={styles.buttonBox}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Save Outfit</Text>
        </TouchableOpacity>
        {/* Button to generate new outfit */}
        <TouchableOpacity style={styles.button} onPress={generateRandomOutfit}>
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
});
