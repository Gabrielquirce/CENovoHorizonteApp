import React from 'react';
import { Modal, ScrollView, View, Text, Linking } from 'react-native';
import { Mae, Observacao, Pai, Student } from '../../../../@types/student';
import DetailItem from './components/detailItem';
import ExportButtons from './components/exportButtons';
import { styles } from './styles';

type Props = {
  visible: boolean;
  student: Student | null;
  mae: Mae | null;
  pai: Pai | null;
  obs: Observacao | null;
  onClose: () => void;
  onExportPDF: (student: Student) => void;
};

const StudentDetailModal = ({ 
  visible, 
  student, 
  onClose,
  onExportPDF
}: Props) => {
  if (!student) return null;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR');
  };

  const handlePhonePress = (phoneNumber: string) => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      onRequestClose={onClose}
    >
      <ScrollView style={styles.modalContainer}>
        <Text style={styles.modalTitle}>Ficha Completa do Aluno</Text>

        {/* Seção Dados Pessoais */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Dados Pessoais</Text>
          <DetailItem label="Nome Completo" value={student?.nome || 'Não informado'} />
          <DetailItem 
        label="Data de Nascimento" 
        value={formatDate(student.dataNascimento)} 
          />
          <DetailItem label="Naturalidade" value={student.naturalidade || 'Não informado'} />
          <DetailItem label="Nacionalidade" value={student.nacionalidade || 'Não informado'} />
          <DetailItem label="Sexo" value={student.sexo || 'Não informado'} />
          <DetailItem label="CPF" value={student.cpf || 'Não informado'} />
          <DetailItem label="RG" value={student.rg || 'Não informado'} />
          <DetailItem label="Matrícula" value={student.matricula || 'Não informado'} />
          <DetailItem label="Turno" value={student.turno || 'Não informado'} />
          <DetailItem label="Tipo Sanguíneo" value={student.tipoSanguineo || 'Não informado'} />
          <DetailItem label="Raça/Cor" value={student.raca || 'Não informado'} />
        </View>

        {/* Seção Dados da Mãe */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Dados da Mãe</Text>
          <DetailItem label="Nome" value={student.mae?.nomeMae || 'Não informado'} />
          <DetailItem
        label="Data de Nascimento"
        value={student.mae?.dataNascimentoMae ? formatDate(student.mae.dataNascimentoMae) : 'Não informado'}
          />
          <DetailItem label="Endereço" value={student.mae?.enderecoMae || 'Não informado'} />
          <DetailItem label="CEP" value={student.mae?.cepMae || 'Não informado'} />
          <DetailItem label="CPF" value={student.mae?.cpfMae || 'Não informado'} />
          <DetailItem label="RG" value={student.mae?.rgMae || 'Não informado'} />
          <DetailItem label="Profissão" value={student.mae?.profissaoMae || 'Não informado'} />
          <DetailItem
        label="Telefone"
        value={student.mae?.telefoneMae || 'Não informado'}
        onPress={() => student.mae?.telefoneMae && handlePhonePress(student.mae.telefoneMae)}
          />
          <DetailItem label="E-mail" value={student.mae?.emailMae || 'Não informado'} />
          <DetailItem label="Local de Trabalho" value={student.mae?.trabalhoMae || 'Não informado'} />
          <DetailItem
        label="Telefone Trabalho"
        value={student.mae?.telefoneTrabalhoMae || 'Não informado'}
        onPress={() => student.mae?.telefoneTrabalhoMae && handlePhonePress(student.mae.telefoneTrabalhoMae)}
          />
        </View>

        {/* Seção Dados do Pai */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Dados do Pai</Text>
          <DetailItem label="Nome" value={student.pai?.nomePai || ''} />
          <DetailItem
        label="Data de Nascimento"
        value={student.pai?.dataNascimento ? formatDate(student.pai.dataNascimento) : ''}
          />
          <DetailItem label="Endereço" value={student.pai?.enderecoPai || ''} />
          <DetailItem label="CEP" value={student.pai?.cepPai || ''} />
          <DetailItem label="CPF" value={student.pai?.cpfPai || ''} />
          <DetailItem label="RG" value={student.pai?.rgPai || ''} />
          <DetailItem label="Profissão" value={student.pai?.profissaoPai || ''} />
          <DetailItem
        label="Telefone"
        value={student.pai?.telefonePai || ''}
        onPress={() => student.pai?.telefonePai && handlePhonePress(student.pai.telefonePai)}
          />
          <DetailItem label="E-mail" value={student.pai?.emailPai || ''} />
          <DetailItem label="Local de Trabalho" value={student.pai?.trabalhoPai || ''} />
          <DetailItem
        label="Telefone Trabalho"
        value={student.pai?.telefoneTrabalhoPai || ''}
        onPress={() => student.pai?.telefoneTrabalhoPai && handlePhonePress(student.pai.telefoneTrabalhoPai)}
          />
        </View>

        {/* Seção Observações */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Observações</Text>
          <DetailItem
        label="Tipo de Matrícula"
        value={student.observacoes?.matriculaTipo || ''}
          />
          <DetailItem
        label="Escola Anterior"
        value={student.observacoes?.escola || ''}
          />
          <DetailItem
        label="Possui Irmãos"
        value={student.observacoes?.temIrmaos ? 'Sim' : ''}
          />
          <DetailItem
        label="Nomes dos Irmãos"
        value={student.observacoes?.irmaosNome || ''}
          />
          <DetailItem
        label="Acompanhamento Especialista"
        value={student.observacoes?.temEspecialista || ''}
          />
          <DetailItem
        label="Especialista Responsável"
        value={student.observacoes?.especialista || ''}
          />
          <DetailItem
        label="Possui Alergias"
        value={student.observacoes?.temAlergias || ''}
          />
          <DetailItem
        label="Tipo de Alergia"
        value={student.observacoes?.alergia || ''}
          />
          <DetailItem
        label="Uso de Medicamento"
        value={student.observacoes?.temMedicamento || ''}
          />
          <DetailItem
        label="Medicamento Utilizado"
        value={student.observacoes?.medicamento || ''}
          />
          <DetailItem
        label="Reside Com"
        value={student.observacoes?.reside || ''}
          />
          <DetailItem
        label="Responsável Financeiro"
        value={student.observacoes?.respNome || ''}
          />
          <DetailItem
        label="Contato do Responsável"
        value={student.observacoes?.respTelefone || ''}
          />
          <DetailItem
        label="Pessoas Autorizadas"
        value={student.observacoes?.pessoasAutorizadas || ''}
          />
        </View>

        <ExportButtons
          student={student}
          onClose={onClose}
          onExportPDF={onExportPDF}
        />
      </ScrollView>
    </Modal>
  );
};

export default StudentDetailModal;