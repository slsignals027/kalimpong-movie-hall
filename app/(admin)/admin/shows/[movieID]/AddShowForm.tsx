"use client";

import { useMemo, useState } from "react";
import { generateWeeklyShows } from "@/actions/show";

type Props = {
  movieId: number;
};

const SHOW_TIMES = [
  "15:00",
  "18:00",
  "18:30"
];

const DAY_NAMES = [
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
];

export default function AddShowForm({
  movieId,
}: Props) {
  const [startDate, setStartDate] = useState("");

  const [schedule, setSchedule] = useState<
    Record<number, string[]>
  >({
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
  });

  const dates = useMemo(() => {
    if (!startDate) return [];

    const first = new Date(startDate);

    const arr = [];

    for (let i = 0; i < 7; i++) {
      const d = new Date(first);
      d.setDate(first.getDate() + i);

      arr.push(d);
    }

    return arr;
  }, [startDate]);

  function toggleTime(
    dayIndex: number,
    time: string
  ) {
    const current = schedule[dayIndex];

    if (current.includes(time)) {
      setSchedule({
        ...schedule,
        [dayIndex]: current.filter(
          (t) => t !== time
        ),
      });
    } else {
      setSchedule({
        ...schedule,
        [dayIndex]: [...current, time],
      });
    }
  }

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    const result =
      await generateWeeklyShows({
        movieId,
        dates,
        schedule,
      });

    alert(result.message);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-8"
    >
      <div>

        <label className="mb-2 block font-semibold">
          Week Start (Thursday)
        </label>

        <input
          type="date"
          required
          value={startDate}
          onChange={(e) =>
            setStartDate(e.target.value)
          }
          className="w-full rounded border p-3"
        />

      </div>

      {dates.length > 0 &&

        dates.map((date, index) => (

          <div
            key={index}
            className="rounded-lg border p-5"
          >

            <h2 className="mb-3 text-xl font-bold">

              {DAY_NAMES[index]}

              <span className="ml-3 text-base font-normal text-gray-500">

                {date.toLocaleDateString("en-IN")}

              </span>

            </h2>

            <div className="space-y-2">

              {SHOW_TIMES.map((time) => (

                <label
                  key={time}
                  className="flex items-center gap-3"
                >

                  <input
                    type="checkbox"
                    checked={schedule[index].includes(
                      time
                    )}
                    onChange={() =>
                      toggleTime(index, time)
                    }
                  />

                  {time}

                </label>

              ))}

            </div>

          </div>

        ))}

      <button
        type="submit"
        className="rounded bg-green-600 px-8 py-3 font-semibold text-white hover:bg-green-700"
      >
        Generate Schedule
      </button>
    </form>
  );
}