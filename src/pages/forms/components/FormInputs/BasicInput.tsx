import React from 'react';
import { Controller, Control, FieldError } from 'react-hook-form';
import { TextInput, View, Text } from 'react-native';
import { StudentFormData } from '../../../types/student';
import { styles } from '../../styles';

type Props = {
  control: Control<StudentFormData>;
  name: keyof StudentFormData;
  placeholder: string;
  error?: FieldError;
};

export const BasicInput = ({ control, name, placeholder, error }: Props) => (
  <View style={styles.inputContainer}>
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value } }) => (
        <TextInput
          placeholder={placeholder}
          style={styles.input}
          onBlur={onBlur}
          onChangeText={onChange}
          value={value}
        />
      )}
    />
    {error && <Text style={styles.error}>{error.message}</Text>}
  </View>
);