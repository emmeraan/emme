import * as bcrypt from 'bcrypt';
export function encodepassowrd(rawpassword:string){
   const SALT=bcrypt.genSaltSync();
   return bcrypt.hashSync(rawpassword,SALT)
}

export async function comparePassword(plaintextPassword, hash) {
   const result = await bcrypt.compare(plaintextPassword, hash);
   return result;
   }