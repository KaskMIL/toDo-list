// Function to change dots for trash bin
export function toTrash(node) {
  node.classList.remove('bi-three-dots-vertical', 'move');
  node.classList.add('bi-trash', 'pointer');
}

// Function to change trash bin for dots
export function toDots(node) {
  node.classList.add('bi-three-dots-vertical', 'move');
  node.classList.remove('bi-trash', 'pointer');
}