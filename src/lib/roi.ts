/**
 * Cálculo de ROI, aislado de la interfaz para poder evolucionarlo o moverlo al backend.
 */
export type RoiInput = {
  employees: number;
  hoursPerWeek: number;
  costPerHour: number;
  implementationCost: number;
  /** Porcentaje del tiempo que se espera automatizar (0-100). */
  automationRate: number;
};

export type RoiResult = {
  hoursSavedPerMonth: number;
  monthlySavings: number;
  annualSavings: number;
  paybackMonths: number | null;
};

export function calculateRoi(input: RoiInput): RoiResult {
  const weeksPerMonth = 4.33;
  const rate = Math.min(Math.max(input.automationRate, 0), 100) / 100;

  const hoursSavedPerMonth = input.employees * input.hoursPerWeek * weeksPerMonth * rate;
  const monthlySavings = hoursSavedPerMonth * input.costPerHour;
  const annualSavings = monthlySavings * 12;
  const paybackMonths =
    monthlySavings > 0 && input.implementationCost > 0
      ? input.implementationCost / monthlySavings
      : null;

  return { hoursSavedPerMonth, monthlySavings, annualSavings, paybackMonths };
}

export function formatMoney(value: number) {
  return new Intl.NumberFormat("es-CO", {
    maximumFractionDigits: 0,
  }).format(Math.round(value));
}
