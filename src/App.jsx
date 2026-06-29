import { useRef, useState } from 'react'
import BuscaCep from './components/BuscaCep'
import './App.css'

function App() {

    const buscaCepRef = useRef()
    const [loading, setLoading] = useState(false)
    const [endereco, setEndereco] = useState(null)
    const [erro, setErro] = useState(null)

    async function handleBuscar() {
        setLoading(true)
        setErro(null)
        setEndereco(null)

        try {
            await buscaCepRef.current.buscarEndereco()
        } catch (err) {
            setErro(err.message)
        } finally {
            setLoading(false)
        }
    }

    function handleEnderecoEncontrado(endereco) {
        setEndereco(endereco)
    }

    return (
        <div className="app-container">
            <div className="background-gradient"></div>
            
            <div className="content-wrapper">
                <header className="app-header">
                    <div className="header-content">
                        <h1 className="app-title">BuscaCEP</h1>
                        <p className="app-subtitle">Encontre o endereço completo usando o CEP</p>
                    </div>
                </header>

                <main className="app-main">
                    <div className="search-card">
                        <BuscaCep
                            ref={buscaCepRef}
                            onEnderecoEncontrado={handleEnderecoEncontrado}
                        />

                        <button 
                            className="btn-search"
                            onClick={handleBuscar}
                            disabled={loading}
                        >
                            {loading ? (
                                <>
                                    <span className="spinner"></span>
                                    Buscando...
                                </>
                            ) : (
                                <>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <path d="m21 21-4.35-4.35"></path>
                                    </svg>
                                    Buscar CEP
                                </>
                            )}
                        </button>

                        {loading && (
                            <div className="loading-container">
                                <div className="loading-spinner">
                                    <div className="spinner-ring"></div>
                                    <div className="spinner-ring"></div>
                                    <div className="spinner-ring"></div>
                                </div>
                                <p className="loading-text">Consultando CEP...</p>
                            </div>
                        )}

                        {erro && (
                            <div className="alert-error">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <line x1="12" y1="8" x2="12" y2="12"></line>
                                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                                </svg>
                                {erro}
                            </div>
                        )}

                        {endereco && (
                            <div className="result-card">
                                <h2 className="result-title">Endereço Encontrado</h2>
                                <div className="result-content">
                                    <div className="result-item">
                                        <label>Rua:</label>
                                        <p>{endereco.logradouro || 'Não informado'}</p>
                                    </div>
                                    <div className="result-item">
                                        <label>Bairro:</label>
                                        <p>{endereco.bairro || 'Não informado'}</p>
                                    </div>
                                    <div className="result-item">
                                        <label>Cidade:</label>
                                        <p>{endereco.localidade}/{endereco.uf}</p>
                                    </div>
                                    <div className="result-item">
                                        <label>Complemento:</label>
                                        <p>{endereco.complemento || 'Nenhum'}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </main>

                <footer className="app-footer">
                    <p>© 2024 BuscaCEP. Desenvolvido com ❤️</p>
                </footer>
            </div>
        </div>
    )

}

export default App