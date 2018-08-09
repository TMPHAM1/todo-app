import React, { Component } from 'react';
import listData from '../data/todo';

class TodoList extends Component {
    render() {
        const listElements = listData.map((item,index) => {
            return <li className="collection-item" key={item._id}>{item.title}</li>
        });
        return (
            <div>
                <ul className="collection">
                    {listElements}
                </ul>
            </div>
        )
    }
}

export default TodoList;