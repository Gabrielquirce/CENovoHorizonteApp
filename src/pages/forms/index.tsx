import React from 'react';
import { ScrollView, Button, Alert, View, Text, TextInput } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { Picker } from '@react-native-picker/picker';
import { yupResolver } from '@hookform/resolvers/yup';
import { StudentFormData } from '@types/student';
import { studentSchema } from './schemas/studentSchema';
import { submitFullStudentData } from './services/studentService';

const CadastroAluno = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    watch
  } = useForm<StudentFormData>({
    resolver: yupResolver(studentSchema),
    mode: 'onChange'
  });

  // Campos observados para condicionais
  const watchTemIrmaos = watch('temIrmaos');
  const watchTemEspecialista = watch('temEspecialista');
  const watchTemAlergias = watch('temAlergias');
  const watchTemMedicamento = watch('temMedicamento');

  const onSubmit = async (data: StudentFormData) => {
    try {
      await submitFullStudentData(data);
      Alert.alert('Sucesso', 'Cadastro realizado!');
      reset();
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Ocorreu um erro desconhecido.';
      Alert.alert('Erro', errorMessage);
    }
  };

  const renderPicker = (
    name: keyof StudentFormData, 
    items: { label: string; value: string }[]
  ) => (
    <Controller
      control={control}
      name={name}
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

  const renderInput = (
    name: keyof StudentFormData, 
    placeholder: string, 
    options?: { mask?: string; type?: any }
  ) => (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value } }) => (
        <TextInput
          placeholder={placeholder}
          onBlur={onBlur}
          onChangeText={onChange}
          value={value}
          keyboardType={options?.type || 'default'}
        />
      )}
    />
  );

  return (
    <ScrollView>
      {/* Seção do Aluno */}
      <View>
        <Text>Dados do Aluno</Text>

        {renderInput('nome', 'Nome Completo')}
        {errors.nome && <Text>{errors.nome.message}</Text>}

        {renderInput('dataNascimento', 'Data de Nascimento (DD/MM/AAAA)')}
        {errors.dataNascimento && <Text>{errors.dataNascimento.message}</Text>}

        {renderInput('naturalidade', 'Naturalidade')}
        {errors.naturalidade && <Text>{errors.naturalidade.message}</Text>}

        {renderInput('nacionalidade', 'Nacionalidade')}
        {errors.nacionalidade && <Text>{errors.nacionalidade.message}</Text>}

        {renderPicker('sexo', [
          { label: 'Masculino', value: 'M' },
          { label: 'Feminino', value: 'F' },
          { label: 'Não Binário', value: 'NB' }
        ])}
        {errors.sexo && <Text>{errors.sexo.message}</Text>}

        {renderInput('cpf', 'CPF (000.000.000-00)')}
        {errors.cpf && <Text>{errors.cpf.message}</Text>}

        {renderInput('rg', 'RG')}
        {errors.rg && <Text>{errors.rg.message}</Text>}

        {renderInput('anoLetivo', 'Ano Letivo')}
        {errors.anoLetivo && <Text>{errors.anoLetivo.message}</Text>}

        {renderInput('termo', 'Termo')}
        {errors.termo && <Text>{errors.termo.message}</Text>}

        {renderInput('folha', 'Folha')}
        {errors.folha && <Text>{errors.folha.message}</Text>}

        {renderInput('livro', 'Livro')}
        {errors.livro && <Text>{errors.livro.message}</Text>}

        {renderInput('matricula', 'Matrícula')}
        {errors.matricula && <Text>{errors.matricula.message}</Text>}

        {renderPicker('turno', [
          { label: 'Matutino', value: 'matutino' },
          { label: 'Vespertino', value: 'vespertino' },
          { label: 'Noturno', value: 'noturno' }
        ])}
        {errors.turno && <Text>{errors.turno.message}</Text>}

        {renderPicker('tipoSanguineo', [
          { label: 'A+', value: 'A+' },
          { label: 'A-', value: 'A-' },
          { label: 'B+', value: 'B+' },
          { label: 'B-', value: 'B-' },
          { label: 'AB+', value: 'AB+' },
          { label: 'AB-', value: 'AB-' },
          { label: 'O+', value: 'O+' },
          { label: 'O-', value: 'O-' }
        ])}
        {errors.tipoSanguineo && <Text>{errors.tipoSanguineo.message}</Text>}

        {renderPicker('raca', [
          { label: 'Branca', value: 'branca' },
          { label: 'Preta', value: 'preta' },
          { label: 'Parda', value: 'parda' },
          { label: 'Indígena', value: 'indigena' },
          { label: 'Amarela', value: 'amarela' }
        ])}
        {errors.raca && <Text>{errors.raca.message}</Text>}
      </View>

      {/* Seção Matrícula */}
      <View>
        <Text>Tipo de Matrícula</Text>
        {renderPicker('matriculaTipo', [
          { label: 'Inicial', value: 'inicial' },
          { label: 'Transferência Municipal', value: 'municipal' },
          { label: 'Transferência Estadual', value: 'estadual' }
        ])}
        {errors.matriculaTipo && <Text>{errors.matriculaTipo.message}</Text>}
      </View>

      {/* Campos Condicionais */}
      <View>
        <Text>Tem irmãos na escola?</Text>
        {renderPicker('temIrmaos', [
          { label: 'Sim', value: 'sim' },
          { label: 'Não', value: 'nao' }
        ])}
        {watchTemIrmaos === 'sim' && (
          <>
            {renderInput('irmaosNome', 'Nomes dos Irmãos')}
            {errors.irmaosNome && <Text>{errors.irmaosNome.message}</Text>}
          </>
        )}

        <Text>Tem atendimento especializado?</Text>
        {renderPicker('temEspecialista', [
          { label: 'Sim', value: 'sim' },
          { label: 'Não', value: 'nao' }
        ])}
        {watchTemEspecialista === 'sim' && (
          <>
            {renderInput('especialista', 'Nome do Especialista')}
            {errors.especialista && <Text>{errors.especialista.message}</Text>}
          </>
        )}

        <Text>Tem alergias?</Text>
        {renderPicker('temAlergias', [
          { label: 'Sim', value: 'sim' },
          { label: 'Não', value: 'nao' }
        ])}
        {watchTemAlergias === 'sim' && (
          <>
            {renderInput('alergia', 'Quais alergias?')}
            {errors.alergia && <Text>{errors.alergia.message}</Text>}
          </>
        )}

        <Text>Usa medicamento contínuo?</Text>
        {renderPicker('temMedicamento', [
          { label: 'Sim', value: 'sim' },
          { label: 'Não', value: 'nao' }
        ])}
        {watchTemMedicamento === 'sim' && (
          <>
            {renderInput('medicamento', 'Nome do Medicamento')}
            {errors.medicamento && <Text>{errors.medicamento.message}</Text>}
          </>
        )}
      </View>

      {/* Seção Mãe */}
      <View>
        <Text>Dados da Mãe</Text>

        {renderInput('nomeMae', 'Nome Completo')}
        {errors.nomeMae && <Text>{errors.nomeMae.message}</Text>}

        {renderInput('nascimentoMae', 'Data de Nascimento (DD/MM/AAAA)')}
        {errors.nascimentoMae && <Text>{errors.nascimentoMae.message}</Text>}

        {renderInput('enderecoMae', 'Endereço Completo')}
        {errors.enderecoMae && <Text>{errors.enderecoMae.message}</Text>}

        {renderInput('cepMae', 'CEP (00000-000)')}
        {errors.cepMae && <Text>{errors.cepMae.message}</Text>}

        {renderInput('cpfMae', 'CPF (000.000.000-00)')}
        {errors.cpfMae && <Text>{errors.cpfMae.message}</Text>}

        {renderInput('rgMae', 'RG')}
        {errors.rgMae && <Text>{errors.rgMae.message}</Text>}

        {renderInput('profissaoMae', 'Profissão')}
        {errors.profissaoMae && <Text>{errors.profissaoMae.message}</Text>}

        {renderInput('telefoneMae', 'Telefone (00) 0000-0000')}
        {errors.telefoneMae && <Text>{errors.telefoneMae.message}</Text>}

        {renderInput('emailMae', 'E-mail', { type: 'email-address' })}
        {errors.emailMae && <Text>{errors.emailMae.message}</Text>}

        {renderInput('trabalhoMae', 'Local de Trabalho')}
        {errors.trabalhoMae && <Text>{errors.trabalhoMae.message}</Text>}

        {renderInput('telefoneTrabalhoMae', 'Telefone do Trabalho')}
        {errors.telefoneTrabalhoMae && <Text>{errors.telefoneTrabalhoMae.message}</Text>}
      </View>

      {/* Seção Pai */}
      <View>
        <Text>Dados do Pai</Text>

        {renderInput('nomePai', 'Nome Completo')}
        {errors.nomePai && <Text>{errors.nomePai.message}</Text>}

        {renderInput('nascimentoPai', 'Data de Nascimento (DD/MM/AAAA)')}
        {errors.nascimentoPai && <Text>{errors.nascimentoPai.message}</Text>}

        {renderInput('enderecoPai', 'Endereço Completo')}
        {errors.enderecoPai && <Text>{errors.enderecoPai.message}</Text>}

        {renderInput('cepPai', 'CEP (00000-000)')}
        {errors.cepPai && <Text>{errors.cepPai.message}</Text>}

        {renderInput('cpfPai', 'CPF (000.000.000-00)')}
        {errors.cpfPai && <Text>{errors.cpfPai.message}</Text>}

        {renderInput('rgPai', 'RG')}
        {errors.rgPai && <Text>{errors.rgPai.message}</Text>}

        {renderInput('profissaoPai', 'Profissão')}
        {errors.profissaoPai && <Text>{errors.profissaoPai.message}</Text>}

        {renderInput('telefonePai', 'Telefone (00) 0000-0000')}
        {errors.telefonePai && <Text>{errors.telefonePai.message}</Text>}

        {renderInput('emailPai', 'E-mail', { type: 'email-address' })}
        {errors.emailPai && <Text>{errors.emailPai.message}</Text>}

        {renderInput('TrabalhoPai', 'Local de Trabalho')}
        {errors.TrabalhoPai && <Text>{errors.TrabalhoPai.message}</Text>}

        {renderInput('telefoneTrabalhoPai', 'Telefone do Trabalho')}
        {errors.telefoneTrabalhoPai && <Text>{errors.telefoneTrabalhoPai.message}</Text>}
      </View>

      {/* Seção Observações */}
      <View>
        <Text>Informações Adicionais</Text>

        {renderInput('escola', 'Escola Anterior')}
        {errors.escola && <Text>{errors.escola.message}</Text>}

        {renderPicker('reside', [
          { label: 'Com os Pais', value: 'pais' },
          { label: 'Com Responsável Legal', value: 'responsavel' },
          { label: 'Outros', value: 'outros' }
        ])}
        {errors.reside && <Text>{errors.reside.message}</Text>}

        {renderInput('respNome', 'Nome do Responsável')}
        {errors.respNome && <Text>{errors.respNome.message}</Text>}

        {renderInput('respTelefone', 'Telefone do Responsável')}
        {errors.respTelefone && <Text>{errors.respTelefone.message}</Text>}

        {renderInput('pessoasAutorizadas', 'Pessoas Autorizadas a Buscar')}
        {errors.pessoasAutorizadas && <Text>{errors.pessoasAutorizadas.message}</Text>}
      </View>

      <Button
        title="Cadastrar Aluno"
        onPress={handleSubmit(onSubmit)}
        disabled={!isValid}
      />
    </ScrollView>
  );
};

export default CadastroAluno;