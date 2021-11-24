import fs from "fs";
import dayjs from "dayjs";
import { join } from "path";
import matter from "gray-matter";

const postsDirectory = join(process.cwd(), "postsDirectory");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs();
  const postsWithoutOrder = slugs.map((slug) => getPostBySlug(slug, fields));
  // sort posts by date in descending order
  const posts = postsWithoutOrder.sort((post1, post2) =>
    dayjs(post2.date).isAfter(post1.date) ? 1 : -1
  );
  return { posts, total: posts.length, slugs };
}

const pagesDirectory = join(process.cwd(), "TextBasedPages");

export function getPageSlugs() {
  return fs.readdirSync(pagesDirectory);
}

export function getPageBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(pagesDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPages(fields: string[] = []) {
  const slugs = getPageSlugs();
  const pages = slugs.map((slug) => getPageBySlug(slug, fields));

  return pages;
}
