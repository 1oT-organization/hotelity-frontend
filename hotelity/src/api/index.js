import axios from 'axios';

const baseUri = 'http://localhost:8888';

// 지점 정보
export const getBranches = async () => {
    const response = await axios.get(`${baseUri}/hotel-management/branches`);
    return response.data;
}

// 로그인
export const login = async (loginInfo) => {
    return await axios.post(`${baseUri}/login`, loginInfo, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}