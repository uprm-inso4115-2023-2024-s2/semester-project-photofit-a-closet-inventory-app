import {KeyboardAvoidingView, ScrollView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {View} from '@/components/Themed';
import {useEffect, useState} from "react";
import {DatabaseController} from "@/classes/DatabaseController";
import ClotheComponent from "@/components/ClotheComponent";
import {Clothe} from "@/classes/clothe";
import Filter from "@/components/Filter";

// Closet screen
export default function Closet() {
    const [clothes, setClothes] = useState<Map<number, Clothe>>(new Map<number, Clothe>());
    const [clotheIndex, setClotheIndex] = useState(0);
    const [clotheTrigger, setClotheTrigger] = useState(false);

    // Using useEffect in order to query database once (initial render) and whenever clotheTrigger changes,
    // otherwise it continuously queries database which interferes with future operations
    useEffect(() => {
        DatabaseController.getClothes()
            .then((dbClothes) => {
                setClothes(dbClothes);
            });
    }, [clotheTrigger]);

    /** Add a DatabaseController.ClotheAddedCallback implementation to DatabaseController in order to trigger
     *  the useEffect that gets clothes from the database.
     */
    DatabaseController.dependencies.push(
        new class implements DatabaseController.ClotheAddedCallback {
            public callback() {
                setClotheTrigger(!clotheTrigger);
            }
        }());

    const handleNext = () => {
        setClotheIndex((prevIndex) => (prevIndex + 1) % clothes.size);
    };

    const handlePrevious = () => {
        setClotheIndex((prevIndex) =>
            prevIndex === 0 ? clothes.size - 1 : prevIndex - 1
        );
    };

    if (clothes.length === 0) {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center", paddingHorizontal: "10%" }}>
                <Text style={{ fontSize: 20, textAlign: "center" , fontWeight: "500" }}>
                    No clothes saved at the moment. Press the "+" button on the right corner to start adding items to your closet!
                </Text>
            </View>
        )
    }

    return (
        // Everything was wrapped inside a KeyboardAvoidingView inside a ScrollView (as per
        // https://forums.expo.dev/t/problems-with-keyboardavoidview/7799) in order to avoid the UI getting messed up.
        // The ClotheComponent still moves a little thou when the keyboard pops up
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <KeyboardAvoidingView style={styles.keyboardContainer}>
                <Filter/>

                {/* Render the clothes cycler if there are clothe items saved in the database */}
                {clothes.size > 0 &&
                    <View style={styles.cyclerContainer}>
                        {/* I get the array of values/Clothes and use the index to keep track of which clothe is
                        displayed, then we can use the array of keys/ids to get the id of the clothe using the same
                        index */}
                        <ClotheComponent id={[...clothes.keys()][clotheIndex]} clothe={[...clothes.values()][clotheIndex]}/>

                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.button} onPress={handlePrevious}>
                                <Text style={styles.buttonText}>Previous</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={handleNext}>
                                <Text style={styles.buttonText}>Next</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                }

                {clothes.size === 0 &&
                    <Text>No Clothes Found!</Text>
                }
            </KeyboardAvoidingView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        justifyContent: "center",
        backgroundColor: "white"
    },
    keyboardContainer: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "white"
    },
    cyclerContainer: {
        flex: 0.9,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: undefined,
    },
    buttonContainer: {
        marginTop: 10,
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
});
