/// <reference types="Cypress" />
const baseUrl = 'https://qa.api.koloni.io/v3/';

export default class ApiCalls {
  #sendRequest(requestData) {
    const url = `${baseUrl}${requestData.endpoint}`;

    return cy
      .request({
        method: requestData.apiRequestType,
        url: url,
        failOnStatusCode: false,
        body: requestData.body,
        headers: requestData.headers || {}, 
        form: requestData.form || false, 
      })
      .as(requestData.alias);
  }

  get(endpoint) {
    return this.#sendRequest({
      apiRequestType: 'GET',
      endpoint: endpoint,
      body: null,
      alias: 'getResponse',
    });
  }

  post(endpoint, body) {
    return this.#sendRequest({
      apiRequestType: 'POST',
      endpoint: endpoint,
      body: body.body || body, 
      headers: body.headers || {},
      form: body.form || false, 
      alias: 'postResponse',
    });
  }

  put(endpoint, body) {
    return this.#sendRequest({
      apiRequestType: 'PUT',
      endpoint: endpoint,
      body: body,
      alias: 'putResponse',
    });
  }

  delete(endpoint) {
    return this.#sendRequest({
      apiRequestType: 'DELETE',
      endpoint: endpoint,
      body: null,
      alias: 'deleteResponse',
    });
  }

  patch(endpoint, body) {
    return this.#sendRequest({
      apiRequestType: 'PATCH',
      endpoint: endpoint,
      headers: body.headers || {},
      body: body,
      alias: 'patchResponse',
    });
  }
  
}
