import { db } from "./db_psychologists.js";
import { ref, get, query, orderByChild, equalTo } from "firebase/database";

export const fetchOccupiedHours = async (selectedDate) => {
  try {
    const appointmentsRef = ref(db, "appointments");

    const appointmentsQuery = query(
      appointmentsRef,
      orderByChild("date"),
      equalTo(selectedDate)
    );

    const snapshot = await get(appointmentsQuery);

    if (snapshot.exists()) {
      const data = snapshot.val();
      return Object.values(data).map((appointment) => appointment.time);
    }

    return [];
  } catch (error) {
    console.error("Error fetching hours:", error);
    return [];
  }
};
