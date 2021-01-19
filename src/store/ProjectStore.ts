import { writable } from 'svelte/store';
import type { Project } from '../types';

const data: Project[] | null = null;

const ProjectStore = writable(data);

export default ProjectStore;
