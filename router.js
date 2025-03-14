//Joshua O. Pagcaliwagan CMSC 100 Exer6 MongoDB
import { save, upd, rem, remAll, getU, getAll } from './controller.js'; //import functions

const router = (app) => {//routes
    app.post('/save-student', save);
    app.post('/update', upd);
    app.post('/remove-user', rem);
    app.post('/remove-all-user', remAll);
    app.get('/user', getU);
    app.get('/members', getAll);
};

export default router;//export router