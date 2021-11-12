import './ListProduct.css'
import { ListProductName } from '../interface'
import Item from 'antd/lib/list/Item'

interface ListProductProps {
    list: ListProductName[];
    deleteProduct: (id: string) => void;
    editProduct: (nameProduct: ListProductName) => void;
  }

export const ListProduct: React.FC<ListProductProps> = ({list, deleteProduct , editProduct}) => {
    return <div className="ant-list-items">
        <div className="ant-list-item">
            {list.map((item , index) => (
            <div className="ant-list-item-meta" key={index}>
                <div className="ant-list-item-meta-avatar">
                    <span className="ant-image-img">
                        <img src={item.avatar} style={{width: 100}}/>
                    </span>
                </div>
                <div className="ant-list-item-meta-content">
                    <h4 className="ant-list-item-meta-title">
                        <a>{item.name}</a>
                    </h4>
                    <div className="ant-list-item-meta-description">
                        {item.content}
                    </div>
                </div>
                <ul className="ant-list-item-action">
                    <li>
                        <a onClick={() => editProduct(item)}>Edit</a>
                    </li>
                    <li>
                        <a onClick={() => deleteProduct(item.id)}>Remove</a>
                    </li>
                </ul>
            </div>
            ))}
        </div>
    </div>
}