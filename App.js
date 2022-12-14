import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
import Login from './components/Login';
import TelaPrincipal from './components/telaPrincipal';
import Cadastro from './components/cadastro';

import Carro from './components/Carro';
import Moto from './components/Moto';
import Bicicleta from './components/Bicicleta';
import Diversos from './components/Diversos';
import comentariosCarro from './components/comentariosCarro';
import comentariosMoto from './components/comentariosMoto';
import comentariosBicicleta from './components/comentariosBicicleta';
import comentariosDiversos from './components/comentariosDiversos';
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="telaPrincipal">
        <Stack.Screen
          name="Login"
          option={{ title: 'Login' }}
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="telaPrincipal"
          option={{ title: 'Tela Principal' }}
          component={TelaPrincipal}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cadastro"
          option={{ title: 'Cadastro' }}
          component={Cadastro}
        />

        <Stack.Screen
          name="Carro"
          option={{ title: 'Carro' }}
          component={Carro}
        />
        <Stack.Screen name="Moto" option={{ title: 'Moto' }} component={Moto} />

        <Stack.Screen
          name="Bicicleta"
          option={{ title: 'Bicicleta' }}
          component={Bicicleta}
        />
        <Stack.Screen
          name="Diversos"
          option={{ title: 'Diversos' }}
          component={Diversos}
        />
        <Stack.Screen
          name="comentariosCarro"
          option={{ title: 'Comentarios' }}
          component={comentariosCarro}
        />

        <Stack.Screen
          name="comentariosMoto"
          option={{ title: 'Comentarios' }}
          component={comentariosMoto}
        />

        <Stack.Screen
          name="comentariosBicicleta"
          option={{ title: 'Comentarios' }}
          component={comentariosBicicleta}
        />

        <Stack.Screen
          name="comentariosDiversos"
          option={{ title: 'Comentarios' }}
          component={comentariosDiversos}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
