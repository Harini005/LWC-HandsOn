import { LightningElement } from 'lwc';

export default class StyleDullComponent extends LightningElement {
    toggleHandler(event) {
        let toggleChecked = event.target.checked;
        let res = this.template.querySelector('p').style;
        if (toggleChecked) {
            res.border = '2px solid black'
            res.margin = '10px';
            res.padding = '10px';
            res.backgroundColor = 'purple';
            res.color = 'white';
            
        }
        else {
            res.border = ''
            res.margin = '';
            res.padding = '';
            res.backgroundColor = '';
            res.color = '';
        }
    }
}