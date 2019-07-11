class Slide {
  constructor(element) {
    element.addEventListener('mousedown', () => {
      this.iterate();
      this.show();
    });
    this.imageList = Array.from(element.children);
    this.currentImageIndex = 0;
    this.show();
  }
  show() {
    this.imageList.forEach(image => (image.style.display = 'none'));
    this.imageList[this.currentImageIndex].style.display = 'inline-block';
  }
  iterate() {
    this.currentImageIndex < this.imageList.length - 1 ? this.currentImageIndex++ : (this.currentImageIndex = 0);
  }
}
document.querySelectorAll('.img-slide').forEach(slide => new Slide(slide));
