const db = require("./db");

async function registrarUsuario(nick){
    return await db.insertOne("usuario",{"nick": nick})

}

let buscarUsuario = async(iduser)=>{
    return await db.findOne("usuario",iduser);
}
 let alterarUsuario = async (user)=>{
    return await db.updateOne("usuario", user,{_id:user._id})
 } 
 let removerUsuario = async (iduser) => {
    return await db.deleteOne("usuario", iduser);
};

module.exports = {registrarUsuario, buscarUsuario, alterarUsuario, removerUsuario};