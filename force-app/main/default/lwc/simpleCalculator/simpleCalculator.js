import { LightningElement } from 'lwc';

export default class SimpleCalculator extends LightningElement {
    inputObj = {};
    finalResult;
    captureInput(event) {
        this.inputObj = { ...this.inputObj, ...{ [event.target.name]: event.target.value } }
    }

    manipulateData(event) {
        let { label } = event.target;

        if (label == '+') {
            let result = 0;
            for (let obj in this.inputObj) {
                result = result + Number(this.inputObj[obj]);

            }
            this.finalResult = result;
        }
        else if (label == '-') {
            let result = 0;
            for (let obj in this.inputObj) {
                result = (result == 0) ? (this.inputObj[obj] - result) : (result - this.inputObj[obj]);
            }

            this.finalResult = result;

        }
        else if (label == '*') {
            let result = 1;
            for (let obj in this.inputObj) {
                result = result * this.inputObj[obj];

            }
            this.finalResult = result;

        }
        else if (label == '/') {
            let result = 1;
            let iteration = 1;
            for (let obj in this.inputObj) {
                result = (iteration == 1) ? (this.inputObj[obj] / result) : (result / this.inputObj[obj]);
                iteration++;

            }
            this.finalResult = result;

        }
    }
}