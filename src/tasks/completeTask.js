import { delay } from './utils.js';

/**
 * Marks a task as complete
 * @param {Object} task - The task object to complete
 * @returns {Promise<Object>} - The updated task object
 * @throws {Error} - If task is invalid or already completed
 */
export async function completeTask(task) {
  if (!task || typeof task !== 'object') {
    throw new Error('Invalid task object.');
  }

  if (!task.id) {
    throw new Error('Task must have an ID.');
  }

  if (task.completed) {
    return task;
  }

  await delay(200);

  task.completed = true;
  task.completedAt = new Date().toISOString();

  return task;
}
