import { db } from "../firebase_setup/firebase";
import { doc, getDoc } from "firebase/firestore";

export async function fetchEvent(id, setData) {
	const eventSnap = await getDoc(doc(db, "events", id))
  setData(eventSnap.data())
}
