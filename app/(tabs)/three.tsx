import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {View} from '@/components/Themed';
import {ReactNode, useEffect, useState} from "react";
import DatabaseController from "@/classes/DatabaseController";
import {ClotheComponent} from "@/components/ClotheComponent";
import {newClotheAddedTrigger} from "@/app/addClothe";

// Closet screen
export default function TabThreeScreen() {
    const [currentClotheIndex, setCurrentClotheIndex] = useState(0);
    const [clotheItems, setClotheItems] = useState<ReactNode[]>([]);

    const handleNext = () => {
        setCurrentClotheIndex((prevIndex) => (prevIndex + 1) % clotheItems.length);
    };

    const handlePrevious = () => {
        setCurrentClotheIndex((prevIndex) =>
            prevIndex === 0 ? clotheItems.length - 1 : prevIndex - 1
        );
    };

    // Using useEffect in order to query database once (initial render) and whenever newClotheAddedTrigger changes,
    // otherwise it continuously queries database which interferes with future operations
    useEffect(() => {
        DatabaseController.getClothes().then((clothes) => {
            setClotheItems(clothes.map((clothe) => {
                return ClotheComponent(clothe);
            }));
        });
    }, [newClotheAddedTrigger]);

    if (clotheItems.length === 0) {
        return (
            <View style={styles.container}>
                <Text>No clothes saved</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.hangerBar}/>

            {/* The ClotheComponent cycler */}
            <View style={styles.cyclerContainer}>
                <View style={styles.componentContainer}>{clotheItems[currentClotheIndex]}</View>
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
    hangerBar: {
        backgroundColor: 'black',
        height: 15,
        width: '100%',
        marginTop: 10,
    },
    hangerImg: {
        width: 150,
        height: 150,
        marginTop: -25,
    },
    cyclerContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: undefined,
    },
    componentContainer: {
        flex: 1,
    },
    buttonContainer: {
        flexDirection: "row",
    },
    button: {
        padding: 10,
        margin: 10,
        backgroundColor: 'lightblue',
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "bold",
    },
});
