import {useState, useEffect} from 'react';
import covidApi from '../api/covidApi';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (term) => {
        try{
            const responce = await covidApi.get(`/${term}/status/confirmed`);
            if(responce.data.length){
                setResults(responce.data[responce.data.length-1]);
                setErrorMessage('');
            } else {
                setErrorMessage('Could not find the country \nPlease, try again');
            }
        } catch (err) {
            setErrorMessage('Something went wrong \nPlease, try again');
        }
    }

    useEffect( () => {
        searchApi('Kazakhstan');
    }, []);
    
    return [searchApi, results, errorMessage];

}