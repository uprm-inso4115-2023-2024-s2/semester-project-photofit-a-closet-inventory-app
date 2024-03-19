import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {View} from '@/components/Themed';
import {useEffect, useState} from "react";
import DatabaseController from "@/classes/DatabaseController";
import ClotheComponent from "@/components/ClotheComponent";
import {newClotheAddedTrigger} from "@/app/addClothe";
import {Clothe} from "@/classes/clothe";

// Closet screen
export default function TabThreeScreen() {
    const [clothes, setClothes] = useState<Clothe[]>([]);
    const [clotheIndex, setClotheIndex] = useState(0);

    const handleNext = () => {
        setClotheIndex((prevIndex) => (prevIndex + 1) % clothes.length);
    };

    const handlePrevious = () => {
        setClotheIndex((prevIndex) =>
            prevIndex === 0 ? clothes.length - 1 : prevIndex - 1
        );
    };

    // Using useEffect in order to query database once (initial render) and whenever newClotheAddedTrigger changes,
    // otherwise it continuously queries database which interferes with future operations
    useEffect(() => {
        DatabaseController.getClothes()
            .then((dbClothes) => {
                setClothes(dbClothes);
            });
    }, [newClotheAddedTrigger]);

    if (clothes.length === 0) {
        return (
            <View style={styles.container}>
                <Text>No clothes saved</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            {/* The ClotheComponent cycler */}
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
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    cyclerContainer: {
        flex: 1,
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
