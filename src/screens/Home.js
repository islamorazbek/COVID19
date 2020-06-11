import React, {useState} from 'react';
import {Dimensions, View, ImageBackground, StyleSheet } from 'react-native';

import SearchBar from '../components/SearchBar';
import DynamicButton from '../components/DynamicButton';
import CovidInfo from '../components/CovidInfo';
import useResults from '../hooks/useResults';

const Test = () => {

    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    return (
        <ImageBackground source={require('../images/image5.jpg')} style={styles.imageBack}>
            <SearchBar
                term={term} 
                onTermChange={newTerm => setTerm(newTerm)} 
                onTermSubmit={()=>searchApi(term)}/>
            <CovidInfo data={results} error={errorMessage}/>
            <DynamicButton link='Info1' title='COVID-19 Info'/>
            <DynamicButton link='Info2' title='Safety Tips & Precautions'/>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    imageBack: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        height: Dimensions.get('window').height + 50
    }
});

export default Test;
