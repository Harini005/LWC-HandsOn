import { LightningElement } from 'lwc';

export default class DateTimeDisplay extends LightningElement {
    dateFunc = new Date();
    dateTime = this.dateFunc.toLocaleDateString() + ' ' + this.dateFunc.toLocaleTimeString();
    buttonHandler(event) {
        this.dateTime = new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString();
    }

}