import {Platform, StyleSheet, Text, View} from "react-native";
import {Picker} from "@react-native-picker/picker";
import {Clothe} from "@/classes/clothe";
import {useState} from "react";
import {DatabaseController} from "@/classes/DatabaseController";
import {removeNumbersFromEnum} from "@/utils/EnumUtils";

export default function Filter() {
    // Zero is `None`, thus no filtering should be done. Indices should be subtracted by 1 to get Clothe.Type selected.
    const [getType, setType] = useState(0);
    const [getColor, setColor] = useState(0);
    const [getSleeveSize, setSleeveSize] = useState(0);

    // Whenever the filter is supposed to be "None", then it should be set to undefined, otherwise each index
    // corresponding with the picker should be subtracted by 1
    const [dbFilter] = useState(new DatabaseController.Filter());

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Filters</Text>

            <View style={styles.filterContainer}>
                <Picker style={styles.picker}
                        itemStyle={styles.pickerItem}
                        selectedValue={getType}
                        onValueChange={(itemValue, itemIndex) => {
                            setType(itemIndex);
                            dbFilter.type = itemIndex === 0 ? undefined : itemIndex - 1;
                            DatabaseController.applyFilter(dbFilter);
                        }}>
                    {/* Added `None` as an option so that users can disable the filter for Clothe.Type */}
                    {["None"]
                        .concat(removeNumbersFromEnum(Clothe.Type))
                        .map((value, index, array) => {
                            return (
                                <Picker.Item label={value.trim()} value={index}/>
                            );
                        })
                    }
                </Picker>

                <Picker style={styles.picker}
                        itemStyle={styles.pickerItem}
                        selectedValue={getColor}
                        onValueChange={(itemValue, itemIndex) => {
                            setColor(itemIndex);
                            dbFilter.color = itemIndex === 0 ? undefined : itemIndex - 1;
                            DatabaseController.applyFilter(dbFilter);
                        }}>
                    {/* Added `None` as an option so that users can disable the filter for Clothe.Color */}
                    {["None"]
                        .concat(removeNumbersFromEnum(Clothe.Color))
                        .map((value, index, array) => {
                            return (
                                <Picker.Item label={value.trim()} value={index}/>
                            );
                        })
                    }
                </Picker>

                <Picker style={styles.picker}
                        itemStyle={styles.pickerItem}
                        selectedValue={getSleeveSize}
                        onValueChange={(itemValue, itemIndex) => {
                            setSleeveSize(itemIndex);
                            dbFilter.sleeveSize = itemIndex === 0 ? undefined : itemIndex - 1;
                            DatabaseController.applyFilter(dbFilter);
                        }}>
                    {/* Added `None` as an option so that users can disable the filter for Clothe.SleeveSize */}
                    {["None"]
                        .concat(removeNumbersFromEnum(Clothe.SleeveSize))
                        .map((value, index, array) => {
                            return (
                                <Picker.Item label={value.trim()} value={index}/>
                            );
                        })
                    }
                </Picker>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F0F0F0",
        alignItems: "center",
        borderRadius: 10,
        height: 50,
        width: 375,
        marginTop: 10,
        paddingBottom: 30,
        flex: 0.1,
    },
    text: {
        fontSize: 15,
        fontWeight: "bold",
    },
    filterContainer: {
        flexDirection: "row",
        paddingHorizontal: 10,
    },
    picker: {
        flex: 1,
    },
    pickerItem: {
        ...Platform.select({
            ios: {fontSize: 15},
            android: {fontSize: 0},
        }),
    },
});