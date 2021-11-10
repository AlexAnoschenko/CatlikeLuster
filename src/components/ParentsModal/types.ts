import { ParentProps } from '../../pages/Parents/types';

export interface ParentsModalProps {
    isModalVisible: boolean;
    handleCancel?: () => void;
    title?: string;
    currentParent: ParentProps;
}
