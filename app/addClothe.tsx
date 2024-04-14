import {Button,TouchableOpacity, StyleSheet, TextInput, Image, Text, Platform} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {View} from '@/components/Themed';
import {useState} from "react";
import {useNavigation} from "@react-navigation/native";
import DefaultClothe from "@/classes/clothe";
import {DatabaseController} from "@/classes/DatabaseController";
import PhotoCapture from "@/app/photoCapture"
import { Clothe } from '@/classes/clothe';
import {MaterialCommunityIcons} from '@expo/vector-icons';


export default function AddClotheScreen() {
    const [showCamera, setShowCamera] = useState(false);
    const [clothe] = useState(DefaultClothe());
    const navigation = useNavigation();
    const [selectedName, setSelectedName] = useState("Clothe Item");
    const [selectedLink, setSelectedLink] = useState(clothe.link);
    const [selectedType, setSelectedType] = useState(Clothe.Type.Unknown);
    const [selectedColor, setSelectedColor] = useState(Clothe.Color.Unknown); // Default value
    const [selectedSize, setSelectedSize] = useState(Clothe.SleeveSize.Unknown); // Default value
    
    const typeKeys = Object.keys(Clothe.Type).filter(key => isNaN(Number(key)));
    const colorKeys = Object.keys(Clothe.Color).filter(key => isNaN(Number(key)));
    const sleeveSizeKeys = Object.keys(Clothe.SleeveSize).filter(key => isNaN(Number(key)));

    function handleCancel() {
        navigation.goBack();
    }
    
    async function addClothe() {
        // Update the properties of the clothe object directly with the selected values
        clothe.name = selectedName;
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
        <View style={showCamera ? styles.cameraContainer : styles.container}>
            {showCamera ? (
                <PhotoCapture setShowCamera={setShowCamera} onPhotoTaken={setSelectedLink} onGalleryPhotoSelected={setSelectedLink} />
            ) : (
                <>
                <View style={styles.photoContainer}>
                    <TouchableOpacity style={styles.cameraButton}>
                    <MaterialCommunityIcons name="camera" color="grey" onPress={() => setShowCamera(true)} size={40} />
                    </TouchableOpacity>

                    <Image style={styles.image} source={{ uri: selectedLink }} /> 

                    <View style={styles.greyBottom}/>
                    
                    <TextInput style={styles.input} placeholder="Type Item Name Here"
                        onChangeText={(text) => setSelectedName(text)} // Update the selectedName state
                        />
                </View>
                

                <View style={styles.filterSquare}>
                    <Text style={styles.filterText}>Type | Color | Sleeve Size</Text>
                    <View style={styles.pickerBox}>
                        <Picker style={styles.picker} itemStyle={styles.pick}
                            selectedValue={selectedType} 
                            onValueChange={(itemValue: Clothe.Type) => 
                                setSelectedType(itemValue) // Update the selectedType state 
                        }>
                        {typeKeys.map((typeKey) => (
                            <Picker.Item
                                key={typeKey}
                                label={typeKey}
                                value={Clothe.Type[typeKey as keyof typeof Clothe.Type]}
                            />
                            ))}
                        </Picker>

                        <Picker style={styles.picker} itemStyle={styles.pick}
                            selectedValue={selectedColor}
                            onValueChange={(itemValue) => 
                                setSelectedColor(itemValue)
                            }>
                            {colorKeys.map((colorKey) => (
                                <Picker.Item
                                    key={colorKey}
                                    label={colorKey}
                                    value={Clothe.Color[colorKey as keyof typeof Clothe.Color]}
                                />
                            ))}
                        </Picker>

                        <Picker style={styles.picker} itemStyle={styles.pick}
                            selectedValue={selectedSize}
                            onValueChange={(itemValue, itemIndex) => 
                                setSelectedSize(itemValue)
                            }>
                            {sleeveSizeKeys.map((sleeveSizeKey) => (
                                <Picker.Item
                                    key={sleeveSizeKey}
                                    label={sleeveSizeKey}
                                    value={Clothe.SleeveSize[sleeveSizeKey as keyof typeof Clothe.SleeveSize]}
                                />
                            ))}
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
                    
                </>
            )}
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
    cameraContainer: {
        flex: 1,
        width: '100%',
        height: '100%',
    },

    filterSquare: {
        
        backgroundColor: "#D9D9D9",
        alignItems:"center",
        borderRadius: 15,
        ...Platform.select({
            ios: {
                height: "20%",
                width: "77%",
            },
            android: {
                height: "15%",
                width: "90%",
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
                width: "33%",
                bottom: 55,
            },
            android: {
                width: "35%",
                height: "25%",
                bottom: 0,
            },
        }),
    },
    pick: {
        fontSize: 15,
        ...Platform.select({
            ios: {fontSize: 15},
            android: {fontSize: 0,},
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
        ...Platform.select({
            ios: {backgroundColor: "#12E000"},
            android: {},
        }),
    },
    cancelButton: {
        ...defaultButton,
        width: "25%",
        marginRight: "5%",
        ...Platform.select({
            ios: {backgroundColor: "red"},    
            android: {},
        }),
    },
    //Button for Camera
    cameraButton: {
        ...defaultButton,
        position: "absolute",
        left: "100%",
        bottom: "90%",
        width: "15%",
        height: "15%",
        padding: "0%",
        },
    },
);
