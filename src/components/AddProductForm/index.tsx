import { Avatar } from "antd";
import React, {useState}from "react";
import { v4 as uuidv4 } from "uuid";
import { ListProductName } from "../interface";

interface AddProductFormProps {
    availableProduct: ListProductName | null;
    onAddProduct: (nameProduct: ListProductName) => void;
    onEditProduct: (nameProduct: ListProductName) => void;
    onClose: () => void;
  }
export const AddProductForm: React.FC<AddProductFormProps> = ({
  availableProduct,
  onAddProduct,
  onEditProduct,
  onClose,
}) => {
  const [inputAvatar, setInputAvatar] = useState(availableProduct?.avatar || "");
  const [inputName, setInputName] = useState(availableProduct?.name || "");
  const [inputContent, setInputContent] = useState(
    availableProduct?.content || ""
  );

  const handleSave = () => {
    if (availableProduct && onEditProduct) {
      onEditProduct({
        id: availableProduct.id,
        name: inputName,
        content: inputContent,
        avatar: inputAvatar,
      }); 
    } else if (onAddProduct) {
      onAddProduct({
        id: uuidv4(),
        name: inputName,
        content: inputContent,
        avatar: inputAvatar,
      });
    }
  };
    return <div>
        <div className="field-input-group">
            <input placeholder="Image" type="text" className="ant-input" value={inputAvatar}  onChange={(e) => setInputAvatar(e.target.value)}/>
        </div>
        <div className="field-input-group">
            <input placeholder="Product name" type="text" className="ant-input" value={inputName} onChange={(e) => setInputName(e.target.value)}/>
        </div>
        <div className="field-input-group">
            <input placeholder="Product description" type="text" className="ant-input" value={inputContent} onChange={(e) => setInputContent(e.target.value)} />
        </div>
        <div className="modal-new-user-footer">
            <button className="ant-btn ant-btn-primary" onClick={handleSave}>
                Save
            </button>
            <button className="ant-btn" style={{marginLeft: 10}} onClick={() => onClose()}>
                Cancel
            </button>
        </div>
    </div>
}
