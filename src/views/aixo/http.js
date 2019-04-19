import Axios from 'axios';
import auth from '@/views/utils/auth';
import Toast from '@/components/Toast';
const httpServer = (opts) => {
    const httpDefaultOpts = {
        method: opts.method,
        url: opts.url,
        timeout: 100000,
        params: opts.params,
        data: opts.params,
        headers: opts.method == 'get' ? {
            'X-Requested-With': 'XMLHttpRequest',
            'Accept': 'application/json',
            'Content-Type': 'application/json; charset=UTF-8',
            'systoken': '',
        } : {
            'Content-Type': 'application/json;charset=UTF-8',
            'systoken': '',
        },
    };
    if (auth.getToken()) {
        // const token = auth.getToken();
        // httpDefaultOpts.headers.systoken = token;
        httpDefaultOpts.headers.systoken = 123;
    }
    if (opts.method == 'get') {
        delete httpDefaultOpts.data;
    } else {
        delete httpDefaultOpts.params;
    }
    const promise = new Promise(function(resolve, reject) {
        Axios(httpDefaultOpts).then(
            (res) => {
                if (res.data.code == 200) {
                    resolve(res.data);
                } else {
                    resolve(res.data);
                }
            },
        ).catch(
            (response) => {
                reject(response);
            },
        );
    });
    return promise;
};

export default httpServer;