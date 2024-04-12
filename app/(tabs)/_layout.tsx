import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {Link, Tabs} from 'expo-router';
import {Pressable} from 'react-native';
import { Text, View } from '@/components/Themed';


import Colors from '@/constants/Colors';
import {useColorScheme} from '@/components/useColorScheme';
import {useClientOnlyValue} from '@/components/useClientOnlyValue';

//hanger icon import
import {AntDesign, MaterialCommunityIcons} from '@expo/vector-icons';
//man outline import
import {Ionicons} from '@expo/vector-icons';


// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
                // Disable the static render of the header on web
                // to prevent a hydration error in React Navigation v6.
                headerShown: useClientOnlyValue(false, true),
            }}>

            <Tabs.Screen
                name="outfits"
                options={{
                    title: 'Outfits',
                    tabBarIcon: ({color}) => <Ionicons name="man-outline" size={24} color={color}/>,
                    headerTitleAlign: 'center', // Center the title "Outfits"
                    // headerTintColor:'lightgray', //changes title color

                    // add icon for edit page
                    headerLeft: () => (
                        <Link href="/edit" asChild >
                            <Pressable>
                                {({pressed}) => (
                                    <Text style={{ color: '#C100E0', marginLeft: 15, fontWeight: 'bold',  opacity: pressed ? 0.5 : 1 }}>
                                    Edit
                                    </Text>                                
                                )}
                            </Pressable>
                        </Link>
                    ),

                    // add icon for add outfit page
                    headerRight: () => (
                        <Link href="/addOutfit" asChild > 
                            <Pressable>
                                {({pressed}) => (
                                    <FontAwesome
                                        name="plus"
                                        size={25}
                                        color={'#C100E0'}
                                        style={{marginRight: 15, opacity: pressed ? 0.5 : 1}}
                                    />
                                )}
                            </Pressable>
                        </Link>
                    ),
                    
                }}
            />

            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({color}) => <FontAwesome name="home" size={28} style={{marginBottom: -3}}
                                                          color={color}/>,
                    headerRight: () => (
                        <Link href="/modal" asChild>
                            <Pressable>
                                {({pressed}) => (
                                    <FontAwesome
                                        name="info-circle"
                                        size={25}
                                        color={Colors[colorScheme ?? 'light'].text}
                                        style={{marginRight: 15, opacity: pressed ? 0.5 : 1}}
                                    />
                                )}
                            </Pressable>
                        </Link>
                    ),
                }}
            />

            <Tabs.Screen
                name="three"
                options={{
                    title: 'Closet',
                    tabBarIcon: ({color}) => <MaterialCommunityIcons name="hanger" size={24} color={color}/>,
                    headerRight: () => (
                        <Link href="/addClothe" asChild>
                            <Pressable>
                                {({pressed}) => (
                                    <AntDesign
                                        name="pluscircle"
                                        size={25}
                                        color={Colors[colorScheme ?? 'light'].text}
                                        style={{marginRight: 15, opacity: pressed ? 0.5 : 1}}
                                    />
                                )}
                            </Pressable>
                        </Link>
                    ),
                }}
            />
        </Tabs>
    );
}
