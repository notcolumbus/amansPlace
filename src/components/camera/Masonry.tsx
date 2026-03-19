interface Item {
  id: string;
  img: string;
  height: number;
}

interface MasonryProps {
  items: Item[];
}

const Masonry: React.FC<MasonryProps> = ({ items }) => {
  return (
    <div
      style={{
        columns: '2 280px',
        gap: '12px',
        padding: '0 12px',
      }}
    >
      {items.map((item) => (
        <div
          key={item.id}
          style={{
            breakInside: 'avoid',
            marginBottom: '12px',
          }}
        >
          <img
            src={item.img}
            alt=""
            style={{
              width: '100%',
              display: 'block',
              borderRadius: '8px',
              boxShadow: '0 8px 30px -10px rgba(0,0,0,0.2)',
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default Masonry;
