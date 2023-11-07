
import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import StackPessoas from '../screens/Pessoas/StackPessoas'

const Drawer = createDrawerNavigator()

export default function DrawerRoutes() {
    return (
        <Drawer.Navigator initialRouteName='Alunos'>
            <Drawer.Screen name="Alunos" component={StackPessoas} />
        </Drawer.Navigator>

    )
}