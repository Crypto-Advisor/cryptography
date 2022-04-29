const crypto = require('crypto');

function encryptWithPublicKey(publicKey, message){
    const bufferMessage = Buffer.from(message, 'utf8');
    return crypto.publicEncrypt(publicKey, bufferMessage);
}

function encryptWithPrivateKey(privatekey, message){
    const bufferMessage = Buffer.from(message, 'utf8');
    return crypto.publicEncrypt(privatekey, bufferMessage);
}

module.exports.encryptWithPrivateKey = encryptWithPrivateKey;
module.exports.encryptWithPublicKey = encryptWithPublicKey;

