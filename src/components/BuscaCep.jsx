import { forwardRef, useImperativeHandle, useState } from 'react'
import axios from 'axios'

const BuscaCep = forwardRef(({ onEnderecoEncontrado }, ref) => {

    const [cep, setCep] = useState('')
    const [error, setError] = useState(null)
    const [focused, setFocused] = useState(false)

    useImperativeHandle(ref, () => ({
        buscarEndereco
    }))

    async function buscarEndereco() {
        setError(null)

        if (!cep || cep.length !== 8) {
            setError('Por favor, insira um CEP válido com 8 dígitos!')
            return
        }

        try {
            const response = await axios.get(
                `https://viacep.com.br/ws/${cep}/json/`
            )

            if (response.data.erro) {
                setError('CEP não encontrado. Verifique e tente novamente.')
                return
            }

            onEnderecoEncontrado(response.data)

        } catch (err) {
            setError('Erro ao consultar o CEP. Tente novamente mais tarde.')
            console.error('Erro:', err)
        }
    }

    const handleCepChange = (e) => {
        const value = e.target.value.replace(/\D/g, '')
        setCep(value)
        setError(null)
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            buscarEndereco()
        }
    }

    return (
        <div className="form-group">
            <label htmlFor="cep-input">CEP</label>

            <div style={{
                position: 'relative'
            }}>
                <input
                    id="cep-input"
                    type="text"
                    maxLength={8}
                    placeholder="00000000"
                    value={cep}
                    onChange={handleCepChange}
                    onKeyPress={handleKeyPress}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    style={{
                        width: '100%'
                    }}
                />
                {focused && (
                    <div style={{
                        position: 'absolute',
                        bottom: '-2px',
                        left: '0',
                        right: '0',
                        height: '2px',
                        background: 'linear-gradient(90deg, #A855F7, #D946EF, #A855F7)',
                        borderRadius: '2px',
                        boxShadow: '0 0 10px rgba(168, 85, 247, 0.6)',
                        animation: 'gradientMove 2s ease infinite'
                    }}></div>
                )}
                {cep.length > 0 && cep.length !== 8 && (
                    <div style={{
                        position: 'absolute',
                        right: '15px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        fontSize: '0.85rem',
                        color: '#FCA5A5',
                        fontWeight: '600'
                    }}>
                        {cep.length}/8
                    </div>
                )}
                {cep.length === 8 && (
                    <div style={{
                        position: 'absolute',
                        right: '15px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        color: '#A855F7',
                        fontWeight: '700',
                        animation: 'pulse 1.5s ease-in-out infinite'
                    }}>
                        ✓
                    </div>
                )}
            </div>

            {error && (
                <div style={{
                    marginTop: '12px',
                    padding: '14px 16px',
                    background: 'linear-gradient(135deg, rgba(220, 38, 38, 0.1) 0%, rgba(185, 28, 28, 0.05) 100%)',
                    color: '#FCA5A5',
                    borderRadius: '8px',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    border: '1px solid rgba(239, 68, 68, 0.3)',
                    borderLeft: '4px solid #EF4444',
                    boxShadow: '0 0 15px rgba(239, 68, 68, 0.2), inset 0 1px 1px rgba(239, 68, 68, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    backdropFilter: 'blur(10px)',
                    animation: 'slideDown 0.3s ease',
                    letterSpacing: '0.3px'
                }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{flexShrink: 0}}>
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="12"></line>
                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                    {error}
                </div>
            )}
        </div>
    )

})

BuscaCep.displayName = 'BuscaCep'

export default BuscaCep