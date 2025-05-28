import { ref, get } from "firebase/database";
import { db } from "./db_psychologists.js";

export const getPsychologists = async () => {
  try {
    const psychologistsRef = ref(db, "services-of-psychologists");
    const snapshot = await get(psychologistsRef);
    console.log("SNAPSHOT:", snapshot.exists(), snapshot.val());

    if (snapshot.exists()) {
      const data = snapshot.val();
      return Object.entries(data).map(([id, value]) => ({
        id,
        ...value,
      }));
    } else {
      return [];
    }
  } catch (error) {
    console.error("Ошибка при загрузке психологов:", error);
    return [];
  }
};
