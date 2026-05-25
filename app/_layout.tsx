import { Stack } from "expo-router";
import { ThemeProvider } from "../styles/themeProvider";

export default function Layout() {
  return (
    <ThemeProvider /*children={<Stack />} si se cambia otra cosa que no sea children se hace de esta forma*/
    >
      <Stack>
        <Stack.Screen name="(1-Conversor)" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}
