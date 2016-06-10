It allows to make supetest-kao-agent requests inside generators like
    
    var supertest = require('co-supertest-koa-agent');
    let result = yield supertest(app).get(url).end();

### Install

    npm install co-supertest-koa-agent
