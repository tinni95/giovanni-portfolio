import fs from 'fs';
import path from 'path';

/**
 * Reads and processes markdown files at build time
 * @param {string} filePath - Path to the markdown file
 * @returns {string} - The markdown content as a string
 */
export function getMarkdownContent(filePath) {
  try {
    const fullPath = path.join(process.cwd(), 'public', filePath);
    const fileContent = fs.readFileSync(fullPath, 'utf8');
    return fileContent;
  } catch (error) {
    console.error(`Error reading markdown file ${filePath}:`, error);
    return '';
  }
}

/**
 * Processes all markdown files for portfolio items
 * @param {Array} portfolioItems - Array of portfolio items
 * @returns {Array} - Portfolio items with markdown content included
 */
export function processPortfolioMarkdown(portfolioItems) {
  return portfolioItems.map(item => {
    if (item.markdownFile) {
      const markdownContent = getMarkdownContent(item.markdownFile);
      return {
        ...item,
        markdownContent
      };
    }
    return item;
  });
}
