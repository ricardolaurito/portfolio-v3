import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import webp from 'imagemin-webp'; // Importa o plugin para otimização de WebP

// Caminhos das imagens
const paths = {
    images: {
        src: 'assets/img/**/*.{webp}', // Inclui apenas imagens WebP
        dest: 'assets/img/optimized/' // Pasta de saída para imagens otimizadas
    }
};

// Tarefa para otimizar imagens WebP
function optimizeImages() {
    return gulp.src(paths.images.src)
        .pipe(imagemin([
            webp({ quality: 75 }) // Usa o plugin para otimizar imagens WebP
        ]))
        .pipe(gulp.dest(paths.images.dest));
}

// Tarefa padrão
export default gulp.series(optimizeImages);