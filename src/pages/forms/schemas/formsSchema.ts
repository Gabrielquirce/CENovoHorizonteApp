import * as yup from 'yup';
import { StudentFormData } from '@types/student';

export const studentSchema = yup.object().shape<yup.SchemaOf<StudentFormData>>({
  // Seção: Aluno
  nome: yup.string().required('Nome é obrigatório'),
  dataNascimento: yup
    .string()
    .required('Data de nascimento é obrigatória')
    .matches(/^\d{2}\/\d{2}\/\d{4}$/, 'Formato inválido (DD/MM/AAAA)'),
  naturalidade: yup.string().required('Naturalidade é obrigatória'),
  nacionalidade: yup.string().required('Nacionalidade é obrigatória'),
  sexo: yup.string().required('Sexo é obrigatório'),
  cpf: yup
    .string()
    .required('CPF é obrigatório')
    .matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, 'CPF inválido'),
  rg: yup.string().required('RG é obrigatório'),
  anoLetivo: yup.string().required('Ano letivo é obrigatório'),
  termo: yup.string().required('Termo é obrigatório'),
  folha: yup.string().required('Folha é obrigatória'),
  livro: yup.string().required('Livro é obrigatório'),
  matricula: yup.string().required('Matrícula é obrigatória'),
  turno: yup.string().required('Turno é obrigatório'),
  tipoSanguineo: yup.string().required('Tipo sanguíneo é obrigatório'),
  raca: yup.string().required('Raça é obrigatória'),

  // Seção: Mãe
  nomeMae: yup.string().required('Nome da mãe é obrigatório'),
  nascimentoMae: yup
    .string()
    .required('Data de nascimento da mãe é obrigatória')
    .matches(/^\d{2}\/\d{2}\/\d{4}$/, 'Formato inválido (DD/MM/AAAA)'),
  enderecoMae: yup.string().required('Endereço da mãe é obrigatório'),
  cepMae: yup
    .string()
    .required('CEP da mãe é obrigatório')
    .matches(/^\d{5}-\d{3}$/, 'CEP inválido'),
  cpfMae: yup
    .string()
    .required('CPF da mãe é obrigatório')
    .matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, 'CPF inválido'),
  rgMae: yup.string().required('RG da mãe é obrigatório'),
  profissaoMae: yup.string().required('Profissão da mãe é obrigatória'),
  telefoneMae: yup
    .string()
    .required('Telefone da mãe é obrigatório')
    .matches(/^\(\d{2}\) \d{4,5}-\d{4}$/, 'Formato inválido (XX) XXXX-XXXX'),
  emailMae: yup
    .string()
    .required('Email da mãe é obrigatório')
    .email('Email inválido'),
  trabalhoMae: yup.string().required('Local de trabalho da mãe é obrigatório'),
  telefoneTrabalhoMae: yup
    .string()
    .required('Telefone do trabalho da mãe é obrigatório')
    .matches(/^\(\d{2}\) \d{4,5}-\d{4}$/, 'Formato inválido (XX) XXXX-XXXX'),

  // Seção: Pai (validações semelhantes à mãe)
  nomePai: yup.string().required('Nome do pai é obrigatório'),
  nascimentoPai: yup
    .string()
    .required('Data de nascimento do pai é obrigatória')
    .matches(/^\d{2}\/\d{2}\/\d{4}$/, 'Formato inválido (DD/MM/AAAA)'),
  enderecoPai: yup.string().required('Endereço do pai é obrigatório'),
  cepPai: yup
    .string()
    .required('CEP do pai é obrigatório')
    .matches(/^\d{5}-\d{3}$/, 'CEP inválido'),
  cpfPai: yup
    .string()
    .required('CPF do pai é obrigatório')
    .matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, 'CPF inválido'),
  rgPai: yup.string().required('RG do pai é obrigatório'),
  profissaoPai: yup.string().required('Profissão do pai é obrigatória'),
  telefonePai: yup
    .string()
    .required('Telefone do pai é obrigatório')
    .matches(/^\(\d{2}\) \d{4,5}-\d{4}$/, 'Formato inválido (XX) XXXX-XXXX'),
  emailPai: yup
    .string()
    .required('Email do pai é obrigatório')
    .email('Email inválido'),
  TrabalhoPai: yup.string().required('Local de trabalho do pai é obrigatório'),
  telefoneTrabalhoPai: yup
    .string()
    .required('Telefone do trabalho do pai é obrigatório')
    .matches(/^\(\d{2}\) \d{4,5}-\d{4}$/, 'Formato inválido (XX) XXXX-XXXX'),

  // Seção: Observações
  matriculaTipo: yup.string().required('Tipo de matrícula é obrigatório'),
  escola: yup.string().required('Escola é obrigatória'),
  temIrmaos: yup.string().required('Informe se tem irmãos'),
  irmaosNome: yup.string().required('Nomes dos irmãos é obrigatório'),
  temEspecialista: yup.string().required('Informe se tem especialista'),
  especialista: yup.string().required('Especialista é obrigatório'),
  temAlergias: yup.string().required('Informe se tem alergias'),
  alergia: yup.string().required('Alergia é obrigatória'),
  temMedicamento: yup.string().required('Informe se toma medicamento'),
  medicamento: yup.string().required('Medicamento é obrigatório'),
  reside: yup.string().required('Informe com quem reside'),
  respNome: yup.string().required('Nome do responsável é obrigatório'),
  respTelefone: yup
    .string()
    .required('Telefone do responsável é obrigatório')
    .matches(/^\(\d{2}\) \d{4,5}-\d{4}$/, 'Formato inválido (XX) XXXX-XXXX'),
  pessoasAutorizadas: yup.string().required('Pessoas autorizadas é obrigatório'),
});