import {KeyboardAvoidingView, ScrollView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {View} from '@/components/Themed';
import {useEffect, useState} from "react";
import {DatabaseController} from "@/classes/DatabaseController";
import ClotheComponent from "@/components/ClotheComponent";
import {Clothe} from "@/classes/clothe";
import Filter from "@/components/Filter";

// Closet screen
export default function TabThreeScreen() {
    const [clothes, setClothes] = useState<Clothe[]>([]);
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
        setClotheIndex((prevIndex) => (prevIndex + 1) % clothes.length);
    };

    const handlePrevious = () => {
        setClotheIndex((prevIndex) =>
            prevIndex === 0 ? clothes.length - 1 : prevIndex - 1
        );
    };

    return (
        // Everything was wrapped inside a KeyboardAvoidingView inside a ScrollView (as per
        // https://forums.expo.dev/t/problems-with-keyboardavoidview/7799) in order to avoid the UI getting messed up.
        // The ClotheComponent still moves a little thou when the keyboard pops up
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <KeyboardAvoidingView style={styles.keyboardContainer}>
                <Filter/>

                {/* Render the clothes cycler if there are clothe items saved in the database */}
                {clothes.length > 0 &&
                    <View style={styles.cyclerContainer}>
                        <ClotheComponent clothe={clothes[clotheIndex]}/>

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

                {clothes.length === 0 &&
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
    },
    button: {
        padding: 10,
        marginHorizontal: 10,
        backgroundColor: 'lightblue',
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "bold",
    },
});
