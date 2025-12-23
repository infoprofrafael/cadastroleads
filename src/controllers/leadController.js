import db from '../config/db.js';


// export para consultar todos os LEADs
export const listarLeads = (req, res) => {

    db.query('SELECT * FROM leads', (err, results) => {
        if (err) return res.status(500).json({
            erro: 'Erro ao buscar LEADs'
        });
        res.json(results);

    });

}

// export para inserir lead
export const inserirLead = (req, res) => {
    const { namelead, profission, email, numberwhatsapp } = req.body;
    const sql = 'INSERT INTO leads (namelead, profission, email, numberwhatsapp) VALUES(?,?,?,?)';
    db.query(sql, [namelead, profission, email, numberwhatsapp], err => {
        if (err) return res.status(500).json({
            erro: 'Erro ao inserir LEAD'
        });
        res.json({ mensagem: `O lead ${namelead} foi inserido com sucesso!` });

    });

};

export const editarLead = (req, res) => {
    const { id } = req.params;
    const { namelead, profission, email, numberwhatsapp } = req.body;

    const sql = 'UPDATE Leads SET namelead=?, profission=?, email=?, numberwhatsapp=? WHERE id=?';
    db.query(sql, [namelead, profission, email, numberwhatsapp, id], err => {
        if (err) return res.status(500).json({
            erro: `Erro ao editar dados do LEAD ${namelead} `
        });
        res.json({ mensagem: `O lead ${namelead} foi atualizado com sucesso!` });

    });

}

export const deleteLead = (req, res) => {
    const { id } = req.params;

    db.query(`SELECT namelead FROM leads WHERE id =?`, [id], (err, results) => {
        if (err) {
            return res.status(500).json({
                erro: 'Erro ao localizar o nome do LEAD'
            });
        }
        if (results.length === 0) {
            return res.status(404).json({ err: "LEAD não encontrado!" });
        }

        const exlead = results[0].namelead;


        db.query('DELETE FROM leads WHERE id = ?', [id], err => {
            if (err) return res.status(500).json({ erro: 'Erro ao deletar LEAD' });
            res.json({ mensagem: `O lead ${exlead} foi excluido com sucesso!` });


        });


    });

};






