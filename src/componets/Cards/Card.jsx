import React from 'react';
import { Card, CardContent, Typography, Grid} from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';

//use functional components
const Cards = ({ data : {confirmed, recovered, deaths, lastUpdate }}) => {
    if(!confirmed) {return 'Loading ...'}
 
    return (
     <div className={styles.container}>
         <Grid container spacing={3} justify="center">
             <Grid item component={Card}>
                 <CardContent>
                     <Typography color="textSecondary" gutterBottom>
                         Infected
                     </Typography>
                     <Typography variant="h5">
                         <CountUp
                         start={0}
                         end={confirmed.value}
                         separator=","
                         />
                     </Typography>
                     <Typography color="textSecondary">
                         REAL DATE
                     </Typography>
                     <Typography variant="body2">ACTIVE CASES</Typography>
                 </CardContent>

             </Grid>
             <Grid item component={Card}>
                 <CardContent>
                     <Typography color="textSecondary" gutterBottom>
                         Recovered Cases
                     </Typography>
                     <Typography variant="h5">
                         REAL DATA
                     </Typography>
                     <Typography color="textSecondary">
                         REAL DATE
                     </Typography>
                     <Typography variant="body2">Recovered CASES</Typography>
                 </CardContent>

             </Grid>
             <Grid item component={Card}>
                 <CardContent>
                     <Typography color="textSecondary" gutterBottom>
                         Deaths
                     </Typography>
                     <Typography variant="h5">
                         REAL DATA
                     </Typography>
                     <Typography color="textSecondary">
                         REAL DATE
                     </Typography>
                     <Typography variant="body2">Death numbers</Typography>
                 </CardContent>

             </Grid>

         </Grid>

     </div>
     );
}
 
export default Cards;

