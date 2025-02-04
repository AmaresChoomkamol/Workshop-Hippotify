import { axiosInstance } from "../utils/axiosInstance"

export const getUserPlaylists = async() => {
    try {
        const response = await axiosInstance.get("/playlists");
        return response.data.data
    } catch (error){
        return error.response
    }
}