/**
 * In this challenge, you should compute a week planning split in 1 hour slots
 * and including existing events. To keep it simple, don't work with Dates!
 * Be carefull with leading 0!
 *
 * Example:
 * Input: [{ day: "Monday", startTime: "09:00", endTime: "11:00", name: "First work day!" }]
 * Output: [
 *     { day: "Monday", startTime: "00:00", "endTime": "01:00"},
 *     { day: "Monday", startTime: "01:00", "endTime": "02:00"},
 *     ...,
 *     { day: "Monday", startTime: "09:00", "endTime": "10:00", event: [Object] },
 *     { day: "Monday", startTime: "10:00", "endTime": "11:00", event: [Object] },
 *     { day: "Monday", startTime: "11:00", "endTime": "12:00" },
 *     ...,
 *     { day: "Sunday", startTime: "23:00", "endTime": "00:00" },
 * ]
 *
 * @param events List of event to add on the planning
 * @returns List of planning slots, from Monday 00:00 to Sunday 00:00, 1 hour each slot
 */

// ↓ uncomment bellow lines and add your response!
export default function ({ events }: { events: Event[] }): PlanningSlot[] {
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

    let weeklyPlan: PlanningSlot[] = []
    for (let day of daysOfWeek) {
        for (let hour = 0; hour < 24; hour++) {
            let startTime = hour.toString().padStart(2, '0') + ':00'
            let endTime = (hour === 23 ? '00:00' : (hour + 1).toString().padStart(2, '0') + ':00')
            weeklyPlan.push({ day, startTime, endTime })
        }
    }

    events.forEach(event => {
        let startIndex = weeklyPlan.findIndex(slot => slot.day === event.day && slot.startTime === event.startTime)
        let endIndex = weeklyPlan.findIndex(slot => slot.day === event.day && slot.endTime === event.endTime)

        for (let i = startIndex; i <= endIndex; i++) {
            weeklyPlan[i].event = {...event}
        }
    })

    return weeklyPlan
}

// used interfaces, do not touch
export interface Event {
    day: string;
    startTime: string;
    endTime: string;
    name: string;
}

export interface PlanningSlot {
    day: string;
    startTime: string;
    endTime: string;
    event?: Event;
}
