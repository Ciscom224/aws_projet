const UserModel=require("../models/user.model");
const fs=require("fs");
const {promisify} =require('util');
const { uploadErrors } = require("../utils/errors.utils");
const pipeline=promisify(require("stream").pipeline);

module.exports.uploadProfil = async (req, res) => {
    console.log(req.body)
    return null;
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

        const fileName = req.body.name + ".jpeg";

        await pipeline(
            req.file.stream,
            fs.createWriteStream(
                `${__dirname}/../../client/public/images/Profils/${fileName}`
            )
        );
        try {
            if (!objID.isValid(req.params.id) )
                return res.status(400).send("ID inconnu ");
          
            const updatedUser = await UserModel.findByIdAndUpdate(
                req.params.id,
                { $set: { profilImage:"/images/profils/"+fileName } },
                { new: true, upsert: true ,setDefaultsOnInsert:true}
            ).exec();
    
         
            if (updatedUser) {
                res.status(200).json({ user: updatedUser });
            } else {
                res.status(400).json({ message: "Utilisateur non trouvé" });
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: err.message });
        }

    } catch (err) {
        console.error("Erreur lors de l'enregistrement de l'image :", err);
        const errors = uploadErrors(err);
        return res.status(200).json({ errors });
    }
};