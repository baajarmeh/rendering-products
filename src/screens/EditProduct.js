import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editProduct } from '../actions';

class EditProduct extends Component {
	state = {
		product_name: '',
		weight: '',
		availability: '',
		url: '',
		price_tier: '',
		price_range: '',
		unit_cost: '',
		isEditable: true
	}

	componentDidMount() {
		const id = this.props.location.id;
		const product = this.props.productsInfo.products[id];
		if (typeof id === "number") {
			this.setState({...this.state, ...product});
		}
	}

	handleChange = ({ target: { value, name } }) => {
		this.setState({
			[name]: value
		})
	}

	handleEditable = ({ target: { value, name } }) => {
		this.setState({
			isEditable: !this.state.isEditable
		})
	}

	handleSubmit = () => {
		const { id } = this.props.location;
        const data = { ...this.state, id };
		this.props.dispatch(editProduct(data));
        this.props.history.push('/');
	}

	render() {
		return (
			<div className="container table-responsive">
				<div className="form-group">
					<label>Name</label>
					<input type="text" name="product_name" className="form-control" onChange={this.handleChange} value={this.state.product_name} />
				</div>
				<div className="form-group">
					<label>Weight</label>
					<input type="text" name="weight" className="form-control" onChange={this.handleChange} value={this.state.weight} />
				</div>
				<div className="form-group">
					<label>Availability</label>
					<input type="text" name="availability" className="form-control" onChange={this.handleChange} value={this.state.availability} />
				</div>
				<div className="form-group">
					<label>Product URL</label>
					<input type="text" name="url" className="form-control" onChange={this.handleChange} value={this.state.url} />
				</div>
				<div className="form-group">
				    <label>Price Tier</label>
				    <div className="form-control">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="price_tier" checked={this.state.price_tier === "budget"} onChange={this.handleChange} value="budget" />
                            <label className="form-check-label">Budget</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="price_tier" checked={this.state.price_tier === "premium"} onChange={this.handleChange} value="premium" />
                            <label className="form-check-label">Premium</label>
                        </div>
                    </div>
				</div>
                <div className="form-group">
                    <label>Select Price</label>
                    <select className="form-control" name="price_range" onChange={this.handleChange}>
                        <option>Select Price</option>
                        {
                            this.props.productsInfo.priceInfo[this.state.price_tier] ? this.props.productsInfo.priceInfo[this.state.price_tier].map((price, index) => {
                                return (
                                    <option key={index} value={price} selected={this.state.price_range === price}>{price}</option>
                                )
                         	}) : ''
                        }
                    </select>
                </div>
	            <div className="form-group">
				    <label>isEditable</label>
				    <div className="form-control">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="isEditable" checked={this.state.isEditable} value={this.state.isEditable} onChange={this.handleEditable} />
                            <label className="form-check-label">True</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="isEditable" checked={this.state.isEditable ? false : true} onChange={this.handleEditable} />
                            <label className="form-check-label">False</label>
                        </div>
                    </div>
				</div>
				{
				    this.state.product_name && this.state.weight && this.state.url && this.state.price_tier && this.state.price_range && this.state.isEditable ?
                        <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button> : ""
				}
			</div>
		);
	}
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(EditProduct);