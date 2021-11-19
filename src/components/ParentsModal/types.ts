import { ParentProps } from "../../pages/Parents/types";

export interface ParentsModalProps {
  isModalVisible: boolean;
  handleCancel?: () => void;
  name?: string;
  currentParent: ParentProps;
}
