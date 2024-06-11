const imageModel = require('../models/imageModel.js');

const generateImage = async (req, res) => {
    const body = req.body;
    const searchText = body.searchText;

    let imageUrl = "";
    try{
        const res = await fetch("https://api.hotpot.ai/art-maker-sdte-zmjbcrr", {
            "headers": {
              "accept": "*/*",
              "accept-language": "en-GB,en;q=0.7",
              "api-token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MTgwMzc5NDksImV4cCI6MTcxODEyNDM0OX0.-ErMGa-LNzBzcPouyfCYQpBQq9N0vwoLzkojty1XDe4",
              "authorization": "hotpot-t2mJbCr8292aQzp8CnEPaK",
              "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryqMrPJoML6HWyc4FD",
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
            "body": `------WebKitFormBoundaryqMrPJoML6HWyc4FD\r\nContent-Disposition: form-data; name=\"seedValue\"\r\n\r\nnull\r\n------WebKitFormBoundaryqMrPJoML6HWyc4FD\r\nContent-Disposition: form-data; name=\"inputText\"\r\n\r\n${searchText}\r\n------WebKitFormBoundaryqMrPJoML6HWyc4FD\r\nContent-Disposition: form-data; name=\"width\"\r\n\r\n512\r\n------WebKitFormBoundaryqMrPJoML6HWyc4FD\r\nContent-Disposition: form-data; name=\"height\"\r\n\r\n512\r\n------WebKitFormBoundaryqMrPJoML6HWyc4FD\r\nContent-Disposition: form-data; name=\"styleId\"\r\n\r\n49\r\n------WebKitFormBoundaryqMrPJoML6HWyc4FD\r\nContent-Disposition: form-data; name=\"styleLabel\"\r\n\r\nPhoto General 1\r\n------WebKitFormBoundaryqMrPJoML6HWyc4FD\r\nContent-Disposition: form-data; name=\"isPrivate\"\r\n\r\nfalse\r\n------WebKitFormBoundaryqMrPJoML6HWyc4FD\r\nContent-Disposition: form-data; name=\"price\"\r\n\r\n0\r\n------WebKitFormBoundaryqMrPJoML6HWyc4FD\r\nContent-Disposition: form-data; name=\"requestId\"\r\n\r\n8-DY2h49K1WHn1Tk4\r\n------WebKitFormBoundaryqMrPJoML6HWyc4FD\r\nContent-Disposition: form-data; name=\"resultUrl\"\r\n\r\nhttps://hotpotmedia.s3.us-east-2.amazonaws.com/8-DY2h49K1WHn1Tk4.png\r\n------WebKitFormBoundaryqMrPJoML6HWyc4FD--\r\n`,
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
          });
          const responseData = await res.json();
          if (responseData && responseData.imageUrl) {
              imageUrl = responseData.imageUrl;
          } else {
              throw new Error("Failed to retrieve image URL");
          }
        await imageModel.create({
            searchText: searchText,
        });
    }
    
    catch(err){
        console.log(err);
        return res.status(500).json({
            status: 'error',
            message: 'An error occurred while generating the image'
        });
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