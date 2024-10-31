import axios from 'axios';
import { Mission as MissionType } from '../Models/MissionType/MissionType';

const BASE_URL = "https://reactexambackend.onrender.com/missions/8649413";

export const PostMission = async (mission: MissionType): Promise<void> => {
    if (!BASE_URL) {
        throw new Error('BASE_URL is not defined');
    }
    try {
        const response = await axios.post(BASE_URL,mission)

        console.log('Mission posted successfully');
    } catch (error) {
        console.error(error);
    }
};

export const GetMissions = async (): Promise<MissionType[]> => {
    if (!BASE_URL) {
        throw new Error('BASE_URL is not defined');
    }

    try {
        const response = await axios.get(BASE_URL);
        
        return response.data as MissionType[];
    }
    catch (error) {
        throw new Error("fetch failed");
    }
}

export const DeleteMission = async (mission: MissionType): Promise<void> => {
    if (!BASE_URL) {
        throw new Error('BASE_URL is not defined');
    }
    
    try {
        const response = await axios.delete(`${BASE_URL}/${mission._id}`);
        
        console.log('Mission deleted successfully');
    } catch (error) {
        console.error('Failed to delete mission:', error);
    }
};


