const logs = [
  { user: "Alice", duration: 5, activity: "Search" },
  { user: "Bob", duration: 3, activity: "View Product" },
  { user: "Alice", duration: 2, activity: "Add to Cart" },
  { user: "Charlie", duration: 7, activity: "Checkout" },
  { user: "Bob", duration: 1, activity: "Search" },
  { user: "Charlie", duration: 4, activity: "View Product" },
];

// 1. Compute total duration spent by each user (e.g., Alice → 7)
const totalDurationPerUser = logs.reduce((acc, log) => {
  acc[log.user] = (acc[log.user] || 0) + log.duration;
  return acc;
}, {});

// 2. Identify users who spent more than 5 minutes total
const activeUsers = Object.entries(totalDurationPerUser)
  .filter(([_, duration]) => duration > 5)
  .map(([user]) => user);

// 3. Compute average session duration
const totalSessions = logs.length;
const totalDuration = logs.reduce((sum, log) => sum + log.duration, 0);
const avgSessionDuration = (totalDuration / totalSessions).toFixed(2);

// After 2 sec log
setTimeout(() => {
  console.log("Total Duration Per User:", totalDurationPerUser);
  console.log("Active Users (>5 min):", activeUsers);
  console.log("Avg Session Duration:", `${avgSessionDuration} mins`);
}, 2000);
