import { hash, compare} from "bcryptjs";

const generatePass = async() => {
    var pass = '';
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
            'abcdefghijklmnopqrstuvwxyz0123456789';
      
    for (var i = 1; i <= 8; i++) {
        var char = Math.floor(Math.random()
                    * str.length + 1);
          
        pass += str.charAt(char)
    }
      
    return pass;
}

const encrypt = async (passPlain: string) => {
    const passHash = await hash(passPlain, 8);
    return passHash;
};

const verified = async (passPlain: string, passHash: string) => {
    const isValid = await compare(passPlain, passHash);
    return isValid;
};

export { generatePass, encrypt, verified };