const events  = require('./events');

module.exports  = function() {


    function sendEmil(args) {
        let {email} = args;
        
        console.log(`Sending email to ${email}`);
    }

    events.on('BORROW_BOOK', sendEmil);
};