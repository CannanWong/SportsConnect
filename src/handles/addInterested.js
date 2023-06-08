import { db } from "../firebase_setup/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

export async function addCount(id, setCount) {
	const eventRef = await doc(db, "events", id)
  const newCount = (await getDoc(eventRef)).data().count + 1
  updateDoc(eventRef, {count: newCount})
  setCount(newCount)
}