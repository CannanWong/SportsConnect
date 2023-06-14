import { db } from "../firebase_setup/firebase";
import { doc, getDoc, updateDoc, deleteDoc, setDoc } from "firebase/firestore";

export async function modifyCount(id, interested, setCount, setInterested, setParticipants) {
	const eventRef = doc(db, "events", id)
  const partiPath = "events/"+id+"/participants"
  const testUser = (await getDoc(doc(db, "presetUser", "testUser"))).data().name
  var newCount = (await getDoc(eventRef)).data().count
  if (interested) {
    newCount = newCount + 1
    const user = {
			name: testUser
		};
    setDoc(doc(db, partiPath, testUser), user)
  } else {
    newCount = newCount - 1
    await deleteDoc(doc(db, partiPath, testUser));
  }
  updateDoc(eventRef, {count: newCount})
  setCount(newCount)
  setInterested(!interested)
}