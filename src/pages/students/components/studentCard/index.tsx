import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { styles } from '../../styles';

interface Student {
  nome: string;
  matricula: string;
  cpf: string;
  mae?: {
    nome: string;
  };
}

interface StudentCardProps {
  student: Student;
  onPress: () => void;
}

export default function StudentCard({ student, onPress }: StudentCardProps) {
  return (
    <TouchableOpacity style={styles.studentCard} onPress={onPress}>
      <View style={styles.cardHeader}>
        <Text style={styles.studentName}>{student.nome || 'Sem Nome'}</Text>
        <Text style={styles.studentMatricula}>{student.matricula || 'Sem Matrícula'}</Text>
      </View>
      <View style={styles.cardDetails}>
        <Text style={styles.detailText}>CPF: {student.cpf || 'Não informado'}</Text>
        <Text style={styles.detailText}>
          Responsável: {student.mae?.nome || 'Não informado'}
        </Text>
      </View>
    </TouchableOpacity>
  );
}