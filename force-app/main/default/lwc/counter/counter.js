import { LightningElement } from 'lwc';

export default class Counter extends LightningElement {
    counter = 0;
    message;

    increment() {
        this.counter++;
    }

    decrement() {
        if (this.counter == 0) {
            return;
        }
        this.counter--;
    }
}