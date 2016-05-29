var wrapSuccess = function(message){
    var sendMessage = {};
    sendMessage.success = 1;
    sendMessage.data = message;
    return sendMessage;
}

exports.wrapSuccess = wrapSuccess;
