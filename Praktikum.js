function VariabelKonstanta() {
  const nama = "Dimas Angkasa";
  let umur = 16;
  let status_menikah = false;

  umur = 17;
  // nama = "Mas Dim";
  //Jika baris diatas aktif maka akan terjadi error

  console.log(nama); //nilai nama tidak dapat dirubah alias tetap
  console.log(umur); //nilai umur dapat diubah
  console.log(status_menikah);
}

function Objek() {
  let profil = {
    nama: "Mas Dim ",
    kelebihan: false,
  };

  //mengganti kelebihan di profil
  profil.kelebihan = "Ganteng wkwk";

  console.log(profil.nama);
  if (profil.kelebihan) {
    console.log(profil.kelebihan);
  } else {
    console.log("Gak ada kelebihan");
  }
}

function Array() {
  let tim = [
    {
      namaTim: "Squad Mantap",
      diBuat: "01/01/2020",
      anggota: 2,
    },
    {
      namaTim: "Squad Enak",
      diBuat: "17/12/2019",
      anggota: 5,
    },
  ];
  console.log(tim);
  console.log(tim[1]);
  console.log(tim[1].anggota);
  console.log(tim.length);
}

function ArrayEdit() {
  let tim = [
    {
      namaTim: "Squad Mantap",
      diBuat: "01/01/2020",
      anggota: 2,
    },
    {
      namaTim: "Squad Enak",
      diBuat: "17/12/2019",
      anggota: 5,
    },
  ];

  tim.splice(1, 1);
  console.log(tim);

  const timBaru = {
    namaTim: "Squad Anyar",
    diBuat: "27/07/2020",
    anggota: 3,
  };

  tim.push(timBaru);
  console.log(tim);
}
