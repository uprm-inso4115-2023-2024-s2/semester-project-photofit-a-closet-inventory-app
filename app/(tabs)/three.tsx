import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import clothes from '@/classes/clothes';
import Item from '@/components/Item';

export default function TabThreeScreen() {
  const [dummyClothes, setDummyClothes] = useState(new clothes("Shirt", "Blue", 20));
  const [editMode, setEditMode] = useState(false);
  const [newColor, setNewColor] = useState('');
  const [newType, setNewType] = useState('');

  const handleEdit = () => {
    setEditMode(true);
  };

  const saveChanges = () => {
    if (newColor && newType) {
      setDummyClothes(new clothes(newType, newColor, dummyClothes.sleeveSize));
      setEditMode(false);
      setNewColor('');
      setNewType('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.hangerBar}/>
      <Item />
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{dummyClothes.color} {dummyClothes.type}</Text>
      </View>
      <View style={styles.buttonContainer}>
        {editMode ? (
          <View style={styles.editContainer}>
            <TextInput
              style={styles.input}
              placeholder="New color"
              value={newColor}
              onChangeText={setNewColor}
            />
            <TextInput
              style={styles.input}
              placeholder="New type"
              value={newType}
              onChangeText={setNewType}
            />
            <TouchableOpacity style={styles.saveButton} onPress={saveChanges}>
              <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity style={styles.editButton} onPress={handleEdit}>
            <Text style={styles.editButtonText}>Edit</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hangerBar: {
    backgroundColor: 'black', 
    height: 15,
    width: '100vw', 
    marginTop: 10,
  },
  nameContainer: {
    marginTop: -80,
    marginLeft: -200
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginTop: -20,
    marginLeft: 200, 
  },
  editButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#007AFF',
    borderRadius: 5,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  editContainer: {
    marginTop: 10,
    alignItems: 'center', // Align text inputs and button in the center horizontally
  },
  input: {
    height: 40,
    width: 200, // Set a fixed width for better layout
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  saveButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});