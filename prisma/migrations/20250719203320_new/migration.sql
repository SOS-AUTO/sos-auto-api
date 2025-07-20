-- CreateEnum
CREATE TYPE "PartnerType" AS ENUM ('MECHANIC_SHOP', 'TOWING_COMPANY', 'INSURANCE_COMPANY');

-- CreateEnum
CREATE TYPE "StatusApolice" AS ENUM ('PENDENTE', 'VALIDADA', 'ATIVA', 'REJEITADA', 'EXPIRADA');

-- CreateEnum
CREATE TYPE "PartnerPlanType" AS ENUM ('STARTER', 'PRO', 'VIP');

-- CreateEnum
CREATE TYPE "StatusAssinatura" AS ENUM ('ATIVO', 'EXPIRADO', 'CANCELADO');

-- CreateEnum
CREATE TYPE "MetodoPagamento" AS ENUM ('MCX', 'CASH', 'TRANSFERENCIA');

-- CreateEnum
CREATE TYPE "StatusSubscricao" AS ENUM ('ATIVO', 'EXPIRADO', 'CANCELADO');

-- CreateEnum
CREATE TYPE "DocumentType" AS ENUM ('LICENSE', 'ID_CARD', 'INSURANCE', 'VEHICLE_REGISTRATION', 'OTHER');

-- CreateTable
CREATE TABLE "Partner" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" "PartnerType" NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "address" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION,
    "city" TEXT,
    "province" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Partner_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PartnerPlan" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" "PartnerPlanType" NOT NULL,
    "precoMensal" DOUBLE PRECISION NOT NULL,
    "inclui" TEXT,
    "comissao" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "requests_limit" BOOLEAN NOT NULL,

    CONSTRAINT "PartnerPlan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PartnerSubscription" (
    "id" TEXT NOT NULL,
    "partnerId" TEXT NOT NULL,
    "planId" TEXT NOT NULL,
    "dataInicio" TIMESTAMP(3) NOT NULL,
    "dataFim" TIMESTAMP(3) NOT NULL,
    "meses" INTEGER NOT NULL,
    "valorTotal" DOUBLE PRECISION NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'ATIVO',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PartnerSubscription_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PartnerPayment" (
    "id" TEXT NOT NULL,
    "subscriptionId" TEXT NOT NULL,
    "metodoPagamento" TEXT NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "foiPago" BOOLEAN NOT NULL DEFAULT false,
    "dataPagamento" TIMESTAMP(3),

    CONSTRAINT "PartnerPayment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PartnerStyle" (
    "id" TEXT NOT NULL,
    "logoUrl" TEXT,
    "primaryColor" TEXT,
    "secondaryColor" TEXT,
    "theme" TEXT,
    "font" TEXT,
    "partnerId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PartnerStyle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Driver" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isBlocked" BOOLEAN NOT NULL DEFAULT false,
    "licenseNumber" TEXT,
    "licenseCategory" TEXT,
    "licenseExpiryDate" TIMESTAMP(3),
    "DocumentUrl" TEXT,

    CONSTRAINT "Driver_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DriverDocument" (
    "id" TEXT NOT NULL,
    "driverId" TEXT NOT NULL,
    "type" "DocumentType" NOT NULL,
    "url" TEXT NOT NULL,
    "uploadedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" TIMESTAMP(3),
    "verified" BOOLEAN NOT NULL DEFAULT false,
    "notes" TEXT,

    CONSTRAINT "DriverDocument_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vehicle" (
    "id" TEXT NOT NULL,
    "driverId" TEXT NOT NULL,
    "marca" TEXT NOT NULL,
    "modelo" TEXT NOT NULL,
    "matricula" TEXT NOT NULL,
    "ano" INTEGER,
    "cor" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Vehicle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InsurancePolicy" (
    "id" TEXT NOT NULL,
    "vehicleId" TEXT NOT NULL,
    "insurerId" TEXT NOT NULL,
    "numeroApolice" TEXT,
    "dataInicio" TIMESTAMP(3),
    "dataFim" TIMESTAMP(3),
    "status" "StatusApolice" NOT NULL DEFAULT 'PENDENTE',
    "documentosUrl" JSONB,
    "observacoes" TEXT,
    "cobertura" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "InsurancePolicy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Mechanic" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "companyId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Mechanic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Towing" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "companyId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Towing_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Insurer" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "companyId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Insurer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Admin" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DriverPermission" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "DriverPermission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MechanicPermission" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "MechanicPermission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TowingPermission" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "TowingPermission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InsurerPermission" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "InsurerPermission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AdminPermission" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "AdminPermission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PartnerService" (
    "id" TEXT NOT NULL,
    "partnerId" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT,
    "precoBase" DOUBLE PRECISION NOT NULL,
    "duracaoEstimadaMinutos" INTEGER,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PartnerService_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RescueService" (
    "id" TEXT NOT NULL,
    "rescueRequestId" TEXT NOT NULL,
    "serviceId" TEXT NOT NULL,
    "precoFinal" DOUBLE PRECISION NOT NULL,
    "observacao" TEXT,
    "executadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RescueService_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RescueRequest" (
    "id" TEXT NOT NULL,
    "driverId" TEXT NOT NULL,
    "vehicleId" TEXT NOT NULL,
    "problema" TEXT NOT NULL,
    "localizacao" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'AGUARDANDO',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RescueRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Payment" (
    "id" TEXT NOT NULL,
    "rescueRequestId" TEXT NOT NULL,
    "metodoPagamento" "MetodoPagamento" NOT NULL,
    "valorTotal" DOUBLE PRECISION NOT NULL,
    "foiPago" BOOLEAN NOT NULL DEFAULT false,
    "pagoAntes" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ServiceLog" (
    "id" TEXT NOT NULL,
    "rescueRequestId" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "descricao" TEXT,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ServiceLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AssistancePlan" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "descricao" TEXT,
    "precoMensal" DOUBLE PRECISION NOT NULL,
    "cobertura" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "partnerId" TEXT NOT NULL,

    CONSTRAINT "AssistancePlan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DriverAssistancePlan" (
    "id" TEXT NOT NULL,
    "driverId" TEXT NOT NULL,
    "assistancePlanId" TEXT NOT NULL,
    "vehicleId" TEXT NOT NULL,
    "meses" INTEGER NOT NULL,
    "valorTotal" DOUBLE PRECISION NOT NULL,
    "dataInicio" TIMESTAMP(3) NOT NULL,
    "dataFim" TIMESTAMP(3) NOT NULL,
    "status" "StatusAssinatura" NOT NULL DEFAULT 'ATIVO',

    CONSTRAINT "DriverAssistancePlan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AssistancePolicy" (
    "id" TEXT NOT NULL,
    "assistancePlanId" TEXT NOT NULL,
    "insurancePolicyId" TEXT NOT NULL,
    "dataInicio" TIMESTAMP(3) NOT NULL,
    "dataFim" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AssistancePolicy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DriverPlanPayment" (
    "id" TEXT NOT NULL,
    "assinaturaId" TEXT NOT NULL,
    "metodoPagamento" "MetodoPagamento" NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "foiPago" BOOLEAN NOT NULL DEFAULT false,
    "dataPagamento" TIMESTAMP(3),

    CONSTRAINT "DriverPlanPayment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FinancialRecord" (
    "id" TEXT NOT NULL,
    "partnerId" TEXT NOT NULL,
    "rescueRequestId" TEXT NOT NULL,
    "valorTotal" DOUBLE PRECISION NOT NULL,
    "metodoPagamento" TEXT NOT NULL,
    "comissaoSistema" DOUBLE PRECISION NOT NULL,
    "valorRecebido" DOUBLE PRECISION NOT NULL,
    "tipoPagamento" TEXT NOT NULL,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FinancialRecord_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_DriverHasPermissions" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_DriverHasPermissions_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_MechanicHasPermissions" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_MechanicHasPermissions_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_TowingHasPermissions" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_TowingHasPermissions_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_InsurerHasPermissions" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_InsurerHasPermissions_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_AdminHasPermissions" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_AdminHasPermissions_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "Partner_email_key" ON "Partner"("email");

-- CreateIndex
CREATE UNIQUE INDEX "PartnerPayment_subscriptionId_key" ON "PartnerPayment"("subscriptionId");

-- CreateIndex
CREATE UNIQUE INDEX "PartnerStyle_partnerId_key" ON "PartnerStyle"("partnerId");

-- CreateIndex
CREATE UNIQUE INDEX "Driver_email_key" ON "Driver"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Vehicle_matricula_key" ON "Vehicle"("matricula");

-- CreateIndex
CREATE UNIQUE INDEX "InsurancePolicy_numeroApolice_key" ON "InsurancePolicy"("numeroApolice");

-- CreateIndex
CREATE UNIQUE INDEX "Mechanic_email_key" ON "Mechanic"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Towing_email_key" ON "Towing"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Insurer_email_key" ON "Insurer"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Admin_email_key" ON "Admin"("email");

-- CreateIndex
CREATE UNIQUE INDEX "DriverPermission_name_key" ON "DriverPermission"("name");

-- CreateIndex
CREATE UNIQUE INDEX "MechanicPermission_name_key" ON "MechanicPermission"("name");

-- CreateIndex
CREATE UNIQUE INDEX "TowingPermission_name_key" ON "TowingPermission"("name");

-- CreateIndex
CREATE UNIQUE INDEX "InsurerPermission_name_key" ON "InsurerPermission"("name");

-- CreateIndex
CREATE UNIQUE INDEX "AdminPermission_name_key" ON "AdminPermission"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Payment_rescueRequestId_key" ON "Payment"("rescueRequestId");

-- CreateIndex
CREATE UNIQUE INDEX "DriverPlanPayment_assinaturaId_key" ON "DriverPlanPayment"("assinaturaId");

-- CreateIndex
CREATE INDEX "_DriverHasPermissions_B_index" ON "_DriverHasPermissions"("B");

-- CreateIndex
CREATE INDEX "_MechanicHasPermissions_B_index" ON "_MechanicHasPermissions"("B");

-- CreateIndex
CREATE INDEX "_TowingHasPermissions_B_index" ON "_TowingHasPermissions"("B");

-- CreateIndex
CREATE INDEX "_InsurerHasPermissions_B_index" ON "_InsurerHasPermissions"("B");

-- CreateIndex
CREATE INDEX "_AdminHasPermissions_B_index" ON "_AdminHasPermissions"("B");

-- AddForeignKey
ALTER TABLE "PartnerSubscription" ADD CONSTRAINT "PartnerSubscription_partnerId_fkey" FOREIGN KEY ("partnerId") REFERENCES "Partner"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PartnerSubscription" ADD CONSTRAINT "PartnerSubscription_planId_fkey" FOREIGN KEY ("planId") REFERENCES "PartnerPlan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PartnerPayment" ADD CONSTRAINT "PartnerPayment_subscriptionId_fkey" FOREIGN KEY ("subscriptionId") REFERENCES "PartnerSubscription"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PartnerStyle" ADD CONSTRAINT "PartnerStyle_partnerId_fkey" FOREIGN KEY ("partnerId") REFERENCES "Partner"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DriverDocument" ADD CONSTRAINT "DriverDocument_driverId_fkey" FOREIGN KEY ("driverId") REFERENCES "Driver"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vehicle" ADD CONSTRAINT "Vehicle_driverId_fkey" FOREIGN KEY ("driverId") REFERENCES "Driver"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InsurancePolicy" ADD CONSTRAINT "InsurancePolicy_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "Vehicle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InsurancePolicy" ADD CONSTRAINT "InsurancePolicy_insurerId_fkey" FOREIGN KEY ("insurerId") REFERENCES "Partner"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mechanic" ADD CONSTRAINT "Mechanic_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Partner"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Towing" ADD CONSTRAINT "Towing_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Partner"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Insurer" ADD CONSTRAINT "Insurer_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Partner"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PartnerService" ADD CONSTRAINT "PartnerService_partnerId_fkey" FOREIGN KEY ("partnerId") REFERENCES "Partner"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RescueService" ADD CONSTRAINT "RescueService_rescueRequestId_fkey" FOREIGN KEY ("rescueRequestId") REFERENCES "RescueRequest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RescueService" ADD CONSTRAINT "RescueService_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "PartnerService"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RescueRequest" ADD CONSTRAINT "RescueRequest_driverId_fkey" FOREIGN KEY ("driverId") REFERENCES "Driver"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RescueRequest" ADD CONSTRAINT "RescueRequest_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "Vehicle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_rescueRequestId_fkey" FOREIGN KEY ("rescueRequestId") REFERENCES "RescueRequest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceLog" ADD CONSTRAINT "ServiceLog_rescueRequestId_fkey" FOREIGN KEY ("rescueRequestId") REFERENCES "RescueRequest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssistancePlan" ADD CONSTRAINT "AssistancePlan_partnerId_fkey" FOREIGN KEY ("partnerId") REFERENCES "Partner"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DriverAssistancePlan" ADD CONSTRAINT "DriverAssistancePlan_driverId_fkey" FOREIGN KEY ("driverId") REFERENCES "Driver"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DriverAssistancePlan" ADD CONSTRAINT "DriverAssistancePlan_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "Vehicle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DriverAssistancePlan" ADD CONSTRAINT "DriverAssistancePlan_assistancePlanId_fkey" FOREIGN KEY ("assistancePlanId") REFERENCES "AssistancePlan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssistancePolicy" ADD CONSTRAINT "AssistancePolicy_assistancePlanId_fkey" FOREIGN KEY ("assistancePlanId") REFERENCES "AssistancePlan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssistancePolicy" ADD CONSTRAINT "AssistancePolicy_insurancePolicyId_fkey" FOREIGN KEY ("insurancePolicyId") REFERENCES "InsurancePolicy"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DriverPlanPayment" ADD CONSTRAINT "DriverPlanPayment_assinaturaId_fkey" FOREIGN KEY ("assinaturaId") REFERENCES "DriverAssistancePlan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FinancialRecord" ADD CONSTRAINT "FinancialRecord_partnerId_fkey" FOREIGN KEY ("partnerId") REFERENCES "Partner"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FinancialRecord" ADD CONSTRAINT "FinancialRecord_rescueRequestId_fkey" FOREIGN KEY ("rescueRequestId") REFERENCES "RescueRequest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DriverHasPermissions" ADD CONSTRAINT "_DriverHasPermissions_A_fkey" FOREIGN KEY ("A") REFERENCES "Driver"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DriverHasPermissions" ADD CONSTRAINT "_DriverHasPermissions_B_fkey" FOREIGN KEY ("B") REFERENCES "DriverPermission"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MechanicHasPermissions" ADD CONSTRAINT "_MechanicHasPermissions_A_fkey" FOREIGN KEY ("A") REFERENCES "Mechanic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MechanicHasPermissions" ADD CONSTRAINT "_MechanicHasPermissions_B_fkey" FOREIGN KEY ("B") REFERENCES "MechanicPermission"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TowingHasPermissions" ADD CONSTRAINT "_TowingHasPermissions_A_fkey" FOREIGN KEY ("A") REFERENCES "Towing"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TowingHasPermissions" ADD CONSTRAINT "_TowingHasPermissions_B_fkey" FOREIGN KEY ("B") REFERENCES "TowingPermission"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_InsurerHasPermissions" ADD CONSTRAINT "_InsurerHasPermissions_A_fkey" FOREIGN KEY ("A") REFERENCES "Insurer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_InsurerHasPermissions" ADD CONSTRAINT "_InsurerHasPermissions_B_fkey" FOREIGN KEY ("B") REFERENCES "InsurerPermission"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AdminHasPermissions" ADD CONSTRAINT "_AdminHasPermissions_A_fkey" FOREIGN KEY ("A") REFERENCES "Admin"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AdminHasPermissions" ADD CONSTRAINT "_AdminHasPermissions_B_fkey" FOREIGN KEY ("B") REFERENCES "AdminPermission"("id") ON DELETE CASCADE ON UPDATE CASCADE;
