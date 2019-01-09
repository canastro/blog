---
path: "/idle-callback-queue-traversal"
title: RequestIdleCallback and heavy computation
tags: []
draft: true
date: "2019-01-09T22:00:00.000Z"
---

https://codesandbox.io/s/wwm5mp3kol
```js
const app = document.getElementById("app");
app.innerHTML = `Hello`;

// How long you need to do each unit of work?
const ENOUGH_TIME = 5;

let isWorking = false;
let workQueue = [];
let nextUnitOfWork = null;

async function stall(stallTime = 3000) {
  await new Promise(resolve => setTimeout(resolve, stallTime));
}

async function performUnitOfWork(nextUnitOfWork) {
  console.log("unit: ", nextUnitOfWork);
  await stall(5);

  const next = workQueue.shift();
  return next;
}

async function performWork(deadline) {
  if (isWorking) return;

  console.log(
    "performWork:: nextUnitOfWork: ",
    nextUnitOfWork,
    " time remaining: ",
    deadline.timeRemaining()
  );

  if (!nextUnitOfWork) {
    nextUnitOfWork = workQueue.shift();
  }

  while (nextUnitOfWork && deadline.timeRemaining() > ENOUGH_TIME) {
    isWorking = true;
    nextUnitOfWork = await performUnitOfWork(nextUnitOfWork);
    // Clear work
    //nextUnitOfWork = null;
    isWorking = false;
  }

  if (nextUnitOfWork || workQueue.length > 0) {
    requestIdleCallback(performWork);
  }
}

function schedule(task) {
  console.log("schedule: ", task);
  workQueue.push(task);
  requestIdleCallback(performWork);
}

const target = [1, 2, 3, 4];
target.forEach(schedule);
console.log("all targets scheduled...");
```
