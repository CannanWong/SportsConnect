import { db } from "../firebase_setup/firebase";
import { collection, onSnapshot } from "firebase/firestore";

export async function fetchDocs(collectionName, setData) {
	const eventsRef = collection(db, collectionName);
	const observer = await onSnapshot(eventsRef, (querySnapshot) => {
		const data = querySnapshot.docs.map((doc) => [doc.data(), doc.id]);
		setData(data);
	});
}
