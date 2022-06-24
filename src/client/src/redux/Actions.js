export const getBeauty = async () => {
    const response = await fetch('http://localhost:3001/users', {
        method: 'GET'
    });
    return response.json();
};

