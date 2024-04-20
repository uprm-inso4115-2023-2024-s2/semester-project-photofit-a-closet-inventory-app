import { ScrollView, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import React from 'react';
import OutfitComponent from "@/components/outfitWidget"; // Import the OutfitComponent

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      {/* <AddOutfitButton /> */}
      <ScrollView style={styles.scrollView}>
        <View style={styles.outfitContainer}>
          {/* Render the outfitComponents inside ScrollView */}
          {/* Include the OutfitComponent with the outfit prop, it's commented because the outfit constant is not implemented. */}
          {/* <OutfitComponent outfit={outfit} /> */}

          {/* <OutfitComponent />
          <OutfitComponent />
          <OutfitComponent />
          <OutfitComponent />
          <OutfitComponent />
          <OutfitComponent />
          <OutfitComponent />
          <OutfitComponent />
          <OutfitComponent /> */}
         
          {/* Add more outfitComponents as needed */}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollView: {
    flex: 1,
  },
  outfitContainer: {
    padding: 20,
  },
});

