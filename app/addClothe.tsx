import {Button, StyleSheet, TextInput} from 'react-native';
import {View} from '@/components/Themed';
import {useState} from "react";
import {insertClothe} from "@/utils/DatabaseUtils"
import {useNavigation} from "@react-navigation/native";
import DefaultClothe from "@/classes/clothe";

/** This is a dependency for TabThreeScreen aka the Closet screen, because the closet screen only
 *  queries the database once (when it initially renders), but we need it to query everytime we add
 *  a new clothe to the database, so we use this as a dependency trigger for it to query the database
 *  everytime this value is changed.
 */
export let newClotheAddedTrigger = false;

export default function AddClotheScreen() {
    const [clothe] = useState(DefaultClothe());
    const navigation = useNavigation();

    // Adds clothe to DB and changes screen back to the previous one
    async function addClothe() {
        // const clothe = new Clothe(clotheName, clotheDescription, clotheImageLink, Type.Unknown, "Black", 10);
        const success = await insertClothe(clothe);

        if (success) {
            console.log("Successfully added clothe!")
            newClotheAddedTrigger = !newClotheAddedTrigger;
        } else {
            console.log("Failed to add clothe!")
        }

        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder="Clothe name"
                       onChangeText={(text) => clothe.name = text}/>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>

            <TextInput style={styles.input} placeholder="Clothe description"
                       onChangeText={(text) => clothe.description = text}/>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>

            <TextInput style={styles.input} placeholder="Clothe image link"
                       onChangeText={(text) => clothe.link = text}/>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>

            <Button title="Add Clothe" onPress={addClothe}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 30,
        width: '50%',
    },
    separator: {
        marginVertical: 20,
        height: 0,
        width: '50%',
    },
});
