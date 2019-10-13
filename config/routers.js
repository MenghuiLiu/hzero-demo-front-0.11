module.exports = [
  {
    path: "/demo/page1",
    component: "demo/Page1",
    models: [],
  },
  {
    path: "/demo/page2",
    component: "demo/Page2",
    models: [],
  },
  {
    path: "/todo/user",
    component: "todo/User",
    models: [
      "todo/todoUser",
    ],
  },
  {
    path: "/todo/task",
    component: "todo/Task",
    models: [
      "todo/task",
    ],
  },
];
