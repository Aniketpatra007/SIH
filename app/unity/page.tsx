"use client";
export default function UnityDemo() {
  return (
    <div>
      <h1>Unity WebGL Demo in Next.js</h1>
      <iframe
        src="/unity/WebGLBuild/index.html"
        title="Unity WebGL"
        width="100%"
        height="600px"
        style={{ border: "none" }}
      ></iframe>
    </div>
  );
}
