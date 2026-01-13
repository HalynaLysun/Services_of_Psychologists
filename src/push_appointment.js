import {
  getDatabase,
  ref,
  push,
  get,
  query,
  orderByChild,
  equalTo,
} from "firebase/database";

const sendTelegramNotification = async (data) => {
  const token = "8477070811:AAHlgJbH9lcxGNKjMt-SG91GqLpkxvWaeRs";
  const chatId = "5447758575";

  const message = [
    "🔔 <b>New appointment!</b>",
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
    `Email: ${data.email}`,
    `Date: ${data.date}`,
    `Time: ${data.time}`,
    `Comment: ${data.comment || "No comment"}`,
  ].join("\n");

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: "HTML",
        }),
      }
    );

    if (!response.ok) {
      const errorDetail = await response.json();
      console.error("Telegram API Detailed Error:", errorDetail);
    } else {
      console.log("Telegram message sent successfully!");
    }
  } catch (error) {
    console.error("Network Error:", error);
  }
};

export const handleSubmit = async (values) => {
  const db = getDatabase();
  const appointmentsRef = ref(db, "appointments");

  const bookingSlot = `${values.date}_${values.time}`;

  const slotQuery = query(
    appointmentsRef,
    orderByChild("bookingSlot"),
    equalTo(bookingSlot)
  );

  try {
    const snapshot = await get(slotQuery);

    if (snapshot.exists()) {
      alert("This time is already taken. Please choose another date or time.");
      return;
    }
    const newAppointment = {
      name: values.name,
      phone: values.phone,
      email: values.email,
      date: values.date,
      time: values.time,
      bookingSlot: bookingSlot,
      createdAt: new Date().toISOString(),
    };

    console.log(newAppointment);

    await push(appointmentsRef, newAppointment);

    await sendTelegramNotification(newAppointment);
    alert("Appointment has been successfully created!");
  } catch (error) {
    console.error("Error:", error);
    alert("System error. Please try again later.");
  }
};
