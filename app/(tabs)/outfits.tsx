import {ScrollView, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import OutfitComponent from "@/components/outfitWidget";
import {Outfit} from "@/classes/outfit";
import {DatabaseController} from "@/classes/DatabaseController";

export default function TabTwoScreen() {
    const [outfits, setOutfits] = useState<Map<number, Outfit>>(new Map<number, Outfit>());
    const [outfitTrigger, setOutfitTrigger] = useState(false);

    useEffect(() => {
        DatabaseController.getOutfits()
            .then((dbOutfits) => {
                setOutfits(dbOutfits);
            });
    }, [outfitTrigger]);

    DatabaseController.dependencies.push(
        new class implements DatabaseController.ClotheAddedCallback {
            public callback() {
                setOutfitTrigger(!outfitTrigger);
            }
        }());

    return (
        <View style={styles.container}>
            {/* <AddOutfitButton /> */}
            <ScrollView style={styles.scrollView}>
                <View style={styles.outfitContainer}>
                    {/* Render the outfitComponents inside ScrollView */}
                    {/* Include the OutfitComponent with the outfit prop, it's commented because the outfit constant is not implemented. */}
                    {[...outfits.values()].map((value, index, array) => {
                        return (
                            <OutfitComponent outfit={value}/>
                        );
                    })
                    }

                    {/* Add more outfitComponents as needed, import with  import OutfitComponent from "@/components/outfitWidget"; */}
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    scrollView: {
        flex: 1,
    },
    outfitContainer: {
        padding: 20,
    },
});
