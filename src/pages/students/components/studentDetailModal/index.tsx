import React from 'react';
import { Modal, ScrollView, View, Text, Linking } from 'react-native';
import { Student } from '../../../../@types/student';
import DetailItem from './components/detailItem';
import ExportButtons from './components/exportButtons';
import { styles } from './styles';

type Props = {
  visible: boolean;
  student: Student | null;
  onClose: () => void;
  onExportPDF: (student: Student) => void;
  onExportCSV: (student: Student) => void;
};

const StudentDetailModal = ({ 
  visible, 
  student, 
  onClose,
  onExportPDF,
  onExportCSV 
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
  <DetailItem label="Nome" value={student.mae?.nome || ''} />
  <DetailItem 
    label="Data de Nascimento" 
    value={student.mae?.dataNascimento ? formatDate(student.mae.dataNascimento) : ''} 
  />
  <DetailItem label="Endereço" value={student.mae?.endereco || ''} />
  <DetailItem label="CEP" value={student.mae?.cep || ''} />
  <DetailItem label="CPF" value={student.mae?.cpf || ''} />
  <DetailItem label="RG" value={student.mae?.rg || ''} />
  <DetailItem label="Profissão" value={student.mae?.profissao || ''} />
  <DetailItem
    label="Telefone"
    value={student.mae?.telefone || ''}
    onPress={() => student.mae?.telefone && handlePhonePress(student.mae.telefone)}
  />
  <DetailItem label="E-mail" value={student.mae?.email || ''} />
  <DetailItem label="Local de Trabalho" value={student.mae?.trabalho || ''} />
  <DetailItem
    label="Telefone Trabalho"
    value={student.mae?.telefoneTrabalho || ''}
    onPress={() => student.mae?.telefoneTrabalho && handlePhonePress(student.mae.telefoneTrabalho)}
  />
</View>

        {/* Seção Dados do Pai */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Dados do Pai</Text>
          <DetailItem label="Nome" value={student.pai?.nome || ''} />
          <DetailItem
            label="Data de Nascimento"
            value={student.pai?.dataNascimento ? formatDate(student.pai.dataNascimento) : ''} 
          />
          <DetailItem label="Endereço" value={student.pai?.endereco || ''} />
          <DetailItem label="CEP" value={student.pai?.cep || ''} />
          <DetailItem label="CPF" value={student.pai?.cpf || ''} />
          <DetailItem label="RG" value={student.pai?.rg || ''} />
          <DetailItem label="Profissão" value={student.pai?.profissao || ''} />
          <DetailItem
            label="Telefone"
            value={student.pai?.telefone || ''}
            onPress={() => student.pai?.telefone && handlePhonePress(student.pai.telefone)}
          />
          <DetailItem label="E-mail" value={student.pai?.email || ''} />
          <DetailItem label="Local de Trabalho" value={student.pai?.trabalho || ''} />
          <DetailItem
            label="Telefone Trabalho"
            value={student.pai?.telefoneTrabalho || ''}
            onPress={() => student.pai?.telefoneTrabalho && handlePhonePress(student.pai.telefoneTrabalho)}
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
          onExportCSV={onExportCSV}
        />
      </ScrollView>
    </Modal>
  );
};

export default StudentDetailModal;