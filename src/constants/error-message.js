const ERROR_MESSAGE = {
  REQUIRED: (field) => `${field} tidak boleh kosong`,
  MIN_VALUE: (field, min) => `${field} minimal ${min}`,
  MAX_VALUE: (field, max) => `${field} maksimal ${max}`,
  MIN_NUMBER: (field, min) => `${field} minimal ${min} digit`,
  MAX_NUMBER: (field, max) => `${field} maksimal ${max} digit`,
  MIN_CHAR: (field, min) => `${field} minimal ${min} karakter`,
  MAX_CHAR: (field, max) => `${field} maksimal ${max} karakter`,
  // INVALID_FORMAT = tanggal / email / dll
  INVALID_FORMAT: (field) => `Format ${field} tidak sesuai`,
  INVALID_PASSWORD_FORMAT: (field) =>
    `${field} harus berisi kombinasi angka dan huruf`,
  NOT_MATCH: (field) => `${field} tidak cocok`,
  // UNSUPPORT_FORMAT = file-type / extension
  UNSUPPORT_FORMAT: (field) => `Format ${field} tidak disupport`,
  PROGRESS_UPLOAD: `Mohon menunggu hingga proses unggah file selesai`,
};

export default ERROR_MESSAGE;
