import { createGlobalState } from "react-hooks-global-state";

const { getGlobalState, useGlobalState, setGlobalState } = createGlobalState({
  createProposalModal: "scale-0",
  proposals: [],
});

const generateData = (n) => {
  const data = [];

  for (let i = 0; i < n; i++) {
    const obj = {
      id: i + 1,
      status: Math.floor(Math.random() * 3) + 1,
      time: 13435456464,
      heading: "Lorem Ipsum dalum",
      description: "Lorem ipsum dalosjkdl dsjbkbd",
    };
    data.push(obj);
  }

  return data;
};

export { getGlobalState, useGlobalState, setGlobalState, generateData };
