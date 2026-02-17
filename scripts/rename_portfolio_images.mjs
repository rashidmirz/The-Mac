import fs from 'fs';
import path from 'path';

const dir = 'c:/xampp/htdocs/The Mac/public/portfolio';

// Get all files
const files = fs.readdirSync(dir);

// Separate into existing project files and new files
const existingProjects = [];
const newFiles = [];

files.forEach(file => {
    const match = file.match(/^project-(\d+)\.jpg$/);
    if (match) {
        existingProjects.push(parseInt(match[1]));
    } else {
        // Only process jpg files that don't match the pattern
        if (file.endsWith('.jpg') || file.endsWith('.jpeg')) {
            newFiles.push(file);
        }
    }
});

// Find the max project number
const maxProject = existingProjects.length > 0 ? Math.max(...existingProjects) : 0;
console.log(`Max project number found: ${maxProject}`);
console.log(`Found ${newFiles.length} new files to rename.`);

// Sort new files to insure deterministic order (optional)
newFiles.sort();

// Rename files
let currentProject = maxProject + 1;
newFiles.forEach(file => {
    const oldPath = path.join(dir, file);
    const newName = `project-${currentProject}.jpg`;
    const newPath = path.join(dir, newName);

    if (fs.existsSync(newPath)) {
        console.log(`Skipping ${newName}, already exists (unexpected).`);
    } else {
        fs.renameSync(oldPath, newPath);
        console.log(`Renamed ${file} to ${newName}`);
        currentProject++;
    }
});

console.log(`Renaming complete. Total projects: ${currentProject - 1}`);
