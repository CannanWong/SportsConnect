import { db } from "../firebase_setup/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

export async function modifyCount(id, interested, setCount, setInterested) {
	const eventRef = doc(db, "events", id)
  var newCount = (await getDoc(eventRef)).data().count
  if (interested) {
    newCount = newCount + 1
  } else {
    newCount = newCount - 1
  }
  updateDoc(eventRef, {count: newCount})
  setCount(newCount)
  setInterested(!interested)
}