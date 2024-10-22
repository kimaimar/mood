let currentQuestion = 0;
let answers = [];

function startQuiz() {
  document.getElementById('start-page').classList.add('hidden');
  document.getElementById('quiz').classList.remove('hidden');
  document.getElementById('next').classList.remove('hidden'); // Menampilkan tombol pertanyaan selanjutnya
}

// This function handles the user's answer
function answer(questionNumber, option) {
    answers[questionNumber] = option;
    nextQuestion();
}

// This function shows the next question
function nextQuestion() {
  // Tampilkan loader
  document.getElementById('loader').style.display = 'block';

  // Delay untuk menunggu loading
  setTimeout(() => {
      const questions = document.getElementsByClassName('question');
      questions[currentQuestion].classList.add('hidden'); // Sembunyikan pertanyaan saat ini

      currentQuestion++; // Pindah ke pertanyaan selanjutnya
      if (currentQuestion < questions.length) {
          questions[currentQuestion].classList.remove('hidden'); // Tampilkan pertanyaan selanjutnya
      } else {
          showResult(); // Tampilkan hasil jika sudah tidak ada pertanyaan
      }

      // Sembunyikan loader setelah loading selesai
      document.getElementById('loader').style.display = 'none';
  }, 900); // Ubah waktu delay sesuai kebutuhan
}

// This function calculates and shows the result
function showResult() {
  let result = '';
  let imgSrc = '';  // Variable untuk menyimpan sumber gambar produk

  // Basic logic to determine the perfume recommendation
  let aCount = answers.filter(a => a === 'a').length;
  let bCount = answers.filter(a => a === 'b').length;
  let cCount = answers.filter(a => a === 'c').length;
  let dCount = answers.filter(a => a === 'd').length;
  let eCount = answers.filter(a => a === 'e').length;

  if (aCount >= 2) {
    imgSrc = "Aset/parfume.jpg";  // Gambar produk 'Happiness'
    result = "🌟 Kamu penuh kebahagiaan! Coba parfum 'Happiness'. " + 
           "Parfum ini menggabungkan aroma buah segar dan bunga yang ceria, " +
           "menciptakan suasana hati yang ringan dan menyenangkan. Setiap semprotan akan " +
           "membawa senyum di wajahmu dan membuatmu merasa lebih optimis sepanjang hari.";
  } else if (bCount >= 2) {
    imgSrc = "Aset/parfume.jpg";  // Gambar produk 'Love'
    result = "💖 Cinta ada di udara! Parfum 'Love' sempurna untukmu. " + 
    "Aroma hangat dan manis dari vanilla dan mawar ini dirancang untuk menciptakan " +
    "rasa kehangatan dan koneksi dengan orang yang kamu cintai. Parfum ini akan membuatmu " +
    "merasa penuh kasih dan lebih dekat dengan orang-orang terkasih.";
  } else if (cCount >= 2) {
    result = "🔥 Berani dan penuh semangat! Parfum 'Courage' sangat cocok untukmu. " + 
    "Dengan aroma maskulin dari kayu dan rempah, parfum ini memberikan energi dan semangat, " +
    "membuatmu siap menghadapi tantangan apa pun. Ini adalah pilihan yang tepat saat kamu butuh " +
    "motivasi dan kepercayaan diri ekstra.";
    imgSrc = 'Aset/parfume.jpg';  // Gambar produk 'Courage'
  } else if (dCount >= 2) {
    result = "🧘 Tenang dan terkumpul. Parfum 'Calmness' adalah pilihanmu! " + 
    "Aroma lembut lavender dan chamomile dalam parfum ini memberikan rasa damai dan rileks, " +
    "membantu meredakan stres dan menenangkan pikiran. Cocok digunakan di akhir hari atau saat kamu " +
    "ingin menikmati waktu sendirian.";
    imgSrc = 'Aset/parfume.jpg';  // Gambar produk 'Calmness'
  } else if (eCount >= 2) {
    result = "🌞 Optimis dan penuh harapan! Parfum 'Optimism' untukmu. " + 
    "Dengan aroma jeruk yang segar dan sedikit sentuhan bunga, parfum ini memberikan dorongan " +
    "energi positif, membuatmu merasa siap menyambut hari baru dengan semangat. Parfum ini cocok " +
    "untuk mereka yang selalu melihat sisi cerah kehidupan.";
    imgSrc = 'Aset/parfum.jpg';  // Gambar produk 'Optimism'
  } else {
    result = "🤔 Hmm, kamu adalah campuran dari semuanya! Bagaimana kalau mencoba kelima parfum? " +
    "Setiap parfum punya karakteristik unik yang bisa menyesuaikan suasana hatimu. Kamu bisa " +
    "menggunakan 'Happiness' di hari-hari ceria, 'Love' di momen romantis, 'Courage' ketika butuh " +
    "keberanian, 'Calmness' untuk relaksasi, dan 'Optimism' untuk menjaga semangat positif!";
    imgSrc = 'Aset/parfume.jpg';  // Gambar produk gabungan
  }

  // Tampilkan hasil teks
  document.getElementById('result').textContent = result;

  // Tampilkan gambar produk
  const imgElement = document.createElement('img');
  imgElement.src = imgSrc;
  imgElement.alt = "Gambar Parfum"; // Text alternatif untuk gambar
  imgElement.style.width = '200px'; // Atur ukuran gambar sesuai kebutuhan
  imgElement.style.marginTop = '60px'; // Jarak atas antara gambar dan teks
  imgElement.style.marginBottom = '10px'; // Jarak bawah antara gambar dan teks

  // Tambahkan gambar ke dalam div hasil
  document.getElementById('result').appendChild(imgElement);

  // Buat tombol untuk link pembelian
  const purchaseButton = document.createElement('a');
  purchaseButton.href = 'https://link-pembelian.com'; // Ganti dengan link pembelian yang sesuai
  purchaseButton.textContent = 'Beli Sekarang';
  purchaseButton.style.display = 'block';
  purchaseButton.style.padding = '10px 20px';
  purchaseButton.style.marginTop = '10px'; // Jarak di atas tombol
  purchaseButton.style.backgroundColor = '#ff9800'; // Warna latar tombol
  purchaseButton.style.color = '#fff'; // Warna teks tombol
  purchaseButton.style.textDecoration = 'none'; // Hilangkan garis bawah
  purchaseButton.style.borderRadius = '5px'; // Tambahkan sudut bulat
  purchaseButton.style.fontWeight = 'bold'; // Tebalkan teks

  // Tambahkan tombol ke dalam div hasil
  document.getElementById('result').appendChild(purchaseButton);

  // Sembunyikan intro quiz
  document.getElementById("quiz-intro").style.display = "none";
}



