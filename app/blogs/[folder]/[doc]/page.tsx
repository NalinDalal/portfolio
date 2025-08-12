// Moved to /workspaces/portfolio/app/blogs/[folder]/[doc]/page.tsx
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';

interface PageProps {
  params: { folder: string; doc: string };
}

export async function generateStaticParams() {
  const blogsDir = path.join(process.cwd(), 'blogs');
  const prFolders = fs.readdirSync(blogsDir).filter(f => f.endsWith('-pr'));

  const paths: { folder: string; doc: string }[] = [];

  for (const folder of prFolders) {
    const files = fs.readdirSync(path.join(blogsDir, folder)).filter(f => f.endsWith('.mdx'));
    for (const file of files) {
      paths.push({
        folder: folder.replace(/-pr$/, ''),
        doc: file.replace(/\.mdx$/, ''),
      });
    }
  }

  return paths;
}

export default async function PRDocPage({ params }: PageProps) {
  const blogsDir = path.join(process.cwd(), 'blogs');
  const prFolder = `${params.folder}-pr`;
  const filePath = path.join(blogsDir, prFolder, `${params.doc}.mdx`);

  if (!fs.existsSync(filePath)) {
    return <div>Document not found.</div>;
  }

  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { content, data } = matter(fileContent);
  const mdxSource = await serialize(content);

  return (
    <main className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">{data.title || params.doc}</h1>
      <MDXRemote {...mdxSource} />
    </main>
  );
}
<<<<<<< HEAD
=======

>>>>>>> dd310232c679c45a1a6826e3d64123625a905230
