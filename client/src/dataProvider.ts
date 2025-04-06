// import jsonServerProvider from "ra-data-json-server";
import { DataProvider } from "react-admin";

const API_URL = import.meta.env.VITE_API_URL;

export const dataProvider: DataProvider = {
  getList: async (resource, params) => {
    const { pagination, sort } = params;
    const response = await fetch(
      `${API_URL}/${resource}?pagination=${JSON.stringify(pagination)}&sort=${JSON.stringify(sort)}`,
    );
    const data = await response.json();
    return data;
  },

  getOne: async (resource, params) => {
    const response = await fetch(`${API_URL}/${resource}/${params.id}`);
    const data = await response.json();
    return data;
  },

  getMany: async (resource, params) => {
    const response = await fetch(
      `${API_URL}/${resource}?filter=${JSON.stringify(params)}`,
    );
    const data = await response.json();
    return data;
  },
};
// const result = await dataProvider.getList("regions", {
//   pagination: { page: 1, perPage: 5 },
//   sort: { field: 'title', order: 'ASC' },
//   filter: { author_id: 12 },
// });

// const result = await dataProvider.getOne("regions", {
//   id: 324
// })

// const result = await dataProvider.getMany("regions", {
//   ids: [1, 2,3]
// })

// console.log(result);
