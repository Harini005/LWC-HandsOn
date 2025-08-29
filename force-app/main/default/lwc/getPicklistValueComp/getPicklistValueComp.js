import { LightningElement, wire } from 'lwc';
import { getPicklistValuesByRecordType, getObjectInfo } from 'lightning/uiObjectInfoApi';
const PICKLIST = 'Picklist';


export default class GetPicklistValueComp extends LightningElement {
    objectApiName;
    fieldApiName = [];
    recordTypeId;
    showCombobox = false;
    valueSelected;
    timeoutValue;
    pickVals;
    values = [];
    showValues = false;

    @wire(getObjectInfo, { objectApiName: '$objectApiName' })
    objectInfo({ data, error }) {
        clearTimeout(this.timeoutValue);
        this.timeoutValue = setTimeout(() => {
            if (data) {
                this.recordTypeId = data.defaultRecordTypeId;
                for (let field in data.fields) {
                    if (data.fields[field].dataType == PICKLIST) {
                        let fieldName = data.fields[field].apiName;
                        this.fieldApiName = [...this.fieldApiName, { 'label': fieldName, 'value': data.fields[field].apiName }];
                    }
                }
                this.showCombobox = true
                console.log(this.fieldApiName);
            }
            else if (error) {
                console.error(error);
            }
        }, 1000)

    }


    @wire(getPicklistValuesByRecordType, { objectApiName: '$objectApiName', recordTypeId: '$recordTypeId' })
    picklistInfos({ data, error }) {
        if (data) {
            this.pickVals = data;
        }
        else if (error) {
            console.error(error);
        }
    }




    captureObjectName(event) {
        this.objectApiName = event.target.value;
    }


    picklistHandler(event) {
        this.values = [];
        this.valueSelected = event.detail.value;
        this.pickVals.picklistFieldValues[this.valueSelected].values.forEach(item => {
            this.values = [...this.values, item.label];
        });
        this.showValues = true;
        console.log(this.values);

    }

}