import { LightningElement } from 'lwc';
import LightningAlert from 'lightning/alert';
export default class AlertBasics extends LightningElement {
    selectedVariant = '';
    selectedTheme = '';
    variantOptions = [
        { label: 'Header', value: 'header' },
        { label: 'Headerless', value: 'headerless' }];
    themeOptions = [
        { label: 'Green', value: 'success' },
        { label: 'Red', value: 'error' },
        { label: 'Yellow', value: 'warning' },
        { label: 'Gray-ish Blue', value: 'info' },
        { label: 'White', value: 'default' },
        { label: 'Black', value: 'shade' },
        { label: 'Dark Blue', value: 'inverse' },
        { label: 'Darker Blue', value: 'alt-inverse' },
        { label: 'Black', value: 'offline' }

    ]
    buttonHandler(event) {
        LightningAlert.open({
            message: this.refs.message.value,
            label: this.refs.label.value,
            variant: this.selectedVariant,
            theme: this.selectedTheme
        });
    }

    handleVariantSelection(event) {

        this.selectedVariant = event.detail.value;

    }

    handleThemeSelection(event) {
        this.selectedTheme = event.detail.value;
    }
}