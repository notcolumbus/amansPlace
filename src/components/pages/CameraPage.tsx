import Masonry from '../camera/Masonry';

const photos = [
  { id: '1', img: 'https://picsum.photos/seed/1/600/800', height: 800 },
  { id: '2', img: 'https://picsum.photos/seed/2/600/400', height: 400 },
  { id: '3', img: 'https://picsum.photos/seed/3/600/600', height: 600 },
  { id: '4', img: 'https://picsum.photos/seed/4/600/500', height: 500 },
  { id: '5', img: 'https://picsum.photos/seed/5/600/700', height: 700 },
  { id: '6', img: 'https://picsum.photos/seed/6/600/450', height: 450 },
  { id: '7', img: 'https://picsum.photos/seed/7/600/650', height: 650 },
  { id: '8', img: 'https://picsum.photos/seed/8/600/550', height: 550 },
];

function CameraPage() {
  return (
    <div className="pt-10" style={{ height: '80vh' }}>
      <Masonry
        items={photos}
        animateFrom="bottom"
        stagger={0.1}
      />
    </div>
  )
}

export default CameraPage
