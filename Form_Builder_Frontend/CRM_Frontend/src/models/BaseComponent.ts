
import { TextInputComponent } from './TextInput';
import { CheckboxComponent } from './Checkbox';
import { RadioButtonComponent } from './RadioButton';
import { DropdownComponent } from './Dropdown';
import { TextAreaComponent } from './TextArea';

export abstract class BaseFormComponent {
  public id: string;
  public type: string;
  public label: string;
  public isMandatory: boolean;
  public comment: string;

  constructor(
    id: string,
    type: string,
    label: string = "New Field",
    isMandatory: boolean = false,
    comment: string = ""
  ) {
    this.id = id;
    this.type = type;
    this.label = label;
    this.isMandatory = isMandatory;
    this.comment = comment;
  }

  // Methods for common logic can be added here
  validate(): boolean {
    return true; 
  }
}

export type FormComponent =
  | TextInputComponent
  | CheckboxComponent
  | RadioButtonComponent
  | DropdownComponent
  | TextAreaComponent;
