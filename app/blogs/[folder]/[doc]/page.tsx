import fs from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import MDXContent from "./MDXContent"; // or replace with <MDXRemote />

interface DocPageProps {
    params: Promise<{ folder: string; doc: string }>;
}

export async function generateStaticParams() {
  const blogsDir = path.join(process.cwd(), "blogs");
  const folders = fs
    .readdirSync(blogsDir)
    .filter((name) => name.endsWith("-pr"));

  const paramsArray: { folder: string; doc: string }[] = [];

  for (const folderName of folders) {
    const folderPath = path.join(blogsDir, folderName);
    const files = fs
      .readdirSync(folderPath)
      .filter((f) => f.endsWith(".mdx"));

    const folderParam = folderName.replace(/-pr$/, "");

    for (const file of files) {
      const docParam = file.replace(/\.mdx$/, "");
      paramsArray.push({ folder: folderParam, doc: docParam });
    }
  }

  return paramsArray;
}

export default async function DocPage({ params }: DocPageProps) {
  const { folder, doc } =await params;

  const prFolder = `${folder}-pr`;
  const filePath = path.join(process.cwd(), "blogs", prFolder, `${doc}.mdx`);

  let source = "";
  let mdxSource: MDXRemoteSerializeResult | null = null;
  let fallbackHtml = "";

  try {
    source = fs.readFileSync(filePath, "utf8");

    mdxSource = await serialize(source, {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeRaw],
      },
    });
  } catch (err) {
    // If reading or serialization fails, fallback to raw HTML rendering:
    if (fs.existsSync(filePath)) {
      // file exists but failed to parse, fallback to raw markdown converted to simple HTML
      fallbackHtml = source
        ? source
            .replace(/\n/g, "<br/>") // very simple line break conversion
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
        : "<p>Unable to load content</p>";
    } else {
      fallbackHtml = `<p>Document not found: ${doc}</p>`;
    }
  }

  return (
    <main className="px-6 py-12">
      {mdxSource ? (
        <MDXContent mdxSource={mdxSource} />
      ) : (
        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: fallbackHtml }}
        />
      )}
    </main>
  );
}

