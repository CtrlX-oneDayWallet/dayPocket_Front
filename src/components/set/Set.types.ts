export interface SetProps {
  label: string;
  amount: string;
  setAmount: (value: string) => void;
  onClick: () => void;
}
