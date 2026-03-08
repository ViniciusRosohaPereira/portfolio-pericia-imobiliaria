# Portfólio Perícia Imobiliária - Vinícius Rosoha Pereira

Site institucional profissional focado na atuação de Perito Avaliador de Imóveis e Assessor Técnico Imobiliário.

## Descrição Profissional
Projeto desenvolvido para apresentar a atuação técnica de **Vinícius Rosoha Pereira**, abordando a integração entre Direito, Perícia Imobiliária e Tecnologia. O foco é evidenciar precisão metodológica, segurança jurídica e suporte analítico qualificado com base em dados e georreferenciamento.

## Stack Utilizada
- **Front-end:** React + Vite
- **Estilização:** Tailwind CSS
- **Ícones:** Lucide React
- **Linguagem:** TypeScript
- **Integração IA:** Google Gen AI SDK (Gemini) - Implementação opcional de Assistente Virtual

## Execução Local (Desenvolvimento)
1. Instale as dependências executando na raiz do projeto:
   ```bash
   npm install
   ```
2. Adicione sua chave de API opcional no `.env.local` usando o `.env.example` como base.
3. Inicie o servidor de testes local (Vite irá rodar em `http://localhost:3000` ou similar):
   ```bash
   npm run dev
   ```

## Build para Produção
Gera os arquivos estáticos otimizados que devem ser hospedados em qualquer CDN ou servidor estático.
```bash
npm run build
```
O resultado otimizado estará dentro da pasta `/dist`.

## Deploy (Vercel)
Este projeto está estruturado para ter Continuous Deployment via Vercel com GitHub.
1. Conecte sua conta do GitHub ao Vercel.
2. Crie um novo projeto no Vercel importando este repositório.
3. Configuração (Autodetectado):
   - **Framework:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Na aba **Environment Variables**, não se esqueça de adicionar a variável de produção `VITE_GEMINI_API_KEY` (se for usar o serviço do geminiService em produção e possuir backend seguro ou não ligar de expor).
5. Clique em Deploy. Todo novo push na branch `main` atualizará o sistema automaticamente.
