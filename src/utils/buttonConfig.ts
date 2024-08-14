export interface ButtonConfig {
  label: string;
  type: 'number' | 'operator' | 'equals' | 'clear' | 'toggle' | 'percentage';
}

export const buttonConfig: ButtonConfig[] = [
    { label: 'AC', type: 'clear' },
    { label: '+/-', type: 'toggle'},
    { label: '%', type: 'percentage'},
    { label: '/', type: 'operator' },
    { label: '7', type: 'number' },
    { label: '8', type: 'number' },
    { label: '9', type: 'number' },
    { label: '*', type: 'operator' },
    { label: '4', type: 'number' },
    { label: '5', type: 'number' },
    { label: '6', type: 'number' },
    { label: '-', type: 'operator' },
    { label: '1', type: 'number' },
    { label: '2', type: 'number' },
    { label: '3', type: 'number' },
    { label: '+', type: 'operator' },
    { label: '0', type: 'number' },
    { label: '.', type: 'number' },
    { label: '=', type: 'equals' },
  ];