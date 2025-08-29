import { LightningElement } from 'lwc';

export default class CssStylingComponent extends LightningElement {
    sliderHandler(event) {
        this.template.querySelector('p').style.fontSize = event.target.value + 'em';
    }
}