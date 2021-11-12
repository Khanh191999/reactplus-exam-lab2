import { useState, useEffect } from 'react';
import { Modal } from 'antd';


import { ListProduct } from './components/ListProduct'
import { AddProductForm } from './components/AddProductForm'

import 'antd/dist/antd.css'
import './App.css';
import ListAPI from "./api/ListAPI";
import { ListProductName } from "./components/interface";

function App() {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [products, setProducts] = useState<ListProductName[]>([]);
  const [availableProduct, setAvailableProduct] = useState<ListProductName | null>(null)

  useEffect(() => {
    ListAPI.getAll()
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err))
      .then(() => { })
  }, []);

  const handleOpenModal = () => {
    setIsModalVisible(true)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }
  const handleClose = () => {
    setIsModalVisible(false);
  }
  const handleAddItem = async (nameProduct: ListProductName) => {
    handleClose();
    try {
      await ListAPI.addProduct(nameProduct);
      setProducts([...products, nameProduct]);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDeleteProduct = async (id: string) => {
    try {
      await ListAPI.deleteProduct(id);
      const list = products.filter(
        (product: ListProductName) => product.id !== id
      );
      setProducts(list);
    } catch (error) {
      console.log(error);
    }
  };
 
  const handleUpdateProduct = async (nameProduct: ListProductName) => {
    const list = products.map((product) => {
      if (product.id === nameProduct.id) {
        return {
          ...nameProduct
        }
      }
      return product;
    })
    handleClose();
    try {
      await ListAPI.updateProduct(nameProduct.id, nameProduct);
      setProducts(list);
    } catch (error) {
      console.log(error);
    }

  }
  const handleEditProduct = (nameProduct: ListProductName) => {
    setAvailableProduct(nameProduct);
    setIsModalVisible(true);
  }

  return (
    <div className="App">
      <h2>List product</h2>
      <div className="header-add-user">
        <button className="ant-btn ant-btn-primary" onClick={handleOpenModal}>
          Add New Product
        </button>
      </div>
      <ListProduct list={products} deleteProduct={handleDeleteProduct} editProduct={handleEditProduct} />
      <Modal title="Add Product" visible={isModalVisible} footer={null} onCancel={handleCancel}>
        <AddProductForm availableProduct={availableProduct} onAddProduct={handleAddItem} onEditProduct={handleUpdateProduct} onClose={handleClose} />
      </Modal>
    </div>
  );
}

export default App;
