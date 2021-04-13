import { Place } from "./store/models";
export const data: Place[] = [
  {
    name: "marker id 1",
    details: "<h1>Details</h1><p/>with possible html formats",
    icon: "https://leafletjs.com/examples/custom-icons/leaf-red.png",
    pos: [47.485632, 19.071795],
    status: "LVL_1",
  },

  {
    name: "marker id 2",
    details: "<h1>My First Heading</h1> <p>My first paragraph.</p>",
    icon: "https://leafletjs.com/examples/custom-icons/leaf-green.png",
    pos: [47.486632, 19.081795],
    status: "LVL_2",
  },
  {
    name: "marker id 3",
    details:
      "<b>Lorem</b> Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    icon: "https://leafletjs.com/examples/custom-icons/leaf-orange.png",
    pos: [47.475632, 19.091795],
    status: "LVL_3",
  },
  {
    name: "marker id 4",
    details:
      "<h1 style='color: red'>My First Heading</h1> <p>My first paragraph.</p>",
    pos: [47.435632, 19.171795],
    status: "LVL_4",
  },
  {
    name: "marker id 5",
    details: "<h1>Details</h1><p/>with possible html formats",
    pos: [47.485632, 19.151795],
    status: "LVL_5",
  },
];
