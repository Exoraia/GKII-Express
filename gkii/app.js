const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = parseInt(process.env.PORT) || process.argv[3] || 3200;
const envConfig = require('dotenv').config({path: './.env'});
const frontend = envConfig.parsed.ALLOWED_FRONTEND_URL

console.log(frontend);
// allow CORS from port:3000
app.use(cors({
  origin: frontend // Allow requests from this origin
}));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'src/public')))
  .set('views', path.join(__dirname, 'src/views'))
  .set('view engine', 'ejs');

// Require user routes
const usersRoutes = require('./src/routes/users.route');
const registrationRoutes = require('./src/routes/registration.route');
const authRoutes = require('./src/routes/auth.route');
const jabatanRoutes = require('./src/routes/jabatan.route');
const memberRoutes = require('./src/routes/member.route');
const posisiRoutes = require('./src/routes/posisi.route');
const kegiatanRoutes = require('./src/routes/kegiatan.route');
const indexRoutes = require('./src/routes/index.route');
const jadwalRoutes = require('./src/routes/jadwal.route');
const informasiRoutes = require('./src/routes/informasi.route');
const tentangRoutes = require('./src/routes/tentang.route');
const userRoutes = require('./src/routes/user.route');

const adminRoutes = require('./src/routes/admin.route');


// // using as middleware
app.use('/api/v1/users', usersRoutes);
app.use('/api/v1/registration', registrationRoutes);
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/posisi', posisiRoutes);
app.use('/', indexRoutes);
app.use('/jadwal', jadwalRoutes);
app.use('/informasi', informasiRoutes);
app.use('/tentang', tentangRoutes);
app.use('/admin', adminRoutes);
app.use('/user', userRoutes);
app.use('/kegiatan', kegiatanRoutes);
app.use('/member', memberRoutes);
app.use('/jabatan', jabatanRoutes);


app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});