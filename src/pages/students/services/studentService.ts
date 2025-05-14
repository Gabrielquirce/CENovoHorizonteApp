import api from './axiosInstance';
import { Student, Mae, Pai, Observacao } from '../../../@types/student';



export const fetchStudents = async (): Promise<Student[]> => {
  try {
    const response = await api.get<Student[]>('/alunos');
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error('Erro ao carregar alunos: ' + error.message);
    }
    throw new Error('Erro ao carregar alunos: Erro desconhecido');
  }
};

export const fetchMaes = async (): Promise<Mae[]> => {
  try {
    const response = await api.get<Mae[]>('/maes');
    return response.data;
  } catch (error) {
    throw new Error('Erro ao carregar dados das mães');
  }
};

export const fetchPais = async (): Promise<Pai[]> => {
  try {
    const response = await api.get<Pai[]>('/pais');
    return response.data;
  } catch (error) {
    throw new Error('Erro ao carregar dados dos pais');
  }
};

export const fetchObservacoes = async (): Promise<Observacao[]> => {
  try {
    const response = await api.get<Observacao[]>('/observacoes');
    return response.data;
  } catch (error) {
    throw new Error('Erro ao carregar observações');
  }
};


export const exportStudentPDF = async (studentId: string) => {
  try {
    const response = await api.get(`/alunos/${studentId}/pdf`, {
      responseType: 'blob',
    });
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error('Erro ao exportar PDF: ' + error.message);
    }
    throw new Error('Erro ao exportar PDF: Erro desconhecido');
  }
};

export const exportStudentCSV = async (studentId: string) => {
  try {
    const response = await api.get(`/alunos/${studentId}/csv`, {
      responseType: 'blob',
    });
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error('Erro ao exportar CSV: ' + error.message);
    }
    throw new Error('Erro ao exportar CSV: Erro desconhecido');
  }
};