// permasalahan
const nama = 'Fiki';
const nama2 = 'Dika';
const nama3 = 'Rafi';

// array
// fiki, dika, rafi, diana
//  0   |  1  |  2 |   3
const mahasiswa = ['fiki', 'dika', 'rafi', 'Diana'];

// akses dengan index
console.log(mahasiswa);
console.log(mahasiswa[3]);

// memotong array
console.log(mahasiswa.slice(0, 2));
console.log(mahasiswa.slice(2, 4));

// mengubah isi array
mahasiswa[3] = 'Budi';
console.log(mahasiswa);

// mengecek array
console.log(mahasiswa.includes('budi'));




