import {Button, StyleSheet, TextInput, Image, Text, Platform} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {View} from '@/components/Themed';
import {useState} from "react";
import {useNavigation} from "@react-navigation/native";
import DefaultClothe from "@/classes/clothe";
import {DatabaseController} from "@/classes/DatabaseController";
import Filter from '@/components/Filter';
import { withTheme } from 'react-native-elements';
import { Clothe } from '@/classes/clothe';

export default function AddClotheScreen() {
    const [clothe] = useState(DefaultClothe());
    const navigation = useNavigation();
    const [selectedLanguage, setSelectedLanguage] = useState();
    const [selectedName, setSelectedName] = useState("Clothe Item");
    const [selectedDescription, setSelectedDescription] = useState("");
    const [selectedLink, setSelectedLink] = useState(clothe.link);
    const [selectedType, setSelectedType] = useState(Clothe.Type.Unknown);
    const [selectedColor, setSelectedColor] = useState(""); // Default value
    const [selectedSize, setSelectedSize] = useState(-1); // Default value
    
    
    const handleCancel = () => {
        navigation.goBack();
    };
    
    async function addClothe() {
        // Update the properties of the clothe object directly with the selected values
        clothe.name = selectedName;
        clothe.description = selectedDescription;
        clothe.link = selectedLink;
        clothe.type = selectedType;
        clothe.color = selectedColor;
        clothe.sleeveSize = selectedSize;
        
        
        // Add the updated clothe object to the database
        const success = await DatabaseController.addClothe(clothe);
        
        console.log("SELECTED TYPE: " + selectedType)
        if (success) {
            console.log("Successfully added clothe of name " + clothe.name + " of type " + clothe.type + " of color " + clothe.color + " of sleeve size " + clothe.sleeveSize + " with link " + clothe.link)
        } else {
            console.log("Failed to add clothe!")
        }
    
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <View style={styles.photoContainer}>
                <Image style={styles.image} source={{ uri: selectedLink }} /> 
                {/*The URL here should be the URI from the photo capture feature. Simply make the selectedLink variable be the URI and that should make the class get that data*/}
                <View style={styles.greyBottom}/>
                <TextInput style={styles.input} placeholder="Type Item Name Here"
                    onChangeText={(text) => setSelectedName(text)} // Update the selectedName state
                    />       
            </View>

            <View style={styles.filterSquare}>
                <Text style={styles.filterText}>Tags</Text>
                <View style={styles.pickerBox}>

                    <Picker style={styles.picker} itemStyle={styles.pick}
                        selectedValue={selectedType} 
                        onValueChange={(itemValue: Clothe.Type) => 
                            setSelectedType(itemValue) // Update the selectedType state 
                    }>
                        <Picker.Item label="Type" value={Clothe.Type.Unknown} />
                        <Picker.Item label="Shirt" value={Clothe.Type.Shirt} />
                        <Picker.Item label="Pants" value={Clothe.Type.Pants} />
                        <Picker.Item label="Shoes" value={Clothe.Type.Shoes} />
                    </Picker>

                    <Picker style={styles.picker} itemStyle={styles.pick}
                        selectedValue={selectedColor}
                        onValueChange={(itemValue) => 
                            setSelectedColor(itemValue)
                        }>
                        <Picker.Item label="Color" value="Unknown" />
                        <Picker.Item label="Black" value="Black" />
                        <Picker.Item label="White" value="White" />
                        <Picker.Item label="Gray" value="Gray" />
                        <Picker.Item label="Navy" value="Navy" />
                        <Picker.Item label="Blue" value="Blue" />
                        <Picker.Item label="Green" value="Green" />
                        <Picker.Item label="Red" value="Red" />
                        <Picker.Item label="Yellow" value="Yellow" />
                        <Picker.Item label="Orange" value="Orange" />
                        <Picker.Item label="Red" value="Red" />
                        <Picker.Item label="Pink" value="Pink" />
                        <Picker.Item label="Purple" value="Purple" />
                        <Picker.Item label="Brown" value="Brown" />
                    </Picker>

                    <Picker style={styles.picker} itemStyle={styles.pick}
                        selectedValue={selectedSize}
                        onValueChange={(itemValue, itemIndex) => 
                            setSelectedSize(itemValue)
                        }>
                        <Picker.Item label="Sleeve Size" value={-1} />                            
                        <Picker.Item label="None" value={0} />
                        <Picker.Item label="Short" value={1} />
                        <Picker.Item label="Large" value={2} />
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
        
        backgroundColor: "#D9D9D9",
        // justifyContent: "center",
        alignItems:"center",
        borderRadius: 15,
        ...Platform.select({
            ios: {
                // iOS specific styles
                height: "20%",
                width: "77%",
            },
            android: {
                // Android specific styles
                height: "15%",
                width: "80%",
            },
        }),
    },
    filterText: {
        paddingTop: 10,
    },
    pickerBox: {
        flexDirection: "row",
        height: "45%",
        backgroundColor: 'rgba(52, 52, 52, 0)',     
    },
    picker: {
        
        borderColor: 'black',
        
        ...Platform.select({
            ios: {
                // iOS specific styles
                width: "33%",
                bottom: 55,
                
            },
            android: {
                // Android specific styles
                width: "40%",
                height: "25%",
                bottom: 0,
            },
        }),
    },
    pick: {
        fontSize: 15,
        ...Platform.select({
            ios: {
                // iOS specific styles
                fontSize: 15,
                
            },
            android: {
                // Android specific styles
                fontSize: 0,
            },
        }),
        
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