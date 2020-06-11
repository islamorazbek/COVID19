import React from 'react';
import {View, TouchableOpacity, ImageBackground, Text, StyleSheet, Linking} from 'react-native';

const CovidInfoScreen = () => {

    const sourceURL = 'https://www.ecdc.europa.eu/en/covid-19/questions-answers';

    return(
        <ImageBackground source={require('../images/image5.jpg')} style={styles.imageBack}>
            <View style={styles.view}>
                <Text style={styles.text}>
                    Coronavirus
                </Text>
                <Text style={styles.info}>
                    Severe Acute Respiratory Syndrome Coronavirus-2 (SARS-CoV-2) is the name given to the 2019 novel coronavirus.
                </Text>
                <Text style={styles.info}>
                    SARS-CoV-2 is a new strain of coronavirus that has not been previously identified in humans.
                </Text>
                <Text style={styles.info}>
                    Bats are considered natural hosts of these viruses yet several other species of animals are also known to act as sources
                </Text>
                <Text style={styles.info}>
                    The incubation period for COVID-19 (i.e. the time between exposure to the virus and onset of symptoms) is currently estimated to be between one and 14 days. 
                </Text>
                <Text style={styles.info}>
                    Preliminary data from the EU/EEA (from the countries with available data) show that around 20-30% of diagnosed COVID-19 cases are hospitalised and 4% have severe illness.
                </Text>
                <Text style={styles.source1}>
                        Source:
                </Text>
                <TouchableOpacity style={styles.url} onPress={()=>Linking.openURL(sourceURL)}>
                    <Text style={styles.source2}>European Centre for Disease Prevention and Control</Text>
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
    info: {
        fontSize: 16,
        color: "rgba(0, 0, 0, 0.6)",
        marginVertical: 5
    },
    source1: {
        fontSize: 18,
        color: "rgba(0, 0, 0, 0.6)",
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

export default CovidInfoScreen;