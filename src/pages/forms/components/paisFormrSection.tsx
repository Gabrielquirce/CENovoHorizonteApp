import React from 'react';
import { Control, FieldErrors } from 'react-hook-form';
import { StudentFormData } from '@types/student';
import { SectionTitle } from './SectionTitle';
import { MaskedInput } from './FormInputs/MaskedInput';
import { BasicInput } from './FormInputs/BasicInput';
import { TextInputMaskTypeProp } from 'react-native-masked-text';

type FormField = {
  name: keyof StudentFormData;
  placeholder: string;
  mask?: TextInputMaskTypeProp;
  options?: object;
};

type ParentFormSectionProps = {
  title: string;
  prefix: 'Mae' | 'Pai';
  control: Control<StudentFormData>;
  errors: FieldErrors<StudentFormData>;
};

const getParentFields = (prefix: 'Mae' | 'Pai'): FormField[] => [
  { name: `nome${prefix}`, placeholder: `Nome da ${prefix === 'Mae' ? 'Mãe' : 'Pai'}` },
  { 
    name: `nascimento${prefix}`, 
    placeholder: 'Data de Nascimento', 
    mask: 'datetime', 
    options: { format: 'DD/MM/YYYY' } 
  },
  { name: `endereco${prefix}`, placeholder: 'Endereço' },
  { name: `cep${prefix}`, placeholder: 'CEP', mask: 'zip-code' },
  { name: `cpf${prefix}`, placeholder: 'CPF', mask: 'cpf' },
  { name: `rg${prefix}`, placeholder: 'RG' },
  { name: `profissao${prefix}`, placeholder: 'Profissão' },
  { 
    name: `telefone${prefix}`, 
    placeholder: 'Telefone', 
    mask: 'cel-phone', 
    options: { maskType: 'BRL', withDDD: true, dddMask: '(99) ' } 
  },
  { name: `email${prefix}`, placeholder: 'E-mail' },
  { name: `trabalho${prefix}`, placeholder: 'Local de Trabalho' },
  { 
    name: `telefoneTrabalho${prefix}`, 
    placeholder: 'Telefone do Trabalho', 
    mask: 'cel-phone', 
    options: { maskType: 'BRL', withDDD: true, dddMask: '(99) ' } 
  },
];

export const ParentFormSection = ({ title, prefix, control, errors }: ParentFormSectionProps) => {
  const fields = getParentFields(prefix);

  return (
    <>
      <SectionTitle title={title} />
      
      {fields.map((field, index) => {
        if (field.mask) {
          return (
            <MaskedInput
              key={index}
              control={control}
              name={field.name}
              placeholder={field.placeholder}
              type={field.mask}
              options={field.options}
              error={errors[field.name]?.message}
            />
          );
        }
        return (
          <BasicInput
            key={index}
            control={control}
            name={field.name}
            placeholder={field.placeholder}
            error={errors[field.name]?.message}
          />
        );
      })}
    </>
  );
};