'use client';
import { ThemeProvider, createTheme } from '@mui/material';
import './globals.css'


export default function RootLayout({ children }) {
  const theme = createTheme({
    typography: {
      fontFamily: 'Lato, sans-serif',
    },
    palette: {
      primary: {
        main: '#3E5020',
      },
    },
  });


  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap" rel="stylesheet" />
      </head>
      <ThemeProvider theme={theme}>
        <body>{children}</body>
      </ThemeProvider>
    </html>
  )
}
