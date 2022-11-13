const { response } = require('express');
const subirarchivo = async (req, res = response) => {
    try {
        req.body = `file ${req.file.filename} has saved on the server`;
        const filename = req.file.filename;
        res.json({
            ok: true,
            filename
        })
    } catch (error) {
        res.status(200).json({
            ok: false,
            msg: 'Error inesperado'
        })
    }
}
module.exports = {
    subirarchivo
}