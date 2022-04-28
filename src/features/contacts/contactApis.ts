import { baseUrl, users } from "../../utils/urls";
import axios from "axios";

export const getContactsApi = async (pageNo?: string) => {
    try {
        const response: any = await axios.get(`${baseUrl}${users}`);
        return response.data;
    } catch (err) {
        console.log('err:', err);
        throw err;
    }
}