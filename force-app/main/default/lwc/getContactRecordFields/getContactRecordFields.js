import { LightningElement, api, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import NAME from '@salesforce/schema/Account.Name';
import INDUSTRY from '@salesforce/schema/Account.Industry';

export default class GetContactRecordFields extends LightningElement {
    @api recordId;
    data = {};
    captureRecordId(event) {
        let { value } = event.target;
        if (value.length == 15 || value.length == 18) {
            this.recordId = value;
        }
    }

    @wire(getRecord, { recordId: '$recordId', fields: [NAME, INDUSTRY] })
    accounts({ data, error }) {
        if (data) {
            for (let i in data.fields) {
                this.data = { ...this.data,  [i]: data.fields[i].value 
            };
        }
        console.log(this.data);
    }
        else if(error) {
        console.error(error);
    }
}
}