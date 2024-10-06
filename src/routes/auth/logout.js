import * as api from 'api.js';

export function post(req, res) {
    const user = req.body;

    api.del('sessions', req.session.token).then(response => {
        delete req.session.user;
        res.end(JSON.stringify(response));
    });
}