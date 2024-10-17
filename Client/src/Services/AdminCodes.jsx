import axios from 'axios';

export const getAdminCodes = async () => {
  try {
    const response = await axios.get('http://localhost:500/api/admin/codes');
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching codes:', error);
    throw error;
  }
};


