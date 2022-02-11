import * as React from "react";
import jsonServerProvider from 'ra-data-json-server';
import {stringify} from 'query-string';
import {fetchUtils} from 'ra-core';


export const Provider = () => {
    const p = jsonServerProvider('http://localhost:8080/api');

    p.getList = (resource, params) => {
        const {page, perPage} = params.pagination;
        const {field, order} = params.sort;
        const query = {
            sort: JSON.stringify([field, order]),
            range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
            filter: JSON.stringify(params.filter),
        };
        const url = `http://localhost:8080/api/${resource}?${stringify(query)}`;

        return fetchUtils.fetchJson(url).then(({headers, json}) => {
            let jsonData;
            switch (resource) {
                case "tournaments": {
                    jsonData = json.tournaments;
                    break;
                }
                case "seasons": {
                    jsonData = json.seasons;
                    break;
                }
                case "leagues": {
                    jsonData = json.leagues;
                    break;
                }
                default: {
                    break;
                }
            }

            const res = {
                data: jsonData.map(resource => ({...resource, id: resource.alias})),
                total: jsonData.length
            };
            console.log(res);
            return res
        });
    };


    p.getOne = (resource, params) => {
        const url = `http://localhost:8080/api/${resource}/${params.id}`;
        return fetchUtils.fetchJson(url).then(({json}) => {
            return {data: {...json, id: json.alias}};
        });
    };

    p.update = (resource, params) => {
        const url = `http://localhost:8080/api/${resource}/${params.id}`;
        return fetchUtils.fetchJson(url, {
            method: 'PUT',
            body: JSON.stringify(params.data),
        }).then(({json}) => {
            return {data: {...json, id: json.alias}};
        });
    };

    p.create = (resource, params) => {
        const url = `http://localhost:8080/api/${resource}`;
        return fetchUtils.fetchJson(url, {
            method: 'POST',
            body: JSON.stringify(params.data),
        }).then(({json}) => {
            return {data: {...json, id: json.alias}};
        });
    };

    return p
};

