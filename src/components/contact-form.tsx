"use client";

import { useState } from "react";

export function ContactForm() {
  const [ok, setOk] = useState(false);

  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        setOk(true);
      }}
    >
      {ok && (
        <div className="notice" role="status">
          Data berhasil divalidasi. Tim PPDB akan menghubungi melalui kontak yang dicantumkan.
        </div>
      )}
      <label>
        Nama lengkap
        <input required name="name" minLength={3} placeholder="Nama siswa atau orang tua" />
      </label>
      <label>
        Email
        <input required name="email" type="email" placeholder="nama@email.com" />
      </label>
      <label>
        Nomor WhatsApp
        <input required name="phone" type="tel" inputMode="tel" placeholder="08xx xxxx xxxx" />
      </label>
      <label>
        Keperluan
        <select name="type" defaultValue="Informasi PPDB">
          <option>Informasi PPDB</option>
          <option>Kunjungan sekolah</option>
          <option>Kerja sama</option>
        </select>
      </label>
      <label>
        Pesan
        <textarea required name="message" rows={4} minLength={10} placeholder="Ceritakan kebutuhan Anda" />
      </label>
      <button className="btn btn--lime" type="submit" style={{ justifyContent: "center" }}>
        Kirim permintaan
      </button>
    </form>
  );
}
