export default function LatihanAudit() {
  return (
    <main className="min-h-screen bg-white p-8 text-gray-900">
      <h1 className="text-2xl font-bold">
        Katalog Alat Laboratorium
      </h1>

      <img
        src="/next.svg"
        alt="Logo Next.js"
        width={120}
        height={24}
      />

      <p className="mt-4 text-gray-700">
        Stok diperbarui setiap hari.
      </p>

      <form className="mt-4 flex items-center gap-2">
        <label htmlFor="cari-alat" className="sr-only">
          Cari alat
        </label>

        <input
          id="cari-alat"
          type="search"
          name="q"
          aria-label="Cari alat"
          className="rounded border border-gray-600 p-2"
        />

        <button
          type="submit"
          aria-label="Cari"
          className="rounded border border-gray-600 p-2"
        >
          <svg
            aria-hidden="true"
            width="16"
            height="16"
            viewBox="0 0 16 16"
          >
            <circle
              cx="7"
              cy="7"
              r="5"
              stroke="currentColor"
              fill="none"
            />
          </svg>
        </button>
      </form>
    </main>
  );
}
