// CalendarScreen.js
import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import styles from "./style";
import CancelModal from "./CancelModal";

const DAYS = ["Mon", "Tu", "We", "Th", "Fr", "Sa", "Su"];
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// Sample data for events
const EVENTS = {
  "2025-01-10": [
    {
      time: "12:30",
      title: "Frontend Developer Interview",
      link: "meet.google.com/abc-123",
    },
  ],
  "2025-01-15": [
    {
      time: "09:00",
      title: "Team Weekly Meeting",
      link: "zoom.us/j/123456",
    },
    {
      time: "14:00",
      title: "Project Review",
      link: "meet.google.com/xyz-789",
    },
  ],
  "2025-01-22": [
    {
      time: "10:00",
      title: "Technical Workshop",
      link: "teams.microsoft.com/123",
    },
  ],
};

const CalendarScreen = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [events, setEvents] = useState(EVENTS);

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();

    const days = [];
    for (let i = 0; i < (firstDayOfMonth + 6) % 7; i++) {
      days.push({
        date: new Date(year, month - 1, daysInMonth - i),
        currentMonth: false,
      });
    }

    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        date: new Date(year, month, i),
        currentMonth: true,
      });
    }

    return days;
  };

  const formatDate = (date) => {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
      2,
      "0"
    )}-${String(date.getDate()).padStart(2, "0")}`;
  };

  const isToday = (date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const hasEvents = (date) => {
    return events[formatDate(date)] !== undefined;
  };

  const changeMonth = (increment) => {
    const newMonth = new Date(
      currentMonth.setMonth(currentMonth.getMonth() + increment)
    );
    setCurrentMonth(new Date(newMonth));
  };

  const renderDays = () => {
    const days = getDaysInMonth(currentMonth);

    return (
      <View style={styles.calendar}>
        {DAYS.map((day) => (
          <View key={day} style={styles.dayHeader}>
            <Text style={styles.dayHeaderText}>{day}</Text>
          </View>
        ))}

        {days.map((item, index) => {
          const isSelected =
            selectedDate &&
            item.date.getDate() === selectedDate.getDate() &&
            item.date.getMonth() === selectedDate.getMonth();

          return (
            <TouchableOpacity
              key={index}
              style={[
                styles.day,
                !item.currentMonth && styles.notCurrentMonth,
                isSelected && styles.selectedDay,
              ]}
              onPress={() => setSelectedDate(item.date)}
            >
              <Text
                style={[
                  styles.dayText,
                  isToday(item.date) && styles.todayText,
                  hasEvents(item.date) && { color: "red" },
                  isSelected && { color: "white" },
                ]}
              >
                {item.date.getDate()}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  const renderEvents = () => {
    const currentEvents = events[formatDate(selectedDate)] || [];

    return (
      <View style={styles.eventsContainer}>
        <Text style={styles.eventsHeader}>Các buổi phỏng vấn trong ngày</Text>
        {currentEvents.map((event, index) => (
          <View key={index} style={styles.eventItem}>
            <Text style={styles.eventTime}>{event.time}</Text>
            <View style={{ flex: 1 }}>
              <Text style={styles.eventTitle}>{event.title}</Text>
              <Text style={styles.eventLink}>{event.link}</Text>
            </View>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => {
                setSelectedEvent(event);
                setModalVisible(true);
              }}
            >
              <Ionicons name="trash-outline" size={22} color="red" />
            </TouchableOpacity>
            <CancelModal
              visible={modalVisible}
              onClose={() => {
                setModalVisible(false);
                setSelectedEvent(null);
              }}
              onConfirm={(reason) => {
                // Xử lý xóa sự kiện
                const dateKey = formatDate(selectedDate);
                const updatedEvents = { ...events };
                if (updatedEvents[dateKey]) {
                  updatedEvents[dateKey] = updatedEvents[dateKey].filter(
                    (event) => event !== selectedEvent
                  );
                  if (updatedEvents[dateKey].length === 0) {
                    delete updatedEvents[dateKey];
                  }
                }
                setEvents(updatedEvents);
                setModalVisible(false);
                setSelectedEvent(null);
              }}
            />
          </View>
        ))}
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Text
        style={{ fontFamily: "regular", fontStyle: "italic", marginTop: 10 }}
      >
        Chọn ngày trong lịch để xem lịch phỏng vấn của ngày hôm đó
      </Text>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => changeMonth(-1)}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.monthText}>
          {MONTHS[currentMonth.getMonth()]} {currentMonth.getFullYear()}
        </Text>
        <TouchableOpacity onPress={() => changeMonth(1)}>
          <Ionicons name="chevron-forward" size={24} color="black" />
        </TouchableOpacity>
      </View>
      {renderDays()}
      {renderEvents()}
    </ScrollView>
  );
};

export default CalendarScreen;
