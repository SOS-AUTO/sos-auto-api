# ✅ Checklist Geral do Sistema de Assistência e Seguros

> Gerado em: 11/07/2025

## 🔐 Autenticação e Autorização
- [x] Registro de usuários (motoristas, mecânicos, guincheiros, seguradoras, admin)
- [x] Login com JWT
- [ ] Recuperação e redefinição de senha
- [x] Middleware de autenticação
- [x] Permissões por tipo de usuário (Guards)

## 🏢 Gestão de Parceiros
- [x] Cadastro de parceiros (oficina, guincho, seguradora)
- [x] Estilo personalizado por parceiro (logo, cores, tema)
- [x] Planos disponíveis para parceiros (Starter, Pro, VIP)
- [x] Subscrição dos parceiros a planos (com duração e pagamento)
- [x] Pagamento da subscrição do plano
- [x] Limite de atendimentos por plano

## 🛠️ Serviços de Parceiros
- [x] Cadastro de serviços que cada parceiro oferece (ex: troca de óleo, reboque)
- [x] Registro de serviços realizados por pedido de socorro

## 👤 Motoristas e Veículos
- [x] Cadastro de motoristas
- [x] Cadastro de veículos vinculados a motoristas
- [x] Vincular plano ao veículo e motorista
- [x] Pagamento do plano contratado

## 🛡️ Seguros e Apólices
- [x] Cadastro de apólices de seguros vinculadas ao veículo
- [x] Cobertura da apólice em formato JSON
- [x] Criação automática de apólice ao adquirir plano
- [x] Apólice manual (inserida por motorista externo)
- [x] Vínculo da apólice com plano de assistência
- [x] Verificação da apólice ativa por veículo

## 📦 Planos de Assistência
- [x] Planos de assistência oferecidos pelas seguradoras
- [x] Contratação de plano pelo motorista (mensal, semestral, anual)
- [x] Pagamento do plano de assistência
- [x] Criação de apólice vinculada ao plano contratado

## 🚨 Pedidos de Socorro
- [x] Criação de pedido de socorro pelo motorista
- [x] Geolocalização (latitude/longitude)
- [x] Registro de múltiplos serviços por pedido
- [x] Registro de status do pedido (log)
- [x] Pagamento do atendimento
- [x] Cálculo de comissão do parceiro
- [x] Registro financeiro por atendimento

## 💳 Pagamentos
- [x] Enum de métodos de pagamento (MCX, CASH, TRANSFERÊNCIA)
- [x] Pagamento de plano do parceiro
- [x] Pagamento do plano do motorista
- [x] Pagamento por pedido de socorro

## 📊 Financeiro
- [x] Registro de comissões e valores recebidos por parceiros
- [x] Controle de valor total pago e método
- [x] Ligação entre pagamento, pedido e parceiro

## 📂 Organização do Código e Modelos
- [x] Enum para status de assinatura
- [x] Enum para tipo de parceiro
- [x] Enum para status da apólice
- [x] Enum para tipo de plano do parceiro
- [x] Organização das relações entre veículo, apólice e plano
- [x] Evitar duplicidade de dados (dados da apólice não se repetem no plano)
