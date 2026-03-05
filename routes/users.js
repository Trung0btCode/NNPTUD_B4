var express = require('express');
var router = express.Router();
let { dataUser, dataRole } = require('../utils/data')
let { GenID, getItemById } = require('../utils/idHandler')

/* GET users listing. */
router.get('/', function (req, res, next) {
    let result = dataUser.filter(
        function (e) {
            return !e.isDeleted;
        }
    )
    res.send(result);
});

router.get('/:id', function (req, res, next) {
    let id = req.params.id;
    let result = dataUser.filter(
        function (e) {
            return e.id == id && !e.isDeleted;
        }
    )
    if (result.length) {
        res.send(result[0])
    } else {
        res.status(404).send({
            message: "ID NOT FOUND"
        })
    }
});

router.post('/', function (req, res) {
    let getRole = getItemById(req.body.roleId, dataRole);
    if (!getRole) {
        res.status(404).send({
            message: "ROLE ID NOT FOUND"
        })
        return
    }
    let newUser = {
        id: GenID(dataUser),
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        fullName: req.body.fullName,
        avatarUrl: req.body.avatarUrl,
        status: req.body.status || true,
        loginCount: 0,
        isDeleted: false,
        role: getRole,
        creationAt: new Date(Date.now()),
        updatedAt: new Date(Date.now()),
    }
    dataUser.push(newUser);
    res.send(newUser)
})

router.put('/:id', function (req, res) {
    let id = req.params.id;
    let result = dataUser.filter(
        function (e) {
            return e.id == id && !e.isDeleted;
        }
    )
    if (result.length) {
        result = result[0];
        let keys = Object.keys(req.body);
        for (const key of keys) {
            if (key === 'roleId') {
                let getRole = getItemById(req.body.roleId, dataRole);
                if (!getRole) {
                    res.status(404).send({
                        message: "ROLE ID NOT FOUND"
                    })
                    return
                }
                result.role = getRole;
            } else if (result[key] !== undefined) {
                result[key] = req.body[key]
            }
        }
        result.updatedAt = new Date(Date.now())
        res.send(result)
    } else {
        res.status(404).send({
            message: "ID NOT FOUND"
        })
    }
})

router.delete('/:id', function (req, res) {
    let id = req.params.id;
    let result = dataUser.filter(
        function (e) {
            return e.id == id && !e.isDeleted;
        }
    )
    if (result.length) {
        result = result[0];
        result.isDeleted = true;
        result.updatedAt = new Date(Date.now())
        res.send(result)
    } else {
        res.status(404).send({
            message: "ID NOT FOUND"
        })
    }
})

module.exports = router;
