export interface Student {
  pai: any;
  mae: any;
  observacoes: any;
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
    idMae: number;
    nomeMae: string;
    dataNascimentoMae?: string;
    enderecoMae?: string;
    cepMae?: string;
    cpfMae?: string;
    rgMae?: string;
    profissaoMae?: string;
    telefoneMae?: string;
    emailMae?: string;
    trabalhoMae?: string;
    telefoneTrabalhoMae?: string;
  };
  export interface Pai {
    idPai: number;
    nomePai: string;
    dataNascimentoPai?: string;
    enderecoPai?: string;
    cepPai?: string;
    cpfPai?: string;
    rgPai?: string;
    profissaoPai?: string;
    telefonePai?: string;
    emailPai?: string;
    trabalhoPai?: string;
    telefoneTrabalhoPai?: string;
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