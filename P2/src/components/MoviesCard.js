import React, { Fragment } from 'react';
import { Typography, Card, CardContent, Grow, List, ListItem, ListItemText, Divider} from '@material-ui/core';

const MoviesCard = ({ movies }) => {
    return (
        <Grow in>
            <Card style={{ margin: 10 }} >
                <CardContent>
                    <Typography variant="headline" component="h2">Movies</Typography>
                </CardContent>
                <List component="nav" disablePadding>
                    {movies.map(({ episode_id, title, director, producer }) => {
                        return (
                            <Fragment key={episode_id}>
                                <Divider />
                                <ListItem>
                                    <ListItemText
                                        primary={`Episode ${episode_id}: ${title}`}
                                        secondary={`Directed by ${director}. Produced by ${producer}`} />
                                </ListItem>
                            </Fragment>
                        )
                    })}
                </List>
            </Card>
        </Grow>
    );
};

export default MoviesCard;