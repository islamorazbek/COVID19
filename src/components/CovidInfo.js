import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CovidInfo = ({data, error}) => {

    return(
        <View style={styles.mainView}>
            <View style={styles.eachRow}>
                <Text style={styles.eachRowText}>Country:</Text>
                <Text style={styles.eachRowText}>{data.Country}</Text>
            </View>
            <View style={styles.eachRow}>
                <Text style={styles.eachRowText}>Status:</Text>
                <Text style={styles.status}>{data.Status}</Text>
            </View>
            <View style={styles.eachRow}>
                <Text style={styles.eachRowText}>Cases:</Text>
                <Text style={styles.eachRowText}>{data.Cases}</Text>
            </View>
            {error ? <Text style={styles.errorStyle}>{error}</Text> : null}
            <View style={styles.Date}>
                <Text style={styles.TextDate}>Last update:</Text>
                <Text style={styles.TextDate}>{data.Date}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: 'rgba(216,222,211, 0.5)',
        width: '90%',
        borderRadius: 10,
        alignContent: 'center',
        alignItems: 'center'
    },
    eachRowText: {
        fontSize: 22,
        textAlign: 'justify',
        margin: 10,
        color: 'rgba(0,0,0, 0.6)'
    },
    eachRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '77%',
        borderBottomColor: 'rgba(0,0,0, 0.6)',
        borderBottomWidth: 1,
        marginTop: 10
    },
    Date: {
        marginVertical: '30%',
        marginTop: '65%',
        justifyContent: 'center'
    },
    TextDate: {
        textAlign: 'center',
        fontSize: 20,
        margin: 10,
        color: 'rgba(0,0,0, 0.6)'
    },
    status: {
        fontSize: 22,
        textAlign: 'justify',
        margin: 10,
        color: 'green'
    },
    errorStyle: {
        position: 'absolute',
        color: 'red',
        fontWeight: 'bold',
        marginTop: '77%',
        fontSize: 20
    }
});

export default CovidInfo;