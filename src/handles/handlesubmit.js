import { addDoc, collection } from "@firebase/firestore"
import { db } from "../firebase_setup/firebase"
 
const handleSubmit = (collectionName, data) => {
    const ref = collection(db, collectionName)
    
    try {
        addDoc(ref, data)
    } catch(err) {
        console.log(err)
    }
}
 
export default handleSubmit