function initCarousel() {
  let carousel = document.querySelector(".carousel__inner");
  let carouselArrow = document.querySelectorAll('.carousel__arrow');
  let carouselSlides = document.querySelectorAll('.carousel__slide');

  let count= 0;
  let widthShift = 988;

  carouselArrow[1].style.display = 'none'

  carouselArrow.forEach(button => {
    button.addEventListener('click',event => {
      if (event.currentTarget.classList.contains('carousel__arrow_right')) {
        if (count <= -3) {
          count = 0
        } else {
          count = count - 1;
        }
        carouselArrow[1].style.display = 'flex';
        carousel.style.transform = `translateX(${count * widthShift}px)`
      } else if (event.currentTarget.classList.contains('carousel__arrow_left')) {
        if (count >= 0) {
          count = 0
        } else {
          count = count + 1;
        }
        carousel.style.transform = `translateX(${count * widthShift}px)`
      }
      if (count === 0) {
        carouselArrow[1].style.display = 'none'
      } else if (count === (-3)) {
        carouselArrow[0].style.display = 'none'
      } else {
        carouselArrow[0].style.display = 'flex'
        carouselArrow[1].style.display = 'flex'
      }
    })
  })


}


