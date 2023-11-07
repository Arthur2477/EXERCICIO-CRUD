import { createStackNavigator } from '@react-navigation/stack'
import Lista from './Lista'
import FormPessoas from './FormPessoas'

const Stack = createStackNavigator()

export default function StackPessoas() {
    return (

        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName='Lista'
        >

            <Stack.Screen name='Lista' component={Lista} />

            <Stack.Screen name='FormPessoas' component={FormPessoas} />

        </Stack.Navigator>

    )
}
