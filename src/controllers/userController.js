const getAllUsers =(req,res)=>{
    res.send('My all users')
}

const getAllUserId =(req,res)=>{
    res.send('this is userId')
}


module.exports={getAllUsers, getAllUserId}