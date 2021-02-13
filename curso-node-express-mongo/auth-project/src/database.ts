import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/userdb', 
    {useNewUrlParser: true, useUnifiedTopology: true}
);