import React, { Fragment } from 'react';
import { List, ListItem, ListItemText, Avatar, Divider } from '@material-ui/core';
import { Link } from 'react-router-dom'
import { getId, getInitials } from '../Utils';


const PeopleList = ({ items, nextPageButton, onNextPage, divider }) => (
    <Fragment>
        <List component="nav" disablePadding={divider}>
            {items.length !== 0 &&
                items.map(({ name, mass, height, url }) =>
                    <Fragment key={getId(url)}>
                        {divider && <Divider />}
                        <ListItem button component={Link} to={`/people/${getId(url)}`} >
                            <Avatar>{getInitials(name)}</Avatar>
                            <ListItemText primary={name} secondary={`Weight: ${mass}Kg, Height: ${height}cm `} />
                        </ListItem>
                    </Fragment>
                )
            }
            <ListItem >
                <Avatar>RD</Avatar>
                <ListItemText primary="Rayan Dasoriya" secondary={`Weight: 68Kg, Height: 170cm `} />
            </ListItem>
            {nextPageButton &&
                <ListItem button onClick={onNextPage} >
                    <ListItemText primary="Load more..." />
                </ListItem>
            }
        </List>
    </Fragment>
)


export default PeopleList;