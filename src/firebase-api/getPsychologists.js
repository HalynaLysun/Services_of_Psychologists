import { ref, get } from "firebase/database";
import { db } from "./db_psychologists.js";

export const getPsychologists = async () => {
  try {
    const psychologistsRef = ref(db, "/");
    const snapshot = await get(psychologistsRef);

    if (snapshot.exists()) {
      const data = snapshot.val();
      return Object.entries(data)
        .map(([id, value]) => ({
          id,
          ...value,
        }))
        .filter((item) => item.name);
    } else {
      return [];
    }
  } catch (error) {
    console.error("Error in downloading of psychologists:", error);
    return [];
  }
};
