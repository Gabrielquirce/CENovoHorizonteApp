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

const observationFields: FormField[] = [
  { name: 'matriculaTipo', placeholder: 'Tipo de Matrícula' },
  { name: 'escola', placeholder: 'Escola' },
  { name: 'temIrmaos', placeholder: 'Tem irmãos?' },
  { name: 'irmaosNome', placeholder: 'Nomes dos irmãos' },
  { name: 'temEspecialista', placeholder: 'Atendimento Especialista?' },
  { name: 'especialista', placeholder: 'Especialista' },
  { name: 'temAlergias', placeholder: 'Tem alergias?' },
  { name: 'alergia', placeholder: 'Alergias' },
  { name: 'temMedicamento', placeholder: 'Toma medicamento?' },
  { name: 'medicamento', placeholder: 'Medicamento' },
  { name: 'reside', placeholder: 'Reside com' },
  { name: 'respNome', placeholder: 'Responsável' },
  { 
    name: 'respTelefone', 
    placeholder: 'Telefone do Responsável', 
    mask: 'cel-phone', 
    options: { maskType: 'BRL', withDDD: true, dddMask: '(99) ' } 
  },
  { name: 'pessoasAutorizadas', placeholder: 'Pessoas Autorizadas' },
];

type Props = {
  control: Control<StudentFormData>;
  errors: FieldErrors<StudentFormData>;
};

export const ObservationsSection = ({ control, errors }: Props) => {
  return (
    <>
      <SectionTitle title="Observações" />
      
      {observationFields.map((field, index) => {
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