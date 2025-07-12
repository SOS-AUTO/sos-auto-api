
enum PartnerPlanType {
  STARTER='STARTER',
  PRO='PRO',
  VIP='VIP'
}
 const planos = [
    {
      name: 'Starter',
      type: PartnerPlanType.STARTER,
      precoMensal: 5000,
      inclui: '5 atendimentos por mês',
      comissao: 0.10, // 10% nos extras
      requests_limit: true,
    },
    {
      name: 'Pro',
      type: PartnerPlanType.PRO,
      precoMensal: 20000,
      inclui: 'Atendimentos ilimitados',
      comissao: null,
      requests_limit: false,
    },
    {
      name: 'VIP',
      type: PartnerPlanType.VIP,
      precoMensal: 35000,
      inclui: 'Atendimentos ilimitados, prioridade e suporte especial',
      comissao: null,
      requests_limit: false,
    }
  ];