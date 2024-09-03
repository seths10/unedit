"use client";

import ImageUpload from "@/components/core/image-upload";

function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">UnEdit</h1>
      <ImageUpload />
    </main>
  );
}

export default HomePage;
