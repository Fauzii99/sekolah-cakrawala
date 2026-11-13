"use client";

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <main style={{ minHeight: "100svh", display: "grid", placeItems: "center", background: "var(--paper)", padding: "40px 20px" }}>
      <div style={{ textAlign: "center", maxWidth: 480 }}>
        <span className="eyebrow">Kesalahan</span>
        <h1 className="display h2" style={{ margin: "0 0 14px" }}>
          Halaman tidak dapat dimuat.
        </h1>
        <p className="muted" style={{ marginBottom: 26 }}>
          Terjadi kendala sementara. Silakan coba kembali.
        </p>
        <button className="btn btn--dark" onClick={reset}>
          Coba lagi
        </button>
      </div>
    </main>
  );
}
