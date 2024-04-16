const UserModel=require("../models/user.model");
const fs=require("fs");
const {promisify} =require('util');
const { uploadErrors } = require("../utils/errors.utils");
const pipeline=promisify(require("stream").pipeline);

module.exports.uploadProfil = async (req, res) => {
    console.log(__dirname)
    try {
        if (
            req.file.mimetype != "image/jpg" &&
            req.file.mimetype != "image/png" &&
            req.file.mimetype != "image/jpeg"
        ) {
            throw Error("Fichier invalide");
        }
        if (req.file.size > 500000) {
            throw Error("Taille maximale dépassée");
        }

        const fileName = req.body.name + ".jpg";

        // await pipeline(
        //     req.file.stream,
        //     fs.createWriteStream(
        //         `${__dirname}/../client/public/images/Profils/${fileName}`
        //     )
        // );

        return res.status(200).json({ success: true, fileName: fileName });
    } catch (err) {
        const errors = uploadErrors(err);
        return res.status(200).json({ errors });
    }
};