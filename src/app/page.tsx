import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-24">
      <div className="z-10 w-full max-w-5xl items-center flex-col text-center font-mono text-sm lg:flex">
        {/* round image */}
        <div className="relative w-32 h-32 overflow-hidden rounded-full m-auto">
          <Image src="/penguin-avatar.jpg" alt="" role="presentation" height={300} width={300} />
        </div>
        <h1 className='text-2xl mb-4'>Hi internet! I&apos;m Bharat.</h1>
        <p>you found me :&#41;</p>
      </div>
      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-1 lg:text-left flex-col">
        <a
          href="https://github.com/bmiddha"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            GitHub{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Follow me on GitHub</p>
        </a>
        <a
          href="https://www.linkedin.com/in/bmiddha"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            LinkedIn{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Connect with me on LinkedIn</p>
        </a>
      </div>
    </main>
  );
}
