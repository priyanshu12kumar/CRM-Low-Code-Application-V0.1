
import { BaseFormComponent } from './BaseComponent';
import type { RadioOption, RadioSelectionMode } from '../types';

export class RadioButtonComponent extends BaseFormComponent {
  public options: RadioOption[] = [];
  public mode: RadioSelectionMode = "single_choice";
  public defaultIndex: number | null = null ;

  // Updated constructor to support multi-argument initialization from ComponentFactory
  constructor(id: string, label?: string, mode: RadioSelectionMode = "single_choice", options: RadioOption[] = [], isMandatory: boolean = false , comment: string = "", defaultIndex: number | null = null) {
    super(id, "radio", label, isMandatory, comment);
    this.mode = mode;
    this.options = options;
    this.defaultIndex = defaultIndex;
  }
}