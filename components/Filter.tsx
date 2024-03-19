import {StyleSheet, Text, TextInput, View} from "react-native";
import {Picker} from "@react-native-picker/picker";
import {Clothe} from "@/classes/clothe";
import {useState} from "react";

export default function Filter() {
    // Zero is `None`, thus no filtering should be done. Indices should be subtracted by 1 to get Clothe.Type selected.
    const [selectedClotheType, selectClotheType] = useState(0);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Filters</Text>

            <View style={styles.filterContainer}>
                <TextInput style={styles.input}/>
                <Picker style={styles.picker}
                        selectedValue={selectedClotheType}
                        onValueChange={(itemValue, itemIndex) => {
                            selectClotheType(itemIndex);
                        }}>
                    {["None"]
                        .concat(
                            Object.keys(Clothe.Type)
                                .filter((item) => {
                                    return isNaN(Number(item));
                                })
                        )
                        .map((value, index, array) => {
                            return (
                                <Picker.Item label={value.trim()} value={index}/>
                            );
                        })
                    }
                </Picker>
                <TextInput style={styles.input}/>
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
    input: {
        height: 20,
        borderWidth: 1,
        flex: 1,
    },
    picker: {
        flex: 1,
        transform: [
            // {
            //     scaleX: .8,
            // },
            {scaleY: 0.5},
            {translateY: -30}
        ],
    },
});