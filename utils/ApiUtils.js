class ApiUtils {

    constructor(request, baseURL) {

        this.request = request;
        this.baseURL = baseURL;
    }

    async get(endpoint) {

        return await this.request.get(
            this.baseURL + endpoint
        );
    }

    async post(endpoint, data) {

        return await this.request.post(
            this.baseURL + endpoint,
            {
                data: data
            }
        );
    }

    async put(endpoint, data) {

        return await this.request.put(
            this.baseURL + endpoint,
            {
                data: data
            }
        );
    }

    async delete(endpoint, data) {

        return await this.request.delete(
            this.baseURL + endpoint,
            {
                data: data
            }
        );
    }

    async getJson(response) {

        return await response.json();
    }

    async getText(response) {

        return await response.text();
    }

    getStatus(response) {

        return response.status();
    }

}

module.exports = ApiUtils;