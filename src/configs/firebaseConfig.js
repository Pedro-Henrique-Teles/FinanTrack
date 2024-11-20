// firebaseConfig.js
import { initializeApp } from 'firebase/app';  // Novo método de importação no Firebase 9+
import { getAuth } from 'firebase/auth';  // Para autenticação

// Sua configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAq9x8Rf2O66vcbRbQcTw_8ZW8QZLlg79s", 
  authDomain: "finantrackapp.firebaseapp.com", 
  projectId: "finantrackapp", 
  storageBucket: "finantrackapp.appspot.com", 
  messagingSenderId: "763537289561", 
  appId: "1:763537289561:android:bf8fa340cfc76dec865c48", 
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);  // Inicialização com a nova API
const auth = getAuth(app);  // Obtém a instância de autenticação

export { auth };  // Exporte o auth para usar em outras partes do seu app
