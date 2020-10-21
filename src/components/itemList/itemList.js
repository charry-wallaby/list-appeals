import React from 'react';
import { List } from '@material-ui/core';

import Item from '../item';

const ItemList = ({ items }) => {

    const elements = items && items.map(item => {
        const { id, ...itemProps } = item;
        return (
            <div key={id}>
              <Item 
                {...itemProps}
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