import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, KeyboardAvoidingView, ScrollView, View, Text, Platform, Linking } from 'react-native';
import { Student } from '../../@types/student';
import { fetchStudents, exportStudentPDF, exportStudentCSV, fetchMaes, fetchPais, fetchObservacoes } from './services/studentService';
import Header from './components/studentDetailModal/components/studentsHeader';
import SearchBar from './components/searchBar';
import StudentCard from './components/studentCard';
import StudentDetailModal from './components/studentDetailModal';
import { styles } from './styles';

export default function StudentsScreen() {
  const [students, setStudents] = useState<Student[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

useEffect(() => {
  const loadStudents = async () => {
    try {
      const [studentsData, maesData, paisData, observacoesData] = await Promise.all([
        fetchStudents(),
        fetchMaes(), // Fetch mothers' data
        fetchPais(), // Fetch fathers' data
        fetchObservacoes(), // Fetch observations data
      ]);

const enrichedData = studentsData.map(student => ({
  ...student,
  mae: maesData.find(mae => mae.nome === mae.nome) || {
    nome: '',
    dataNascimento: '',
    endereco: '',
    cep: '',
    telefone: '',
    cpf: '',
    rg: '',
    profissao: '',
    email: '',
    trabalho: '',
    telefoneTrabalho: '',
  },
  pai: paisData.find(pai => pai.nome === pai.nome) || {
    nome: '',
    dataNascimento: '',
    endereco: '',
    cep: '',
    telefone: '',
    cpf: '',
    rg: '',
    profissao: '',
    email: '',
    trabalho: '',
    telefoneTrabalho: '',
  },
  observacoes: observacoesData.find(obs => obs.idObservacoes === student.id) || {
    descricao: '',
    data: '',
    matriculaTipo: '',
    escola: '',
    turma: '',
    temIrmaos: false,
    irmaosNome: '',
    temEspecialista: false,
    especialista: '',
    temAlergias: false,
    alergia: '',
    temMedicamento: false,
    medicamento: '',
    reside: '',
    endereco: '',
    respNome: '',
    respTelefone: '',
    pessoasAutorizadas: '',
  },
}));

setStudents(enrichedData as Student[]);

      setStudents(enrichedData as Student[]);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred');
      }
      Alert.alert('Erro', err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setLoading(false);
    }
  };
  loadStudents();
}, []);

  const handleExportPDF = async (student: Student) => {
    try {
      const pdfBlob = await exportStudentPDF(String(student.id));
      const pdfUrl = URL.createObjectURL(pdfBlob as Blob);
      Linking.openURL(pdfUrl);
    } catch (err) {
      Alert.alert('Erro', err instanceof Error ? err.message : 'An unknown error occurred');
    }
  };

  const handleExportCSV = async (student: Student) => {
    try {
      const csvBlob = await exportStudentCSV(String(student.id));
      const csvUrl = URL.createObjectURL(csvBlob as Blob);
      Linking.openURL(csvUrl);
    } catch (err) {
      Alert.alert('Erro', err instanceof Error ? err.message : 'An unknown error occurred');
    }
  };

const filteredStudents = students.filter(student =>
  student && // Ensure student is not undefined or null
  [student.nome?.toLowerCase() || '', student.cpf?.toLowerCase() || '', student.matricula?.toLowerCase() || ''].some(field =>
    field.includes(searchQuery.toLowerCase())
  )
);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#902121" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Header />
        <SearchBar value={searchQuery} onChangeText={setSearchQuery} />
        
{filteredStudents.map(student => (
  <StudentCard
    key={student.id}
    student={student}
    onPress={() => setSelectedStudent(student)}
  />
))}

        <StudentDetailModal
          visible={!!selectedStudent}
          student={selectedStudent}
          onClose={() => setSelectedStudent(null)}
          onExportPDF={handleExportPDF}
          onExportCSV={handleExportCSV}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}