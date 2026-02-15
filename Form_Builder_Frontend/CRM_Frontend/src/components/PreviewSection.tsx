import CheckBoxPreview from '../ComponentPreview/CheckBoxPreview.tsx';
import DropDownPreview from '../ComponentPreview/DropDownPreview.tsx';
import RadioButtonPreview from '../ComponentPreview/RadioButtonPreview.tsx';
import TextAreaPreview from '../ComponentPreview/TextAreaPreview.tsx';
import TextInputPreview from '../ComponentPreview/TextInputPreview.tsx';
import type { FormComponent } from '../models/BaseComponent.ts';
import { TextInputComponent } from '../models/TextInput';
import { CheckboxComponent } from '../models/Checkbox';
import { RadioButtonComponent } from '../models/RadioButton';
import { DropdownComponent } from '../models/Dropdown';
import { TextAreaComponent } from '../models/TextArea';

function PreviewSection({ currentComponent }: { currentComponent: FormComponent }) {
  return (
    <div>
      {(() => {
        console.log("Current Component in PreviewSection:", currentComponent.type);
        switch (currentComponent.type) {
          case "text":
            return <TextInputPreview   currentComponent={currentComponent as TextInputComponent} />;
          case "textarea":
            return <TextAreaPreview    currentComponent={currentComponent as TextAreaComponent} />;
          case "dropdown":
            return <DropDownPreview    currentComponent={currentComponent as DropdownComponent} />;
          case "checkbox":
            return <CheckBoxPreview    currentComponent={currentComponent as CheckboxComponent} />;
          case "radio":
            return <RadioButtonPreview currentComponent={currentComponent as RadioButtonComponent} />;
          default:
            return <>default</>;
        }
      })()}
    </div>
  );
}

export default PreviewSection;