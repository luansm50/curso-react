import { Document, model, Schema } from "mongoose"
import bcryptjs from 'bcryptjs';

const UserSchema = new Schema<UserDocument>({
    name:       {type: String, required: true},
    email:      {type: String, required: true, unique: true, lowercase: true},
    password:   {type: String, required: true},
    deleted:    {type: Boolean, default: false},
    token:      String,
    expiration: Date
}, {
    timestamps: true
});

export interface User{
    name: String;
    email: String;
    password: String;
    deleted?:  Boolean;
    token:      String;
    expiration: Date;
}

interface UserDocument extends User, Document {
    show(): string;
}


UserSchema.pre<UserDocument>("save", async function() {
    if (this.isModified("password")) {
      this.password =  String(await bcryptjs.hash(this.password + "", 8));
    }
});

UserSchema.methods.show = function(){
    return {
        _id: this._id,
        name: this.name,
        email: this. email,
        deleted: this.deleted,
    }
}

export default model<UserDocument>('User', UserSchema);