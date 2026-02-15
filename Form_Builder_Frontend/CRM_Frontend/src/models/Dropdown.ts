
import { BaseFormComponent } from './BaseComponent';

export class DropdownComponent extends BaseFormComponent {
  public options: string[] = [];
  public placeholder: string = "Select option...";

  // Updated constructor to support multi-argument initialization from ComponentFactory
  constructor(id: string, label?: string, options: string[] = [], isMandatory: boolean = false, placeholder: string = "Select option...", comment?: string) {
    super(id, "dropdown", label, isMandatory, comment);
    this.options = options;
    this.placeholder = placeholder;
  }
}