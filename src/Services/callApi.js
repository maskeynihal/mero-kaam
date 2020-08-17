import http from 'Utils/http';

export default async (url, params) => {
  try {
    const { data } = await http.post(url, params);

    return {
      response: data,
      error: false
    };
  } catch (error) {
    if (!error.response) {
      return {
        response: {
          message: 'Network Error'
        },
        error: true
      };
    }

    return {
      response: error.response.data,
      error: true
    };
  }
};
