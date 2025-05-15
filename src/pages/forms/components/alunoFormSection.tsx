import React from 'react';
import { Control, FieldErrors } from 'react-hook-form';
import { StudentFormData } from '@types/student';
import { MaskedInput } from './FormInputs/MaskedInput';
import { BasicInput } from './FormInputs/BasicInput';
import { SectionTitle } from './SectionTitle';
import { TextInputMaskTypeProp } from 'react-native-masked-text';

type FormField = {
  name: keyof StudentFormData;
  placeholder: string;
  mask?: TextInputMaskTypeProp;
  options?: object;
};

const studentFields: FormField[] = [
  { name: 'nome', placeholder: 'Nome' },
  { 
    name: 'dataNascimento', 
    placeholder: 'Data de Nascimento', 
    mask: 'datetime', 
    options: { format: 'DD/MM/YYYY' } 
  },
  { name: 'naturalidade', placeholder: 'Naturalidade' },
  { name: 'nacionalidade', placeholder: 'Nacionalidade' },
  { name: 'sexo', placeholder: 'Sexo' },
  { name: 'cpf', placeholder: 'CPF', mask: 'cpf' },
  { name: 'rg', placeholder: 'RG' },
  { name: 'anoLetivo', placeholder: 'Ano Letivo' },
  { name: 'termo', placeholder: 'Termo' },
  { name: 'folha', placeholder: 'Folha' },
  { name: 'livro', placeholder: 'Livro' },
  { name: 'matricula', placeholder: 'Matrícula' },
  { name: 'turno', placeholder: 'Turno' },
  { name: 'tipoSanguineo', placeholder: 'Tipo Sanguíneo' },
  { name: 'raca', placeholder: 'Raça' },
];

type Props = {
  control: Control<StudentFormData>;
  errors: FieldErrors<StudentFormData>;
};

export const StudentFormSection = ({ control, errors }: Props) => {
  return (
    <>
      <SectionTitle title="Aluno" />
      
      {studentFields.map((field, idx) => {
        if (field.mask) {
          return (
            <MaskedInput
              key={idx}
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
            key={idx}
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