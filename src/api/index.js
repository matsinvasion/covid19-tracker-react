import axios from 'axios';

const ApiEndpointUrl = 'https://covid19.mathdro.id/api';
export const fetchData = async () =>{
    try{
        const {data: { confirmed, recovered, deaths, lastUpdate}} = await axios.get(ApiEndpointUrl);
        return { confirmed, recovered, deaths, lastUpdate }

    }catch (ex){

    }

}
export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${ApiEndpointUrl}/daily`);
        const modifiedData = data.map((dailyData)=> ({
            confirmed:dailyData.confirmed.total,
            deaths:dailyData.deaths.total,
            date:dailyData.reportDate,
        }));
        return modifiedData;
    } catch (error) {
    }
}

export const fetchCountries = async () =>{
    try {
        const {data:{ countries } }= await axios.get(`${ApiEndpointUrl}/countries`);
        return countries.map((country) => country.name)
        
    } catch (error) {
        
    }
}