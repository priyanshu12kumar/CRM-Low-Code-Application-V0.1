
import { BaseFormComponent } from './BaseComponent';

export class TextAreaComponent extends BaseFormComponent {
  public placeholder: string = "";
  public rows: number = 3;
  public validationRegex: string = ""; // New property for validation regex

  // Updated constructor to support multi-argument initialization from ComponentFactory
  constructor(id: string, label?: string, _type?: string, rows: number = 3, isMandatory: boolean = false, placeholder: string = "" , comment: string = "" , validationRegex: string = "") {
    super(id, "textarea", label, isMandatory , comment);
    this.rows = rows;
    this.placeholder = placeholder;
    this.validationRegex = validationRegex; // Initialize validationRegex with the passed value
  }
}