module.exports= mongoose=>{
    var schemaUser = mongoose.Schema ({
        fname: {
            type: String,
            require: true

        },
        email:{
            type: String,
            require: true
        },
        password:{
            type: String,
            require: true
        }
    
    })

    
    schemaUser.method("toJSON",function() {
        const { __v, _id,...object } = this.toObject();
        return object;

    });

let User = mongoose.model('User',schemaUser );
return User

}