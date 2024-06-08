const imageModel = require('../models/imageModel.js');

const generateImage = async (req, res) => {
    const body = req.body;
    const searchText = body.searchText;

    let imageUrl = "";
    try{
        const res = await fetch("https://api.hotpot.ai/art-maker-sdte-zmjbcrr", {
            "headers": {
              "accept": "*/*",
              "accept-language": "en-GB,en;q=0.5",
              "api-token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MTc4NDc2NzAsImV4cCI6MTcxNzkzNDA3MH0.mpYduY35e_6s7-pzfgY6FLl7UdovK_qtgd1c2yujzIQ",
              "authorization": "hotpot-t2mJbCr8292aQzp8CnEPaK",
              "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryEBfFOIAV5cMGEmsu",
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
            "body": `------WebKitFormBoundaryEBfFOIAV5cMGEmsu\r\nContent-Disposition: form-data; name=\"seedValue\"\r\n\r\nnull\r\n------WebKitFormBoundaryEBfFOIAV5cMGEmsu\r\nContent-Disposition: form-data; name=\"inputText\"\r\n\r\nc${searchText}\r\n------WebKitFormBoundaryEBfFOIAV5cMGEmsu\r\nContent-Disposition: form-data; name=\"width\"\r\n\r\n512\r\n------WebKitFormBoundaryEBfFOIAV5cMGEmsu\r\nContent-Disposition: form-data; name=\"height\"\r\n\r\n512\r\n------WebKitFormBoundaryEBfFOIAV5cMGEmsu\r\nContent-Disposition: form-data; name=\"styleId\"\r\n\r\n49\r\n------WebKitFormBoundaryEBfFOIAV5cMGEmsu\r\nContent-Disposition: form-data; name=\"styleLabel\"\r\n\r\nPhoto General 1\r\n------WebKitFormBoundaryEBfFOIAV5cMGEmsu\r\nContent-Disposition: form-data; name=\"isPrivate\"\r\n\r\nfalse\r\n------WebKitFormBoundaryEBfFOIAV5cMGEmsu\r\nContent-Disposition: form-data; name=\"price\"\r\n\r\n0\r\n------WebKitFormBoundaryEBfFOIAV5cMGEmsu\r\nContent-Disposition: form-data; name=\"requestId\"\r\n\r\n8-lZClFPK2EgfWQwO\r\n------WebKitFormBoundaryEBfFOIAV5cMGEmsu\r\nContent-Disposition: form-data; name=\"resultUrl\"\r\n\r\nhttps://hotpotmedia.s3.us-east-2.amazonaws.com/8-lZClFPK2EgfWQwO.png\r\n------WebKitFormBoundaryEBfFOIAV5cMGEmsu--\r\n`,
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