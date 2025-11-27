/**
 * Validates that a task title is valid
 * @param {string} title - The task title to validate
 * @returns {boolean} - True if valid, false otherwise
 */
export function validateTaskTitle(title) {
  if (!title || typeof title !== 'string') {
    return false;
  }

  const trimmed = title.trim();
  return trimmed.length > 0 && trimmed.length <= 200;
}

/**
 * Simulates an asynchronous delay (e.g., network or database operation)
 * @param {number} ms - Milliseconds to delay
 * @returns {Promise<void>}
 */
export function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Generates a simple unique ID for tasks
 * @returns {string} - A unique identifier
 */
export function generateId() {
  return `task_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}
