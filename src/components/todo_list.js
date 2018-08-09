import React, { Component } from 'react';


class TodoList extends Component {
    render() {
        const listElements = this.props.list.map((item,index) => {
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