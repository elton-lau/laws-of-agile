import yaml from 'js-yaml';
import { Law } from '../types';

/**
 * Parses a raw markdown string with YAML frontmatter.
 * Returns a Law object where the markdown body is assigned to the 'description' field.
 */
export function parseLaw(rawContent: string): Law {
  // Regex to separate frontmatter (--- ... ---) from body
  const match = /^\s*---\n([\s\S]*?)\n---\n([\s\S]*)$/.exec(rawContent);

  if (!match) {
    throw new Error("Invalid markdown format. Expected YAML frontmatter.");
  }

  const frontmatterRaw = match[1];
  const body = match[2];

  // Parse YAML frontmatter
  const data = yaml.load(frontmatterRaw) as Omit<Law, 'description'>;

  return {
    ...data,
    description: body.trim(), // The body becomes the description/content
  };
}