import '@mantine/core/styles.css';
import React, { ReactNode } from 'react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { theme } from '../theme';
import { HeaderMenu } from '../components/HeaderMenu/HeaderMenu';

export const metadata = {
  title: 'Mantine Next.js template',
  description: 'I am using Mantine with Next.js!',
};

// interface LayoutProps {
//   children: ReactNode
// }

// const Layout: FC<LayoutProps> = ({ children }) => {
//   return <div>{children}</div>
// }

// export default Layout 
export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
      
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <HeaderMenu/>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
