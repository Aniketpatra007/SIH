"use client";

export default function UnityDemo() {
  return (
    // <div>
    //   <h1>Unity WebGL Demo in Next.js</h1>
    //   <iframe
    //     src="/unity/WebGLBuild2/index.html"
    //     title="Unity WebGL"
    //     width="100%"
    //     height="600px"
    //     style={{ border: "none" }}
    //   ></iframe>
    // </div>
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0f0e17] text-white p-6 ">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-[#ff8906] drop-shadow-lg">
        Fire Escape
      </h1>

      {/* Game container */}
      <div className="w-full max-w-6xl aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-[#ff8906] bg-black">
        <iframe
          src="/unity/WebGLBuild2/index.html"
          title="Unity WebGL"
          className="w-full h-full"
          style={{ border: "none" }}
        ></iframe>
      </div>

      {/* Footer / Info */}
      <p className="mt-6 text-gray-300 text-sm">
        <span className="text-[#ff8906] font-semibold">fullscreen</span> for the
        best experience!
      </p>
    </div>
  );
}
