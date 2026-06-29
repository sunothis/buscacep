# 🔍 BuscaCEP

Uma aplicação web moderna e profissional para buscar endereços brasileiros usando o CEP. Design futurístico com gradientes em preto e roxo, tela de carregamento elegante e interface responsiva.

## ✨ Características

- 🎨 **Design Futurístico**: Paleta de cores preto e roxo com gradientes animados
- ⚡ **Performance**: Construído com React + Vite para máxima velocidade
- 📱 **Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- 🔄 **Tela de Carregamento**: Spinner com anéis animados em estilo cyberpunk
- 🎯 **Interface Intuitiva**: Input com validação em tempo real e feedback visual
- 🌐 **API Integration**: Integração com ViaCEP para buscar endereços reais
- 🚀 **Deployment Automático**: CI/CD com GitHub Actions

## 🚀 Deploy Online

Acesse a aplicação em produção:
👉 **[https://sunothis.github.io/buscacep/](https://sunothis.github.io/buscacep/)**

## 📋 Requisitos

- Node.js 16+ 
- npm ou yarn

## 💻 Como Usar Localmente

### 1. Clonar o repositório
```bash
git clone https://github.com/sunothis/buscacep.git
cd buscacep
```

### 2. Instalar dependências
```bash
npm install
```

### 3. Executar em desenvolvimento
```bash
npm run dev
```

Acesse `http://localhost:5173` no seu navegador.

### 4. Build para produção
```bash
npm run build
```

Os arquivos prontos estarão na pasta `dist/`.

## 🏗️ Estrutura do Projeto

```
buscacep/
├── src/
│   ├── App.jsx                 # Componente principal
│   ├── App.css                 # Estilos com gradientes
│   ├── components/
│   │   └── BuscaCep.jsx       # Componente de busca
│   ├── index.css              # Estilos globais
│   └── main.jsx               # Ponto de entrada
├── .github/
│   └── workflows/
│       └── deploy.yml         # GitHub Actions - Deploy automático
├── public/                    # Arquivos estáticos
├── vite.config.js            # Configuração do Vite
└── package.json              # Dependências e scripts
```

## 🎨 Design

### Cores Utilizadas
- **Preto Base**: `#0F0F0F`
- **Roxo Escuro**: `#3D1F5C`
- **Roxo Médio**: `#5D3A9B`
- **Roxo Vibrante**: `#A855F7`
- **Roxo Claro**: `#D946EF`

### Efeitos Visuais
- Gradientes animados em loop infinito
- Brilho neon nas bordas dos elementos
- Glassmorphism (efeito de vidro translúcido)
- Animações fluidas com transições CSS
- Hover effects interativos

## 🔧 Tecnologias

- **React 19**: Framework JavaScript
- **Vite 8**: Build tool ultrarrápido
- **Axios**: Cliente HTTP
- **CSS3**: Estilos avançados com animações
- **Bootstrap 5**: Componentes UI

## 📦 API Utilizada

- **ViaCEP**: API brasileira para busca de CEP
  - Endpoint: `https://viacep.com.br/ws/{cep}/json/`
  - Sem autenticação necessária
  - Retorna informações completas do endereço

## 🚀 Deployment no GitHub Pages

O projeto está configurado para deploy automático:

1. **Trigger**: Toda vez que você faz `push` para `main`
2. **Build**: GitHub Actions compila o projeto automaticamente
3. **Deploy**: Arquivos são enviados para `gh-pages` branch
4. **Resultado**: Aplicação fica online em ~2 minutos

### Configuração
- GitHub Actions workflow: `.github/workflows/deploy.yml`
- Base path configurado em `vite.config.js`
- `.nojekyll` para ignorar Jekyll processing

## 📝 Scripts NPM

```bash
npm run dev      # Inicia servidor de desenvolvimento
npm run build    # Cria build otimizado em dist/
npm run preview  # Visualiza build localmente
npm run lint     # Executa linter
```

## 🐛 Resolução de Problemas

### CEP não encontrado?
- Verifique se o CEP tem 8 dígitos
- Tente um CEP válido: `01310100` (Avenida Paulista, SP)

### Está lendo devagar?
- A API ViaCEP tem limite de requisições
- Aguarde alguns segundos entre buscas

### Site não carrega no GitHub Pages?
- Aguarde 2-3 minutos após o push
- Limpe o cache do navegador (Ctrl+Shift+Del)
- Verifique se o GitHub Actions passou (Actions tab)

## 📄 Licença

Este projeto é de código aberto. Fique livre para usar e modificar.

## 🎯 Ideias Futuras

- [ ] Histórico de buscas
- [ ] Dark/Light mode toggle
- [ ] Multi-idioma (EN/ES)
- [ ] PWA (Progressive Web App)
- [ ] Compartilhar endereço via URL
- [ ] Integração com Google Maps

---

**Desenvolvido com ❤️ e muita criatividade!**
