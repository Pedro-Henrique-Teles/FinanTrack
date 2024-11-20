import React from 'react';
import { StatusBar } from 'expo-status-bar';
import MenuDrawerNavigator from './src/components/MenuDrawerNavigator';

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <MenuDrawerNavigator />
    </>
  );
}
