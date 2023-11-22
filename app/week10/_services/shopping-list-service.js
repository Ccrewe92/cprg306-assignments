import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

async function getItems(userId) {
    const items = [];
    const itemsCollection = collection(db, "users", userId, "items");
    const itemsSnapshot = await getDocs(query(itemsCollection));

    itemsSnapshot.forEach(doc => {
        items.push({ id: doc.id, ...doc.data() });
    });

    return items;
}

async function addItem(userId, item) {
    const itemsCollection = collection(db, "users", userId, "items");
    const docRef = await addDoc(itemsCollection, item);
    return docRef.id;
}

export { getItems, addItem };

