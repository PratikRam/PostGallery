const ImageKit = require('@imagekit/nodejs');

const imagekit = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,

});

async function uploadFile(buffer) {

    const result = await imagekit.files.upload({
        file: buffer.toString('base64'),
        fileName: "Image.jpg",
    });
    console.log('Image uploaded successfully:', result);
    return result;

}

module.exports = uploadFile;