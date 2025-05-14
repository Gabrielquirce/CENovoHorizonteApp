import { StyleSheet, Dimensions } from 'react-native';
const { height } = Dimensions.get('window');

// Cores
const COLORS = {
  primary: '#902121',
  primaryDark: '#8B0000',
  secondary: '#8B0000',
  background: '#f5f5f5',
  white: '#ffffff',
  black: '#000000',
  text: '#333',
  textLight: '#666',
  border: '#e0e0e0',
  overlay: 'rgba(0,0,0,0.3)',
  transparentWhite: 'rgba(255,255,255,0.8)',
};

// Espaçamentos
const SPACING = {
  small: 8,
  medium: 16,
  large: 24,
  xlarge: 32,
};

export const globalStyles = StyleSheet.create({
  // Containers
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  contentContainer: {
    padding: SPACING.medium,
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Cabeçalhos
  header: {
    backgroundColor: COLORS.primary,
    padding: SPACING.medium,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.transparentWhite,
  },
  headerTitle: {
    color: COLORS.white,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  // Cards
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    padding: SPACING.medium,
    marginBottom: SPACING.medium,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: SPACING.small,
  },
  cardSubtitle: {
    fontSize: 14,
    color: COLORS.textLight,
  },

  // Botões
  primaryButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 8,
    padding: SPACING.medium,
    alignItems: 'center',
  },
  secondaryButton: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.black,
    borderRadius: 11,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryButtonText: {
    color: COLORS.black,
  },

  // Formulários
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 8,
    paddingHorizontal: SPACING.small,
    backgroundColor: COLORS.white,
    marginBottom: SPACING.medium,
  },
  inputLabel: {
    color: COLORS.text,
    fontSize: 14,
    marginBottom: SPACING.small,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 8,
    overflow: 'hidden',
  },

  // Textos
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.white,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: COLORS.text,
    marginBottom: SPACING.medium,
  },
  bodyText: {
    fontSize: 16,
    color: COLORS.text,
    lineHeight: 24,
  },

  // Utilidades
  shadow: {
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
    marginVertical: SPACING.medium,
  },
  centeredText: {
    textAlign: 'center',
  },
  fullWidth: {
    width: '100%',
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flexRowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  // Componentes específicos
  loginContainer: {
    width: '90%',
    alignSelf: 'center',
    paddingVertical: height * 0.05,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: COLORS.white,
    backgroundColor: 'transparent',
  },
  developerCard: {
    marginBottom: SPACING.medium,
    padding: SPACING.medium,
    backgroundColor: COLORS.transparentWhite,
    borderRadius: 8,
  },
  activityCard: {
    flexDirection: 'row',
    backgroundColor: COLORS.transparentWhite,
    borderRadius: 10,
    marginBottom: SPACING.medium,
    overflow: 'hidden',
  },
});