/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

var express = require('express');
const { isAuthenticated } = require('./auth')

var router = express.Router();

router.get('/',
    isAuthenticated, // check if user is authenticated
    function (req, res, next) {

        res.render('index', {
            title: 'MSAL Node & Express Web App',
            isAuthenticated: req.session.isAuthenticated,
            username: req.session.account?.username,
        });
    });

module.exports = router;