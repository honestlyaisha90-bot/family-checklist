import { useState, useEffect } from "react";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const weekdayTasks = [
  { id: "fajr", label: "Pray Fajr", emoji: "🌙" },
  { id: "bed", label: "Make bed + clean room", emoji: "🛏️" },
  { id: "teeth", label: "Brush teeth + get dressed", emoji: "🪥" },
  { id: "workbook", label: "Complete summer workbook page", emoji: "📓" },
  { id: "khan", label: "Complete one Khan Academy math skill", emoji: "🧮" },
  { id: "quran", label: "Quran class or Quran practice", emoji: "📖" },
  { id: "chore", label: "Complete daily chore", emoji: "🧹" },
  { id: "gym", label: "Gym / physical activity", emoji: "💪" },
  { id: "lunch", label: "Help prep lunch", emoji: "🥗" },
  { id: "tv", label: "TV / Tech Time earned", emoji: "📱" },
  { id: "special", label: "Special activity completed", emoji: "⭐" },
  { id: "dinner", label: "Help prep dinner", emoji: "🍽️" },
  { id: "pool", label: "Pool day (goal: 3x/week)", emoji: "🏊" },
];

const saturdayTasks = [{ id: "sat-family", label: "Family Day 👨‍👩‍👧", emoji: "🌸" }];
const sundayTasks = [{ id: "sun-rest", label: "Rest Day 🌿", emoji: "☁️" }];

const kids = {
  sana: {
    name: "Sana",
    emoji: "🌸",
    avatar: "👧",
    gradient: "linear-gradient(135deg, #c9748f 0%, #a855b5 100%)",
    accent: "#c9748f",
    accent2: "#a855b5",
    light: "#fdf2f8",
    light2: "#f3e8ff",
    progressBg: "#f3e8ff",
    progressFill: "linear-gradient(90deg, #c9748f, #a855b5)",
    bannerBg: "linear-gradient(135deg, #fef3c7, #fde68a)",
    specialActivities: [
      { day: "Monday", activity: "Library Day + Jiu Jitsu", emoji: "📚🥋" },
      { day: "Tuesday", activity: "Baking Day", emoji: "🧁" },
      { day: "Wednesday", activity: "Crafting Day + Jiu Jitsu", emoji: "✂️🥋" },
      { day: "Thursday", activity: "Sports / Pool Focus", emoji: "⚽🏊" },
      { day: "Friday", activity: "Free Choice Day", emoji: "🌟" },
      { day: "Saturday", activity: "Family Day", emoji: "👨‍👩‍👧" },
      { day: "Sunday", activity: "Rest + Prep for Week", emoji: "🌿" },
    ],
    celebrate: "🎉 Amazing day, Sana!",
  },
  zayd: {
    name: "Zayd",
    emoji: "🏀",
    avatar: "👦",
    gradient: "linear-gradient(135deg, #3b82f6 0%, #059669 100%)",
    accent: "#3b82f6",
    accent2: "#059669",
    light: "#eff6ff",
    light2: "#ecfdf5",
    progressBg: "#dbeafe",
    progressFill: "linear-gradient(90deg, #3b82f6, #059669)",
    bannerBg: "linear-gradient(135deg, #dbeafe, #d1fae5)",
    specialActivities: [
      { day: "Monday", activity: "Library Day", emoji: "📚" },
      { day: "Tuesday", activity: "Baking Day + Basketball Practice", emoji: "🧁🏀" },
      { day: "Wednesday", activity: "Crafting Day + Basketball Practice", emoji: "✂️🏀" },
      { day: "Thursday", activity: "Sports / Pool Focus", emoji: "⚽🏊" },
      { day: "Friday", activity: "Free Choice Day", emoji: "🌟" },
      { day: "Saturday", activity: "Family Day", emoji: "👨‍👩‍👧" },
      { day: "Sunday", activity: "Rest + Prep for Week", emoji: "🌿" },
    ],
    celebrate: "🏆 Crushed it, Zayd!",
  },
};

function getTasksForDay(day) {
  if (day === "Saturday") return saturdayTasks;
  if (day === "Sunday") return sundayTasks;
  return weekdayTasks;
}

function getCurrentWeekKey(kidName) {
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 1);
  const week = Math.ceil(((now - startOfYear) / 86400000 + startOfYear.getDay() + 1) / 7);
  return `${kidName}-week-${now.getFullYear()}-W${week}`;
}

function getTodayName() {
  return ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][new Date().getDay()];
}

function Checklist({ kidKey, onBack }) {
  const kid = kids[kidKey];
  const weekKey = getCurrentWeekKey(kidKey);
  const [checked, setChecked] = useState({});
  const [activeDay, setActiveDay] = useState(getTodayName());
  const [loaded, setLoaded] = useState(false);
  const [savedToast, setSavedToast] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(weekKey);
      if (saved) setChecked(JSON.parse(saved));
    } catch (e) {}
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(weekKey, JSON.stringify(checked));
      setSavedToast(true);
      const t = setTimeout(() => setSavedToast(false), 1500);
      return () => clearTimeout(t);
    } catch (e) {}
  }, [checked]);

  const currentTasks = getTasksForDay(activeDay);
  const isWeekend = activeDay === "Saturday" || activeDay === "Sunday";
  const toggle = (taskId) => {
    const key = `${activeDay}-${taskId}`;
    setChecked((prev) => ({ ...prev, [key]: !prev[key] }));
  };
  const isChecked = (taskId) => !!checked[`${activeDay}-${taskId}`];
  const completedCount = currentTasks.filter((t) => isChecked(t.id)).length;
  const progress = Math.round((completedCount / currentTasks.length) * 100);
  const todaySpecial = kid.specialActivities.find((s) => s.day === activeDay);
  const totalChecked = Object.values(checked).filter(Boolean).length;
  const stars = Math.floor(totalChecked / 5);

  if (!loaded) return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: kid.light }}>
      <div style={{ fontSize: 40 }}>{kid.emoji}</div>
    </div>
  );

  return (
    <div style={{ minHeight: "100vh", background: `linear-gradient(135deg, ${kid.light} 0%, ${kid.light2} 100%)`, fontFamily: "Georgia, serif" }}>

      {/* Saved toast */}
      <div style={{
        position: "fixed", top: 16, right: 16, zIndex: 999,
        background: "#22c55e", color: "white",
        padding: "8px 14px", borderRadius: 20, fontSize: 13, fontWeight: "bold",
        boxShadow: "0 4px 12px rgba(34,197,94,0.4)",
        opacity: savedToast ? 1 : 0,
        transform: savedToast ? "translateY(0)" : "translateY(-8px)",
        transition: "all 0.3s ease", pointerEvents: "none",
      }}>✓ Saved!</div>

      {/* Header */}
      <div style={{ background: kid.gradient, padding: "32px 24px 24px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundImage: "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 60%)" }} />

        {/* Back button */}
        <button onClick={onBack} style={{
          position: "absolute", top: 16, left: 16,
          background: "rgba(255,255,255,0.2)", border: "none",
          borderRadius: 20, padding: "6px 14px", color: "white",
          fontSize: 13, cursor: "pointer", fontFamily: "Georgia, serif",
        }}>← Back</button>

        <div style={{ fontSize: 40, marginBottom: 4 }}>{kid.emoji}</div>
        <h1 style={{ margin: 0, fontSize: 28, fontWeight: "bold", color: "white", textShadow: "0 2px 8px rgba(0,0,0,0.2)" }}>
          {kid.name}'s Summer Checklist
        </h1>
        <p style={{ margin: "6px 0 0", color: "rgba(255,255,255,0.85)", fontSize: 14 }}>
          ⭐ {stars} star{stars !== 1 ? "s" : ""} earned · {totalChecked} tasks this week!
        </p>
      </div>

      {/* Day Selector */}
      <div style={{ display: "flex", overflowX: "auto", gap: 8, padding: "16px 16px 8px", scrollbarWidth: "none" }}>
        {days.map((day) => {
          const dayTasks = getTasksForDay(day);
          const dayCount = dayTasks.filter((t) => !!checked[`${day}-${t.id}`]).length;
          const isActive = day === activeDay;
          const isWknd = day === "Saturday" || day === "Sunday";
          const isToday = day === getTodayName();
          return (
            <button key={day} onClick={() => setActiveDay(day)} style={{
              flexShrink: 0, padding: "10px 16px", borderRadius: 16,
              border: isToday && !isActive ? `2px solid ${kid.accent}` : "2px solid transparent",
              cursor: "pointer", fontFamily: "Georgia, serif", fontSize: 13,
              fontWeight: isActive ? "bold" : "normal",
              background: isActive ? (isWknd ? "linear-gradient(135deg, #fb923c, #f59e0b)" : kid.gradient) : "white",
              color: isActive ? "white" : "#888",
              boxShadow: isActive ? `0 4px 12px rgba(0,0,0,0.2)` : "0 2px 6px rgba(0,0,0,0.08)",
              transition: "all 0.2s ease", position: "relative",
            }}>
              {day.slice(0, 3)}
              {isToday && <div style={{ fontSize: 8, color: isActive ? "rgba(255,255,255,0.8)" : kid.accent, marginTop: 1 }}>TODAY</div>}
              {dayCount > 0 && (
                <span style={{
                  position: "absolute", top: -4, right: -4, background: "#f59e0b", color: "white",
                  borderRadius: "50%", width: 18, height: 18, fontSize: 10,
                  display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold",
                }}>{dayCount}</span>
              )}
            </button>
          );
        })}
      </div>

      <div style={{ padding: "8px 16px 24px", maxWidth: 480, margin: "0 auto" }}>

        {/* Special Activity Banner */}
        {todaySpecial && (
          <div style={{
            background: isWeekend ? "linear-gradient(135deg, #fed7aa, #fde68a)" : kid.bannerBg,
            borderRadius: 16, padding: "14px 18px", marginBottom: 16,
            display: "flex", alignItems: "center", gap: 12,
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          }}>
            <span style={{ fontSize: 28 }}>{todaySpecial.emoji}</span>
            <div>
              <div style={{ fontSize: 11, fontWeight: "bold", color: isWeekend ? "#92400e" : "#1e3a5f", textTransform: "uppercase", letterSpacing: 1 }}>
                {isWeekend ? "Weekend Vibes ✨" : "Today's Special"}
              </div>
              <div style={{ fontSize: 15, color: isWeekend ? "#78350f" : "#333", fontWeight: "bold" }}>{todaySpecial.activity}</div>
            </div>
          </div>
        )}

        {/* Weekend card OR progress bar */}
        {isWeekend ? (
          <div style={{ background: "white", borderRadius: 20, padding: "32px 24px", marginBottom: 16, boxShadow: "0 2px 8px rgba(0,0,0,0.07)", textAlign: "center" }}>
            <div style={{ fontSize: 60, marginBottom: 12 }}>{activeDay === "Saturday" ? "👨‍👩‍👧" : "🌿"}</div>
            <h2 style={{ margin: "0 0 8px", fontSize: 22, color: activeDay === "Saturday" ? "#ea580c" : "#16a34a", fontWeight: "bold" }}>
              {activeDay === "Saturday" ? "Family Day!" : "Rest Day!"}
            </h2>
            <p style={{ margin: 0, fontSize: 14, color: "#888", fontStyle: "italic" }}>
              {activeDay === "Saturday" ? "Enjoy quality time with the whole family 💛" : "Recharge and get ready for an amazing week ahead 🌟"}
            </p>
            <button onClick={() => toggle(currentTasks[0].id)} style={{
              marginTop: 24, padding: "16px 32px", borderRadius: 50, border: "none",
              cursor: "pointer", fontFamily: "Georgia, serif", fontSize: 16, fontWeight: "bold",
              background: isChecked(currentTasks[0].id) ? "linear-gradient(135deg, #fb923c, #f59e0b)" : "#f3f4f6",
              color: isChecked(currentTasks[0].id) ? "white" : "#888",
              boxShadow: isChecked(currentTasks[0].id) ? "0 4px 16px rgba(251,146,60,0.4)" : "0 2px 6px rgba(0,0,0,0.08)",
              transition: "all 0.3s ease",
              transform: isChecked(currentTasks[0].id) ? "scale(1.05)" : "scale(1)",
            }}>
              {isChecked(currentTasks[0].id) ? "✓ Done! Have a great day!" : activeDay === "Saturday" ? "Tap when enjoying Family Day 🌸" : "Tap when rested 🌿"}
            </button>
          </div>
        ) : (
          <div style={{ background: "white", borderRadius: 16, padding: "16px 18px", marginBottom: 16, boxShadow: "0 2px 8px rgba(0,0,0,0.07)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
              <span style={{ fontSize: 13, color: "#888", fontStyle: "italic" }}>{activeDay}'s progress</span>
              <span style={{ fontSize: 13, fontWeight: "bold", color: kid.accent }}>{completedCount}/{currentTasks.length} ✓</span>
            </div>
            <div style={{ background: kid.progressBg, borderRadius: 999, height: 12, overflow: "hidden" }}>
              <div style={{ height: "100%", width: `${progress}%`, background: kid.progressFill, borderRadius: 999, transition: "width 0.5s ease", position: "relative" }}>
                {progress > 10 && <div style={{ position: "absolute", right: 6, top: "50%", transform: "translateY(-50%)", fontSize: 8, color: "white" }}>✨</div>}
              </div>
            </div>
            {progress === 100 && (
              <div style={{ textAlign: "center", marginTop: 8, fontSize: 14, color: kid.accent2, fontWeight: "bold" }}>{kid.celebrate}</div>
            )}
          </div>
        )}

        {/* Task List */}
        {!isWeekend && (
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {currentTasks.map((task) => {
              const done = isChecked(task.id);
              return (
                <button key={task.id} onClick={() => toggle(task.id)} style={{
                  display: "flex", alignItems: "center", gap: 14, padding: "14px 18px", borderRadius: 16,
                  border: done ? `2px solid ${kid.accent}` : "2px solid transparent",
                  background: done ? `linear-gradient(135deg, ${kid.light}, ${kid.light2})` : "white",
                  cursor: "pointer", textAlign: "left", width: "100%",
                  boxShadow: done ? `0 2px 10px rgba(0,0,0,0.1)` : "0 2px 6px rgba(0,0,0,0.07)",
                  transition: "all 0.2s ease", transform: done ? "scale(1.01)" : "scale(1)",
                }}>
                  <span style={{ fontSize: 22, flexShrink: 0 }}>{task.emoji}</span>
                  <span style={{ flex: 1, fontSize: 14, color: done ? "#888" : "#333", textDecoration: done ? "line-through" : "none", fontFamily: "Georgia, serif", transition: "all 0.2s" }}>
                    {task.label}
                  </span>
                  <div style={{
                    width: 26, height: 26, borderRadius: "50%",
                    background: done ? kid.gradient : "#f0f0f0",
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                    transition: "all 0.2s", boxShadow: done ? `0 2px 8px rgba(0,0,0,0.2)` : "none",
                  }}>
                    {done && <span style={{ fontSize: 13, color: "white" }}>✓</span>}
                  </div>
                </button>
              );
            })}
          </div>
        )}

        {/* Weekly Special Activities */}
        <div style={{ marginTop: 24, background: "white", borderRadius: 20, padding: "18px", boxShadow: "0 2px 8px rgba(0,0,0,0.07)" }}>
          <h3 style={{ margin: "0 0 14px", fontSize: 15, color: kid.accent, fontWeight: "bold", letterSpacing: 0.5 }}>
            🗓️ Weekly Special Activities
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {kid.specialActivities.map((item) => {
              const wknd = item.day === "Saturday" || item.day === "Sunday";
              return (
                <div key={item.day} onClick={() => setActiveDay(item.day)} style={{
                  display: "flex", alignItems: "center", gap: 12, padding: "10px 14px", borderRadius: 12,
                  background: item.day === activeDay ? (wknd ? "linear-gradient(135deg, #fff7ed, #fef3c7)" : `linear-gradient(135deg, ${kid.light}, ${kid.light2})`) : "#fafafa",
                  border: item.day === activeDay ? (wknd ? "1.5px solid #fb923c" : `1.5px solid ${kid.accent}`) : "1.5px solid transparent",
                  cursor: "pointer", transition: "all 0.2s",
                }}>
                  <span style={{ fontSize: 20 }}>{item.emoji}</span>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: "bold", color: wknd ? "#ea580c" : kid.accent, textTransform: "uppercase", letterSpacing: 0.5 }}>
                      {item.day} {wknd ? "🌅" : ""}
                    </div>
                    <div style={{ fontSize: 13, color: "#555" }}>{item.activity}</div>
                  </div>
                </div>
              );
            })}
          </div>
          <div style={{ marginTop: 12, padding: "10px 14px", borderRadius: 12, background: "#e0f2fe", fontSize: 13, color: "#0369a1", display: "flex", alignItems: "center", gap: 8 }}>
            🏊 <strong>Goal:</strong> Pool 3 evenings per week
          </div>
        </div>

        <button onClick={() => { if (window.confirm("Reset all this week's progress?")) { setChecked({}); localStorage.removeItem(weekKey); }}} style={{
          marginTop: 16, width: "100%", padding: "12px", borderRadius: 14,
          border: `1.5px solid ${kid.light2}`, background: "white",
          color: kid.accent, fontSize: 13, cursor: "pointer", fontFamily: "Georgia, serif",
        }}>
          🔄 Reset this week's progress
        </button>
      </div>
    </div>
  );
}

export default function App() {
  const [activeKid, setActiveKid] = useState(null);

  if (activeKid) return <Checklist kidKey={activeKid} onBack={() => setActiveKid(null)} />;

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #fdf6f0 0%, #fce8f3 50%, #eff6ff 100%)",
      fontFamily: "Georgia, serif",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      padding: 24,
    }}>
      <div style={{ fontSize: 48, marginBottom: 8 }}>☀️</div>
      <h1 style={{ margin: "0 0 4px", fontSize: 26, fontWeight: "bold", color: "#333", textAlign: "center" }}>
        Summer Checklist
      </h1>
      <p style={{ margin: "0 0 48px", color: "#888", fontSize: 15, fontStyle: "italic" }}>Who's checking in today?</p>

      <div style={{ display: "flex", flexDirection: "column", gap: 20, width: "100%", maxWidth: 320 }}>
        {/* Sana */}
        <button onClick={() => setActiveKid("sana")} style={{
          padding: "28px 24px",
          borderRadius: 24,
          border: "none",
          cursor: "pointer",
          background: "linear-gradient(135deg, #c9748f, #a855b5)",
          boxShadow: "0 8px 24px rgba(201,116,143,0.4)",
          transition: "all 0.2s ease",
          transform: "scale(1)",
        }}
          onMouseEnter={e => e.currentTarget.style.transform = "scale(1.03)"}
          onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
        >
          <div style={{ fontSize: 48, marginBottom: 8 }}>👧</div>
          <div style={{ fontSize: 22, fontWeight: "bold", color: "white", marginBottom: 4 }}>Sana</div>
          <div style={{ fontSize: 13, color: "rgba(255,255,255,0.8)" }}>🌸 Jiu Jitsu · Crafting · Library</div>
        </button>

        {/* Zayd */}
        <button onClick={() => setActiveKid("zayd")} style={{
          padding: "28px 24px",
          borderRadius: 24,
          border: "none",
          cursor: "pointer",
          background: "linear-gradient(135deg, #3b82f6, #059669)",
          boxShadow: "0 8px 24px rgba(59,130,246,0.4)",
          transition: "all 0.2s ease",
          transform: "scale(1)",
        }}
          onMouseEnter={e => e.currentTarget.style.transform = "scale(1.03)"}
          onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
        >
          <div style={{ fontSize: 48, marginBottom: 8 }}>👦</div>
          <div style={{ fontSize: 22, fontWeight: "bold", color: "white", marginBottom: 4 }}>Zayd</div>
          <div style={{ fontSize: 13, color: "rgba(255,255,255,0.8)" }}>🏀 Basketball · Crafting · Library</div>
        </button>
      </div>
    </div>
  );
}
