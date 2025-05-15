import React from 'react';
import { TextInput, Text } from 'react-native';
import { Controller } from 'react-hook-form';
import { StudentFormData } from '@types/student';

type Props = {
  control: any;
  name: keyof StudentFormData;
  placeholder: string;
  error?: string;
};

export const ConditionalInput = ({ control, name, placeholder, error }: Props) => (
  <Controller
    control={control}
    name={String(name)}
    render={({ field: { onChange, onBlur, value } }) => (
      <>
        <TextInput
          placeholder={placeholder}
          onBlur={onBlur}
          onChangeText={onChange}
          value={value}
        />
        {error && <Text>{error}</Text>}
      </>
    )}
  />
);