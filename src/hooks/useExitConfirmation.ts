import { Alert, BackHandler } from 'react-native';

export const useExitConfirmation = () => {
  const confirmExit = () => {
    Alert.alert(
      'Sair do aplicativo',
      'Tem certeza que deseja sair?',
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Sim', onPress: () => BackHandler.exitApp() },
      ],
      { cancelable: true }
    );
  };

  return { confirmExit };
};