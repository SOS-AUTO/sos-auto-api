# SOS Auto Angola – API REST 🚗🔧

Este repositório contém a **API oficial** do ecossistema SOS Auto Angola — uma plataforma digital que conecta motoristas em situações de emergência com mecânicos, guinchos e seguradoras.

## 📦 Stack Principal

- Node.js com NestJS
- Supabase (como Auth + Banco de Dados)
- PostgreSQL
- JWT para autenticação
- Swagger para documentação
- Redis (opcional, para filas e cache)
- Mapbox API / Google Maps para geolocalização
- Efíbank / Stripe / PayPal para pagamentos

## 📁 Estrutura do Projeto

```
src/
├── modules/                  # Módulos organizados (auth, users, orders)
├── common/                   # Filtros, guards, interceptors, DTOs globais
├── config/                   # Configuração da aplicação e providers
├── main.ts                   # Ponto de entrada da aplicação NestJS
```

## 🧰 Funcionalidades da API

### 🔐 Autenticação
- Registro, login, logout
- Diferentes roles: motorista, mecânico, guincho, seguradora, admin

### 🚨 Motorista
- Solicitar socorro (tipo: guincho, mecânico, bateria etc.)
- Ver andamento da solicitação
- Avaliar atendimento
- Histórico de atendimentos

### 🛠️ Parceiros (mecânicos/guinchos)
- Aceitar ou recusar chamados
- Ver rota e localização do motorista
- Atualizar status do atendimento

### 🛡️ Seguradoras
- Visualizar apólices associadas
- Ver histórico de socorros de seus clientes
- Autorizar/cancelar atendimentos

### 🧑‍💼 Administrador
- Gerenciar usuários, parceiros e seguradoras
- Ver estatísticas e relatórios
- Configurar comissões, planos, notificações

## 🚀 Como rodar localmente

```bash
git clone https://github.com/isaacisvaldo/sos-auto-api.git
cd sos-auto-api

npm install

# Configurar .env
cp .env.example .env

# Iniciar a aplicação
npm run start:dev
```

## 📄 Documentação Swagger

> Disponível em: http://localhost:3000/api/docs

## 🧪 Testes

```bash
npm run test
```

## 🧑 Autor

**Isaac Isvaldo Bunga**  
[GitHub](https://github.com/isaacisvaldo)

## 📃 Licença

MIT © Isaac Isvaldo Bunga
