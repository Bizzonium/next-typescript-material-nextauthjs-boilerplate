import React from 'react';
import Container from '@material-ui/core/Container';
import Header from '../components/Header';

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Container maxWidth="sm">
      <Header />
      {children}
    </Container>
  );
}
