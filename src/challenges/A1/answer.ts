/**
 * In this challenge, you must sort students by their age (younger first). If some of them have
 * the same age, then you should sort them alphabetically (A to Z)
 *
 * @param students Unsorted list of students
 * @returns Sorted list of students
 */

// ↓ uncomment bellow lines and add your response!
export default ({ students }: { students: Student[] }) => students.sort((a, b) => a.age - b.age || a.name.localeCompare(b.name))
// used interfaces, do not touch
export interface Student {
    name: string;
    age: number;
    skills: string[];
}
