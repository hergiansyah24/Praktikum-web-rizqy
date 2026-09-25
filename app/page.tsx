"use client";

import { FormEvent, useState } from "react";

type Activity = {
  id: number;
  title: string;
  time: string;
  category: string;
  completed: boolean;
};

const initialActivities: Activity[] = [
  { id: 1, title: "Morning walk", time: "07:00", category: "Health", completed: true },
  { id: 2, title: "Read 20 pages", time: "09:30", category: "Learning", completed: false },
  { id: 3, title: "Team stand-up", time: "11:00", category: "Work", completed: false },
  { id: 4, title: "Drink 8 glasses of water", time: "14:00", category: "Health", completed: false },
  { id: 5, title: "Plan tomorrow", time: "20:30", category: "Personal", completed: false },
];

export default function Home() {
  const [activities, setActivities] = useState(initialActivities);
  const [filter, setFilter] = useState("All activities");
  const [newActivity, setNewActivity] = useState("");

  const completedCount = activities.filter((activity) => activity.completed).length;
  const visibleActivities = activities.filter((activity) => {
    if (filter === "Completed") return activity.completed;
    if (filter === "Pending") return !activity.completed;
    return true;
  });

  function toggleActivity(id: number) {
    setActivities((current) =>
      current.map((activity) =>
        activity.id === id ? { ...activity, completed: !activity.completed } : activity,
      ),
    );
  }

  function addActivity(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!newActivity.trim()) return;
    setActivities((current) => [
      ...current,
      { id: Date.now(), title: newActivity.trim(), time: "Anytime", category: "Personal", completed: false },
    ]);
    setNewActivity("");
  }

  return (
    <main className="min-h-screen bg-[#0c0d10] text-[#f3f4f6]">
      <div className="mx-auto flex min-h-screen max-w-[1440px]">
        <aside className="hidden w-64 shrink-0 border-r border-white/10 px-7 py-8 lg:block">
          <div className="mb-16 flex items-center gap-3 text-sm font-bold tracking-[0.22em]">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#b8f36b] text-lg text-[#10140e]">◒</span>
            DAYMARK
          </div>
          <nav className="space-y-2 text-sm text-white/50">
            <a className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 text-white" href="#today">◷ <span>Today</span></a>
            <a className="flex items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-white/5 hover:text-white" href="#calendar">▦ <span>Calendar</span></a>
            <a className="flex items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-white/5 hover:text-white" href="#insights">◔ <span>Insights</span></a>
          </nav>
          <div className="mt-[58vh] border-t border-white/10 pt-5 text-xs text-white/35">
            <p className="mb-3 uppercase tracking-[0.18em]">Your focus</p>
            <p className="text-2xl font-semibold text-white">{completedCount}/{activities.length}</p>
            <p>activities complete</p>
          </div>
        </aside>

        <section className="w-full px-5 py-6 sm:px-8 lg:px-14 lg:py-10" id="today">
          <header className="mb-12 flex items-center justify-between">
            <div className="lg:hidden"><span className="text-sm font-bold tracking-[0.2em]">DAYMARK</span></div>
            <div className="hidden text-sm text-white/40 sm:block">Wednesday, September 25, 2026</div>
            <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-lg text-white/60 transition hover:border-[#b8f36b] hover:text-[#b8f36b]" aria-label="Open profile">JD</button>
          </header>

          <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-[#b8f36b]">Good morning, Jordan</p>
              <h1 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">Make today count.</h1>
              <p className="mt-3 text-sm text-white/40">A little progress, every day.</p>
            </div>
            <form className="flex w-full max-w-sm gap-2" onSubmit={addActivity}>
              <input value={newActivity} onChange={(event) => setNewActivity(event.target.value)} placeholder="Add an activity..." className="min-w-0 flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-white/25 focus:border-[#b8f36b]" />
              <button className="rounded-xl bg-[#b8f36b] px-4 text-xl font-medium text-[#10140e] transition hover:bg-[#d1ff98]" aria-label="Add activity">+</button>
            </form>
          </div>

          <div className="mb-12 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-[#14161b] p-5"><p className="text-xs uppercase tracking-[0.16em] text-white/35">Daily progress</p><div className="mt-4 flex items-end justify-between"><strong className="text-3xl font-semibold">{Math.round((completedCount / activities.length) * 100)}%</strong><span className="text-xs text-[#b8f36b]">+12% this week</span></div><div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10"><div className="h-full rounded-full bg-[#b8f36b] transition-all" style={{ width: `${(completedCount / activities.length) * 100}%` }} /></div></div>
            <div className="rounded-2xl border border-white/10 bg-[#14161b] p-5"><p className="text-xs uppercase tracking-[0.16em] text-white/35">Current streak</p><p className="mt-3 text-3xl font-semibold">7 <span className="text-base font-normal text-white/40">days</span></p><p className="mt-3 text-xs text-white/40">Keep the rhythm going.</p></div>
            <div className="rounded-2xl border border-white/10 bg-[#14161b] p-5"><p className="text-xs uppercase tracking-[0.16em] text-white/35">Next up</p><p className="mt-3 text-xl font-medium">Read 20 pages</p><p className="mt-2 text-xs text-[#b8f36b]">Today at 09:30</p></div>
          </div>

          <div className="mb-5 flex flex-col justify-between gap-4 border-b border-white/10 pb-4 sm:flex-row sm:items-center">
            <div><h2 className="text-xl font-medium">Today&apos;s activities</h2><p className="mt-1 text-xs text-white/35">{completedCount} of {activities.length} complete</p></div>
            <div className="flex gap-1 rounded-lg bg-white/5 p-1 text-xs">
              {["All activities", "Pending", "Completed"].map((option) => <button key={option} onClick={() => setFilter(option)} className={`rounded-md px-3 py-2 transition ${filter === option ? "bg-white/10 text-white" : "text-white/35 hover:text-white"}`}>{option}</button>)}
            </div>
          </div>

          <div className="divide-y divide-white/10" id="calendar">
            {visibleActivities.map((activity) => <div className="flex items-center gap-4 py-5" key={activity.id}><button onClick={() => toggleActivity(activity.id)} className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition ${activity.completed ? "border-[#b8f36b] bg-[#b8f36b] text-[#10140e]" : "border-white/25 text-transparent hover:border-[#b8f36b]"}`} aria-label={`Mark ${activity.title} as ${activity.completed ? "pending" : "complete"}`}>✓</button><div className="min-w-0 flex-1"><p className={`font-medium ${activity.completed ? "text-white/35 line-through" : "text-white"}`}>{activity.title}</p><span className="mt-1 block text-xs text-white/35">{activity.category}</span></div><time className="text-sm text-white/40">{activity.time}</time><span className="hidden rounded-full bg-white/5 px-3 py-1 text-[10px] uppercase tracking-wider text-white/35 sm:block">{activity.category}</span></div>)}
          </div>
          {visibleActivities.length === 0 && <p className="py-12 text-center text-sm text-white/35">No activities in this view.</p>}

          <footer className="mt-16 flex justify-between border-t border-white/10 pt-5 text-xs text-white/25" id="insights"><span>DAYMARK / DAILY SYSTEM</span><span>Built for better days.</span></footer>
        </section>
      </div>
    </main>);
}
