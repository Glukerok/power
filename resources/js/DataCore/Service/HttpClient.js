import _get from 'lodash/get';
import axios from 'axios';
import qs from 'qs';
import store from './../../Common/System/store';

function createSession() {
    const session = axios.create({
        baseURL: process.env.REACT_APP_BACKEND_URL,
        withCredentials: true,

        paramsSerializer: (params) => qs.stringify(
            params,
            {arrayFormat: 'repeat'},
        ),
    });

    session.interceptors.request.use(function (config) {
        let token = store.state.auth.token;

        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`
        }
        return config;
    }, function (error) {
        return Promise.reject(error);
    });

    return session;
}

class _HttpClient {
    constructor() {
        this.session = createSession();
        this.forbiddenListener = () => {
        };
    }

    setForbiddenListener = (listener) => {
        this.forbiddenListener = listener;
    };

    setUnauthorizedListener = (listener) => {
        this.unauthorizedListener = listener;
    };

    get = async (...params) => {
        try {
            return await this.session.get(...params);
        } catch (e) {
            if (_get(e, 'response.status') === 401 && this.unauthorizedListener) {
                await this.unauthorizedListener();
            } else if (_get(e, 'response.status') === 403 && this.forbiddenListener) {
                await this.forbiddenListener();
            }
            throw e;
        }
    };

    post = async (...params) => {
        try {
            return await this.session.post(...params);
        } catch (e) {
            if (_get(e, 'response.status') === 401 && this.unauthorizedListener) {
                await this.unauthorizedListener();
            } else if (_get(e, 'response.status') === 403 && this.forbiddenListener) {
                await this.forbiddenListener();
            }
            throw e;
        }
    };

    put = async (...params) => {
        try {
            return await this.session.put(...params);
        } catch (e) {
            if (_get(e, 'response.status') === 401 && this.unauthorizedListener) {
                await this.unauthorizedListener();
            } else if (_get(e, 'response.status') === 403 && this.forbiddenListener) {
                await this.forbiddenListener();
            }
            throw e;
        }
    };

    delete = async (...params) => {
        try {
            return await this.session.delete(...params);
        } catch (e) {
            if (_get(e, 'response.status') === 401 && this.unauthorizedListener) {
                await this.unauthorizedListener();
            } else if (_get(e, 'response.status') === 403 && this.forbiddenListener) {
                await this.forbiddenListener();
            }
            throw e;
        }
    };
}

const HttpClient = new _HttpClient();

export default HttpClient;
