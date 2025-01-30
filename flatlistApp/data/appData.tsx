/** @format */

// file includes all data types used across the project

type dataType = {
    id: string; //unique identifier for each list element
    title: string; //display
};

const DATA: dataType[] = [
    { id: "1", title: "first" },
    { id: "2", title: "sec" },
    { id: "3", title: "thrird" },
];

export { dataType, DATA };
// allows importing
