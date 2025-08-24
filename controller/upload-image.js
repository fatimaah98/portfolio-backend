exports.uploadImage = async(req, res) => {
    try {
        const hostName = process.env.HOTSNAME
        const imageUrl = `${hostName}/static/${req.file.filename}`;
        res.status(200).json({message: "image uploaded", imageUrl})
    } catch (error) {
        res.status(500).json({message: "image could not upload."})
    }
}