import React, { Fragment } from 'react';
import { Typography, Card, CardContent, Grow, List, ListItem, ListItemText, Divider } from '@material-ui/core';
import { getId } from '../Utils';

const SpeciesCard = ({ species}) => {
    return (
        <Grow in>
            <Card style={{ margin: 10 }} >
                <CardContent>
                    <Typography variant="headline" component="h2">Species</Typography>
                </CardContent>
                <List disablePadding>
                    {species.map(({ url, name}) => {
                        return (
                            <Fragment key={getId(url)}>
                                <Divider />
                                <ListItem >
                                    <ListItemText
                                        primary={name}
                                    />
                                </ListItem>
                            </Fragment>
                        )
                    })}
                </List>
            </Card>
        </Grow>
    );
};

export default SpeciesCard;