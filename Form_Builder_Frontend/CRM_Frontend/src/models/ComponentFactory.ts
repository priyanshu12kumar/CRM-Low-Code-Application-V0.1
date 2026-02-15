
import { TextInputComponent } from './TextInput';
import { CheckboxComponent } from './Checkbox';
import { RadioButtonComponent } from './RadioButton';
import { DropdownComponent } from './Dropdown';
import { TextAreaComponent } from './TextArea';

export const COMPONENT_TEMPLATES = {
  text: () => new TextInputComponent(crypto.randomUUID(), "New Text Field", "text", false, "Enter value..."),
  checkbox: () => new CheckboxComponent(crypto.randomUUID(), "New Checkbox Group", [], false),
  radio: () => new RadioButtonComponent(crypto.randomUUID(), "New Radio Group", "single_choice", [], false),
  dropdown: () => new DropdownComponent(crypto.randomUUID(), "New Dropdown", [], false, "Select an option..."),
  textarea: () => new TextAreaComponent(crypto.randomUUID(), "New Text Area", "textarea", 3, false, "Type here..."),
};
