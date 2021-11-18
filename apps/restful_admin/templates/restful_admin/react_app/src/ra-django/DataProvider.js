import {stringify} from 'query-string';
import {fetchUtils,} from 'ra-core';

const getPaginationQuery = (pagination) => {
    return {
        page: pagination.page,
        page_size: pagination.perPage,
    };
};
const getFilterQuery = (filter) => {
    const {q: search, ...otherSearchParams} = filter;
    return {
        ...otherSearchParams,
        search,
    };
};
export const getOrderingQuery = (sort) => {
    const {field, order} = sort;
    return {
        ordering: `${order === 'ASC' ? '' : '-'}${field}`,
    };
};
const fileFiled = ["picture", "picture_small", "cv"]
const manyFiled = ["social_network"]
export const drfProvider = (apiUrl, httpClient = fetchUtils.fetchJson) => {
    const getOneJson = (resource, id) => httpClient(`${apiUrl}/${resource}/${id}/`).then((response) => response.json);
    return {
        getList: async (resource, params) => {
            const query = {
                ...getFilterQuery(params.filter),
                ...getPaginationQuery(params.pagination),
                ...getOrderingQuery(params.sort),
            };
            console.log(query);
            const url = `${apiUrl}/${resource}/?${stringify(query)}`;
            const {json} = await httpClient(url);
            return {
                data: json.results,
                total: json.count,
            };
        },
        getOne: async (resource, params) => {
            const data = await getOneJson(resource, params.id);
            return {
                data,
            };
        },
        getMany: (resource, params) => {
            return Promise.all(params.ids.map(id => getOneJson(resource, id))).then(data => ({data}));
        },
        getManyReference: async (resource, params) => {
            const query = {
                ...getFilterQuery(params.filter),
                ...getPaginationQuery(params.pagination),
                ...getOrderingQuery(params.sort),
                [params.target]: params.id,
            };
            const url = `${apiUrl}/${resource}/?${stringify(query)}`;
            const {json} = await httpClient(url);
            return {
                data: json.results,
                total: json.count,
            };
        },
        update: async (resource, params) => {
            const formData = new FormData();
            Object.keys(params.data).forEach(
                (key) => {
                    if (fileFiled.includes(key)) {
                        if (Object.keys(params.data[key]).includes("rawFile")) {
                            formData.append(key, params.data[key].rawFile)
                            console.log("hear")
                        }
                    } else if (manyFiled.includes(key)) {
                        console.log(params.data[key])
                        params.data[key].forEach(
                            (value) => {
                                formData.append(key, value)
                            }
                        )
                        // if (Object.keys(params.data[key]).includes("rawFile")) {
                        //     formData.append(key, params.data[key].rawFile)
                        //     console.log("hear")
                        // }
                    } else {
                        formData.append(key, params.data[key])
                    }

                }
            )
            const myHeaders = new Headers();
            myHeaders.append('enctype', 'multipart/form-data');
            const {json} = await httpClient(`${apiUrl}/${resource}/${params.id}/`, {
                method: 'PUT',
                headers: myHeaders,
                body: formData,
                // referrerPolicy:"origin-when-cross-origin",
            });
            return {data: json};
        },
        // updateMany: (resource, params) => Promise.all(params.ids.map(id => httpClient(`${apiUrl}/${resource}/${id}/`, {
        //     method: 'PATCH',
        //     body: JSON.stringify(params.data),
        // }))).then(responses => ({data: responses.map(({json}) => json.id)})),
        create: async (resource, params) => {
            const formData = new FormData()
            const myHeaders = new Headers();
            Object.keys(params.data).forEach(
                (key) => {
                    if (Object.keys(params.data[key]).includes("rawFile")) {
                        formData.append(key, params.data[key].rawFile)
                    } else {
                        formData.append(key, params.data[key])
                    }

                }
            )
            myHeaders.append('enctype', 'multipart/form-data');
            const {json} = await httpClient(`${apiUrl}/${resource}/`, {
                method: 'POST',
                headers: myHeaders,
                body: formData,
            });
            return {
                data: {...json},
            };
        },
        delete: (resource, params) => httpClient(`${apiUrl}/${resource}/${params.id}/`, {
            method: 'DELETE',
        }).then(() => ({data: params.previousData})),
        deleteMany: (resource, params) => Promise.all(params.ids.map(id => httpClient(`${apiUrl}/${resource}/${id}/`, {
            method: 'DELETE',
        }))).then(responses => ({data: responses.map(({json}) => json.id)})),
    };
};
export default drfProvider;
