const getApi = async (req, res) =>{
    res.status(200).json({
        message : 'APi is working'
    })
}


module.exports = getApi;