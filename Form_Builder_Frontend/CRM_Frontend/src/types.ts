
import type { FormComponent } from './models/BaseComponent';

export type SystemState = "login" | "preview" | "form" | "dashboard" ;
export type InputDataType = "text" | "number" | "email" | "password" | "date";
export type RadioSelectionMode = "single_choice" | "independent";

export interface RadioOption {
  id: string;
  index: number;
  label: string;
  isChecked: boolean;
}

export interface FormMetadata {
  name: string;
  description: string;
}

export interface FormDetails {
  FormName: string;
}

export interface FieldInstance {
  inputId: string;
  inputType: string;
  isSubmitted: boolean;
  InputComponent: FormComponent;
}

export interface FormState {
  metadata: FormMetadata;
  fields: FieldInstance[];
  selectedFieldId: string | null;
}