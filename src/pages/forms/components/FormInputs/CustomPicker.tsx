import React from 'react';
import { Controller } from 'react-hook-form';
import { Picker } from '@react-native-picker/picker';
import { StudentFormData } from '@types/student';

type Props = {
  control: any;
  name: keyof StudentFormData;
  items: Array<{ label: string; value: string }>;
};

export const CustomPicker = ({ control, name, items }: Props) => (
  <Controller
    control={control}
    name={String(name)}
    render={({ field: { onChange, value } }) => (
      <Picker
        selectedValue={value}
        onValueChange={onChange}>
        <Picker.Item label="Selecione..." value="" />
        {items.map((item, index) => (
          <Picker.Item
            key={index}
            label={item.label}
            value={item.value}
          />
        ))}
      </Picker>
    )}
  />
);