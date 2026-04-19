import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // <--- ACEASTA ESTE LINIA CRUCIALĂ CARE LIPSEA
import App from './App';
import './i18n'; 

test('renders birthday reminder title', () => {
  render(<App />);
  
  // Verificăm dacă titlul randat este cel din traducerile noastre
  // i18next încarcă implicit prima limbă (English în config-ul nostru)
  const titleElement = screen.getByText(/Birthday Reminder/i);
  
  expect(titleElement).toBeInTheDocument();
});