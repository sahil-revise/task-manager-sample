import { validateTaskTitle, delay, generateId } from './utils.js';

/**
 * Creates a new task with the given title
 * @param {string} title - The title of the task
 * @returns {Promise<Object>} - The created task object
 * @throws {Error} - If validation fails
 */
export async function createTask(title) {
  if (!validateTaskTitle(title)) {
    throw new Error('Invalid task title. Must be a non-empty string with max 200 characters.');
  }

  const task = {
    id: generateId(),
    title: title.trim(),
    completed: false,
    createdAt: new Date().toISOString()
  };

  await delay(300);
  
  return task;
}
