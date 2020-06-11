import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

import {withNavigation} from 'react-navigation';

const SearchBar = ({navigation, link, title, data}) => {
        
    return(
        <TouchableOpacity style={styles.inputView} onPress={()=>navigation.navigate(link)}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    inputView:{
        flexDirection: 'row',
        backgroundColor: 'rgba(216,222,211, 0.5)',
        alignItems: 'center',
        margin: 15,
        height: 50,
        borderRadius: 10
    },
    text: {
        flex: 1,
        fontSize: 20,
        textAlign: 'center',
        color: 'rgba(0,0,0, 0.6)'
        
    }
});

export default withNavigation(SearchBar);