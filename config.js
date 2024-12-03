import sql from 'mssql';

(async () => {
    try {
        // certifique-se de que todos os itens estejam corretamente codificados em URL na cadeia de conexão
        await sql.connect('Server=ETTERA-4C3Y83/PROJETOWEVERTON;Database=CONTROLE;User Id=sa;Password=castro;Encrypt=true')
        const result = await sql.query`select * from TBCONTROLE `
        console.dir(result)
    }catch (err) {
        alert("deu algum tipo de erro" +err )
    }
})