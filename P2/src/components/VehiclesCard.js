import React, { Fragment } from 'react';
import { Typography, Card, CardContent, Grow, List, ListItem, ListItemText, Divider} from '@material-ui/core';
import { getId } from '../Utils';

const VehiclesCard = ({ vehicles }) => {
    return (
        <Grow in>
            <Card style={{ margin: 10 }} >
                <CardContent>
                    <Typography variant="headline" component="h2">Vehicles</Typography>
                </CardContent>
                <List disablePadding>
                    {vehicles.map(({ url, name}) => {
                        return (
                            <Fragment key={getId(url)}>
                                <Divider />
                                <ListItem  >                                    
                                    <ListItemText primary={name}/>
                                </ListItem>
                            </Fragment>
                        )
                    })}
                </List>
            </Card>
        </Grow>
    );
};

export default VehiclesCard;