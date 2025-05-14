import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  exportButtonsContainer: {
    marginTop: 20,
    marginBottom: 60,
  },
  exportRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  exportButton: {
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    elevation: 2,
    flex: 1,
  },
  pdfButton: {
    backgroundColor: '#8B0000',
  },
  csvButton: {
    backgroundColor: '#006400',
  },
  exportButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  closeButton: {
    backgroundColor: '#902121',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
});