const mongoose = require('mongoose');
mongoose.connect('mongodb://root:root@mongo/knowLedge_stats?authSource=admin', { useNewUrlParser: true })
    .then(() => console.log("\x1b[42m",'Conexao com o mongo realizada com Sucesso',  '\x1b[0m'))
    .catch( e => {
        const msg = 'Não foi possivel se  (><) connectar com o MongoDB!';
        console.log('\x1b[41m%s\x1b[37m', msg, '\x1b[0m', e);
    })

