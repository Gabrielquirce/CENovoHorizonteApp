import axios from 'axios';
import { StudentFormData } from '@types/student';

const api = axios.create({
  baseURL: 'http://192.168.0.105:8080', // Altere para sua URL
  timeout: 10000,
});

// Função completa de POST
export const submitFullStudentData = async (data: StudentFormData) => {
  try {
    // Dados formatados para cada endpoint
    const alunoData = {
      nome: data.nome,
      dataNascimento: data.dataNascimento,
      naturalidade: data.naturalidade,
      nacionalidade: data.nacionalidade,
      sexo: data.sexo,
      cpf: data.cpf,
      rg: data.rg,
      anoLetivo: data.anoLetivo,
      termo: data.termo,
      folha: data.folha,
      livro: data.livro,
      matricula: data.matricula,
      turno: data.turno,
      tipoSanguineo: data.tipoSanguineo,
      raca: data.raca
    };

    const maeData = {
      nome: data.nomeMae,
      nascimento: data.nascimentoMae,
      endereco: data.enderecoMae,
      cep: data.cepMae,
      cpf: data.cpfMae,
      rg: data.rgMae,
      profissao: data.profissaoMae,
      telefone: data.telefoneMae,
      email: data.emailMae,
      trabalho: data.trabalhoMae,
      telefoneTrabalho: data.telefoneTrabalhoMae
    };

    const paiData = {
      nome: data.nomePai,
      nascimento: data.nascimentoPai,
      endereco: data.enderecoPai,
      cep: data.cepPai,
      cpf: data.cpfPai,
      rg: data.rgPai,
      profissao: data.profissaoPai,
      telefone: data.telefonePai,
      email: data.emailPai,
      trabalho: data.TrabalhoPai,
      telefoneTrabalho: data.telefoneTrabalhoPai
    };

    const observacoesData = {
      matriculaTipo: data.matriculaTipo,
      escola: data.escola,
      temIrmaos: data.temIrmaos,
      irmaosNome: data.irmaosNome,
      temEspecialista: data.temEspecialista,
      especialista: data.especialista,
      temAlergias: data.temAlergias,
      alergia: data.alergia,
      temMedicamento: data.temMedicamento,
      medicamento: data.medicamento,
      reside: data.reside,
      respNome: data.respNome,
      respTelefone: data.respTelefone,
      pessoasAutorizadas: data.pessoasAutorizadas
    };

    // Envio paralelo
    const [aluno, mae, pai, observacoes] = await Promise.all([
      api.post('/alunos', alunoData),
      api.post('/maes', maeData),
      api.post('/pais', paiData),
      api.post('/observacoes', observacoesData)
    ]);

    return { aluno, mae, pai, observacoes };

  } catch (error) {
    if ((error as any).isAxiosError) {
      throw new Error(
        `Erro ${(error as any).response?.status || 'desconhecido'}: ${
          (error as any).response?.data?.message || 'Falha na comunicação'
        }`
      );
    }
    throw new Error('Erro desconhecido');
  }
};