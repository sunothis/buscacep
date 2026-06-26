import { useRef } from 'react'
import { Button, Container } from 'react-bootstrap'
import BuscaCep from './componentes/BuscaCep'

function App() {

    const buscaCepRef = useRef()

    function handleEnderecoEncontrado(endereco) {

        alert(
            `Rua: ${endereco.logradouro}\n` +
            `Bairro: ${endereco.bairro}\n` +
            `Cidade: ${endereco.localidade}/${endereco.uf}`
        )

    }

    return (

        <Container className="mt-4">

            <h2>Buscar CEP</h2>

            <BuscaCep
                ref={buscaCepRef}
                onEnderecoEncontrado={handleEnderecoEncontrado}
            />

            <Button
                className="mt-3"
                onClick={() => buscaCepRef.current.buscarEndereco()}
            >
                Buscar CEP
            </Button>

        </Container>

    )

}

export default App