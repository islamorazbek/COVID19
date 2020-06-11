import React from 'react';
import {View, TouchableOpacity,ImageBackground, Text, StyleSheet, Linking} from 'react-native';

const SafetyInfoScreen = ({navigation}) => {

    const sourceURL = 'https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/coronavirus-safety.html';

    return(
        <ImageBackground source={require('../images/image5.jpg')} style={styles.imageBack}>
            <View style={styles.view}>
                <Text style={styles.text}>
                    Follow these five easy steps to help prevent the spread of COVID-19:
                </Text>
                <Text style={styles.steps}>
                    1. Sneeze or cough?  Cover your nose and mouth with a tissue or use your elbow.
                </Text>
                <Text style={styles.steps}>
                    2. Wash your hands often with soap and water for at least 20 seconds.
                </Text>
                <Text style={styles.steps}>
                    3. Clean and disinfect surfaces around your home and work frequently.
                </Text>
                <Text style={styles.steps}>
                    4. Keep at least 6 feet between yourself and others if you must be in public.
                </Text>
                <Text style={styles.steps}>
                    5. Wear a cloth face covering over your mouth and nose when around others.
                </Text>
                <Text style={styles.source1}>
                        Source:
                </Text>
                <TouchableOpacity style={styles.url} onPress={()=>Linking.openURL(sourceURL)}>
                    <Text style={styles.source2}>American Red Cross</Text>
                </TouchableOpacity>
                  
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    imageBack: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    view: {
        backgroundColor: 'rgba(216,222,211, 0.5)',
        width: '90%',
        height: '80%',
        marginTop: 50,
        borderBottomLeftRadius: 100,
        borderTopRightRadius: 100,
        padding: 15
    },
    text: {
        fontSize: 20,
        color: "rgba(0, 0, 0, 0.6)",
        fontWeight: 'bold'
    },
    steps: {
        fontSize: 16,
        color: "rgba(0, 0, 0, 0.6)",
        marginVertical: 5
    },
    source1: {
        fontSize: 18,
        color: "rgba(0, 0, 0, 0.6)",
        marginTop: 30,
        textAlign: 'center'
    },
    source2: {
        fontSize: 18,
        textAlign: 'center',
        color: "rgba(0, 0, 0, 0.6)",
    },
    url: {
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.6)',
        borderRadius: 15,
        marginVertical: 10
    }
});

export default SafetyInfoScreen;