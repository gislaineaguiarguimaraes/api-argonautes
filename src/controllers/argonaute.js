const Argonaute = require ('../models/Argonaute')

//Créer un nouvel argonaute
exports.createArgonaute = async (req, res, next) => {
    try{
        const {name, quality} = req.body
        const nome = await Argonaute.create({name, quality})
        res.send(nome)
    }catch(err) {
        res.status(400).send("Erreur : L'argonaute n'a pas été enregistré")
    }
};

//Afficher tous les argonautes
exports.getAllArgonautes = async (req, res) => {
    try{
        const argonautes = await Argonaute.find()  
        res.send({ argonautes })
    }catch(err){
        res.status(400).send('Erreur')
    }
};

//Modifier partiellement les données de l'argonaute
exports.updateArgonaute = async(req, res) =>{
    try{

        //pega o id que o front manda pela url
        const nameId = req.params._id
        //pega as novas informaçoes no corpo da requisiçao
        const { name, quality } = req.body
        //atualisa as informaçoes
        const nome = await Argonaute.findByIdAndUpdate(nameId, { name, quality}, {new: true})
        res.send({nome})

    }catch(err){
        res.status(400).send('Erreur')
    }
}

//Supprimer Argonaute
exports.deleteArgonaute = async (req, res) =>{
    try{
        const nameId = req.params._id
        await Nome.findByIdAndDelete(nameId)
        res.send({msg: 'Deletado com'})
    }catch(err){
        res.status(400).send('ERRO')
    }
}

//buscando somente um dado na api
exports.getOneArgonaute = async(req, res)=>{
    try{
        const nameId = req.params._id
        const nome = await Argonaute.findById( nameId )  
        res.send( nome)
    }catch(err){
        res.status(400).send('Erreur')
    }
}
