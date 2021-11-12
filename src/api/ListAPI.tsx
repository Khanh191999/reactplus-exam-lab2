import { axiosClient } from "./axiosClient";
import { ListProductName } from "./../components/interface";

const ListAPI = {
    getAll() {
        const url = `/products`;
        return axiosClient.get(url);
    },
    addProduct(nameProduct: ListProductName) {
        const url = `/prosucts`;
        axiosClient.post(url, nameProduct)
    },
    deleteProduct(id: string) {
        const url = `//${id}`;
        axiosClient.delete(url)
    },
    updateProduct(id: string , nameProduct: ListProductName) {
        const url = `/product/${id}`;
        axiosClient.put(url, nameProduct)
    },
}
export default ListAPI;