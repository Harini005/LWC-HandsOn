import { LightningElement } from 'lwc';

export default class BidirectionalComponent extends LightningElement {
    directionOfText;
    changedText;
    toggleChangeHandler(event) {
        this.directionOfText = (event.detail.checked) ? 'rtl' : 'ltr';
    }

    textChangeHandler(event) {
        this.changedText = event.target.value;
    }
}