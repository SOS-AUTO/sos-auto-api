# ✅ Checklist de Tarefas – Backend (API SOS Auto Angola)

📅 **Data de criação:** 2025-07-13  
👨‍💻 **Desenvolvedor:** Isaac Isvaldo Bunga  
🚀 **Projeto:** SOS Auto Angola (NestJS + Prisma)

---

## 🔐 Autenticação e Autorização
- [ ] Registro de usuários (motoristas, mecânicos, guincheiros, seguradoras, admin)
- [ ] Login com JWT
- [ ] Recuperação e redefinição de senha
- [ ] Middleware de autenticação
- [ ] Permissões por tipo de usuário (Guards)

## 👤 Usuários e Perfis
- [ ] CRUD de usuários
- [ ] Atualização de perfil e foto
- [ ] Desativação e reativação de contas

## 🆘 Chamados de Socorro
- [ ] Criar chamado (motorista)
- [ ] Listar chamados disponíveis (guinchos e mecânicos)
- [ ] Aceitar/recusar chamado
- [ ] Atualizar status do atendimento (em andamento, concluído)
- [ ] Histórico de atendimentos

## 🛠️ Parceiros (Oficinas, Guinchos, Seguradoras)
- [ ] Cadastro e aprovação de parceiros
- [ ] Gerenciar planos de parceria
- [ ] Associação de chamados aos parceiros
- [ ] Listar e visualizar atendimentos por parceiro

## 💰 Pagamentos e Comissões
- [ ] Integração com Stripe ou Efíbank
- [ ] Gerar ordens de pagamento
- [ ] Registrar comissões por atendimento
- [ ] Visualizar transações e extrato

## 🧑‍💼 Administração
- [ ] Painel de KPIs (total de usuários, chamados, faturamento)
- [ ] Gerenciar todos os recursos (usuários, parceiros, chamados)
- [ ] Relatórios e estatísticas por período

## 🔔 Notificações
- [ ] Enviar e registrar notificações via API
- [ ] Webhooks para alertas em tempo real

## ⚙️ Configurações Gerais
- [ ] Configurações do sistema
- [ ] Integrações externas (mapas, pagamentos, notificações)
- [ ] Gerenciamento de logs e erros
