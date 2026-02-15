
import type { FormState, FieldInstance } from '../types';
import { TextInputComponent } from '../models/TextInput';
import { TextAreaComponent } from '../models/TextArea';
import { RadioButtonComponent } from '../models/RadioButton';
import { DropdownComponent } from '../models/Dropdown';
import { CheckboxComponent } from '../models/Checkbox';

export class FormManager {
  static createInitialState(): FormState {
    return {
      metadata: { name: "Untitled Form", description: "" },
      fields: [],
      selectedFieldId: null
    };
  }

  static addField(state: FormState, type: string): FormState {
    const id = crypto.randomUUID();
    let component: any;

    switch(type) {
      case "text": component = new TextInputComponent(id); break;
      case "textarea": component = new TextAreaComponent(id); break;
      case "radio": component = new RadioButtonComponent(id); break;
      case "checkbox": component = new CheckboxComponent(id); break;
      case "dropdown": component = new DropdownComponent(id); break;
      default: component = new TextInputComponent(id);
    }

    const newField: FieldInstance = {
      inputId: id,
      inputType: type,
      isSubmitted: false,
      InputComponent: component
    };

    return { ...state, fields: [...state.fields, newField], selectedFieldId: id };
  }

  static updateField(state: FormState, id: string, updates: any): FormState {
    const fields = state.fields.map(f => {
      if (f.inputId !== id) return f;
      const updatedComp = Object.assign(Object.create(Object.getPrototypeOf(f.InputComponent)), f.InputComponent, updates);
      return { ...f, InputComponent: updatedComp };
    });
    return { ...state, fields };
  }

  static moveField(state: FormState, id: string, direction: 'up' | 'down'): FormState {
    const index = state.fields.findIndex(f => f.inputId === id);
    if (index === -1) return state;
    const newIndex = direction === 'up' ? index - 1 : index + 1;
    if (newIndex < 0 || newIndex >= state.fields.length) return state;

    const newFields = [...state.fields];
    [newFields[index], newFields[newIndex]] = [newFields[newIndex], newFields[index]];
    return { ...state, fields: newFields };
  }
}
