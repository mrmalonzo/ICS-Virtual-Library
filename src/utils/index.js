

export const getAuthToken = () => {
    const data = JSON.parse(localStorage.getItem("user"));
    const token = data.token;

    return token;
}

