import { forwardRef, useImperativeHandle, useState } from 'react'
import axios from 'axios'
import { Form } from 'react-bootstrap'

const BuscaCep = forwardRef(({ onEnderecoEncontrado }, ref) => {

    const [cep, setCep] = useState('')

    useImperativeHandle(ref, () => ({
        buscarEndereco
    }))

    async function buscarEndereco() {

        if (cep.length !== 8) {
            alert('CEP inválido!')
            return
        }

        try {

            const response = await axios.get(
                `https://viacep.com.br/ws/${cep}/json/`
            )

            onEnderecoEncontrado(response.data)

        } catch {

            alert('Erro ao consultar o CEP.')

        }
    }

    return (
        <Form.Group className="mb-3">
            <Form.Label>CEP</Form.Label>

            <Form.Control
                type="text"
                maxLength={8}
                value={cep}
                onChange={(e) =>
                    setCep(e.target.value.replace(/\D/g, ''))
                }
            />
        </Form.Group>
    )

})

export default BuscaCep