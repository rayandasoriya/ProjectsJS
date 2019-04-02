import React, { Fragment } from 'react';
import { Typography, Card, CardContent, Grow, List, ListItem, ListItemText, Divider } from '@material-ui/core';
import { getId } from '../Utils';

const PlanetsCard = ({ planet, planets = [planet], title = 'Planets'}) => {
    return (
        <Grow in>
            <Card style={{ margin: 10 }} >
                <CardContent>
                    <Typography variant="headline" component="h2">{title}</Typography>
                </CardContent>
                <List disablePadding>
                    {planets.map(({ url, name}) =>
                        <Fragment key={getId(url)}>
                            <Divider />
                            <ListItem >
                                <ListItemText primary={name} />
                            </ListItem>
                        </Fragment>
                    )}
                </List>
            </Card>
        </Grow>
    );
};

export default PlanetsCard;