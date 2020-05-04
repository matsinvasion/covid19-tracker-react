import axios from 'axios';

const ApiEndpointUrl = 'https://covid19.mathdro.id/api';
export const fetchData = async () =>{
    try{
        const response = await axios.get(ApiEndpointUrl);
        return response

    }catch (ex){

    }

}