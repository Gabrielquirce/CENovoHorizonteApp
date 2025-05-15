import React from 'react';
import { Controller, Control, FieldError } from 'react-hook-form';
import { TextInputMask, TextInputMaskTypeProp } from 'react-native-masked-text';
import { View, Text } from 'react-native';
import { StudentFormData } from '@types/student';
import { styles } from '../../styles';

type Props = {
  control: Control<StudentFormData>;
  name: keyof StudentFormData;
  placeholder: string;
  type: TextInputMaskTypeProp;
  options?: object;
  error?: FieldError;
};

export const MaskedInput = ({
  control,
  name,
  placeholder,
  type,
  options,
  error,
}: Props) => (
  <View style={styles.inputContainer}>
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <TextInputMask
          type={type}
          options={options}
          value={value}
          onChangeText={onChange}
          style={styles.input}
          placeholder={placeholder}
        />
      )}
    />
    {error && <Text style={styles.error}>{error.message}</Text>}
  </View>
);