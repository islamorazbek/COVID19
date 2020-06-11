import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    
    return(
        <View style={styles.inputView}>
            <Feather name='search' style={styles.searchIcon}/>
            <TextInput 
                style={styles.inputText}
                placeholder='Search'
                value={term}
                autoCorrect={true}
                onChangeText={(newTerm)=>onTermChange(newTerm)}
                onEndEditing={()=>onTermSubmit()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    inputView:{
        flexDirection: 'row',
        backgroundColor: 'rgba(216,222,211, 0.5)',
        alignItems: 'center',
        margin: 15,
        height: 50,
        borderRadius: 10,
        marginTop: 80
    },
    searchIcon: {
        margin: 10,
        fontSize: 25,
        color: 'rgba(0,0,0, 0.6)'
    },
    inputText: {
        fontSize: 20,
        flex: 1
    }
});

export default SearchBar;