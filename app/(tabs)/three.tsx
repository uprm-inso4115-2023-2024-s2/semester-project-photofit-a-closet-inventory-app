import {StyleSheet} from 'react-native';
import {View} from '@/components/Themed';
import ItemDefault from "@/components/Item";

// Closet screen
export default function TabThreeScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.hangerBar}/>
            <ItemDefault/>
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
});
