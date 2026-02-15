
import { BaseFormComponent } from './BaseComponent';
import type { InputDataType } from '../types';

export class TextInputComponent extends BaseFormComponent {
  public placeholder: string = "";
  public validationRegex: string = "";
  public inputDataType: InputDataType = "text";
  public validarionRegex: string = "";

  // Updated constructor to support multi-argument initialization from ComponentFactory
  constructor(id: string, label?: string, inputDataType: InputDataType = "text", isMandatory: boolean = false, placeholder: string = "", comment: string = "", validationRegex: string = "") {
    super(id, "text", label, isMandatory, comment);
    this.inputDataType = inputDataType;
    this.placeholder = placeholder;
    this.validationRegex = validationRegex;
  }

  // Example of extensibility
  setPlaceholder(val: string) { this.placeholder = val; return this; }
  setValidation(regex: string) { this.validationRegex = regex; return this; }
}