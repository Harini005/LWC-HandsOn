import { LightningElement } from 'lwc';

export default class DependentPicklistCreation extends LightningElement {
    productOptions = [
        { 'label': 'Electronics', 'value': 'Electronics' },
        { 'label': 'Clothing', 'value': 'Clothing' },
        { 'label': 'Home Goods', 'value': 'Home Goods' },
        { 'label': 'Books', 'value': 'Books' }
    ];

    subProductOptions = [];
    subProductList = {
        'Electronics': [{ 'label': 'Smartphones', 'value': 'Smartphones' }, { 'label': 'Laptops', 'value': 'Laptops' }, { 'label': 'Headphones', 'value': 'Headphones' }, { 'label': 'Cameras', 'value': 'Cameras' }, { 'label': 'Televisions', 'value': 'Televisions' }],
        'Clothing': [{ 'label': "Men 's Apparel", 'value': "Men 's Apparel" }, {
            'label': "Women 's Apparel", 'value': "Women 's Apparel"
        }, {
            'label': "Kid's Wear", 'value': "Kid's Wear"
            }, { 'label': 'Footwear', 'value': 'Footwear' }, { 'label': 'Accessories', 'value': 'Accessories' }],
        'Home Goods': [{ 'label': 'Kitchenware', 'value': 'Kitchenware' }, { 'label': 'Furniture', 'value': 'Furniture' }, { 'label': 'Decor', 'value': 'Decor' }, { 'label': 'Bedding & Bath', 'value': 'Bedding & Bath' }],
        'Books': [{ 'label': 'Fiction', 'value': 'Fiction' }, { 'label': 'Non-Fiction', 'value': 'Non-Fiction' }, {
            'label': "Children 's Books", 'value': "Children 's Books"
        }, { 'label': 'Textbooks', 'value': 'Textbooks' }]
    }

    getDependentOptionsHandler(event) {
        this.subProductOptions = this.subProductList[event.detail.value];
    }
}