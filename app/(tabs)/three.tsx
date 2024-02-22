import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {View} from '@/components/Themed';
import {ReactNode, useState} from "react";

// Closet screen
export default function TabThreeScreen() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [components, setComponents] = useState<ReactNode[]>([]);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % components.length);
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? components.length - 1 : prevIndex - 1
        );
    };

    if (components.length === 0) {
        return (
            <View style={styles.container}>
                <Text>No clothes saved</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.hangerBar}/>

            {/* Clothe Item cycler */}
            <View style={styles.cyclerContainer}>
                <View style={styles.componentContainer}>{components[currentIndex]}</View>
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
