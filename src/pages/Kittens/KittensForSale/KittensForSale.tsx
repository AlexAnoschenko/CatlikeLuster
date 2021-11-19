import { FC, useState } from "react";
import { Col, Row } from "antd";

import ParentsModal from "../../../components/ParentsModal/ParentsModal";
import ParentCard from "../../../components/ParentCard/ParentCard";
import { ParentProps } from "../../Parents/types";
import { kittensForSaleCards } from "../constants";

const KittensForSale: FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentParent, setCurrentParent] = useState<ParentProps>({
    id: "",
    images: [],
    name: "",
  });

  const showModal = (parent: ParentProps) => {
    setIsModalVisible(true);
    setCurrentParent(parent);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setCurrentParent({
      id: "",
      images: [],
      name: "",
    });
  };

  return (
    <div className="flex justify-center pt-10 bg-bg-pages min-h-content page px-50px pb-50px">
      <ParentsModal
        isModalVisible={isModalVisible}
        handleCancel={handleCancel}
        currentParent={currentParent}
      />

      <Row justify="center" gutter={[70, 40]}>
        {kittensForSaleCards.map((parent) => (
          <Col key={parent.name}>
            <ParentCard parent={parent} showModal={showModal} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default KittensForSale;
