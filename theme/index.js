import { useEffect, useState } from 'react';
import { Appearance } from 'react-native';

export const ToogleStatusBar = () => {
  const [colorScheme, setColorScheme] = useState(Appearance.getColorScheme());
  // Detectar cambios de tema
  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setColorScheme(colorScheme);
    });
    // Limpiar el listener cuando se desmonte el componente
    return () => subscription.remove();
  }, []);
  const statusBarStyle = colorScheme === 'dark' ? 'light' : 'dark';
  // const statusBarStyle = colorScheme === 'dark' ? 'dark' : 'light';
  return statusBarStyle
}
export const isDarkTheme = () => {
  const infoTheme = ToogleStatusBar()
  if (infoTheme === "dark") {
    return false
  }
  return true
}



