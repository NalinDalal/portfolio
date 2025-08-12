import fs from 'fs';
import path from 'path';
import Link from 'next/link';

export default function BlogsIndex() {
  const blogsDir = path.join(process.cwd(), 'blogs');
  const prFolders = fs.readdirSync(blogsDir).filter(f => f.endsWith('-pr'));
  const docs = prFolders.flatMap(folder =>
    fs.readdirSync(path.join(blogsDir, folder))
      .filter(file => file.endsWith('.mdx'))
      .map(file => ({
        folder: folder.replace(/-pr$/, ''),
        file: file.replace(/\.mdx$/, ''),
        display: `${folder}/${file}`,
      }))
  );

  return (
    <main className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">PR Docs</h1>
      <ul>
        {docs.map(doc => (
          <li key={doc.display}>
            <Link href={`/blogs/${doc.folder}/${doc.file}`}>{doc.display}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
<<<<<<< HEAD
=======

>>>>>>> dd310232c679c45a1a6826e3d64123625a905230
