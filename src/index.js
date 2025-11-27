import { createTask } from './tasks/createTask.js';
import { completeTask } from './tasks/completeTask.js';

async function main() {
  try {
    const task1 = await createTask('Review pull requests');
    const task2 = await createTask('Write documentation');
    const task3 = await createTask('Fix bug in payment module');

    await completeTask(task1);
    await completeTask(task3);

    console.log('Tasks processed successfully');

  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

main();
