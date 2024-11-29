import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeView from '../views/HomeView';
import LoginView from '../views/LoginView';
import CadastroView from '../views/CadastroView';
import DashboardView from '../views/DashboardView';
import DespesasView from '../views/DespesasView';
import ReceitasView from '../views/ReceitasView';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Drawer = createDrawerNavigator();

export default function MenuDrawerNavigator() {
  return (
    <NavigationContainer>
       <Drawer.Navigator 
        initialRouteName="Home"
        screenOptions={{
          drawerActiveTintColor: '#0aac33',
          drawerInactiveTintColor: '#000',
        }}
      >
        <Drawer.Screen 
          name="Home" 
          component={HomeView} 
          options={{
              drawerIcon: ({ color, size }) => (
                  <Icon name="home" size={size} color={color} />
                ),
                headerTitle:''
            }}
        />
            <Drawer.Screen 
              name="Receitas" 
              component={ReceitasView} 
              options={{
                  drawerIcon: ({ color, size }) => (
                      <Icon name="monetization-on" size={size} color={color} />
                    ),    
                }}
            />
        <Drawer.Screen 
          name="Despesas" 
          component={DespesasView} 
          options={{
              drawerIcon: ({ color, size }) => (
                  <Icon name="attach-money" size={size} color={color} />
                ),
            }}
        />
            <Drawer.Screen 
              name="Dashboard" 
              component={DashboardView} 
              options={{
                  drawerIcon: ({ color, size }) => (
                      <Icon name="dashboard" size={size} color={color} />
                    ),
                }}
            />
              <Drawer.Screen 
                name="Cadastro" 
                component={CadastroView} 
                options={{
                  drawerIcon: ({ color, size }) => (
                    <Icon name="person-add" size={size} color={color} />
                  ),
                }}
              />
            <Drawer.Screen 
              name="Login" 
              component={LoginView} 
              options={{
                  drawerIcon: ({ color, size }) => (
                      <Icon name="login" size={size} color={color} />
                ),
            }}
            />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
