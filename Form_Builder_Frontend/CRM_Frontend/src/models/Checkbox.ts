
import { BaseFormComponent } from './BaseComponent';

export class CheckboxComponent extends BaseFormComponent {
  public options: string[] = [];

  // Updated constructor to support multi-argument initialization from ComponentFactory
  constructor(id: string, label?: string, options: string[] = [], isMandatory: boolean = false , comment: string = "") {
    super(id, "checkbox", label, isMandatory, comment);
    this.options = options;
  }
}