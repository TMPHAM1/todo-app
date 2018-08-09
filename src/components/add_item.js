import React, {Component} from 'react';

class AddItem extends Component {
   constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
    this.state = {
        title: '',
        details: ''
    }
   }

   handleInputChange(e) {
       const {name,value} = e.target
       this.setState({
        [name]: value,
       });
   }

   handleAddItem(e) {
       e.preventDefault();

       this.props.add(this.state);

   }

    render() {
        const {title,details} = this.state;

        return (
            <form onSubmit = {this.handleAddItem}>
                    <div className="row">
                        <div className="col s6">
                        <label>Title</label>
                        <input type="text" name="title" value={title} onChange = {this.handleInputChange}/>
                        </div>
                        <div className="col s6">
                        <label>Details</label>
                        <input type="text" name="details" value ={details} onChange = {this.handleInputChange}/>
                        </div>
                    </div>
                    <div className="row">
                    <div className="col s12 right-align">
                    <button className="btn green "> Add Item </button>
                    </div>
                    </div>
                </form>
        )
    }

}

export default AddItem;