import axios from 'axios';

export const getUserCodes = async () => {
  try {
    const response = await axios.get('http://localhost:500/api/user/codes');
    return response.data;
  } catch (error) {
    console.error('Error fetching codes:', error);
    throw error;
  }
};


