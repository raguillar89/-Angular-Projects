export interface Fazenda {
  id?: number;
  name: string;
  endereco: string;
  estoque: number;
  ultimaColheita: string;
  previsaoColheita?: string;
  grao: string;
  cidade: string;
}
