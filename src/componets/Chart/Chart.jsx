import React, {useState, useEffect} from 'react';
import { fetchDailyData } from '../../api';

const Charts = () => {
    const [dailyData,setDailyData] = useState({});
    useEffect(() => {
        const fetchApi = async () => {
            setDailyData(await fetchDailyData())
        }
        fetchApi();
    })
    return ( 
        <h1>Charts</h1>
     );
}
 
export default Charts;