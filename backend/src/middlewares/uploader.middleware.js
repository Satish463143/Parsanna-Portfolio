const multer = require("multer")
const fs = require('fs')
const { randomStringGenerator } = require("../utilities/helper");
const { FileFilterType } = require("../config/constant.config")


const myStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        const path = "./public/uploads/" + req.uploadPath
        if (!fs.existsSync(path)) {
            fs.mkdirSync(path, { recursive: true })
        }
        cb(null, path)
    },
    filename: (req, file, cb) => {
        const ext = file.originalname.split(".").pop()
        const filename = randomStringGenerator(40) + "." + ext
        cb(null, filename)
    }
})


const uplaodFile = (fileType = FileFilterType.IMAGE) => {
    let allowed = ['jpg','jpeg', 'png', 'webp', 'gif'];
    if (fileType === FileFilterType.DOCUMENT) {
        allowed = ['pdf', 'txt', 'docs'];
    } else if (fileType === FileFilterType.VIDEO) {
        allowed = ['mp4', 'mov', 'mkv'];
    }

    return multer({
        storage: myStorage,
        limits: {
            fileSize: 300000000, // 300MB
        },
        fileFilter: (req, file, cb) => {
            const ext = file.originalname.split('.').pop().toLowerCase();
            if (allowed.includes(ext)) {
                cb(null, true);
            } else {
                cb(new Error('File format not supported here'));
            }
        },
    });
};

const setPath = (path) => {
    return (req, res, next) => {
        req.uploadPath = path
        next()
    }
}

module.exports = {
    uplaodFile, setPath
}