import {Button, StyleSheet, TextInput, Image, Text} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {View} from '@/components/Themed';
import {useState} from "react";
import {useNavigation} from "@react-navigation/native";
import DefaultClothe from "@/classes/clothe";
import {DatabaseController} from "@/classes/DatabaseController";
import Filter from '@/components/Filter';
import { withTheme } from 'react-native-elements';

export default function AddClotheScreen() {
    const [clothe] = useState(DefaultClothe());
    const navigation = useNavigation();
    const [selectedLanguage, setSelectedLanguage] = useState();
    const [selectedType, setSelectedType] = useState("Shirt"); // Default value
    const [selectedColor, setSelectedColor] = useState("Black"); // Default value
    const [selectedSize, setSelectedSize] = useState("None"); // Default value

    
    const handleCancel = () => {
        navigation.goBack();
      };

    // Adds clothe to DB and changes screen back to the previous one
    async function addClothe() {
        const success = await DatabaseController.addClothe(clothe);

        if (success) {
            console.log("Successfully added clothe!")
        } else {
            console.log("Failed to add clothe!")
        }

        navigation.goBack();

    }

    return (
        <View style={styles.container}>
            <View style={styles.photoContainer}>
                <Image style={styles.image} source={require('../assets/images/White Shirt.webp')} /> 
                {/*The URL here should be the URI from the photo capture feature*/}
                <View style={styles.greyBottom}/>
                <TextInput style={styles.input} placeholder="Item Name"
                       onChangeText={(text) => clothe.name = text}/>            
            </View>

            <View style={styles.filterSquare}>
                <Text style={styles.filterText}>Filters</Text>
                <View style={styles.pickerBox}>

                    <Picker style={styles.picker} itemStyle={styles.pick}
                        selectedValue={selectedType}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedColor(itemValue)
                        }>
                        <Picker.Item label="Shirt" value="Shirt" />
                        <Picker.Item label="Pants" value="Pants" />
                        <Picker.Item label="Shoes" value="Shoes" />
                        
                    </Picker>

                    <Picker style={styles.picker} itemStyle={styles.pick}
                        selectedValue={selectedColor}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedType(itemValue)
                        }>
                        <Picker.Item label="Blue" value="Blue" />
                        <Picker.Item label="Red" value="Red" />
                        <Picker.Item label="White" value="White" />
                    </Picker>

                    <Picker style={styles.picker} itemStyle={styles.pick}
                        selectedValue={selectedSize}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedSize(itemValue)
                        }>
                        <Picker.Item label="None" value="None" />
                        <Picker.Item label="Short" value="Short" />
                        <Picker.Item label="Large" value="Large" />
                    </Picker>
                 

                </View>
            </View>

            <View style={styles.buttonContainer}>
                <View style={styles.cancelButton}>
                    <Button title="Cancel" onPress={handleCancel}/>
                </View>

                <View style={styles.saveButton}>
                    <Button title="Save" onPress={addClothe}/>
                </View>
                
            </View>
                
        </View>
    );
}


const defaultButton = {
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 10,
}

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    photoContainer: {
        width: "77%",
        height: "57%",
        borderRadius: 20,
        justifyContent: 'center',
        bottom: "5%",
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 20,
        resizeMode: "cover", 
      },
    greyBottom: {
        backgroundColor: "#D9D9D9",
        position: 'absolute',
        width: "100%",
        height: "21%",
        bottom: 0,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
      },
    input: {
        height: "12%",
        width: '70%',
        bottom: "10.5%",
        backgroundColor: "white",
        borderRadius: 10,
        alignSelf: "center",
        paddingLeft: "5%",
    },
    filterSquare: {
        height: "20%",
        width: "77%",
        backgroundColor: "#D9D9D9",
        // justifyContent: "center",
        alignItems:"center",
        borderRadius: 15,
    },
    filterText: {
        paddingTop: 10,
    },
    pickerBox: {
        flexDirection: "row",
        height: 0
    },
    picker: {
        width: "33%",
        borderColor: 'black',
        bottom: 60
    },
    pick: {
        fontSize: 15,
    },
    buttonContainer: {
        bottom: "-10%",
        flexDirection: "row",
    },
    saveButton: {
        ...defaultButton,
        width: "25%",
        marginLeft: "5%",
        backgroundColor: "#12E000",
    },
    cancelButton: {
        ...defaultButton,
        width: "25%",
        marginRight: "5%",
        backgroundColor: "red",
    },
});


{/* <TextInput style={styles.input} placeholder="Clothe name"
                       onChangeText={(text) => clothe.name = text}/>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>

            <TextInput style={styles.input} placeholder="Clothe description"
                       onChangeText={(text) => clothe.description = text}/>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>

            <TextInput style={styles.input} placeholder="Clothe image link"
                       onChangeText={(text) => clothe.link = text}/>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>

*/}