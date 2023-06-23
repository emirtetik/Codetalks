
export default function(errorCode) {
    
     switch(errorCode) {

        case 'auth/invalid-email' :
        return 'geçersiz e-posta adresi'

        case 'auth/user-not-found':
        return 'kullanıcı bulunamadı';

        case "auth/weak-password": 
        return "parola çok zayıf"

        case "auth/wrong-password": 
        return "parola geçersiz"
        s
        case "auth/email-already-exists":
          return "Kullanıcı zaten kayıtlı";

      
        default:
            return errorCode;
     }

}