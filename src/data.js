import { sub } from "date-fns";
export const data = [
  {
    id: 1,
    title: "Learning Redux Toolkit",
    content: "I've heard good things about it",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reaction: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
  {
    id: 2,
    title: "Slice....",
    content: "lorem ipsum dolor sit amet, con",
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    reaction: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
];

export const users = [
  { id: "1", name: "Uzair Ansari" },
  { id: "2", name: "Rahil Ansari" },
];

export const reactionEmoji = {
  thumbsUp: "👍",
  wow: "😲",
  heart: "❤️",
  rocket: "🚀",
  coffee: "☕️",
};
