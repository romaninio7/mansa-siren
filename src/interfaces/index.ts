export interface IBusinessData {
  siret: string;
  startDate: string;
  adresse: string;
}

export interface IAccount {
  account_id: string;
  account_type: string;
  account_number: string;
  currency: string;
  current: string;
}

export interface IUserBusinessItem {
  businessValue: string;
  businessData: string[];
}

export interface ModalProps {
  openModal: boolean;
  onDismiss: () => void;
  currentAccount?: string;
}

export interface ModalContentProps {
  children: React.ReactNode;
  onDismiss: () => void;
}
