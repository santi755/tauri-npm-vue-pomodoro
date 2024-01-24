import { v4 as uuidv4 } from 'uuid';

export const useUuidService = () => {
    const generateUuid = () => {
        return uuidv4();
    };

    return {
        generateUuid,
    };
};
