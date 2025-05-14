import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { styles } from './styles';
import { Student } from '../../../../../../@types/student'; // Adjust the import path if necessary

interface ExportButtonsProps {
  student: Student; // Use the actual Student interface
  onClose: () => void;
  onExportPDF: (student: Student) => void;
  onExportCSV: (student: Student) => void;
}

export default function ExportButtons({ student, onClose, onExportPDF, onExportCSV }: ExportButtonsProps) {
  return (
    <View style={styles.exportButtonsContainer}>
      <View style={styles.exportRow}>
        <TouchableOpacity
          style={[styles.exportButton, styles.pdfButton]}
          onPress={() => onExportPDF(student)}
        >
          <Text style={styles.exportButtonText}>Exportar PDF</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.exportButton, styles.csvButton]}
          onPress={() => onExportCSV(student)}
        >
          <Text style={styles.exportButtonText}>Exportar CSV</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.closeButton} onPress={onClose}>
        <Text style={styles.closeButtonText}>Fechar</Text>
      </TouchableOpacity>
    </View>
  );
}