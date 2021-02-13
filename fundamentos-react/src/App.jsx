import "./App.css"
import React from 'react'

import Card from './components/layout/Card'

import Mega from "./components/mega/Mega";
import Contador from './components/contador/Contador.jsx'
import Input from './components/formulario/Input'
import IndiretaPai from './components/comunicacao/IndiretaPai.jsx'
import DiretaPai from './components/comunicacao/DiretaPai'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import ParOuImpar from './components/condicional/ParOuImpar'
import TabelaProduto from './components/repeticao/TabelaProdutos'
import ListaAlunos from './components/repeticao/ListaAlunos'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import Aleatorio from './components/basicos/Aleatorio'
import Fragmento from './components/basicos/Fragmento'
import ComParametro from './components/basicos/ComParametro'
import Primeiro from './components/basicos/Primeiro'

export default _ =>
    <div className="App">
        <h1>Fundamentos React</h1>
        
        <div className="Cards">
            <Card titulo="#13 - Mega" color="#B9006E">
                <Mega qtde={6}></Mega>
            </Card>

            <Card titulo="#12 - Contador" color="#424242">
                <Contador numeroInicial={10}></Contador>    
            </Card>

            <Card titulo="#11 - Componente Controlado (Input)" color="#E45F56">
                <Input></Input>    
            </Card>

            <Card titulo="#10 - Comunicação Indireta" color="#8BAD39">
                <IndiretaPai></IndiretaPai>    
            </Card>

            <Card titulo="#09 - Comunicação Direta" color="#59323C">
                <DiretaPai></DiretaPai>    
            </Card>

            <Card titulo="#08 - Renderização Condicional" color="#982395">
                <ParOuImpar numero={21}></ParOuImpar>
                <UsuarioInfo usuario={{nome: 'Luan'}}/>
                <UsuarioInfo usuario={{email: 'Luan@luan'}}/>
            </Card>                   

            <Card titulo="#07 - Repetição Desafio" color="#3A9AD9">
                <TabelaProduto></TabelaProduto>
            </Card>

            <Card titulo="#06 - Repetição" color="#FF4C65">
                <ListaAlunos></ListaAlunos>
            </Card>


            <Card titulo="#05 - Componente com Filhos" color="#00C8F8">
                <Familia sobrenome="Ferreira">
                    <FamiliaMembro nome="Pedro" />
                    <FamiliaMembro nome="Ana"/>
                </Familia>
            </Card>

            <Card titulo="#04 - Desafio Aleatorio" color="#FA6900">
                <Aleatorio min={3} max={10}/>
            </Card>

            <Card titulo="#03 - Fragmento" color="#E94C6F">
                <Fragmento />
            </Card>

            <Card titulo="#02 - Com Parametro" color="#E8B71A">
                <ComParametro 
                    titulo="Situação do Aluno" 
                    aluno="Pedro" nota={9.3} 
                />
            </Card>
        
            <Card titulo="#01 - Primeiro Componente" color="#588C73">
                <Primeiro></Primeiro>
            </Card>
        </div> 
        
    </div>