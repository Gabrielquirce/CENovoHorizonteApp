export interface Student {
  id: number;
  nome: string;
  dataNascimento: string;
  naturalidade: string;
  nacionalidade: string;
  sexo: string;
  cpf: string;
  rg: string;
  anoLetivo: string;
  termo: string;
  folha: string;
  livro: string;
  matricula: string;
  turno: string;
  tipoSanguineo: string;
  raca: string;
}

  export interface Mae {
    nome: string;
    dataNascimento?: string;
    endereco?: string;
    cep?: string;
    cpf?: string;
    rg?: string;
    profissao?: string;
    telefone?: string;
    email?: string;
    trabalho?: string;
    telefoneTrabalho?: string;
  };
  export interface Pai {
    nome: string;
    dataNascimento?: string;
    endereco?: string;
    cep?: string;
    cpf?: string;
    rg?: string;
    profissao?: string;
    telefone?: string;
    email?: string;
    trabalho?: string;
    telefoneTrabalho?: string;
  };

  export interface Observacao {
    idObservacoes: number;
    descricao?: string;
    data?: string;
    matriculaTipo?: string;
    escola?: string;
    turma?: string;
    temIrmaos?: boolean;
    irmaosNome?: string;
    temEspecialista?: boolean;
    especialista?: string;
    temAlergias?: boolean;
    alergia?: string;
    temMedicamento?: boolean;
    medicamento?: string;
    reside?: string;
    endereco?: string;
    respNome?: string;
    respTelefone?: string;
    pessoasAutorizadas?: string;
  };