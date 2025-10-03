import axios from 'axios';

const tesloApi = axios.create({
    baseURL: import.meta.env.VITE_API_URL
});

//interceptores

tesloApi.interceptors.request.use( (config)=>{

    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${ token }`;
    }

    return config;
});

// ver el url, aveces no me esta lanzando la peticion
// tesloApi.interceptors.request.use((config) => {

//     const base = config.baseURL ?? ''; // si es undefined, usa string vacía
//     const url = base + config.url;

//     console.log('Petición en crudo:', base + url);
//     console.log('Query params:', config.params);
//     return config;
// });

export {
    tesloApi,
}