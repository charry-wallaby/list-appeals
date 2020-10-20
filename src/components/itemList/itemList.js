import React from 'react';
import { List } from '@material-ui/core';

import Item from '../item';

const ItemList = ({ items, onFormOpen }) => {

    const elements = items && items.map((item, index) => {
        const { id, ...itemProps } = item;
        return (
            <div key={index}>
              <Item 
                {...itemProps}
                onFormOpen={() => onFormOpen(id)}
              />
            </div>
        )
    });

    return (
        <List>
          {elements}
        </List>
    )
}

export default ItemList;