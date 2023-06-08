import { addDoc, collection } from "@firebase/firestore"
import { db } from "../firebase_setup/firebase"
 
const handleSubmit = (event) => {
    const ref = collection(db, "events") // Firebase creates this automatically
 
    let data = {
        title: event.title,
        description: event.description,
        date: event.date,
        startTime: event.start,
        endTime: event.end,
        location: event.location,
        count: 0
    }
    
    try {
        addDoc(ref, data)
    } catch(err) {
        console.log(err)
    }
}
 
export default handleSubmit