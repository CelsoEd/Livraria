class UsuarioDao {

    constructor(db) {
        this._db = db;
    }
    //metodos de acesso ao banco de dados usuario
    buscaPorEmail(email) {
        return new Promise((resolve, reject) => {
            this._db.get(
                `
                    SELECT *
                    FROM usuarios
                    WHERE email = ?
                `,
                [email],
                (erro, usuario) => {
                    if (erro) {
                        return reject('Não foi possível encontrar o usuário!');
                    }

                    return resolve(usuario);
                }
            )
        });
    }
}

module.exports = UsuarioDao;