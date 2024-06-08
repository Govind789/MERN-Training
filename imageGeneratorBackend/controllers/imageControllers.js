const imageModel = require('../models/imageModel.js');

const generateImage = async (req, res) => {
    const body = req.body;
    const searchText = body.searchText;

    let imageUrl = "";
    try{
        const res = await fetch("https://api.hotpot.ai/art-maker-sdte-zmjbcrr", {
            "headers": {
              "accept": "*/*",
              "accept-language": "en-GB,en;q=0.9",
              "api-token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MTcyMzIzMjUsImV4cCI6MTcxNzMxODcyNX0.dADy2EMWmExV-uI2ZD3rPjmOC0j0Kowts-TCM1e1yGA",
              "authorization": "hotpot-t2mJbCr8292aQzp8CnEPaK",
              "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryt02XKNS4twQ5mgXT",
              "sec-ch-ua": "\"Brave\";v=\"125\", \"Chromium\";v=\"125\", \"Not.A/Brand\";v=\"24\"",
              "sec-ch-ua-mobile": "?0",
              "sec-ch-ua-platform": "\"Windows\"",
              "sec-fetch-dest": "empty",
              "sec-fetch-mode": "cors",
              "sec-fetch-site": "same-site",
              "sec-gpc": "1"
            },
            "referrer": "https://hotpot.ai/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": `------WebKitFormBoundaryt02XKNS4twQ5mgXT\r\nContent-Disposition: form-data; name=\"seedValue\"\r\n\r\nnull\r\n------WebKitFormBoundaryt02XKNS4twQ5mgXT\r\nContent-Disposition: form-data; name=\"inputText\"\r\n\r\n${searchText}\r\n------WebKitFormBoundaryt02XKNS4twQ5mgXT\r\nContent-Disposition: form-data; name=\"width\"\r\n\r\n512\r\n------WebKitFormBoundaryt02XKNS4twQ5mgXT\r\nContent-Disposition: form-data; name=\"height\"\r\n\r\n512\r\n------WebKitFormBoundaryt02XKNS4twQ5mgXT\r\nContent-Disposition: form-data; name=\"styleId\"\r\n\r\n49\r\n------WebKitFormBoundaryt02XKNS4twQ5mgXT\r\nContent-Disposition: form-data; name=\"styleLabel\"\r\n\r\nPhoto General 1\r\n------WebKitFormBoundaryt02XKNS4twQ5mgXT\r\nContent-Disposition: form-data; name=\"isPrivate\"\r\n\r\nfalse\r\n------WebKitFormBoundaryt02XKNS4twQ5mgXT\r\nContent-Disposition: form-data; name=\"price\"\r\n\r\n0\r\n------WebKitFormBoundaryt02XKNS4twQ5mgXT\r\nContent-Disposition: form-data; name=\"requestId\"\r\n\r\n8-IdU5TvEY5dP4Xbx\r\n------WebKitFormBoundaryt02XKNS4twQ5mgXT\r\nContent-Disposition: form-data; name=\"resultUrl\"\r\n\r\nhttps://hotpotmedia.s3.us-east-2.amazonaws.com/8-IdU5TvEY5dP4Xbx.png\r\n------WebKitFormBoundaryt02XKNS4twQ5mgXT--\r\n`,
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        });
        imageUrl  = await res.json();

        await imageModel.create({
            searchText: searchText,
        });
    }
    
    catch(err){
        console.log(err);
    }

    res.json({
        status: 'success',
        data: {
            imageUrl: imageUrl,
        }
    })
}

module.exports = {
    generateImage
}