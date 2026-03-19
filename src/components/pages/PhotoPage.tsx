import Masonry from '../photosSections/Masonry';

const photos = [
  { id: '1', img: 'https://ik.imagekit.io/sjuopypj1/IMG_6095.JPEG', height: 900 },
  { id: '4', img: 'https://ik.imagekit.io/sjuopypj1/IMG_0481.HEIC', height: 500 },
  { id: '5', img: 'https://ik.imagekit.io/sjuopypj1/IMG_0477.HEIC', height: 700 },
  { id: '6', img: 'https://ik.imagekit.io/sjuopypj1/IMG_0580.JPG', height: 750 },
  { id: '7', img: 'https://ik.imagekit.io/sjuopypj1/IMG_0425.HEIC', height: 650 },
  { id: '8', img: 'https://ik.imagekit.io/sjuopypj1/IMG_0586.JPG', height: 650 },
  { id: '9', img: 'https://ik.imagekit.io/sjuopypj1/IMG_0386.HEIC', height: 600 },
  { id: '10', img: 'https://ik.imagekit.io/sjuopypj1/IMG_0427.HEIC', height: 800 },
  { id: '11', img: 'https://ik.imagekit.io/sjuopypj1/IMG_0423.HEIC', height: 650 },
  { id: '12', img: 'https://ik.imagekit.io/sjuopypj1/IMG_0585.JPG', height: 750 },
  { id: '3', img: 'https://ik.imagekit.io/sjuopypj1/IMG_0380.HEIC', height: 800 },
  { id: '14', img: 'https://ik.imagekit.io/sjuopypj1/IMG_7557.HEIC', height: 700 },
];

function PhotoPage() {
  return (
    <div className="">
      <Masonry items={photos} />
    </div>
  );
}

export default PhotoPage;
